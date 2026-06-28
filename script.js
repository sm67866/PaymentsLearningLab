console.log("Payments Learning Lab Loaded");

//Search Box//

const searchBox = document.querySelector(".search-box");
const glossaryItems = document.querySelectorAll(".glossary-item");
const glossarySections = document.querySelectorAll("main .content-panel");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const search = searchBox.value.toLowerCase().trim();

        let titleMatches = 0;

        glossaryItems.forEach(function (item) {
            const title = item.querySelector("summary").innerText.toLowerCase();

            if (search !== "" && title.includes(search)) {
                titleMatches++;
            }
        });

        glossaryItems.forEach(function (item) {
            const title = item.querySelector("summary").innerText.toLowerCase();
            const body = item.innerText.toLowerCase();

            let showItem = true;

            if (search === "") {
                showItem = true;
                item.open = false;
            } else if (titleMatches > 0) {
                showItem = title.includes(search);
                item.open = showItem;
            } else {
                showItem = body.includes(search);
                item.open = showItem;
            }

            item.style.display = showItem ? "block" : "none";
        });

        glossarySections.forEach(function (section) {
            const items = section.querySelectorAll(".glossary-item");

            if (items.length === 0) {
                section.style.display = "block";
                return;
            }

            let hasVisibleItem = false;

            items.forEach(function (item) {
                if (item.style.display !== "none") {
                    hasVisibleItem = true;
                }
            });

            section.style.display = hasVisibleItem ? "block" : "none";
        });
    });
}
