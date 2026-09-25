var prompt = require('prompt-sync')();

var candidats = [{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Independant",age: 40,electeurs: [1]}];

function ajouterCandidat(){//1
    let x={}
    x.cin=prompt("entrer le cin du candidiat: ");
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin==cin){
            console.log("")
            console.log("ce candidat est deja inscrit ");
            return ajouterCandidat();
        }
    }
    
    x.nom=prompt("entrer le nom du candidiat: ");
    x.prenom=prompt("entrer le prenom du candidiat: ");
    x.partiPolitique=prompt("entrer la partie politique (Independant ou autre): ");
    x.age=prompt("entrer l'age du candidiat: ")*1;
    x.electeurs=[]
    candidats[candidats.length]=x
    console.log("")
    console.log("le candidat inscrit success");
    return candidats;
}

function ajouterPlusieursCandidat(){//2
// ajouterCandidiat n fois
    let x=prompt("how many candidats do u want to add: ")*1;
    for(let i=0;i<x;i++){
        console.log("===============================")
        console.log("entrer l'information du candidat "+(i+1)+" : ");
        candidats=ajouterCandidat();
    }
    return candidats
}


function aficherListCandidats(){//3
//tri a bull also get rid of non elected people 
    let tab=candidats
    for(let i=0;i<tab.length;i++){
        for(let j=0;j<tab.length-1;j++){
            if(tab[j].electeurs.length<tab[j+1].electeurs.length){
                let tmp=tab[j];
                tab[j]=tab[j+1];
                tab[j+1]=tmp;
            }
        }
    }
    let k=0
    while(true){
        if(!tab[k]||tab[k].electeurs.length==0){
            console.log("===============================")
            console.log("la list finis :")
            console.log("");
            break
        }
        console.log("===============================")
        console.log("classement : "+(k+1));
        console.log("CIN : "+tab[k].cin)
        console.log("nom : "+tab[k].nom)
        console.log("nombre de votes : "+tab[k].electeurs.length);
        k++;
    }
    return tab;//modification pour statistique func
}

function voter(cin){//4
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin==cin){
            for(let y=0;y<candidats.length;y++){
                for(let k=0;k<candidats[y].electeurs.length;k++){
                    if(candidats[y].electeurs[k]==cin){
                        console.log("");
                        console.log(" Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau")
                        return -1;
                    }
                }
            }
            let voted=prompt("entrer le cin du candidat vous voulez voter pour : ");
            for(let j=0;j<candidats.length;j++){
                if(candidats[j].cin==voted&&candidats[j].partiPolitique!="Independant"){
                    candidats[j].electeurs.push(cin);
                    console.log("")
                    console.log("your vote went throught : ")
                    return candidats;
                }
            }
            console.log("");
            console.log("the candidat you are looking for doesn't exist or doesn't have a political party ! ")
            return -1
        }
    }
    console.log("")
    console.log("you are not in the list of candidats,enroll first before voting")
    return -1;  
}

function modifierInfo(cin){//5
//cin has to alr exist
    for(let i=0;i<candidats.length;i++){
        if(cin==candidats[i].cin){
            console.log("")
            console.log("1.modifie your age :")
            console.log("2.modifie your political party :")
            console.log("3.if you want to modifie both :")
            console.log("")
            let x =prompt("")*1
            if(x==1){
                let age=prompt("entrer le nouveau age : ")*1;
                candidats[i].age=age;
                return candidats
            }else if(x==2){
                let party=prompt("entrer le nouveau partie political : ");
                candidats[i].partiPolitique=party;
                return candidats
            }else if(x==3){
                let age=prompt("entrer le nouveau age : ")*1;
                candidats[i].age=age;
                console.log("")
                let party=prompt("entrer le nouveau partie political : ");
                candidats[i].partiPolitique=party;
                return candidats
            }else{
                console.log("invalid input!")
                return -1;
            }
        }
    }
    console.log("")
    console.log("votre cin est incorrect ou n'a pas inscrit !")
    return -1
}

function suprimer(cin){//6
     for(let i=0;i<candidats.length;i++){
        if(cin==candidats[i].cin){
            for(let k=0;k<candidats.length;k++){
                for(let l=0;l<candidats[k].electeurs.length;l++){
                    if(cin==candidats[k].electeurs[l]){
                        let tab=[];
                        for(let m=0;m<candidats[k].electeurs.length;m++){
                            if(candidats[k].electeurs[m]==cin){
                                continue;
                            }
                            tab.push(candidats[k].electeurs[m])
                        }
                        candidats[k].electeurs=tab;
                    }
                }
            }
            var table=[]
            for(let n=0;n<candidats.length;n++){
                if(candidats[n].cin==cin){
                    continue;
                }
                table.push(candidats[n]);
            }
            candidats=table;
            console.log("")
            console.log("deletion was successful !")
            return candidats;
        }
     }
     console.log("")
     console.log("the cin you entered is incorrect or doesn't exist !!")
     return -1;
}

function rehcercheParNom(nom){//7
    let tab=[]
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].nom!=nom){
            continue
        }
        tab.push(candidats[i]);
    }
    if(tab.length==0){
        console.log("")
        console.log("no resaults !")
        return;
    }
    return aficherListCandidats(tab);
}

function stats(){//8
    //.lengh
    //loop adding can.electeurs.length
    //change aficherListCandidats to return sorted list
    //make an object with poli parties being key?or a table that on even index has names and uneven has number


}

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
            //console.log(candidats)
            break;
        }
        case 2:{
            candidats=ajouterPlusieursCandidat();
            //console.log(candidats)
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
            //console.log(candidats)
            break;
        }
        case 5:{
            let cin=prompt("entrer votre cin : ")
            let x=modifierInfo(cin);
            if(x!=-1){
                candidats=x
                //console.log(candidats);
            }
            break;
        }
        case 6:{
            let cin=prompt("entrer votre cin : ")
            let x=suprimer(cin);
            if(x!=-1){
                candidats=x
                //console.log(candidats);
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