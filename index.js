const score = `1. Task: [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants-part3.md\n
2. Screenshot:\n
3. Deploy: [link](https://rolling-scopes-school.github.io/xfedsix-JSFEPRESCHOOL2022Q4/plants/)\n
4. Done 23.01.2022 / deadline 06.02.2022\n
5. Score: 100 / 125\n
`;
console.log(score);
window.onload = function () {
  cardInfoBtnClickHandler();
  addModalClickHandler();
  addModalWindowClickHandler();
};

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const links = document.querySelector(".navbar ul");
const body = document.querySelector("body");
const navMenu = function () {
  burger.classList.toggle("active");
  navbar.classList.toggle("open");
};
burger.addEventListener("click", function (e) {
  e.stopPropagation();
  navMenu();
});
links.addEventListener("click", function (e) {
  e.stopPropagation();
  navMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_navbar = target == navbar || navbar.contains(target);
  const its_burger = target == burger;
  const navbar_is_open = navbar.classList.contains("open");

  if (!its_navbar && !its_burger && navbar_is_open) {
    navMenu();
  }
});

const cardInfoBtn = document.querySelector(".service_info__btn");
const cardInfoBtnOnClick = function () {
  cardInfoBtn.classList.add("focused");
};

const cardInfoBtnClickHandler = () => {
  document
    .querySelector(".service_info__btn")
    .addEventListener("click", (e) => {
      let clickedTag = e.target;
      let focused = document.getElementsByClassName("focused");
      let selectedBtn = document.querySelectorAll(".service_info__btn button");
      let card1 = document.querySelectorAll(".cards .card_info1");
      let card2 = document.querySelectorAll(".cards .card_info2");
      let card3 = document.querySelectorAll(".cards .card_info3");
      let tags = document.querySelectorAll(".cards .card");
      if (
        focused.length > 1 &&
        focused[0] !== clickedTag &&
        focused[1] !== clickedTag
      ) {
        focused[0].classList.remove("focused");
      }
      clickedTag.classList.toggle("focused");
      Array.from(tags).forEach((tag) => {
        if (focused.length > 0) {
          tag.classList.add("blured");
        } else {
          tag.classList.remove("blured");
        }
        if (selectedBtn[0].classList.contains("focused")) {
          card1.forEach(function (e) {
            e.classList.remove("blured");
          });
        }
        if (selectedBtn[1].classList.contains("focused")) {
          card2.forEach(function (e) {
            e.classList.remove("blured");
          });
        }
        if (selectedBtn[2].classList.contains("focused")) {
          card3.forEach(function (e) {
            e.classList.remove("blured");
          });
        }
      });
    });
};

const addModalClickHandler = () => {
  document.querySelector(".prices_plan").addEventListener("click", (e) => {
    const btnId = +e.target.dataset.btn;
    let openModal1 = document.getElementById("modal1");
    let openModal2 = document.getElementById("modal2");
    let openModal3 = document.getElementById("modal3");

    if (btnId === 1) {
      setTimeout(() => {
        const modal = PriceModalData1.map(generatePriceModalWindow);
        document.querySelector("#modal1").insertAdjacentHTML("afterend", modal);
        openModal1.hidden = true;
        openModal2.hidden = false;
        openModal3.hidden = false;
      }, "10");
      closeModal();
    }
    if (btnId === 2) {
      setTimeout(() => {
        const modal = PriceModalData2.map(generatePriceModalWindow);
        document.querySelector("#modal2").insertAdjacentHTML("afterend", modal);
        openModal2.hidden = true;
        openModal1.hidden = false;
        openModal3.hidden = false;
      }, 10);
      closeModal();
    }
    if (btnId === 3) {
      setTimeout(() => {
        const modal = PriceModalData3.map(generatePriceModalWindow);
        document.querySelector("#modal3").insertAdjacentHTML("afterend", modal);
        openModal3.hidden = true;
        openModal1.hidden = false;
        openModal2.hidden = false;
      }, 10);

      closeModal();
    }
  });
};
function closeModal(btnId) {
  let modalW = document.querySelector(".prices_plan");

  if (+modalW.dataset.window !== btnId) {
    modalW.removeChild(document.querySelector(".open")).remove;
  }
}
const addModalWindowClickHandler = () => {
  document.querySelector(".prices_plan").addEventListener("click", (e) => {
    closeModal();
    document.getElementById("modal1").hidden = false;
    document.getElementById("modal2").hidden = false;
    document.getElementById("modal3").hidden = false;
  });
};

