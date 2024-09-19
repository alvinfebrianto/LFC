function switch_mode() {
  let main = document.querySelector("main");
  let card = document.getElementsByClassName("card");

  main.classList.toggle("dark-main");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("dark-card");
  }

  let x = document.getElementById("switch");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  } else {
    x.innerHTML = "Light Mode";
  }
}
