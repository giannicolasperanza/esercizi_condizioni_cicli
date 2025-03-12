
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



let temperatura = Number(prompt(`Inserisci la temperatura`));

switch(true){

        case temperatura < 20 && temperatura >= 0:
           console.log("non ci sono più le mezze stagioni");
            break;
        
        case temperatura >= 30 && temperatura<= 50:
            console.log("lu mare, lu sole, lu ientu");
                break;

        case temperatura < 30 && temperatura >= 20:
            console.log("mi dia una peroni sudata");
                break;

        case temperatura < 0 && temperatura >= -10:
            console.log("non è tanto il freddo quanto l'umidità");
                break;

        case temperatura < -10 && temperatura >= -30:
            console.log("copriti...ancora ti raffreddi");
                break;

        default:console.log("Ma che temperatura hai messo?");            
                
}

// --------------------------fine secondo esercizio ---------------------------------
