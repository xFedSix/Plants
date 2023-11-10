window.onload = () => {
  cardInfoBtnClickHandler();
  addModalClickHandler();
  addModalWindowClickHandler();
};

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const links = document.querySelector(".navbar ul");
const navMenu = () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("open");
};
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu();
});
links.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu();
});

document.addEventListener("click", (e) => {
  const target = e.target;
  const its_navbar = target == navbar || navbar.contains(target);
  const its_burger = target == burger;
  const navbar_is_open = navbar.classList.contains("open");

  if (!its_navbar && !its_burger && navbar_is_open) {
    navMenu();
  }
});

const cardInfoBtnClickHandler = () => {
  document
    .querySelector(".service_info__btn")
    .addEventListener("click", (e) => {
      const clickedTag = e.target;
      const focused = document.getElementsByClassName("focused");
      const selectedBtn = document.querySelectorAll(
        ".service_info__btn button"
      );
      const card1 = document.querySelectorAll(".cards .card_info1");
      const card2 = document.querySelectorAll(".cards .card_info2");
      const card3 = document.querySelectorAll(".cards .card_info3");
      const tags = document.querySelectorAll(".cards .card");
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
          card1.forEach((e) => {
            e.classList.remove("blured");
          });
        }
        if (selectedBtn[1].classList.contains("focused")) {
          card2.forEach((e) => {
            e.classList.remove("blured");
          });
        }
        if (selectedBtn[2].classList.contains("focused")) {
          card3.forEach((e) => {
            e.classList.remove("blured");
          });
        }
      });
    });
};

const addModalClickHandler = () => {
  document.querySelector(".prices_plan").addEventListener("click", (e) => {
    const btnId = +e.target.dataset.btn;
    const openModal1 = document.getElementById("modal1");
    const openModal2 = document.getElementById("modal2");
    const openModal3 = document.getElementById("modal3");

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
  const modalW = document.querySelector(".prices_plan");

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
  const modalWindow = document.createElement("div");
  modalWindow.className = "open-window";
  modalWindow.classList.toggle("close");
  modalWindow.setAttribute("data-window", data.id);
  template += `<div class="open" data-window = ${data.id}>`;
  template += `<div class="modal-title">${data.title}</div>`;
  template += `<div class="open-area">`;
  template += `<div class="modal__text">${data.text}</div>`;
  template += `<p class="modal__price"><span class="modal__price-red">${data.price}</span>${data.subtitle}</p>`;
  template += `<a href="#contacts" class="modal__button">${data.buttonText}</a>`;
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

const overLay = document.querySelector(".overlay");
const cityBtn = document.querySelector(".city-button");
const cityList = document.querySelector(".city-list");
const cityLinks = Array.from(cityList.children);
const cardList = document.querySelector(".card-list");
const cityCards = Array.from(cardList.children);
let cityCard = document.querySelector(".city-card");
const sel = document.getElementsByClassName("selected");

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

cityLinks.forEach((link, i) => {
  link.addEventListener("click", closeList);
  link.addEventListener("click", function selectCard(e) {
    let city = e.target;
    for (city = 0; city < cityCards.length; city++) {
      cityCard = cityCards[city];
      cityCard.classList.remove("selected");
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
