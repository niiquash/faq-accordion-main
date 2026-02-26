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

function toggleAnswerParagraph(button) {
  const faqItem = button.closest(".faq-list-item");
  const answer = faqItem.querySelector(".js-faq-answer");

  answer.classList.toggle("show");
}

const buttons = document.querySelectorAll(".js-faq-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleFAQButton(button);
    toggleAnswerParagraph(button);
  });
});
