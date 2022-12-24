import people from "./data.js";
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

container.innerHTML = people
  .map((person, slideItem) => {
    const { img, name, job, text } = person;
    return ` <article class="slide">
  <img
    src="${img}"
    alt="${name}"
    class="img"
  />
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   "${text}"
  <div class="quote-icon">
    <i class="fas fa-quote-right"></i>
  </div>
</article>`;
  })
  .join("");
