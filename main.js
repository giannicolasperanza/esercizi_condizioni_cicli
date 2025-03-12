
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

let v = Number(prompt("Inserisci il voto"));

switch(true){

    case v < 18:
        console.log(`insufficiente`);
            break;
    
    case v >= 18 && v < 21:
        console.log(`buono`);
            break;
    
    case v >= 24 && v < 27:
        console.log(`distinto`);
            break;
    
    case v >= 27 && v <= 29:
        console.log(`ottimo`);
            break;
    
    case  v == 30:
        console.log(`eccellente`);
            break;

    default: console.log(`il voto inserito non è valido`);
            
        }