ポートフォリオに新しいページを追加します。

引数の形式: `[絵文字] [タイトル] [種別: hobby または omake]`

例:
- `/new-page 🎮 ゲーム hobby`
- `/new-page 🍜 ラーメン omake`

## やること

### 1. 引数を解析する

- 引数が指定されていない場合はユーザーに確認する
- 種別が省略された場合は `hobby` として扱う
- ファイル名は英数字で自動生成する（例: `game.html`, `ramen.html`）
  - タイトルから推測できる英単語を使う。不明な場合はユーザーに確認する

### 2. HTMLファイルを作成する

**hobby（趣味ページ）の場合:**
- CSSは `style.css` と `hobby-common.css` を読み込む
- コンテナクラスは `container hobby-container`
- 戻るリンクは `<a class="back-link" href="hobbies.html">← 戻る</a>`

**omake（おまけページ）の場合:**
- CSSは `style.css` と `hobby-common.css` を読み込む
- コンテナクラスは `container hobby-container`
- 戻るリンクは `<a class="back-link" href="index.html">← 戻る</a>`

**共通構造（必ず守ること）:**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[タイトル] | 内田彩渚</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="hobby-common.css">
</head>
<body>
  <div class="container hobby-container">
    <nav class="site-nav">
      <a href="index.html">トップ</a>
      <a href="hobbies.html">趣味</a>
      <a href="ryugaku.html">留学</a>
      <a href="cafe.html">カフェ</a>
      <a href="app.html">アプリ</a>
    </nav>
    <a class="back-link" href="[戻り先]">← 戻る</a>
    <h2 class="hobby-heading">[絵文字] [タイトル]</h2>
    <p class="hobby-lead">[タイトルに合った一言リード文を考えて入れる]</p>

    <div class="hobby-card">
      <h3>[適切な見出し]</h3>
      <ul>
        <li>（内容はタイトルから想像して仮のテキストを入れる）</li>
        <li>（後で編集してもらう前提でOK）</li>
      </ul>
    </div>
  </div>
</body>
</html>
```

### 3. リンクを追加する

**hobby の場合** → `hobbies.html` の `<div class="hobby-card"><ul>` 内に追加:
```html
<li><a href="[ファイル名].html">[絵文字] [タイトル]</a></li>
```

**omake の場合** → `index.html` の「もっと見る」セクションの `<ul>` 内に追加:
```html
<li><span class="label label-omake">[絵文字]</span><a href="[ファイル名].html">おまけ [タイトル]</a></li>
```

### 4. CLAUDE.mdを更新する

`CLAUDE.md` のファイル構成セクションに新しいページを追記する。

### 5. ブラウザで開く

作成したHTMLファイルをChromeで開く:
```
start chrome "C:\Users\内田彩渚\Desktop\portfolio\[ファイル名].html"
```

## 完了後に報告すること

- 作成したファイル名
- リンクを追加した場所
- 仮テキストを入れた箇所（後で編集が必要な部分）
