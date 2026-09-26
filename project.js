var prompt = require('prompt-sync')();

var candidats = [{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Independant",age: 40,electeurs: []}];
var alpha=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num=[1,2,3,4,5,6,7,8,9,0]
function ajouterCandidat(){//1
    let candidatToAdd={}
    candidatToAdd.cin=prompt("Entrez le CIN du candidat : ");
    let isFirstLetterInvalid =true;
    let isSecondLetterInvalid=true;
    let digitExist=true;
    
    if(candidatToAdd.cin.length==8){
       for(let j=0;j<alpha.length;j++){
        if(candidatToAdd.cin[0]==alpha[j]){
            isFirstLetterInvalid= false;
        }
        if(candidatToAdd.cin[1]==alpha[j]){
            isSecondLetterInvalid= false;
        }
       }
       for(let k=2;k<8;k++){
            digitExist=true;
            for(let m=0;m<10;m++){
               if(candidatToAdd.cin[k]==num[m]){
                digitExist=false;
               }
            }
            if(digitExist){
                break;
            }
       }
    }
        if(candidatToAdd.cin.length!=8||isFirstLetterInvalid||isSecondLetterInvalid||digitExist){
        console.log("CIN incorrect !")
        return ajouterCandidat()
    }
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin==candidatToAdd.cin){
            console.log("")
            console.log("Ce candidat est déjà inscrit.");
            return ajouterCandidat();
        }
    }
    let nom=prompt("Entrez le nom du candidat : ");
    if(nom!=""){
        candidatToAdd.nom=nom;
    }
    else{
        console.log("Le nom est vide !");
        return ajouterCandidat()
    }
    let prenom=prompt("Entrez le prénom du candidat : ");
    if(prenom!=""){
        candidatToAdd.prenom=prenom;
    }
    else{
        console.log("preLe nom est vide !");
        return ajouterCandidat()
    }
    let parti=prompt("Entrez le parti politique (indépendant ou autre) : ");
    if(parti!=""){
        candidatToAdd.partiPolitique=parti;
    }
    else{
        console.log("Le parti politique est vide !");
        return ajouterCandidat()
    }
    let age=prompt("Entrez l'âge du candidat : ")*1;
    if(age>=18&&age<150&&!isNaN(age)){
        candidatToAdd.age=age;
    }
    else{
        console.log(" l'âge doit être compris entre 18 et 150 ans!");
        return ajouterCandidat()
    }
    candidatToAdd.electeurs=[]
    candidats[candidats.length]=candidatToAdd
    console.log("")
    console.log("Le candidat a été inscrit avec succès.");
    for(let i=0;i<candidats.length;i++){
        for(let j=0;j<candidats.length-1;j++){
            if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){  
                [candidats[j],candidats[j+1]]=[candidats[j+1],candidats[j]];
            }
        }
    }
    return ;
}

function ajouterPlusieursCandidat(){//2
    let howManyTimes=prompt("Combien de candidats souhaitez-vous ajouter : ")*1;
    if(!isNaN(howManyTimes)&&isFinite(howManyTimes)&&howManyTimes>0&&howManyTimes%1==0){
        for(let i=0;i<howManyTimes;i++){
        console.log("===============================")
        console.log("Entrez les informations du Le candidat "+(i+1)+" : ");
        ajouterCandidat();
    }
    return candidats
    }
    console.log("");
    console.log("Entrée invalide (le nombre est inférieur à 1 ou le type d'entrée est incorrect) !")
    return ajouterPlusieursCandidat()
}


function aficherListCandidats(){//3
    for(let i=0;i<candidats.length;i++){
        for(let j=0;j<candidats.length-1;j++){
            if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){  
                [candidats[j],candidats[j+1]]=[candidats[j+1],candidats[j]];
            }
        }
    }
    let index=0
    while(true){
        if(!candidats[index]){
            console.log("===============================")
            console.log("La liste est terminée :")
            console.log("");
            break
        }
        console.log("===============================")
        console.log("Classement : "+(index+1));
        console.log("CIN : "+candidats[index].cin)
        console.log("nom : "+candidats[index].nom)
        console.log("Nombre de votes : "+candidats[index].electeurs.length);
        index++;
    }
}

