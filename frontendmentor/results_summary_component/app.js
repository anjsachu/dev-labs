fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("summary_list");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("list_items");
      div.style.backgroundColor = item.bgColor;

      div.innerHTML = `
          <div class="summary_item_title_wrap">
            <img src="${item.icon}" alt="${item.category}">
            <p>${item.category}</p>
          </div>
          <p class="summary_score">
            <span>${item.score}</span><span> / 100</span>
          </p>
        `;

      container.appendChild(div);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