const generatePriceModalWindow = (data) => {
  let template = "";
  let modalWindow = document.createElement("div");
  modalWindow.className = "open-window";
  modalWindow.classList.toggle("close");
  modalWindow.setAttribute("data-window", data.id);
  template += `<div class="open" data-window = ${data.id}>`;
  template += `<div class="modal-title">${data.title}</div>`;
  template += `<div class="open-area">`;
  template += `<div class="modal__text">${data.text}</div>`;
  template += `<p class="modal__price"><span class="modal__price-red">${data.price}</span>${data.subtitle}</p>`;
  template += `<a href="#contacts" class="modal__button">${data.buttonText}</a>`;
  `</div>`;
  template += `</div>`;
  modalWindow.innerHTML = template;
  return template;
};

const PriceModalData1 = [
  {
    id: 1,
    title: "Basics",
    img: "./images/accordion_btn_up.svg",
    text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: "$15",
    subtitle: "/ per hour",
    buttonText: "Order",
  },
];
const PriceModalData2 = [
  {
    id: 2,
    title: "Standard",
    img: "./images/accordion_btn_up.svg",
    text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: "$25",
    subtitle: "/ per hour",
    buttonText: "Order",
  },
];
const PriceModalData3 = [
  {
    id: 3,
    title: "Pro care",
    img: "./images/accordion_btn_up.svg",
    text: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: "$35",
    subtitle: "/ per hour",
    buttonText: "Order",
  },
];

let overLay = document.querySelector(".overlay");
let cityBtn = document.querySelector(".city-button");
let cityList = document.querySelector(".city-list");
let cityLinks = Array.from(cityList.children);
let cardList = document.querySelector(".card-list");
let cityCards = Array.from(cardList.children);
let cityCard = document.querySelector(".city-card");
let contImg = document.querySelector(".contacts-image");
let sel = document.getElementsByClassName("selected");

cityBtn.addEventListener("click", activeCityButton);
function activeCityButton() {
  if (
    sel.length > 0 &&
    cityBtn.classList.contains("active") &&
    cityList.classList.contains("active")
  ) {
    cityBtn.classList.add("active");
    cityList.classList.remove("active");
  } else if (
    cityBtn.classList.contains("active") &&
    cityList.classList.contains("active")
  ) {
    cityBtn.classList.remove("active");
    cityList.classList.remove("active");
  } else {
    cityBtn.classList.add("active");
    cityList.classList.toggle("active");
    overLay.classList.add("active");
  }
}
overLay.addEventListener("click", closeCity);
function closeCity() {
  cityList.classList.remove("active");
  cityBtn.classList.remove("active");
  cityBtn.parentNode.replaceChild(cardList);
  overLay.classList.remove("active");
}

cityLinks.forEach(function (link, i) {
  link.addEventListener("click", closeList);
  link.addEventListener("click", function selectCard(e) {
    let city = e.target;
    let cityText = e.target.innerHTML;
    for (city = 0; city < cityCards.length; city++) {
      cityCard = cityCards[city];
      cityCard.classList.remove("selected");
      let cityBtnReplace = (document.querySelector(
        ".city-button span"
      ).innerText = cityText);
    }
    cityCards[i].classList.toggle("selected");
  });
});

function closeList() {
  cityList.classList.remove("active");
  cityCard.classList.remove("selected");
}
overLay.addEventListener("click", function closeCard(e) {
  let card = e.target;
  for (card = 0; card < cityCards.length; card++) {
    cityCard = cityCards[card];
    cityCard.classList.remove("selected");
  }
});