function voter(){//4
    let cin=prompt("Entrez le CIN du candidat : ");
    let isFirstLetterInvalid =true;
    let isSecondLetterInvalid=true;
    let digitExist=true;
    
    if(cin.length==8){
       for(let i=0;i<alpha.length;i++){
        if(cin[0]==alpha[i]){
            isFirstLetterInvalid= false;
        }
        if(cin[1]==alpha[i]){
            isSecondLetterInvalid= false;
        }
       }
       for(let j=2;j<8;j++){
            digitExist=true;
            for(let k=0;k<10;k++){
               if(cin[j]==num[k]){
                digitExist=false;
               }
            }
            if(digitExist){
                break;
            }
       }
    }
        if(cin.length!=8||isFirstLetterInvalid||isSecondLetterInvalid||digitExist){
        console.log("CIN incorrect !")
        return;
    }
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin==cin){
            for(let j=0;j<candidats.length;j++){
                for(let k=0;k<candidats[j].electeurs.length;k++){
                    if(candidats[j].electeurs[k]==cin){
                        console.log("");
                        console.log(" Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau")
                        return ;
                    }
                }
            }
            let votedFor=prompt("entrer le cin du candidat vous voulez voter pour : ");
            let isVotedFirstLetterInvalid =true;
            let isVotedSecondLetterInvalid=true;
            let votedDigitExist=true;
            if(votedFor.length==8){
            for(let j=0;j<alpha.length;j++){
                if(votedFor[0]==alpha[j]){
                    isVotedFirstLetterInvalid= false;
                }
                if(votedFor[1]==alpha[j]){
                    isVotedSecondLetterInvalid= false;
                }
            }
            for(let k=2;k<8;k++){
                    votedDigitExist=true;
                    for(let m=0;m<10;m++){
                    if(votedFor[k]==num[m]){
                        votedDigitExist=false;
                    }
                    }
                    if(votedDigitExist){
                        break;
                    }
            }
            }
                        if(votedFor.length!=8||isVotedFirstLetterInvalid||isVotedSecondLetterInvalid||votedDigitExist){
                console.log("CIN incorrect !")
                return;
            }
            for(let j=0;j<candidats.length;j++){
                if(candidats[j].cin==votedFor&&candidats[j].partiPolitique!="Independant"){
                    candidats[j].electeurs[candidats[j].electeurs.length]=cin;
                    console.log("")
                    console.log("Votre vote a été enregistré : ")
                    for(let i=0;i<candidats.length;i++){
                        for(let j=0;j<candidats.length-1;j++){
                            if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){  
                                [candidats[j],candidats[j+1]]=[candidats[j+1],candidats[j]];
                            }
                        }
                    }
                    return ;
                }
            }
            console.log("");
            console.log("Le candidat recherché n'existe pas ou n'a pas de parti politique ! ")
            return;
        }
    }
    console.log("")
    console.log("Vous ne figurez pas sur la liste des candidats. Inscrivez-vous d'abord avant de voter.")
    return ;  
}

function modifierInfo(){//5
    let cin=prompt("Entrez le CIN du candidat : ")
    let isFirstLetterInvalid =true;
    let isSecondLetterInvalid=true;
    let digitExist=true;
    
    if(cin.length==8){
       for(let j=0;j<alpha.length;j++){
        if(cin[0]==alpha[j]){
            isFirstLetterInvalid= false;
        }
        if(cin[1]==alpha[j]){
            isSecondLetterInvalid= false;
        }
        for(let k=2;k<8;k++){
            digitExist=true;
            for(let m=0;m<10;m++){
               if(cin[k]==num[m]){
                digitExist=false;
               }
            }
            if(digitExist){
                break;
            }
            
        }
    } 
    }
    
    if(cin.length!=8||isFirstLetterInvalid||isSecondLetterInvalid||digitExist){
        console.log("CIN incorrect !")
        return ;
    }

    for(let i=0;i<candidats.length;i++){
        if(cin==candidats[i].cin){
            console.log("")
            console.log("1. Modifier votre âge :")
            console.log("2. Modifier votre parti politique :")
            console.log("3. Modifier les deux :")
            console.log("")
            let choix =prompt("")*1
            if(choix==1){
                let age=prompt("Entrez le nouvel âge : ")*1;
                if(isNaN(age)||age<18||age>150){
                    console.log("age incorrect !");
                    return;
                }
                candidats[i].age=age;
                return;
            }else if(choix==2){
                let partiPolitique=prompt("Entrez le nouveau parti politique : ");
                if(partiPolitique==""){
                    console.log("parti politique est vide  !");
                    return ;
                }
                candidats[i].partiPolitique=partiPolitique;
                return;
            }else if(choix==3){
                let age=prompt("Entrez le nouvel âge : ")*1;
                if(isNaN(age)||age<18||age>150){
                    console.log("age incorrect !");
                    return ;
                }
                candidats[i].age=age;
                console.log("")
                 let partiPolitique=prompt("Entrez le nouveau parti politique : ");
                if(partiPolitique==""){
                    console.log("parti politique est vide  !");
                    return;
                }
                candidats[i].partiPolitique=partiPolitique;
                return;
            }else{
                console.log("Entrée invalide !")
                return ;
            }
        }
    }
    console.log("")
    console.log("Votre CIN n'est pas inscrit !")
    return ;
}

