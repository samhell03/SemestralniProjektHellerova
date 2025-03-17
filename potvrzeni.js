// Funkce pro validaci formuláře
document.getElementById('poptavkaForm').addEventListener('submit', function(event) {


    // Pokud je validace OK, skrytí formuláře a zobrazení potvrzení
    document.getElementById("poptavkaForm").style.display = "none";
    document.getElementById("potvrzeni").style.display = "block";
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
