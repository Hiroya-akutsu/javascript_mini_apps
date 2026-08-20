// フォームの値を取得
const formElement = document.getElementById('score_calculator');

formElement.addEventListener('submit', () => {
  event.preventDefault();
  // 入力値を全て取得
  const subjectScores = document.querySelectorAll('[data-subject]');

  for (const subjectInput of subjectScores) {
    const score = Number(subjectInput.value);
  };
});