document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('poptavkaForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let jmeno = document.getElementById("jmeno").value;
        let email = document.getElementById("email").value;
        let destinace = document.getElementById("destinace").value;
        let telefon = document.getElementById("telefon").value;
        let predvolba = document.getElementById("predvolba").value;

        document.getElementById("poptavkaForm").style.display = "none";

        let potvrzeni = document.getElementById("potvrzeni");
        if (potvrzeni) {
            potvrzeni.style.display = "block";
        }
    });
});

function printTable() {
    let originalContent = document.body.innerHTML;
    let tableContent = document.getElementById("letenkyTable").outerHTML;

    document.body.innerHTML = tableContent;
    window.print();
    document.body.innerHTML = originalContent;
}
