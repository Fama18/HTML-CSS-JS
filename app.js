/*function testType()
       {
           var champ = document.getElementById("TypeClient");
           if(champ.selectedIndex == "")
           {
               alert("Sélectionner un type de client");
               return false;
           }
           else
           {
               return true;
           }
       }*/
function testClient() {
    let TypeClient = document.getElementById("TypeClient");

    if((TypeClient.value == "Cm")) {

        document.getElementById("numCni").disabled = "disabled";
        document.getElementById("prenom").disabled = "disabled";
        document.getElementById("DateDeNaissance").disabled = "disabled";
        document.getElementById("nomEmployeur").disabled = "disabled";
        document.getElementById("AdresseEmployeur").disabled = "disabled";
        document.getElementById("raisonSocial").disabled = "disabled";
        document.getElementById("numIdent").disabled = "disabled";
    }
    else if(TypeClient.value == "Cp") {
        document.getElementById("numCni").disabled = "";
        document.getElementById("prenom").disabled = "";
        document.getElementById("DateDeNaissance").disabled = "";
        document.getElementById("nomEmployeur").disabled = "";
        document.getElementById("AdresseEmployeur").disabled = "";
        document.getElementById("raisonSocial").disabled = "";
        document.getElementById("numIdent").disabled = "";
    }
}

function selectEmploye() {
    let stat = document.getElementById("Employercheck").checked;

    if(stat == true) {
        document.getElementById("nomEmployeur").disabled = "";
        document.getElementById("AdresseEmployeur").disabled = "";
        document.getElementById("raisonSocial").disabled = "";
        document.getElementById("numIdent").disabled = "";
        document.getElementById("salaire").disabled = "";

    }
    else {
        document.getElementById("nomEmployeur").disabled = "disabled";
        document.getElementById("AdresseEmployeur").disabled = "disabled";
        document.getElementById("raisonSocial").disabled = "disabled";
        document.getElementById("numIdent").disabled = "disabled";
        document.getElementById("salaire").disabled = "disabled";

    }
}

let form1 = document.getElementById("form1").addEventListener("submit", function(e) {

    let TypeClient = document.getElementById("TypeClient");
    let numCni = document.getElementById("numCni");
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let DateDeNaissance = document.getElementById("DateDeNaissance");
    let adresse = document.getElementById("adresse");
    let email = document.getElementById("email");
    let telephone = document.getElementById("telephone");

    let nomEmployeur = document.getElementById("nomEmployeur");
    let AdresseEmployeur = document.getElementById("AdresseEmployeur");
    let raisonSocial = document.getElementById("raisonSocial");
    let numIdent = document.getElementById("numIdent");
    let salaire = document.getElementById("salaire");

    let ValidTypeCompte = /^[a-zA-Z\s]+$/;
    let ValidNumCni = /^[0-9\s]+$/;
    let ValidNom_Prenom = /^[a-zA-Z\s]+$/;
    let ValidAdresse = /^[a-zA-Z0-9-\s]+$/;
    let ValidEmail = /^[a-z0-9-@.\s]+$/;
    let ValidTelephone = /^[0-9+]+$/;

    let ValidRaisonSocial = /^[a-zA-Z\s]+$/;
    let ValidNumIdent = /^[a-zA-Z0-9-\s]+$/;
    let ValidSalaire = /^[0-9\s]+$/;




        //traitement num CNI
        if(numCni.value.trim() == "") {
            e.preventDefault();
            alert("Veuillez remplir votre numero de CNI");
        }
        else if(ValidNumCni.test(numCni.value) == false) {
            alert("le numero de CNI ne doit comporter que des chiffres et des espaces !");
            e.preventDefault();
        }

        else {

            //traitement nom
            if(nom.value.trim() == "") {
                e.preventDefault();
                alert("Veuillez remplir votre nom !");
                }
            else if(ValidNom_Prenom.test(nom.value) == false) {
                alert("le nom ne doit comporter que des lettres !");
                e.preventDefault();
            }

            else {

                //traitement prenom
                if(prenom.value.trim() == "") {
                    e.preventDefault();
                    alert("Veuillez remplir votre prénom !");
                    }
                else if(ValidNom_Prenom.test(prenom.value) == false) {
                    alert("le prénom ne doit comporter que des lettres !");
                    e.preventDefault();
                }

                else {

                        //traitement Date de naissance
                        if(DateDeNaissance.value.trim() == "") {
                            e.preventDefault();
                            alert("Veuillez renseigner votre date de naissance !");
                        }

                        else {
                             //traitement adresse
                             if(adresse.value.trim() == "") {
                                e.preventDefault();
                                alert("Veuillez renseigner votre adresse !");
                            }
                            else if(ValidAdresse.test(adresse.value) == false) {
                                alert("format Adresse invalide !");
                                e.preventDefault();
                            }

                            else {
                                //traitement email
                                if(email.value.trim() == "") {
                                    e.preventDefault();
                                    alert("Veuillez renseigner votre email !");
                                }
                                else if(ValidEmail.test(email.value) == false) {
                                    alert("format d'email invalide !");
                                    e.preventDefault();
                                }

                                else {
                                    if(telephone.value.trim() == "") {
                                        e.preventDefault();
                                        alert("Veuillez remplir votre numero de téléphone!");
                                    }
                                    else if(ValidTelephone.test(telephone.value) == false) {
                                        alert("format Numero de téléphone invalide !");
                                        e.preventDefault();
                                    }
                                    else {

                                            if(nomEmployeur.value.trim() == "") {
                                                e.preventDefault();
                                                alert("Veuillez entrer le nom de votre employeur!");
                                            }
                                            else if(ValidNom_Prenom.test(nomEmployeur.value) == false) {
                                                alert("format de nom invalide !");
                                                e.preventDefault();
                                            }
                                            else {
                                                if(AdresseEmployeur.value.trim() == "") {
                                                    e.preventDefault();
                                                    alert("Veuillez entrer l'adresse de votre employeur!");
                                                }
                                                else if(ValidAdresse.test(AdresseEmployeur.value) == false) {
                                                    alert("format d'adresse invalide !");
                                                    e.preventDefault();
                                                }
                                                else {
                                                    if(raisonSocial.value.trim() == "") {
                                                        e.preventDefault();
                                                        alert("Veuillez renseigner la raison sociale !");
                                                    }
                                                    else if(ValidRaisonSocial.test(raisonSocial.value) == false) {
                                                        alert("format de raison sociale invalide !");
                                                        e.preventDefault();
                                                    }
                                                    else {
                                                        if(numIdent.value.trim() == "") {
                                                            e.preventDefault();
                                                            alert("Veuillez renseigner votre numéro d'identification !");
                                                        }
                                                        else if(ValidNumIdent.test(numIdent.value) == false) {
                                                            alert("format numero d'identification invalide !");
                                                            e.preventDefault();
                                                        }
                                                        else {
                                                            if(salaire.value.trim() == "") {
                                                                e.preventDefault();
                                                                alert("Veuillez renseigner votre salaire !");
                                                            }
                                                            else if(ValidSalaire.test(salaire.value) == false) {
                                                                alert("format salaire invalide !");
                                                                e.preventDefault();
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                    }
                                }
                            }

                        }
                   }
                }
            }

});