"use strict" //lo andiamo ad utilizzare siccome aiuta con il codice, ci permette quindi di verificare errori in modo migliore. 
let i;
let A1 = [1,2,3,4,5,6,8,6,4,3,2];

for(i=0; i<11; i++){
    if(A1[i]>5){
        console.log(A1[i]);
    }else{
        console.log("NO");
    }
}