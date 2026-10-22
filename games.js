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
    mode: "embed"                     // "embed"=同じタブでゲームを直接開く / "external"=新しいタブで開く。省略時 embed
  },

  ※ url は http(s) か相対パスのみ有効です（それ以外は準備中扱い）。
  ※ 文字列に " を入れたいときは \" と書いてください。
*/
window.GAMES = [
  {
    id: "mado-hitofude",
    title: "窓の向こうに、ひと筆。",
    genre: "2D・癒やし",
    description: "走る車の曇った窓に、指で絵や文字を描く。描いた跡は、少しずつ曇りに戻っていく。スマホの縦画面でも遊べる。",
    thumbnail: "thumbs/mado-hitofude.png",
    url: "https://fish-suika.github.io/mado-hitofude/",
    mode: "embed"
  },
  {
    id: "mosquito",
    title: "蚊のステルスゲーム",
    genre: "3D・ステルス",
    description: "蚊になって、眠る人間に見つからないように血を吸う。PC向け（キーボード＋マウス）。",
    thumbnail: "thumbs/mosquito.jpg",
    url: "https://fish-suika.github.io/mosquito/",
    mode: "embed"
  },
  {
    id: "moji-katanuki",
    title: "文字型抜き",
    genre: "2D・手さばき",
    description: "砂糖菓子に刻まれた文字を、割らないように針で切り抜くゲーム。",
    thumbnail: "thumbs/moji-katanuki.jpg",
    url: "https://fish-suika.github.io/moji-katanuki/",
    mode: "embed"
  },
  {
    id: "jelly-through",
    title: "ゼリースルー",
    genre: "3D・アクション",
    description: "ゼリーを引っぱって形を変え、迫ってくるパネルの穴をくぐり抜ける。",
    thumbnail: "thumbs/jelly-through.jpg",
    url: "https://fish-suika.github.io/jelly-through/",
    mode: "embed"
  },
  {
    id: "folded-world",
    title: "カミと折り目の世界",
    genre: "3D・横スクロール",
    description: "紙の生き物になって、紙の世界を折り目で折り返し、道を作って進む。",
    thumbnail: "thumbs/folded-world.jpg",
    url: "https://fish-suika.github.io/folded-world/",
    mode: "embed"
  },
  {
    id: "sorting-center",
    title: "荷物仕分けセンター",
    genre: "3D・仕分け",
    description: "コンベアを流れてくる荷物を、通常と特殊に仕分けていく。",
    thumbnail: "thumbs/sorting-center.jpg",
    url: "https://fish-suika.github.io/sorting-center/",
    mode: "embed"
  },
  {
    id: "dino-escape",
    title: "DINO ESCAPE",
    genre: "3D・アクション",
    description: "恐竜に乗って、噴火した火山から逃げ切る。",
    thumbnail: "thumbs/dino-escape.jpg",
    url: "https://fish-suika.github.io/dino-escape/",
    mode: "embed"
  },
  {
    id: "elevator",
    title: "エレベーター係",
    genre: "3D・バカゲー",
    description: "ボタンを押すだけの仕事。なのに、客の注文がどんどん面倒になっていく。",
    thumbnail: "thumbs/elevator.jpg",
    url: "https://fish-suika.github.io/elevator/",
    mode: "embed"
  },
  {
    id: "bullet-time",
    title: "BULLET TIME",
    genre: "3D・パズル",
    description: "撃たれた銃弾になって、未来を書き換えるパズル。",
    thumbnail: "thumbs/bullet-time.jpg",
    url: "https://fish-suika.github.io/bullet-time/",
    mode: "embed"
  },
  {
    id: "bakudan-volley",
    title: "爆弾バレー",
    genre: "3D・スポーツ",
    description: "爆弾をボールにして打ち合う、ちょっと危ないバレーボール。",
    thumbnail: "thumbs/bakudan-volley.jpg",
    url: "https://fish-suika.github.io/bakudan-volley/",
    mode: "embed"
  },
  {
    id: "santa",
    title: "ハイジャンプ・デリバリー",
    genre: "3D・アクション",
    description: "ジャンプ力が高すぎるサンタになって、雪の夜の街にプレゼントを届ける。",
    thumbnail: "thumbs/santa.jpg",
    url: "https://fish-suika.github.io/santa/",
    mode: "embed"
  },
  {
    id: "disarm",
    title: "DISARM",
    genre: "パズル",
    description: "配線・ダイヤル・レバーなどの仕掛けを、1つずつ外して爆弾を解除する。",
    thumbnail: "thumbs/disarm.jpg",
    url: "https://fish-suika.github.io/disarm/",
    mode: "embed"
  },
  {
    id: "command",
    title: "COMMAND",
    genre: "スコアアタック",
    description: "表示される矢印を、制限時間内にすばやく正確に入力する。",
    thumbnail: "thumbs/command.jpg",
    url: "https://fish-suika.github.io/command/",
    mode: "embed"
  },
  {
    id: "kaerimichi",
    title: "帰り道",
    genre: "3D・ホラー",
    description: "一人称で歩く3Dホラー。",
    thumbnail: "thumbs/kaerimichi.jpg",
    url: "https://fish-suika.github.io/kaerimichi/",
    mode: "embed"
  }
];
