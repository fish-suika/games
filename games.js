/*
  ===== ゲームの追加の仕方 =====
  1. ゲーム本体のフォルダを games/ の下に置く（例：games/mygame/index.html）。
  2. サムネイル（16:9 推奨、SVG/PNG/JPG）を thumbs/ に置く。無くてもOK（文字入りの代わり画像が出ます）。
  3. 下の配列の最後に、次の雛形をコピーして書き換える（最後の } のあとのカンマを忘れずに）。

  {
    id: "mygame",                     // 半角英数。一意。play.html?id=mygame の mygame
    title: "ゲームのタイトル",
    genre: "アクション",
    description: "ゲームの短い説明。",
    thumbnail: "thumbs/mygame.svg",   // 省略可
    url: "games/mygame/index.html",   // 相対パス or https://... 。空 "" だと「準備中」表示
    mode: "embed",                    // "embed"=サイト内(play.html)で表示 / "external"=新しいタブで直接開く。省略時 embed
    orientation: "landscape"          // "landscape" | "portrait" | 省略可
  },

  ※ url は http(s) か相対パスのみ有効です（それ以外は準備中扱い）。
  ※ 文字列に " を入れたいときは \" と書いてください。
*/
window.GAMES = [
  {
    id: "sample",
    title: "【仮】玉つぶしサンプル",
    genre: "ミニゲーム",
    description: "落ちてくる玉をクリック・タップで消す30秒スコアアタック。サイトの動作確認用の仮ゲームです。",
    thumbnail: "thumbs/sample.svg",
    url: "games/sample/index.html",
    mode: "embed",
    orientation: "portrait"
  },
  {
    id: "temp-b",
    title: "【仮】仮ゲームB",
    genre: "テスト",
    description: "新しいタブで直接開く動作の確認用です。中身はサンプルと同じです。",
    thumbnail: "thumbs/temp-b.svg",
    url: "games/sample/index.html",
    mode: "external"
  },
  {
    id: "coming-soon",
    title: "【仮】準備中の作品",
    genre: "未定",
    description: "公開準備中の作品の表示例です。",
    url: ""
  }
];
