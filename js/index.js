// ページトップへ戻るボタン
document.addEventListener('DOMContentLoaded', () => {
  // ボタンを生成
const topBtn = document.createElement('button');
topBtn.textContent = '↑ TOP';
topBtn.id = 'to-top-btn';
document.body.appendChild(topBtn);

  // スタイルをJSで付与（CSSに書いてもOK）
Object.assign(topBtn.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    opacity: '0',
    visibility: 'hidden',
    transition: 'opacity 0.3s, visibility 0.3s',
    zIndex: '1000',
    });

  // スクロール量で表示・非表示を切り替え
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBtn.style.opacity = '1';
        topBtn.style.visibility = 'visible';
    } else {
        topBtn.style.opacity = '0';
        topBtn.style.visibility = 'hidden';
    }
    });

  // クリックで最上部へスムーズスクロール
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});