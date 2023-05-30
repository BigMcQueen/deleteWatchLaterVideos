# deleteWatchLaterVideos
 
YouTubeの「後で見る」に登録してある動画を一括削除するJavaScriptです。
 
# Features

YouTubeの「後で見る」に登録してある動画を一掃したかったのですが、一個ずつ消していくのが手間だったのでこの機能をつくりました。

以下の記事を参考にしました。

https://www.naporitansushi.com/yt-erasure/

1. delay 関数：非同期関数として定義されており、特定のミリ秒数だけ実行を遅延させるPromiseを返します。setTimeout 関数を使って時間遅延を実現しています。

2. clickElement 関数：要素をクリックする非同期関数です。要素が存在しない場合（nullまたは未定義）はエラーを投げます。要素が存在する場合、要素をクリック（element.click()）し、その後1秒（1000ミリ秒）の遅延を入れます。遅延は、クリック後のレンダリング時間を考慮しています。

3. deleteVideo 関数：特定の動画を削除する非同期関数です。この関数では、まず動画のメニューボタン（Kebab Menu）をクリックし、その後出現するメニューから「削除」ボタンをクリックします。どちらのクリックもclickElement関数を使用して行われ、エラーが発生した場合はそれをキャッチしてログに出力します。

4. deleteWatchLaterVideos 関数：プレイリスト内のすべての動画を削除する非同期関数です。まずプレイリスト内のすべての動画を選択し（querySelectorAllを使用）、それぞれに対してdeleteVideo関数を実行して削除を行います。

5. 最後に、このdeleteWatchLaterVideos関数を呼び出して実行します。これにより、プレイリスト内のすべての動画が削除されます。
 
# Requirement
 
動作確認済みの条件は以下のとおりです。

* PC：MacBook Air(M1, 2020)
* ブラウザ：Google Chrome
 
# Usage

1. Google Chromeをつかって、削除したい「後で見る」動画が保存してあるGoogleアカウントにログインする。
2. YouTubeの「後で見る」を開く。
3. Chromeデベロッパーツール（検証モード）を起動する。
4. 「Console」を開く。
5. 「main.js」のコードをコピーし、Consoleにペーストする。
6. Enterキーを押すと実行され、動画が削除され始めます。
7. 削除が終わるまで待ちます。
 
# Note

2023年3月時点で作製したコードですので、YouTubeの仕様変更によりうまく動作しないことがあります。
<br>
※2023年5月31日　更新

一切の責任は負いかねますので、使用される際はご注意ください。

# Author

* 作成者：Bigmcqueen
* GitHub：https://github.com/bigmcqueen
