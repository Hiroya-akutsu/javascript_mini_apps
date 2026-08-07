// 相手の手の初期値を設定
const opponentHand = ['rock', 'scissors', 'paper'];

// 画面表示用
const handNames = {
  rock: 'グー',
  scissors: 'チョキ',
  paper: 'パー',
};

// data-hand属性が設定されているものを全て選択
const handButtons = document.querySelectorAll("[data-hand]");

// 相手の手を通知する要素を取得
const showOpponentHand = document.getElementById('opponent-hand');

// 結果を通知する要素を取得
const showResult = document.getElementById('result');

// リセットボタンの要素を取得
const resetButton = document.getElementById('reset');

// じゃんけんの処理
handButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerHand = event.currentTarget.dataset.hand;

    // 相手の手をランダムに生成
    const randomIndex = Math.floor(Math.random() * opponentHand.length);

    const currentOpponentHand = opponentHand[randomIndex];
    showOpponentHand.textContent = handNames[currentOpponentHand];

    let result;

    if (playerHand === currentOpponentHand) {
      result = 'あいこ';
    } else if (
      (playerHand === 'rock' && currentOpponentHand === 'scissors') ||
      (playerHand === 'scissors' && currentOpponentHand === 'paper') ||
      (playerHand === 'paper' && currentOpponentHand === 'rock')
    ) {
      result = '勝ち';
    } else {
      result = '負け';
    }

    // 結果を表示
    showResult.textContent = result;
  });
});

// リセットボタンの処理
resetButton.addEventListener('click', () => {
  showOpponentHand.textContent = '';
  showResult.textContent = '';
});