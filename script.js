console.log("Payments Learning Lab Loaded");

//Search Box//

const searchBox = document.querySelector(".search-box");
const glossaryItems = document.querySelectorAll(".glossary-item");
const glossarySections = document.querySelectorAll("main .content-panel");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const search = searchBox.value.toLowerCase().trim();

        let titleMatches = 0;

        // FIRST PASS
        // Count title matches only

        glossaryItems.forEach(item => {

            const title = item.querySelector("summary").innerText.toLowerCase();

            if (title.includes(search) && search !== "") {
                titleMatches++;
            }

        });

        // SECOND PASS
        // Show/hide entries

        glossaryItems.forEach(item => {

            const title = item.querySelector("summary").innerText.toLowerCase();
            const body = item.innerText.toLowerCase();

            let show = false;

            if (search === "") {

                show = true;

            }

            else if (titleMatches > 0) {

                show = title.includes(search);

            }

            else {

                show = body.includes(search);

            }

            item.style.display = show ? "block" : "none";
            item.open = show && search !== "";

        });

        // THIRD PASS
        // Hide empty letter sections

        glossarySections.forEach(section => {

            const visibleItems = section.querySelectorAll(".glossary-item:not([style*='display: none'])");

            section.style.display =
                visibleItems.length > 0 ? "block" : "none";

        });

        // FOURTH PASS
        // Scroll to first visible result

        if (search !== "") {

            const firstVisible =
                document.querySelector(".glossary-item:not([style*='display: none'])");

            if (firstVisible) {

                firstVisible.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

}
