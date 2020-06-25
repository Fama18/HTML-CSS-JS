        document.getElementById("h").style.display = "none";
        document.getElementById("fraisCompte").style.display = "none";
        document.getElementById("labfrais").style.display = "none";
        document.getElementById("h1").style.display = "none";
        document.getElementById("AgiosCompte").style.display = "none";
        document.getElementById("labAgios").style.display = "none";

function testCompte() {
    let typeCompte = document.getElementById("typeCompte");

    

     if(typeCompte.value == "CESX") {

        document.getElementById("h1").style.display = "none";
        document.getElementById("AgiosCompte").style.display = "none";
        document.getElementById("labAgios").style.display = "none";
        document.getElementById("h").style.display = "";
        document.getElementById("fraisCompte").style.display = "";
        document.getElementById("labfrais").style.display = "";

    }
    else if(typeCompte.value == "CCS") {
        document.getElementById("h").style.display = "none";
        document.getElementById("fraisCompte").style.display = "none";
        document.getElementById("labfrais").style.display = "none";
        document.getElementById("h1").style.display = "";
        document.getElementById("AgiosCompte").style.display = "";
        document.getElementById("labAgios").style.display = "";

    }
    else if(typeCompte.value == "CB") {
        document.getElementById("h1").style.display = "none";
        document.getElementById("AgiosCompte").style.display = "none";
        document.getElementById("labAgios").style.display = "none";
        document.getElementById("h").style.display = "";
        document.getElementById("fraisCompte").style.display = "";
        document.getElementById("labfrais").style.display = "";
    }
    else if(typeCompte.value == "S") {
        document.getElementById("h").style.display = "none";
        document.getElementById("fraisCompte").style.display = "none";
        document.getElementById("labfrais").style.display = "none";
        document.getElementById("h1").style.display = "none";
        document.getElementById("AgiosCompte").style.display = "none";
        document.getElementById("labAgios").style.display = "none";

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
        NumAgence.value = "";
    }
    else if(NumAgence.value.length > 14) {
        alert("le numero de l'Agence ne doit pas dépasser 14 caracteres !");
        e.preventDefault();
        NumAgence.value = "";
    }

    else {
        if(NumCompte.value == "") {
            ev.preventDefault();
            alert("Veuillez renseigner le numero du compte");
        }
        else if(ValidNumAgence_Numcompte_cleRib.test(NumCompte.value) == false) {
            alert("format numero compte invalide !");
            ev.preventDefault();
            NumCompte.value = "";
        }
        else if(NumCompte.value.length > 16) {
            alert("le numero de compte ne doit pas dépasser 16 caracteres !");
            e.preventDefault();
            NumCompte.value = "";
        }


        else {
                if(cleRib.value == "") {
                    ev.preventDefault();
                    alert("Veuillez renseigner la clé Rib");
                }
                else if(ValidNumAgence_Numcompte_cleRib.test(cleRib.value) == false) {
                    alert("clé Rib invalide !");
                    ev.preventDefault();
                    cleRib.value = "";
                }
                else if(cleRib.value.length > 9) {
                    alert("la clé Rib ne doit pas dépasser 9 caracteres !");
                    e.preventDefault();
                    cleRib.value = "";
                }
                else {
                    if(infoclient.value == "") {
                        ev.preventDefault();
                        alert("Choisisser un client ! ");
                    }
                }
        }
    }

    /*let typeCompte = document.getElementById("typeCompte");
    if(typeCompte.value == "CESX") {
        let fraisCompte = document.getElementById("fraisCompte").checked;

        if(fraisCompte == false) {
            ev.preventDefault();
        }
    }*/


});
