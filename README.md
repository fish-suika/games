# fish-suika のゲーム置き場

静的なゲーム投稿サイト（HTML/CSS/素の JS のみ、外部依存なし）。GitHub Pages でそのまま公開できます。

## 構成
- `index.html` 一覧 / `play.html?id=xxx` プレイ画面（iframe）
- `games.js` ゲームのデータ（ここに追記するだけで一覧に反映）
- `games/` ゲーム本体、`thumbs/` サムネイル
- `terms.html` / `license.html` / `privacy.html` 規約ページ（最終更新日を編集時に更新）

## ゲームの追加手順
1. `games/名前/index.html` にゲームを置く（サムネは `thumbs/` に、16:9 推奨）。
2. `games.js` 冒頭の雛形をコピーして最後に追加。`url` が空なら「準備中」表示。
3. `mode` は `"embed"`（サイト内で表示）か `"external"`（新しいタブ）。

## 公開手順（GitHub Pages）
1. GitHub にリポジトリを作り、このフォルダの内容を push。
2. Settings → Pages → Branch を `master`（/root）にして保存。
3. `https://ユーザー名.github.io/リポジトリ名/` で公開されます（`404.html` は直下のみ想定）。
