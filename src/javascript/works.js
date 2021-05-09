const works = [
  {
    id: 1,
    title: "Masihzad",
    description: "clothes website",
    logo: "./assets/masihzad.jpg",
    image: "./assets/masihzad-screen.png",
    link: "http://masihzad.ir/",
  },
  {
    id: 2,
    title: "Foodloop",
    description: "food order website",
    logo: "./assets/foodloop.svg",
    image: "./assets/foodloop-screen.png",
    link: "http://foodloop.ir",
  },
  {
    id: 3,
    title: "Gil Ticket",
    description: "pool ticket website",
    logo: "./assets/gilpool.png",
    image: "./assets/gilticket-screen.png",
    link: "http://gilticket.ir",
  },
  {
    id: 4,
    title: "Lotus",
    description: "a commerce website",
    logo: "./assets/lotus.png",
    image: "./assets/lotus-screen.png",
    link: "http://lotus.ir",
  },
];

document.querySelector("#work-card").innerHTML = works
  .map(
    (work) =>
      `<div class="card">
    <div class="card__image">
      <img src="${work.logo}" alt="${work.title}">
    </div>
    <div class="card__title">${work.title}</div>
    <div class="card__overlay">
      <div class="card__button" modal-id = "${work.id}">view project</div>
    </div>
  </div>`
  )
  .join(" ");

const cardButtons = document.querySelectorAll(".card__button");
const modal = document.querySelector(".modal");

cardButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const modalId = event.target.getAttribute("modal-id");
    modal.innerHTML = works
      .filter((work) => work.id == modalId)
      .map(
        (work) => `
        <i class="ion ion-android-close"></i>
        <div class="modal__content">
          <div class="modal__picture">
            <img class="loading" src="${work.image}">
          </div>
          <div class="modal__link">
            <a href="${work.link}" target="_blank">${work.link}</a>
          </div>
        </div>
    `
      )
      .join(" ");
    modal.style.display = "block";
  });
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
});