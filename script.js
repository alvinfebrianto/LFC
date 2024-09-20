document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const main = document.querySelector("main");
  const cards = document.getElementsByClassName("card");

  const savedMode = localStorage.getItem("dark-mode") === "true";
  if (savedMode) {
    body.classList.add("dark-mode");
    main.classList.add("dark-main");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("dark-card");
    }
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      main.classList.add("dark-main");
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("dark-card");
      }
      localStorage.setItem("dark-mode", "true");
    } else {
      body.classList.remove("dark-mode");
      main.classList.remove("dark-main");
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("dark-card");
      }
      localStorage.setItem("dark-mode", "false");
    }
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
