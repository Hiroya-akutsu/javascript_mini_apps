// フォームの値を取得
const formElement = document.getElementById('score_calculator');

// 結果表示欄の要素を取得
const result = document.getElementById('result');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  // 入力値を全て取得
  const subjectScores = document.querySelectorAll('[data-subject]');

  // スコアを初期化
  let score = 0; 

  for (const subjectInput of subjectScores) {
    const scoreInput = Number(subjectInput.value);
    score += scoreInput;
  };

  // 成績の判定
  if (score >= 240) {
    result.textContent = 'A'
  } else if (score >= 180) {
    result.textContent = 'B'
  } else if (score >= 120) {
    result.textContent = 'C'
  } else {
    result.textContent = 'D'
  };
});