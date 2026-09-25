var prompt = require('prompt-sync')();

const candidats = [{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Indépendant",age: 40,electeurs: []}];

function ajouterCandidat(){//1



    return candidats;
}

function ajouterPlusieursCandidat(){//2
// ajouterCandidiat n fois


    return candidats
}


function aficherListCandidats(){//3
//tri a bull also get rid of non elected people     

     //no return just printing loop after sorting;
}

function voter(cin){//4
// loop every none independent candidat looking for cin


    //return the new list if the vote went through or -1 if it didn't and print the appropriate msg
    //extra: don't forget an extra line before you print
    return " Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau"
}

function modifierInfo(cin){//5
//cin has to alr exist
//small menu verifying if age or political party are changed or maybe both
//extra: don't forget an extra line before you print

        return candidats
}

function suprimer(cin){//6
//one loop until i!=j and from j to length///j is index of said object cin is in
//extra: don't forget an extra line before you print


        return candidats
}

function rehcercheParNom(nom){//7
    let tab=[]
    //one loop to fill tab with only objects fitting

    return aficherListCandidats(tab);
}

function stats(){//8
    //.lengh
    //loop adding can.electeurs.length
    //change aficherListCandidats to return sorted list
    //make an object with poli parties being key?or a table that on even index has names and uneven has number


}

//the menu///a while loop always true,a switch to pick choices,treat invalid input cases,make it first to debug the functions
while(true){
    console.log("=====================================")
    console.log("     hello,how can i help you?")
    console.log("=====================================")
    console.log("1. Ajouter un nouveau candidat :")
    console.log("2. Ajouter plusieurs candidats à la fois:")
    console.log("3. Afficher la liste des candidats :")
    console.log("4. Voter pour un candidat :")
    console.log("5. Modifier les informations d'un candidat :")
    console.log("6. Supprimer un candidat :")
    console.log("7. Rechercher des candidats :")
    console.log("8. Statistiques de l'élection :")
    console.log("")
    let choix=prompt("")*1;
    switch(choix){
        case 1:{
            candidats=ajouterCandidat();
            break;
        }
        case 2:{
            candidats=ajouterPlusieursCandidat();
            break;
        }
        case 3:{
            aficherListCandidats();
            break;
        }
        case 4:{
            let cin=prompt("entrer votre cin : ")
            let x=voter(cin);
            if(x!=-1){
                candidats=x;
            }
            break;
        }
        case 5:{
            let cin=prompt("entrer votre cin : ")
            let x=modifierInfo(cin);
            if(x!=-1){
                candidats=x
            }
            break;
        }
        case 6:{
            let cin=prompt("entrer votre cin : ")
            let x=suprimer(cin);
            if(x!=-1){
                candidats=x
            }
            break;
        }
        case 7:{
            let nom=prompt("entrer le nom que tu recherche : ");
            rehcercheParNom(nom);
            break;
        }
        case 8:{
            stats()
            break;
        }
        default :
        console.log("invalid input,try again :")
        console.log("");
    }

}