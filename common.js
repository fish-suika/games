/* 共通処理：文節ごとの折り返し・URL検証 */
(function () {
  "use strict";

  // 文節の切れ目（、。！？や括弧）で区切り、各文節を inline-block の span で囲む
  var SPLIT = /(?<=[、。！？!?）」』】])|(?=[「『（【])/;

  function wrapPhrases(text) {
    var frag = document.createDocumentFragment();
    String(text == null ? "" : text).split(SPLIT).forEach(function (part) {
      if (!part) return;
      var s = document.createElement("span");
      s.className = "ph";
      s.textContent = part;
      frag.appendChild(s);
    });
    return frag;
  }

  // 要素内のテキストノードすべてに wrapPhrases を適用（リンク等の構造は保持）
  function wrapPhrasesIn(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      if (!n.nodeValue.trim()) return;
      if (n.parentNode.classList && n.parentNode.classList.contains("ph")) return;
      n.parentNode.replaceChild(wrapPhrases(n.nodeValue), n);
    });
  }

  // http(s) か相対パスのみ許可。それ以外（javascript: 等）は空文字を返す
  function safeUrl(u) {
    if (typeof u !== "string") return "";
    u = u.trim();
    if (!u) return "";
    if (/^https?:\/\//i.test(u)) return u;
    if (u.indexOf("//") === 0 || u.indexOf("\\") !== -1) return "";
    if (/^[a-z][a-z0-9+.\-]*:/i.test(u)) return "";
    return u;
  }

  function getGames() {
    return Array.isArray(window.GAMES) ? window.GAMES : [];
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-wrap]").forEach(wrapPhrasesIn);
  });

  window.wrapPhrases = wrapPhrases;
  window.wrapPhrasesIn = wrapPhrasesIn;
  window.safeUrl = safeUrl;
  window.getGames = getGames;
})();
