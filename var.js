    for(let i=0;i<tab.length;i++){
        for(let j=0;j<tab.length-1;j++){
            if(tab[j].electeurs.length<tab[j+1].electeurs.length){  
                [tab[j],tab[j+1]]=[tab[j+1],tab[j]];
            }
        }
    }
   