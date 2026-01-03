let button = document.querySelectorAll("#btn");
let content = document.querySelectorAll(".tab-content");

const contentView = (tabId) => {
  content.forEach((btn) => {
    btn.classList.add("hidden");
  });

  document.getElementById(tabId).classList.remove("hidden");
};

let accordBtns = document.querySelectorAll("#accord-btn"); // Use a class for multiple buttons
let accordContent = document.querySelectorAll(".accord-content");

const accordView = (accordId) => {
  accordContent.forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("block");
  });

  let target = document.getElementById(accordId);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("block");
  }
};

const slider = document.getElementById("teamSlider");
const prevBtn = document.querySelector(".bi-chevron-left").parentElement;
const nextBtn = document.querySelector(".bi-chevron-right").parentElement;

let isMoving = false;

function cardWidth() {
  return slider.children[0].getBoundingClientRect().width;
}

function nextSlide() {
  if (isMoving) return;
  isMoving = true;

  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${cardWidth()}px)`;

  slider.addEventListener("transitionend", function handler() {
    slider.removeEventListener("transitionend", handler);
    slider.appendChild(slider.children[0]);
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
    isMoving = false;
  });
}

function prevSlide() {
  if (isMoving) return;
  isMoving = true;

  slider.insertBefore(
    slider.children[slider.children.length - 1],
    slider.children[0]
  );

  slider.style.transition = "none";
  slider.style.transform = `translateX(-${cardWidth()}px)`;

  requestAnimationFrame(() => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = "translateX(0)";
  });

  slider.addEventListener("transitionend", function handler() {
    slider.removeEventListener("transitionend", handler);
    isMoving = false;
  });
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3500);

window.addEventListener("resize", () => {
  slider.style.transition = "none";
  slider.style.transform = "translateX(0)";
});

// Mobile menu toggle functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    mobileMenuBtn &&
    mobileMenu &&
    !mobileMenuBtn.contains(event.target) &&
    !mobileMenu.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }
});