function suprimer(){//6
    let cin=prompt("Entrez le CIN du candidat : ")
    let isFirstLetterInvalid =true;
    let isSecondLetterInvalid=true;
    let digitExist=true;
    
    if(cin.length==8){
       for(let i=0;i<alpha.length;i++){
        if(cin[0]==alpha[i]){
            isFirstLetterInvalid= false;
        }
        if(cin[1]==alpha[i]){
            isSecondLetterInvalid= false;
        }
        for(let j=2;j<8;j++){
            digitExist=true;
            for(let k=0;k<10;k++){
               if(cin[j]==num[k]){
                digitExist=false;
               }
            }
            if(digitExist){
                break;
            }
            
        }
    } 
    }
    
    if(cin.length!=8||isFirstLetterInvalid||isSecondLetterInvalid||digitExist){
        console.log("CIN incorrect !")
        return ;
    }
     for(let i=0;i<candidats.length;i++){
        if(cin==candidats[i].cin){
            for(let j=0;j<candidats.length;j++){
                for(let k=0;k<candidats[j].electeurs.length;k++){
                    if(cin==candidats[j].electeurs[k]){
                        let newElecteurs=[];
                        for(let m=0;m<candidats[j].electeurs.length;m++){
                            if(candidats[j].electeurs[m]==cin){
                                continue;
                            }
                            newElecteurs.push(candidats[j].electeurs[m])
                        }
                        candidats[j].electeurs=newElecteurs;
                    }
                }
            }
            var updatedCandidatList=[]
            for(let i=0;i<candidats.length;i++){
                if(candidats[i].cin==cin){
                    continue;
                }
                updatedCandidatList[updatedCandidatList.length]=candidats[i];
            }
            candidats=updatedCandidatList;
            console.log("")
            console.log("Suppression effectuée avec succès !")
            for(let i=0;i<candidats.length;i++){
                for(let j=0;j<candidats.length-1;j++){
                    if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){  
                        [candidats[j],candidats[j+1]]=[candidats[j+1],candidats[j]];
                    }
                }
            }
            return ;        }
     }
     console.log("")
     console.log("Le CIN que vous avez saisi est incorrect ou n'existe pas !")
     return ;
}

function rehcercheParNom(){//7
    let nom=prompt("entrer le nom: ")
     if(nom==""){
        console.log("Le nom est vide !");
        return;
    }
    if(candidats.length==0){
        console.log("")
        console.log("Aucun résultat !")
        return;
    }
    
    for(let index=0;index<candidats.length;index++){
        if(candidats[index].nom!=nom){
            continue
        }
        
        console.log("===============================")
        console.log("CIN : "+candidats[index].cin)
        console.log("parti politique : "+candidats[index].partiPolitique)
        console.log("nom : "+candidats[index].nom)
        if(candidats[index].electeurs.length!=0){
            console.log("Nombre de votes : "+candidats[index].electeurs.length); 
        }     
    }
            console.log("===============================")
            console.log("La liste est terminée :")
            console.log("");
}

function stats(){//8
    console.log("")
    console.log("Le nombre de candidats est : "+candidats.length);
    console.log("")
    let totalVotes=0;
    for(let i=0;i<candidats.length;i++){
        totalVotes=totalVotes+candidats[i].electeurs.length
    }
    console.log("le nombre total de votes est : "+totalVotes);
    console.log("")
    
    for(let i=0;i<3&&i<candidats.length;i++){
        console.log("======================")
        console.log("Le candidat "+(i+1)+" est : "+candidats[i].nom)
        console.log("")
    }
            console.log("===============================")
            console.log("");

    let partiPolitique=[]
    for(let j=0;j<candidats.length;j++){
        let bool =false
        for(let k=0;k<partiPolitique.length;k=k+2){
            if(partiPolitique[k]==candidats[j].partiPolitique){
                partiPolitique[k+1]++;
                bool=true;
            }
            
        }
        if(bool==false){
                    partiPolitique.push(candidats[j].partiPolitique)
                    partiPolitique.push(1);
        }
    }
    for(let m=0;m<partiPolitique.length;m=m+2){
        console.log("=====================")
        console.log("Parti : "+partiPolitique[m]);
        console.log("Avec "+partiPolitique[m+1]+" membres ! ")
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
            ajouterCandidat();
        }
            break;
        case 2:{
            ajouterPlusieursCandidat();
        }
            break;
        case 3:{
            aficherListCandidats();
            break;
        }
        case 4:{
            voter();
            break;
        }
        case 5:{
            modifierInfo();
            break;
        }
        case 6:{
            suprimer();
            break;
        }
        case 7:{
            rehcercheParNom();
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
