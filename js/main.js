function hamburgerToggle() {
    var menu = document.getElementById("hamburgerMenu");
    var icon = document.getElementById("hamburgerIcon");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
    } else {
        menu.style.display = "none";
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
  }
}
