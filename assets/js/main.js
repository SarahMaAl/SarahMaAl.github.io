document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("[data-project-search]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-project-card]");

  let activeFilter = "all";

  function normalize(value) {
    return value
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function updateProjects() {
    const searchValue = searchInput ? normalize(searchInput.value) : "";
    const filterValue = normalize(activeFilter);

    projectCards.forEach((card) => {
      const tags = normalize(card.dataset.tags || "");

      const matchesSearch = !searchValue || tags.includes(searchValue);
      const matchesFilter = filterValue === "all" || tags.includes(filterValue);

      if (matchesSearch && matchesFilter) {
        card.removeAttribute("hidden");
      } else {
        card.setAttribute("hidden", "");
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", updateProjects);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      updateProjects();
    });
  });

  updateProjects();
});
