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


    //return the new list if the vote went through and print the appropriate msg
    return " Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau"
}

function modifierInfo(cin){//5
//cin has to alr exist
//small menu verifying if age or political party are changed or maybe both

        return candidats
}

function suprimer(cin){//6
//one loop until i!=j and from j to length///j is index of said object cin is in


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