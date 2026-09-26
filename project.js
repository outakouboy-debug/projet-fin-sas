var prompt = require('prompt-sync')();

var candidats = [{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Independant",age: 40,electeurs: [1]}];
var alpha=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num=[1,2,3,4,5,6,7,8,9,0]
function ajouterCandidat(){//1
    let x={}
    x.cin=prompt("Entrez le CIN du candidat : ");
    let one =true;
    let two=true;
    
    if(x.cin.length==6){
       for(let j=0;j<alpha.length;j++){
        if(x.cin[0]==alpha[j]){
            one= false;
        }
        if(x.cin[1]==alpha[j]){
            two= false;
        }
        for(let k=2;k<6;k++){
            let are_num=true;
            for(let m=0;m<10;m++){
               if(x.cin[k]==num[m]){
                are_num==false;
               }
            }
            if(are_num){
                break;
            }
            
        }
    } 
    }
    
    if(one||two||are_num){
        console.log("CIN incorrect !")
        return ajouterCandidat()
    }
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin==x.cin){
            console.log("")
            console.log("Ce candidat est déjà inscrit.");
            return ajouterCandidat();
        }
    }
    let nom=prompt("Entrez le nom du candidat : ");
    if(nom!=""){
        x.nom=nom;
    }
    else{
        console.log("Le nom est vide !");
        return ajouterCandidat()
    }
    let prenom=prompt("Entrez le prénom du candidat : ");
    if(prenom!=""){
        x.prenom=prenom;
    }
    else{
        console.log("preLe nom est vide !");
        return ajouterCandidat()
    }
    let parti=prompt("Entrez le parti politique (indépendant ou autre) : ");
    if(parti!=""){
        x.partiPolitique=parti;
    }
    else{
        console.log("Le parti politique est vide !");
        return ajouterCandidat()
    }
    let age=prompt("Entrez l’âge du candidat : ")*1;
    if(age>=18){
        x.age=age;
    }
    else{
        console.log(" L’âge est inférieur à 18 ans !");
        return ajouterCandidat()
    }
    x.electeurs=[]
    candidats[candidats.length]=x
    console.log("")
    console.log("Le candidat a été inscrit avec succès.");
    return candidats;
}

function ajouterPlusieursCandidat(){//2
    let howManyTimes=prompt("Combien de candidats souhaitez-vous ajouter : ")*1;
    if(howManyTimes!=NaN&&howManyTimes>0&&howManyTimes%1==0){
        for(let i=0;i<howManyTimes;i++){
        console.log("===============================")
        console.log("Entrez les informations du Le candidat "+(i+1)+" : ");
        candidats=ajouterCandidat();
    }
    return candidats
    }
    console.log("");
    console.log("Entrée invalide (le nombre est inférieur à 1 ou le type d’entrée est incorrect) !")
    return ajouterPlusieursCandidat()
}


function aficherListCandidats(tab=candidats){//3
    for(let i=0;i<tab.length;i++){
        for(let j=0;j<tab.length-1;j++){
            if(tab[j].electeurs.length<tab[j+1].electeurs.length){  
                [tab[j],tab[j+1]]=[tab[j+1],tab[j]];
            }
        }
    }
    let k=0
    while(true){
        if(!tab[k]||tab[k].electeurs.length==0){
            console.log("===============================")
            console.log("La liste est terminée :")
            console.log("");
            break
        }
        console.log("===============================")
        console.log("Classement : "+(k+1));
        console.log("CIN : "+tab[k].cin)
        console.log("nom : "+tab[k].nom)
        console.log("Nombre de votes : "+tab[k].electeurs.length);
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
                        console.log(" Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau")
                        return -1;
                    }
                }
            }
            let voted=prompt("entrer le cin du candidat vous voulez voter pour : ");
            for(let j=0;j<candidats.length;j++){
                if(candidats[j].cin==voted&&candidats[j].partiPolitique!="Independant"){
                    candidats[j].electeurs.push(cin);
                    console.log("")
                    console.log("Votre vote a été enregistré : ")
                    return candidats;
                }
            }
            console.log("");
            console.log("Le candidat recherché n’existe pas ou n’a pas de parti politique ! ")
            return -1
        }
    }
    console.log("")
    console.log("Vous ne figurez pas sur la liste des candidats. Inscrivez-vous d’abord avant de voter.")
    return -1;  
}

