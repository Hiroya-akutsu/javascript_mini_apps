// ランダムな数値を生成
let currentNumber = Math.floor(Math.random() * 10) + 1;

// 入力欄を取得
const guessInput = document.getElementById("guess");

// フォームの要素を取得
const guessForm = document.getElementById("guess_form");

// メッセージの要素を取得
const message = document.getElementById('message');

// 挑戦回数の要素を取得
const attemptElement = document.getElementById('attempt');

// リセットボタンの要素を取得
const resetElement = document.getElementById('reset');

// 挑戦回数を初期化
let attemptCount = 0;

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNumber = parseInt(guessInput.value, 10);
  // 挑戦回数を足す
  attemptCount++;
  attemptElement.textContent = attemptCount;

  if (currentNumber > inputNumber) {
    message.textContent = 'もっと大きい数値です！';
  } else if (currentNumber < inputNumber) {
    message.textContent = 'もっと小さい数値です！';
  } else {
    message.textContent  = '正解です！';
  }
});

resetElement.addEventListener("click", (event) => {
  currentNumber = Math.floor(Math.random() * 10) + 1;
  attemptCount = 0;
  attemptElement.textContent = attemptCount;
  message.textContent = "";
  guessInput.value= "";
  guessInput.focus();
}) 