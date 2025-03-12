
// let v = Number(prompt("Inserisci il voto"));

// if(v < 18){
//     console.log(`insufficiente`);
    
// }else if(v >= 18 && v < 21){
//     console.log(`sufficiente`);
    
// }else if(v >= 21 && v < 24){
//     console.log(`buono`)

// }else if(v >= 24 && v < 27){
//     console.log(`distinto`);
    
// }else if(v >= 27 && v <= 29){
//     console.log(`ottimo`);
    
// }else if( v == 30){
//     console.log(`eccellente`);
    
// }else{
//     console.log(`il voto inserito non è valido`);
    
// }

// console.log("Primo esercizio eseguito con con if/else");


// ---------------------------------------------------------------

// let v = Number(prompt("Inserisci il voto"));

// switch(true){

//     case v < 18:
//         console.log(`insufficiente`);
//             break;
    
//     case v >= 18 && v < 21:
//         console.log(`buono`);
//             break;
    
//     case v >= 24 && v < 27:
//         console.log(`distinto`);
//             break;
    
//     case v >= 27 && v <= 29:
//         console.log(`ottimo`);
//             break;
    
//     case  v == 30:
//         console.log(`eccellente`);
//             break;

//     default: console.log(`il voto inserito non è valido`);
            
//         }

// --------------------------fine primo esercizio -------------------------------------

// --------------------------inizio secondo esercizio ---------------------------------

// let temperatura = Number(prompt(`Inserisci la temperatura`));

// if(temperatura < 20 && temperatura >= 0){
//     console.log("non ci sono più le mezze stagioni");
    
// }else if(temperatura >= 30 && temperatura<= 50 ){
//     console.log("lu mare, lu sole, lu ientu");
    
// }else if(temperatura < 30 && temperatura >= 20){
//     console.log("mi dia una peroni sudata");
    
// }else if(temperatura < 0 && temperatura >= -10){
//     console.log("non è tanto il freddo quanto l'umidità");
    
// }else if(temperatura < -10 && temperatura >= -30){
//     console.log("copriti...ancora ti raffreddi");
    
// }else{
//     console.log("Ma che temperatura hai messo?");
    
// }



// let temperatura = Number(prompt(`Inserisci la temperatura`));

// switch(true){

//         case temperatura < 20 && temperatura >= 0:
//            console.log("non ci sono più le mezze stagioni");
//             break;
        
//         case temperatura >= 30 && temperatura<= 50:
//             console.log("lu mare, lu sole, lu ientu");
//                 break;

//         case temperatura < 30 && temperatura >= 20:
//             console.log("mi dia una peroni sudata");
//                 break;

//         case temperatura < 0 && temperatura >= -10:
//             console.log("non è tanto il freddo quanto l'umidità");
//                 break;

//         case temperatura < -10 && temperatura >= -30:
//             console.log("copriti...ancora ti raffreddi");
//                 break;

//         default:console.log("Ma che temperatura hai messo?");            
                
// }

// // --------------------------fine secondo esercizio ---------------------------------

// // --------------------------inizio terzo esercizio ---------------------------------


// let num = 2;
// let counter = 1;

// for(let i = 1; i <= 10; i++){

//     let risultato = num * counter;
//     console.log(`${num} per ${counter} è uguale a ${risultato}`);
//     counter++;
// }
// // --------------------------fine terzo esercizio ---------------------------------

// // --------------------------inizio quarto esercizio ---------------------------------c



// let counterDispari = 0;
// let counterIndice  = 0;

// for(let i = 1; i <= 20; i++){


//     if(i % 2 == 0){
//         console.log(i);
        
//     }else{
//         counterDispari = counterDispari + i;
//         counterIndice++;
//     }

// }

// let mediaDispari = counterDispari / counterIndice;
// console.log(`La media dei numeri dispari è uguale a ${mediaDispari}`);

// // --------------------------fine quarto esercizio ---------------------------------

// // --------------------------inizio quinto esercizio ---------------------------------


// let scelta = Number(prompt(`Scegli la tua bevanda, digita il numero corrispondente: \n 1 - Acqua \n 2- Coca Cola \n 3- Birra`));

// while(scelta != 1 && scelta != 2 && scelta != 3 ){
//     alert("Questa scelta non è valida selziona una corretta")
//     scelta = Number(prompt(`Scegli la tua bevanda, digita il numero corrispondente: \n 1 - Acqua \n 2- Coca Cola \n 3- Birra`));
// }

// if(scelta == 1){
//     console.log(`E' stata selezionata l'acqua`);

//  }else if(scelta == 2){
//     console.log(`E' stata selezionata Coca Cola`);
    
//  }else if(scelta == 3){
//     console.log(`E' stata selezionata Birra`);
    
//  }else{
//     console.log(`La tua scelta non rientra fra quelle disponibili`);
    
//  }


//  ---------prima soluzione------------
//  ---------soluzione con extra----------

let scelta = (prompt(`Scegli la tua bevanda: \n 1 - acqua \n 2- coca cola \n 3- birra`));

while(scelta != "1" && scelta.toLowerCase() != "acqua" && scelta != "2" && scelta.toLowerCase() != "coca cola" && scelta != "3" && scelta.toLowerCase() != "birra" ){
    alert("Questa scelta non è valida selziona una corretta")
    scelta = prompt(`Scegli la tua bevanda, : \n 1 - acqua \n 2- coca cola \n 3- birra`);
}

if(scelta == "1" || scelta.toLowerCase() == "acqua"){
    console.log(`E' stata selezionata l'acqua`);

 }else if(scelta == "2" || scelta.toLowerCase() == "coca cola"){
    console.log(`E' stata selezionata Coca Cola`);
    
 }else if(scelta == "3" || scelta.toLowerCase() == "birra"){
    console.log(`E' stata selezionata Birra`);
    
 }else{
    console.log(`La tua scelta non rientra fra quelle disponibili`);
    
 }


// andrebbe ottimizzato per maius e minuscole