function modifierInfo(cin){//5
//cin has to alr exist
    for(let i=0;i<candidats.length;i++){
        if(cin==candidats[i].cin){
            console.log("")
            console.log("1. Modifier votre âge :")
            console.log("2. Modifier votre parti politique :")
            console.log("3. Modifier les deux :")
            console.log("")
            let x =prompt("")*1
            if(x==1){
                let age=prompt("Entrez le nouvel âge : ")*1;
                candidats[i].age=age;
                return candidats
            }else if(x==2){
                let party=prompt("Entrez le nouveau parti politique : ");
                candidats[i].partiPolitique=party;
                return candidats
            }else if(x==3){
                let age=prompt("Entrez le nouvel âge : ")*1;
                candidats[i].age=age;
                console.log("")
                let party=prompt("Entrez le nouveau parti politique : ");
                candidats[i].partiPolitique=party;
                return candidats
            }else{
                console.log("Entrée invalide !")
                return -1;
            }
        }
    }
    console.log("")
    console.log("Votre CIN est incorrect ou n’est pas inscrit !")
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
            console.log("Suppression effectuée avec succès !")
            return candidats;
        }
     }
     console.log("")
     console.log("Le CIN que vous avez saisi est incorrect ou n’existe pas !")
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
        console.log("Aucun résultat !")
        return;
    }
    return aficherListCandidats(tab);
}

function stats(){//8
    console.log("")
    console.log("Le nombre de candidats est : "+candidats.length);
    console.log("")
    let tot=0;
    for(let i=0;i<candidats.length;i++){
        tot=tot+candidats[i].electeurs.length
    }
    console.log("le nombre total de votes est : "+tot);
    console.log("")
    let tab=aficherListCandidats();
    for(let i=0;i<3&&i<tab.length;i++){
        console.log("======================")
        console.log("Le candidat "+(i+1)+" est : "+tab[i].nom)
        console.log("")
    }
    let party=[]
    for(let j=0;j<candidats.length;j++){
        let bool =false
        for(let k=0;k<party.length;k=k+2){
            if(party[k]==candidats[j].partiPolitique){
                party[k+1]++;
                bool=true;
            }
            
        }
        if(bool==false){
                    party.push(candidats[j].partiPolitique)
                    party.push(1);
        }
    }
    for(let m=0;m<party.length;m=m+2){
        console.log("=====================")
        console.log("Parti : "+party[m]);
        console.log("Avec "+party[m+1]+" membres ! ")
    }
}

while(true){
    console.log("=====================================")
    console.log("     Bonjour, comment puis-je vous aider ?")
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
            let cin=prompt("Entrez votre CIN : ")
            let x=voter(cin);
            if(x!=-1){
                candidats=x;
            }
            //console.log(candidats)
            break;
        }
        case 5:{
            let cin=prompt("Entrez votre CIN : ")
            let x=modifierInfo(cin);
            if(x!=-1){
                candidats=x
                //console.log(candidats);
            }
            break;
        }
        case 6:{
            let cin=prompt("Entrez votre CIN : ")
            let x=suprimer(cin);
            if(x!=-1){
                candidats=x
                //console.log(candidats);
            }
            break;
        }
        case 7:{
            let nom=prompt("Entrez le nom que vous recherchez : ");
            rehcercheParNom(nom);
            break;
        }
        case 8:{
            stats()
            break;
        }
        default :
        console.log("Entrée invalide, veuillez réessayer :")
        console.log("");
    }

}