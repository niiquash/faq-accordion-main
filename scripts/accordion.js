import { faqs } from "../data/faqs.js";

function getFAQs() {
  let faqHtml = "";
  faqs.forEach((faq) => {
    faqHtml += `
  <div class="faq-list-item">
    <div class="faq-question-and-button">
      <h4 class="faq-question">
        ${faq.question}
      </h4>
      <div class="buttons">
        <button class="faq-button">
          <img
            class="faq-plus-button"
            src="assets/images/icon-plus.svg"
            alt="plus button"
          />
        </button>
      </div>
    </div>
    <p class="faq-answer">
      ${faq.answer}
    </p>
  </div>
  `;
  });
  document.querySelector(".js-faq-list").innerHTML = faqHtml;
}
getFAQs();
