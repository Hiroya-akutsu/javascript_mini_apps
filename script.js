const projects = [
  {
    mark: "数",
    label: "01 / Find the number",
    meta: "JavaScript / Game",
    title: "Number Guess",
    description: "1〜10の中から選ばれた数字を当てるゲーム。",
    url: "./number_guess/"
  },
  {
    mark: "運",
    label: "02 / Try your luck",
    meta: "JavaScript / Game",
    title: "Omikuji",
    description: "ボタンを押して運勢を占うミニアプリ。",
    url: "./omikuji/"
  },
  {
    mark: "拳",
    label: "03 / Rock, scissors, paper",
    meta: "JavaScript / Game",
    title: "Janken",
    description: "シンプルなじゃんけんアプリ。",
    url: "./janken/",
  },
  {
    mark: "体",
    label: "04 / BMI Calculator",
    meta: "JavaScript / Tool",
    title: "BMI Calculator",
    description: "身長と体重からBMIを計算するアプリ。",
    url: "./BMI_calculator/",
  }
]

const projectButtons = document.querySelectorAll(".project__marks button");

const projectTitle = document.querySelector(".project__info h3");

const projectDescription = document.querySelector(".project__description");

const projectLink = document.querySelector(".text-link");

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = button.dataset.projectIndex;
    const selectProject = projects[index];

    // まだ追加していないアプリに関しては、早期リターンする
    if (!selectProject) {
      return;
    }

    projectButtons.forEach((projectButton) => {
      projectButton.classList.remove("is-active");
    });
    button.classList.add("is-active");

    projectTitle.textContent = selectProject.title;

    projectDescription.textContent = selectProject.description;

    projectLink.href = selectProject.url;
  });
});
