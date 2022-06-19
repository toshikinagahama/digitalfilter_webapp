from typing import Optional
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pylab as plt
from fastapi import FastAPI
from scipy import signal
from pydantic import BaseModel
import base64
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
    "https://lab.nghmst.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Info(BaseModel):
    sampling_freq: float
    freq_pass: list
    freq_cutoff: list
    gain_pass: float
    gain_cutoff: float
    data: list

@app.post("/api/get_information")
def read_params(info: Info):
    #print(info)
    fn = float(info.sampling_freq) / 2
    freq_pass = [float(info.freq_pass[0]), float(info.freq_pass[1])]
    freq_cutoff = [float(info.freq_cutoff[0]), float(info.freq_cutoff[1])]
    wp = np.array(freq_pass) / fn
    ws = np.array(freq_cutoff) / fn
    N, Wn = signal.buttord(wp, ws, float(info.gain_pass), float(info.gain_cutoff))
    b, a = signal.butter(N, Wn, "band")
    tmp_y0 = info.data

    y0 = [] 
    for v in tmp_y0:
        if(v == ""):
            continue
        y0.append(float(v))
    y1 = [0 for i in range(len(y0))]
    for i in range(5, len(y1)):
        tmp1 = 0
        tmp2 = 0
        if(np.abs(y1[i-1]) > 10000):
            y1[i-1] = 0
            y1[i-2] = 0
            y1[i-3] = 0
        for ii in range(len(b)):
            tmp1 += b[ii] * y0[i - ii]
        for ii in range(1, len(a)):
            tmp2 += a[ii] * y1[i - ii]
        y1[i] = (tmp1 - tmp2)
    
    # 画像の生成
    fig, ax = plt.subplots(figsize=(16, 4))
    ax.plot(np.array(y0) - np.mean(y0), label="original_offset")
    ax.plot(y1, label="filterd")
    plt.legend()
    ofs = BytesIO()
    fig.savefig(ofs, format="jpg")
    jpg_data = ofs.getvalue()
    plt.close()
    base64_data = base64.b64encode(jpg_data).decode()
    
    return {"result": {"status": 0, "a": str(a), "b": str(b), "filterd": str(y1), "filterd_img": base64_data}}

# app.mount("/web", StaticFiles(directory="../out", html=True), name="html")
