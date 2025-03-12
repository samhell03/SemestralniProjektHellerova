document.addEventListener("DOMContentLoaded", function() {
    // Získání všech položek menu s podnabídkou
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        // Při kliknutí na položku se přepne zobrazení podnabídky
        dropdown.addEventListener("click", function(event) {
            const dropdownContent = this.querySelector(".dropdown-content");
            const isOpen = dropdownContent.style.display === "block";

            // Skrytí všech podnabídek
            document.querySelectorAll(".dropdown-content").forEach(content => {
                content.style.display = "none";
            });

            // Zobrazení nebo skrytí aktuální podnabídky
            if (!isOpen) {
                dropdownContent.style.display = "block";
            }
        });
    });

    // Kliknutí mimo menu zavře všechny otevřené podnabídky
    document.addEventListener("click", function(event) {
        if (!event.target.closest("nav")) {
            document.querySelectorAll(".dropdown-content").forEach(content => {
                content.style.display = "none";
            });
        }
    });
});
