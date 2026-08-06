// おみくじの初期値
const omikuji = ['大凶', '凶', '末吉', '小吉', '中吉', '吉', '大吉'];

// メッセージの要素を読み込み
const resultMessage = document.getElementById('result');

// ボタンの要素を読み込み
const drawOmikuji = document.getElementById('button');

drawOmikuji.addEventListener('click', () => {
  // 配列からランダムにインデックスを取得
  const random_index = Math.floor(Math.random() * omikuji.length);

  // ランダムなインデックスを一件格納
  const omikujiResult = omikuji[random_index];

  // おみくじの結果をメッセージに表示
  resultMessage.textContent = omikujiResult;
})