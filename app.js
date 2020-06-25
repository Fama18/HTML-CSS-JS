function testClient() {
    let TypeClient = document.getElementById("TypeClient");

    if(TypeClient.value == "") {
        alert("Veuiller choisir un type de client !");
    }

    else if((TypeClient.value == "Cm")) {

        document.getElementById("lab1").style.display = "none";
        document.getElementById("lab2").style.display = "none";
        document.getElementById("lab3").style.display = "none";
        document.getElementById("lab4").style.display = "none";
        document.getElementById("lab5").style.display = "none";
        document.getElementById("legend1").style.display = "none";
        document.getElementById("legend2").style.display = "none";
        document.getElementById("Employercheck").style.display = "none";
        document.getElementById("numCni").style.display = "none";
        document.getElementById("nom").style.display = "none";
        document.getElementById("prenom").style.display = "none";
        document.getElementById("infoClient2").style.display = "none";
        document.getElementById("lab").style.display = "none";
        document.getElementById("salaire").style.display = "none";

        alert("Veuiller remplir les informations de l'entreprise");

    }
    else if(TypeClient.value == "Cp") {


        document.getElementById("lab1").style.display = "";
        document.getElementById("lab2").style.display = "";
        document.getElementById("lab3").style.display = "";
        document.getElementById("lab4").style.display = "";
        document.getElementById("lab5").style.display = "";
        document.getElementById("legend1").style.display = "";
        document.getElementById("legend2").style.display = "";
        document.getElementById("Employercheck").style.display = "";
        document.getElementById("numCni").style.display = "";
        document.getElementById("nom").style.display = "";
        document.getElementById("prenom").style.display = "";
        document.getElementById("infoClient2").style.display = "";
        document.getElementById("lab").style.display = "";
        document.getElementById("salaire").style.display = "";

        alert("Veuiller remplir vos informations");

    }
}
function selectEmploye() {
    let stat = document.getElementById("Employercheck").checked;

    if(stat == true) {

        document.getElementById("nomEmployeur").style.display = "";
        document.getElementById("AdresseEmployeur").style.display = "";
        document.getElementById("raisonSocial").style.display = "";
        document.getElementById("numIdent").style.display = "";
        document.getElementById("salaire").style.display = "";
        alert("RemplisseZ le formulaire d'informations sur votre employeur")

            let TypeClient = document.getElementById("TypeClient");
            if(TypeClient.value == "Cp") {
                    let nomEmployeur = document.getElementById("nomEmployeur");
                    let AdresseEmployeur = document.getElementById("AdresseEmployeur");
                    let raisonSocial = document.getElementById("raisonSocial");
                    let numIdent = document.getElementById("numIdent");
                    let salaire = document.getElementById("salaire");

                    let ValidNom_Prenom = /^[a-zA-Z\s]+$/;
                    let ValidRaisonSocial = /^[a-zA-Z\s]+$/;
                    let ValidNumIdent = /^[a-zA-Z0-9-\s]+$/;
                    let ValidAdresse = /^[a-zA-Z0-9-\s]+$/;
                    let ValidSalaire = /^[0-9\s]+$/;

                    if(nomEmployeur.value.trim() == "") {
                        e.preventDefault();
                        alert("Veuillez entrer le nom de votre employeur!");
                    }
                    else if(ValidNom_Prenom.test(nomEmployeur.value) == false) {
                        alert("format de nom invalide ! \nEntrer un nom valide");
                        e.preventDefault();
                        nomEmployeur.value = "";
                    }
                    else if(nomEmployeur.value.length >= 20) {
                        alert("le nom ne doit pas dépasser 20 caracteres !");
                        e.preventDefault();
                        nomEmployeur.value = "";
                    }
                    else {
                        if(AdresseEmployeur.value.trim() == "") {
                            e.preventDefault();
                            alert("Veuillez entrer l'adresse de votre employeur!");
                        }
                        else if(ValidAdresse.test(AdresseEmployeur.value) == false) {
                            alert("format d'adresse invalide !\nEntrer une adresse valide");
                            e.preventDefault();
                            AdresseEmployeur.value = "";
                        }
                        else if(AdresseEmployeur.value.length >= 50) {
                            alert("l'adresse ne doit pas dépasser 50 caracteres !");
                            e.preventDefault();
                            AdresseEmployeur.value = "";
                        }
                        else {
                            if(raisonSocial.value.trim() == "") {
                                e.preventDefault();
                                alert("Veuillez renseigner la raison sociale !");
                            }
                            else if(ValidRaisonSocial.test(raisonSocial.value) == false) {
                                alert("format de raison sociale invalide !\nEntrer une raison sociale valide");
                                e.preventDefault();
                                raisonSocial.value = "";
                            }
                            else if(raisonSocial.value.length >= 25) {
                                alert("la raison sociale ne doit pas dépasser 25 caracteres !");
                                e.preventDefault();
                                raisonSocial.value = "";
                            }
                            else {
                                if(numIdent.value.trim() == "") {
                                    e.preventDefault();
                                    alert("Veuillez renseigner votre numéro d'identification !");
                                }
                                else if(ValidNumIdent.test(numIdent.value) == false) {
                                    alert("format numero d'identification invalide !\nEntrer un numero d'identification valide");
                                    e.preventDefault();
                                    numIdent.value = "";
                                }
                                else if(numIdent.value.length >= 20) {
                                    alert("le numero d'identification ne doit pas dépasser 20 caracteres !");
                                    e.preventDefault();
                                    numIdent.value = "";
                                }
                                else {
                                    if(salaire.value.trim() == "") {
                                        e.preventDefault();
                                        alert("Veuillez renseigner votre salaire !");
                                    }
                                    else if(ValidSalaire.test(salaire.value) == false) {
                                        alert("format salaire invalide !\nEntrer un salaire valide");
                                        e.preventDefault();
                                        salaire.value = "";
                                    }
                                }
                            }
                        }
                    }
            }

    }
    else {
        document.getElementById("field2").style.display = "none";
        document.getElementById("lab4").style.display = "none";
        document.getElementById("lab5").style.display = "none";
        document.getElementById("Employercheck").style.display = "none";

    }
}
let form1 = document.getElementById("form1").addEventListener("submit", function(e) {

    if(TypeClient.value == "Cp") {
        let numCni = document.getElementById("numCni");
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let DateDeNaissance = document.getElementById("DateDeNaissance");
        let adresse = document.getElementById("adresse");
        let email = document.getElementById("email");
        let telephone = document.getElementById("telephone");

        let ValidNumCni = /^[0-9\s]+$/;
        let ValidNom_Prenom = /^[a-zA-Z\s]+$/;
        let ValidAdresse = /^[a-zA-Z0-9-\s]+$/;
        let ValidEmail = /^[a-z0-9-@.\s]+$/;
        let ValidTelephone = /^[0-9+]+$/;

        //traitement num CNI
        if(numCni.value.trim() == "") {
            e.preventDefault();
            alert("Veuillez remplir votre numero de CNI");
        }
        else if(ValidNumCni.test(numCni.value) == false) {
            alert("le numero de CNI ne doit comporter que des chiffres et des espaces !\nEntrer un CNI valide SVP ! ");
            e.preventDefault();
            numCni.value = "";
        }
        else if(numCni.value.length > 16) {
            alert("le numero de CNI ne doit pas dépasser 16 caracteres !");
            e.preventDefault();
            numCni.value = "";
        }
        else {

            //traitement nom
            if(nom.value.trim() == "") {
                e.preventDefault();
                alert("Veuillez remplir votre nom !");
                }
            else if(ValidNom_Prenom.test(nom.value) == false) {
                alert("le nom ne doit comporter que des lettres ! \nEntrer un nom valide");
                e.preventDefault();
                nom.value = "";
            }
            else if(nom.value.length > 20) {
                alert("le nom ne doit pas dépasser 20 caracteres !");
                e.preventDefault();
                nom.value = "";
            }

            else {

                //traitement prenom
                if(prenom.value.trim() == "") {
                    e.preventDefault();
                    alert("Veuillez remplir votre prénom !");
                    }
                else if(ValidNom_Prenom.test(prenom.value) == false) {
                    alert("le prénom ne doit comporter que des lettres !\nEntrer un prénom valide");
                    e.preventDefault();
                    prenom.value = "";
                }
                else if(prenom.value.length > 30) {
                    alert("le prénom ne doit pas dépasser 30 caracteres !");
                    e.preventDefault();
                    prenom.value = "";
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
                                alert("format Adresse invalide !\nEntrer une adresse valide");
                                e.preventDefault();
                                adresse.value = "";
                            }
                            else if(adresse.value.length > 40) {
                                alert("l'adresse ne doit pas dépasser 40 caracteres !");
                                e.preventDefault();
                                adresse.value = "";
                            }


                            else {
                                //traitement email
                                if(email.value.trim() == "") {
                                    e.preventDefault();
                                    alert("Veuillez renseigner votre email !");
                                }
                                else if(ValidEmail.test(email.value) == false) {
                                    alert("format d'email invalide !\nEntrer un email valide");
                                    e.preventDefault();
                                    email.value = "";
                                }
                                else if(email.value.length > 35) {
                                    alert("l'email ne doit pas dépasser 35 caracteres !");
                                    e.preventDefault();
                                    email.value = "";
                                }

                                else {
                                    if(telephone.value.trim() == "") {
                                        e.preventDefault();
                                        alert("Veuillez remplir votre numero de téléphone!");
                                    }
                                    else if(ValidTelephone.test(telephone.value) == false) {
                                        alert("format Numero de téléphone invalide !\nEntrer un numero de téléphone valide");
                                        e.preventDefault();
                                        telephone.value = "";
                                    }
                                    else if(telephone.value.length > 9) {
                                        alert("le numéro de téléphone ne doit pas dépasser 9 caracteres !");
                                        e.preventDefault();
                                        telephone.value = "";
                                    }
                                    else {

                                    }
                                }
                            }
                        }
                }
            }
        }

    }
    else if(TypeClient.value == "Cm") {

            let nomEmployeur = document.getElementById("nomEmployeur");
            let AdresseEmployeur = document.getElementById("AdresseEmployeur");
            let raisonSocial = document.getElementById("raisonSocial");
            let numIdent = document.getElementById("numIdent");

            let ValidNom_Prenom = /^[a-zA-Z\s]+$/;
            let ValidRaisonSocial = /^[a-zA-Z\s]+$/;
            let ValidNumIdent = /^[a-zA-Z0-9-\s]+$/;
            let ValidAdresse = /^[a-zA-Z0-9-\s]+$/;

            if(nomEmployeur.value.trim() == "") {
                e.preventDefault();
                alert("Veuillez entrer le nom de votre employeur!");
            }
            else if(ValidNom_Prenom.test(nomEmployeur.value) == false) {
                alert("format de nom invalide ! \nEntrer un nom valide");
                e.preventDefault();
                nomEmployeur.value = "";
            }
            else if(nomEmployeur.value.length > 20) {
                alert("le nom ne doit pas dépasser 20 caracteres !");
                e.preventDefault();
                nomEmployeur.value = "";
            }
            else {
                if(AdresseEmployeur.value.trim() == "") {
                    e.preventDefault();
                    alert("Veuillez entrer l'adresse de votre employeur!");
                }
                else if(ValidAdresse.test(AdresseEmployeur.value) == false) {
                    alert("format d'adresse invalide !\nEntrer une adresse valide");
                    e.preventDefault();
                    AdresseEmployeur.value = "";
                }
                else if(AdresseEmployeur.value.length > 40) {
                    alert("l'adresse ne doit pas dépasser 40 caracteres !");
                    e.preventDefault();
                    AdresseEmployeur.value = "";
                }
                else {
                    if(raisonSocial.value.trim() == "") {
                        e.preventDefault();
                        alert("Veuillez renseigner la raison sociale !");
                    }
                    else if(ValidRaisonSocial.test(raisonSocial.value) == false) {
                        alert("format de raison sociale invalide !\nEntrer une raison sociale valide");
                        e.preventDefault();
                        raisonSocial.value = "";
                    }
                    else if(raisonSocial.value.length > 25) {
                        alert("la raison sociale ne doit pas dépasser 25 caracteres !");
                        e.preventDefault();
                        raisonSocial.value = "";
                    }
                    else {
                        if(numIdent.value.trim() == "") {
                            e.preventDefault();
                            alert("Veuillez renseigner votre numéro d'identification !");
                        }
                        else if(ValidNumIdent.test(numIdent.value) == false) {
                            alert("format numero d'identification invalide !\nEntrer un numero d'identification valide");
                            e.preventDefault();
                            numIdent.value = "";
                        }
                        else if(numIdent.value.length > 20) {
                            alert("le numero d'identification ne doit pas dépasser 20 caracteres !");
                            e.preventDefault();
                            numIdent.value = "";
                        }
                    }
                }
            }

    }

 });