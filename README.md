# はじめに 
本アプリケーションでは、IIRフィルタをはじめとする様々なフィルタをWEBアプリケーション上で試せることを目的とする。

# 機能
* 時系列データを入力できる
* 様々なパラメータを調整しながらフィルタの設計ができる
* 設計したフィルタを入力した時系列データにかけ、そのフィルタ後のデータを取得できる
* 入力データ、フィルタデータはグラフで表示できる

# 設計
## フロントエンド
* フロントエンドはNext.js + tailwindcss(typescrpit)で実装する。

## バックエンド
* pythonのFastAPIで実装し、REST APIでフロントエンドとのやりとりを行う。
* フィルタの設計はscipyのsignalライブラリを使用する。
* グラフはmatplotlibで作成し、作成したグラフをフロントエンドに送信する。(フロントエンドでは、グラフは生成しない（実装コストが高い))

## WEBサーバー
* WEBサーバーはnginxを用い、フロントエンドとバックエンドのつなぎこみを行う。

## フィルタについて
### IIRフィルタ
#### パラメータ

## デプロイ
* 本プロジェクトは、dockerで管理し、docker-compose up -dでデプロイ先にデプロイする。
