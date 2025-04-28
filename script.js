document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    });
  });

  const carousel = document.getElementById("achievement-carousel");
  const pauseBtn = document.getElementById("pause-btn");
  const playBtn = document.getElementById("play-btn");

  playBtn.style.display = "none";

  pauseBtn.addEventListener("click", function () {
    carousel.style.animationPlayState = "paused";
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
  });

  playBtn.addEventListener("click", function () {
    carousel.style.animationPlayState = "running";
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
  });

  carousel.addEventListener("mouseenter", function () {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", function () {
    if (playBtn.style.display === "none") {
      carousel.style.animationPlayState = "running";
    }
  });

  const cards = document.querySelectorAll(".kartu");

  cards.forEach((card) => {
    card.addEventListener("mousemove", handleTilt);
    card.addEventListener("mouseleave", resetTilt);
  });

  function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = mouseY / -10;
    const rotateY = mouseX / 10;

    card.style.transform = `translateY(-15px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function resetTilt() {
    this.style.transform = "";
  }
});
