window.onload = () => {
  let tab = document.querySelectorAll(".tab");
  tab.forEach(v => v.addEventListener("click", openTabs));

  function openTabs(e) {
    let id = e.target.id;
    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(el => {
      if (el.id === id) {
        el.style.color = "rgba(0, 0, 0, 0.8)";
        el.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
      } else {
        el.style.color = "rgba(0, 0, 0, 0.4)";
        el.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.5)";
      }
    });

    let open = document.querySelector(`.${id}`);
    open.style.display = "flex";

    let close = document.querySelectorAll(`.tab-section:not(.${id})`);
    close.forEach(v => (v.style.display = "none"));
  }

  let navbarOpen = document.getElementById("navbar-open");
  let navbarClose = document.getElementById("navbar-close");
  let navDetails = document.querySelector(".nav__details");

  navbarOpen.addEventListener("click", openNav);
  navbarClose.addEventListener("click", closeNav);

  function openNav() {
    navDetails.style.transform = "translateX(0)";
  }

  function closeNav() {
    navDetails.style.transform = "translateX(-100%)";
  }
};
