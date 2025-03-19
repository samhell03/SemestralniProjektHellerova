document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('poptavkaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Zabraňuje standardnímu odeslání formuláře

        // Získání dat z formuláře
        let jmeno = document.getElementById("jmeno").value;
        let email = document.getElementById("email").value;
        let destinace = document.getElementById("destinace").value;
        let telefon = document.getElementById("telefon").value;
        let predvolba = document.getElementById("predvolba").value;

        // Zde můžete provést operace s těmito daty, pokud potřebujete

        // Skrytí formuláře a zobrazení potvrzení
        document.getElementById("poptavkaForm").style.display = "none"; // Skrytí formuláře
        document.getElementById("potvrzeni").style.display = "block";  // Zobrazení potvrzení

        // Možné další operace (např. validace dat, odeslání e-mailu, atd.)
    });
});

// Funkce pro otevření/uzavření mobilního menu
function toggleMenu() {
    var menu = document.querySelector('ul');
    menu.classList.toggle('open');
}

// Funkce pro otevření/uzavření dropdown menu na mobilních zařízeních
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Zabraňuje zavření menu, když kliknete dovnitř
        this.classList.toggle('open');
    });
});

// Zavření dropdown menu při kliknutí mimo něj
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.classList.remove('open');
        });
    }
});


function printTable() {
    let originalContent = document.body.innerHTML; // Uložení původního obsahu stránky
    let tableContent = document.getElementById("letenkyTable").outerHTML; // Získání tabulky

    document.body.innerHTML = tableContent; // Zobrazení pouze tabulky
    window.print(); // Spuštění tisku
    document.body.innerHTML = originalContent; // Obnova původní stránky
}