// フォームの要素を取得
const calculatorElement = document.getElementById('calculator');

// 体重の要素を取得
const weightInput = document.getElementById('weight');

// 身長の要素を取得
const heightInput = document.getElementById('height');

// 結果表示部分の要素を取得
const result = document.getElementById('result');

// リセットボタンの要素を取得
const resetButton = document.getElementById('reset');

// 計算処理
calculatorElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);

  const bmi = weight / (height * height);
  result.textContent = bmi.toFixed(1);
})

// リセットボタン
resetButton.addEventListener('click', () => {
  calculatorElement.reset();
  result.textContent = '';
  heightInput.focus();
});