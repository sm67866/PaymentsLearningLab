console.log("Payments Learning Lab Loaded");

/* ===========================
   Glossary Search
=========================== */

const searchBox = document.querySelector(".search-box");
const glossaryItems = document.querySelectorAll(".glossary-item");
const glossarySections = document.querySelectorAll("main .content-panel");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const search = searchBox.value.toLowerCase().trim();

        let titleMatches = 0;

        glossaryItems.forEach(function (item) {
            const title = item.querySelector("summary").innerText.toLowerCase();

            if (search !== "" && title.includes(search)) {
                titleMatches++;
            }
        });

        glossaryItems.forEach(function (item) {
            const title = item.querySelector("summary").innerText.toLowerCase();
            const body = item.innerText.toLowerCase();

            let showItem = true;

            if (search === "") {
                showItem = true;
                item.open = false;
            } else if (titleMatches > 0) {
                showItem = title.includes(search);
                item.open = showItem;
            } else {
                showItem = body.includes(search);
                item.open = showItem;
            }

            item.style.display = showItem ? "block" : "none";
        });

        glossarySections.forEach(function (section) {
            const items = section.querySelectorAll(".glossary-item");

            if (items.length === 0) {
                section.style.display = "block";
                return;
            }

            let hasVisibleItem = false;

            items.forEach(function (item) {
                if (item.style.display !== "none") {
                    hasVisibleItem = true;
                }
            });

            section.style.display = hasVisibleItem ? "block" : "none";
        });
    });
}

/* ===========================
   Quiz
=========================== */

const quizQuestions = document.querySelectorAll(".quiz-question");
const submitQuizButton = document.querySelector("#submit-quiz");
const quizResult = document.querySelector("#quiz-result");

quizQuestions.forEach(function (question) {
    const buttons = question.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });
});

if (submitQuizButton) {
    submitQuizButton.addEventListener("click", function () {
        let score = 0;

        quizQuestions.forEach(function (question) {
            const correctAnswer = question.dataset.answer;
            const selectedButton = question.querySelector("button.selected");
            const feedback = question.querySelector(".quiz-feedback");
            const buttons = question.querySelectorAll("button");

            buttons.forEach(function (button) {
                button.classList.remove("correct", "incorrect");

                if (button.dataset.choice === correctAnswer) {
                    button.classList.add("correct");
                }
            });

            if (selectedButton) {
                if (selectedButton.dataset.choice === correctAnswer) {
                    score++;
                } else {
                    selectedButton.classList.add("incorrect");
                }
            
            }
            feedback.classList.add("show");
        });

        quizResult.innerHTML = `
            <h3>Score: ${score} / ${quizQuestions.length}</h3>
            <p>
                ${score === quizQuestions.length
                    ? "🎉 Perfect score! You completed Payment Processing 101."
                    : "Nice work. Review the highlighted answers, then try again when you're ready."}
            </p>
        `;

        quizResult.classList.add("show");
    });
}

