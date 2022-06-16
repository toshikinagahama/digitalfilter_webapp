# はじめに

本アプリケーションでは、IIR フィルタをはじめとする様々なフィルタを WEB アプリケーション上で試せることを目的とする。

# 機能

- 時系列データを入力できる
- 様々なパラメータを調整しながらフィルタの設計ができる
- 設計したフィルタを入力した時系列データにかけ、そのフィルタ後のデータを取得できる
- 入力データ、フィルタデータはグラフで表示できる

# 設計

## フロントエンド

- フロントエンドは Next.js + tailwindcss(typescrpit)で実装する。

## バックエンド

- python の FastAPI で実装し、REST API でフロントエンドとのやりとりを行う。
- フィルタの設計は scipy の signal ライブラリを使用する。
- グラフは matplotlib で作成し、作成したグラフをフロントエンドに送信する。(フロントエンドでは、グラフは生成しない（実装コストが高い))

## WEB サーバー

- WEB サーバーは nginx を用い、フロントエンドとバックエンドのつなぎこみを行う。

## フィルタについて

### IIR フィルタ

#### パラメータ

## デプロイ

- 本プロジェクトは、docker で管理し、docker-compose up -d でデプロイ先にデプロイする。
- デプロイの手順

1. frontend/webpp/で、yarn build で、next.js プロジェクトを build。すると、frontend/webapp/out/および、backend/out/に静的ファイルが展開される。
2. web サーバーに docker-compose.yml および backend/以下のファイルをコピーする。
3. web サーバーに ssh でログインし、docker-compose up -d で backend の python プログラムを起動させる。
4. web サーバーの nginx の設定を行う。backend/out/および、localhost:5051 をルーティング。
5. web サーバーの nginx をリロード。これでデプロイ完了。
