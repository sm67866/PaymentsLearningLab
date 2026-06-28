console.log("Payments Learning Lab Loaded");

//Search Box//

const searchBox = document.querySelector(".search-box");
const glossaryItems = document.querySelectorAll(".glossary-item");
const glossarySections = document.querySelectorAll("main .content-panel");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase().trim();

        glossaryItems.forEach(function (item) {
            const itemText = item.innerText.toLowerCase();

            if (itemText.includes(searchTerm)) {
                item.style.display = "block";

                if (searchTerm !== "") {
                    item.open = true;
                } else {
                    item.open = false;
                }
            } else {
                item.style.display = "none";
                item.open = false;
            }
        });

        glossarySections.forEach(function (section) {
            const itemsInSection = section.querySelectorAll(".glossary-item");

            if (itemsInSection.length === 0) {
                return;
            }

            let hasVisibleItem = false;

            itemsInSection.forEach(function (item) {
                if (item.style.display !== "none") {
                    hasVisibleItem = true;
                }
            });

            if (hasVisibleItem) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
}
