document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // Close menu when clicking on nav links
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

  // Initially hide the play button
  playBtn.style.display = "none";

  // Pause button functionality
  pauseBtn.addEventListener("click", function () {
    carousel.style.animationPlayState = "paused";
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
  });

  // Play button functionality
  playBtn.addEventListener("click", function () {
    carousel.style.animationPlayState = "running";
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", function () {
    carousel.style.animationPlayState = "paused";
  });

  // Resume on mouse leave
  carousel.addEventListener("mouseleave", function () {
    // Only resume if not manually paused
    if (playBtn.style.display === "none") {
      carousel.style.animationPlayState = "running";
    }
  });

  // Add 3D tilt effect to achievement cards
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
