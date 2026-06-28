console.log("Payments Learning Lab Loaded");

//Search Box//

const searchBox = document.querySelector(".search-box");
const glossaryItems = document.querySelectorAll(".glossary-item");

searchBox.addEventListener("input", function () {
    const searchTerm = searchBox.value.toLowerCase();

    glossaryItems.forEach(function (item) {
        const itemText = item.innerText.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
