const categoryTabs = document.querySelector(".js-card-category-tabs");
const spinner = document.querySelector(".spinner");

async function addCategoryTabs() {
  try {
    spinner.style.display = "block";

    const response = await fetch("/assets/js/data.json");
    const categories = await response.json();

    if (categories && Array.isArray(categories)) {
      categoryTabs.innerHTML = categories
        .map(
          (categoryTab) => `
        <div class="card-category-tab">
          <div class="category-info">
            <img src="${categoryTab.icon}" alt="" class="category-icon">
            <div class="category-title">${categoryTab.category}</div>
          </div>
          
          <div class="category-scores">
            <span class="category-current-score">${categoryTab.score}</span> /
            <span class="category-complete-score">100</span>
          </div>
        </div>
        `
        )
        .join("");
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    spinner.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", addCategoryTabs);
