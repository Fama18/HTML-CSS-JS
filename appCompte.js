function testCompte() {
    let typeCompte = document.getElementById("typeCompte");
    let frais = document.getElementById("frais").value;
    let agios = document.getElementById("agios").value;

    if((typeCompte.value == "CESX") && (typeCompte.value == "CB")) {
        frais = "10000 FCFA";
    }
    else if(typeCompte.value == "CCS") {
        document.getElementById("frais").disabled = "disabled";
        agios = "2000 FCFA/mois";

    }
}

let form2 = document.getElementById("form2").addEventListener("submit", function(ev) {
    let NumAgence = document.getElementById("NumAgence");
    let NumCompte = document.getElementById("NumCompte");
    let cleRib = document.getElementById("cleRib");
    let infoclient = document.getElementById("infoclient");

    let ValidNumAgence_Numcompte_cleRib = /^[a-zA-Z0-9-\s]+$/;

    /*if(typeCompte.value == "Compte épargne simple et xeewel") {

    }*/

    if(NumAgence.value.trim() == "") {
        ev.preventDefault();
        alert("Veuillez renseigner le numero de l'agence");
    }
    else if(ValidNumAgence_Numcompte_cleRib.test(NumAgence.value) == false) {
        alert("format numero agence invalide !");
        ev.preventDefault();
    }

    else {
        if(NumCompte.value == "") {
            ev.preventDefault();
            alert("Veuillez renseigner le numero du compte");
        }
        else if(ValidNumAgence_Numcompte_cleRib.test(NumCompte.value) == false) {
            alert("format numero compte invalide !");
            ev.preventDefault();
        }

        else {
                if(cleRib.value == "") {
                    ev.preventDefault();
                    alert("Veuillez renseigner la clé Rib");
                }
                else if(ValidNumAgence_Numcompte_cleRib.test(cleRib.value) == false) {
                    alert("clé Rib invalide !");
                    ev.preventDefault();
                }
                else {
                    if(infoclient.value == "") {
                        ev.preventDefault();
                        alert("Choisisser un client ! ");
                    }
                }
        }
    }


});
