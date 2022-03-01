const jobFilter = document.getElementById("filter");

window.addEventListener("DOMContentLoaded", (event) => {
  let emptyLists = document.querySelectorAll(".w-dyn-empty");
  emptyLists.forEach((list) => {
    let nix = list.closest(".job-list-wrapper");
    nix.remove();
    let nixId = list.closest(".job-list-wrapper").id;
    let nixOption = document.querySelector(
      "div.filter-wrapper option[value=" + nixId + "]"
    );
    nixOption.remove();
  });
});

// Filtering function for select element
jobFilter.onchange = function () {
  let selectedSection = this.value;
  if (selectedSection == "all") {
    let filtered = document.querySelectorAll(".job-list-wrapper");
    filtered.forEach((filtered) => {
      filtered.style.display = "block";
    });
  } else {
    let filtered = document.querySelectorAll(".job-list-wrapper");
    filtered.forEach((filtered) => {
      filtered.style.display = "none";
    });
    document.getElementById(selectedSection).style.display = "block";
  }
};
