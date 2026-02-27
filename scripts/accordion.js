import { faqs } from "../data/faqs.js";

let faqHtml = "";
faqs.forEach((faq) => {
  faqHtml += `
  <div class="faq-list-item">
    <div class="faq-question-and-button">
      <h4 class="faq-question">
        ${faq.question}
      </h4>
      <div class="buttons">
        <button class="faq-button js-faq-button">
          <img
            src="assets/images/icon-plus.svg"
            alt="plus button"
          />
        </button>
      </div>
    </div>
    <p class="faq-answer js-faq-answer">
      ${faq.answer}
    </p>
  </div>
  `;
});
document.querySelector(".js-faq-list").innerHTML = faqHtml;

function toggleFAQButton(button) {
  const img = button.querySelector("img");

  if (img.src.includes("icon-plus")) {
    img.src = "assets/images/icon-minus.svg";
  } else {
    img.src = "assets/images/icon-plus.svg";
  }
}

function closeOpenFAQ() {
  const openAnswer = document.querySelector(".js-faq-answer.show");
  if (!openAnswer) {
    return;
  }

  openAnswer.classList.remove("show");

  const openItem = openAnswer.closest(".faq-list-item");
  const openButton = openItem.querySelector(".js-faq-button");
  openButton.querySelector("img").src = "assets/images/icon-plus.svg";
}

function toggleAnswerParagraph(button) {
  const faqItem = button.closest(".faq-list-item");
  const answer = faqItem.querySelector(".js-faq-answer");

  answer.classList.toggle("show");
}

const buttons = document.querySelectorAll(".js-faq-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-list-item");
    const answer = faqItem.querySelector(".js-faq-answer");
    const isAlreadyOpen = answer.classList.contains("show");

    closeOpenFAQ();

    if (!isAlreadyOpen) {
      toggleFAQButton(button);
      toggleAnswerParagraph(button);
    }
  });
});
