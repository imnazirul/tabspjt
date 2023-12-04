const btnEls = document.querySelectorAll(".btn");
const tabcontent = document.querySelectorAll(".t-content");

btnEls.forEach((bEl) => {
  bEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    //btnelement operation
    btnEls.forEach((_bEl) => {
      _bEl.classList.remove("active");
    });
    bEl.classList.add("active");

    //tabcontent operation
    tabcontent.forEach((tabEl) => {
      tabEl.classList.remove("live");
    });
    const tabElement = document.getElementById(id);
    tabElement.classList.add("live");
  });
});
