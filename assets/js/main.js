/*
CONSEGNA: Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Per sapere se un numero è divisibile per un altro utilizzo la % per estrarre il modulo e:
    if(x % 3 == 0 ) ...

• BONUS 1: 
    Crea un container nel DOM , aggiungendo  (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
• BONUS 2: 
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

for(let n=1; n <= 100; n++){
    // create element into DOM
    let n1 = document.createElement("span");

    if( n % 3 == 0 && n % 5 == 0){
        n1.className = "rectangle bg-danger"
        n1.innerHTML = "FizzBuzz";
    } else if(n % 3 == 0){
        n1.className = "rectangle bg-success"
        n1.innerHTML = "Fizz";
    } else if(n % 5 == 0){
        n1.className = "rectangle bg-warning"
        n1.innerHTML = "Buzz";
    } else{
        n1.className = "rectangle bg-primary"
        n1.innerHTML = `${n}`;
    }

    // append to html
    document.getElementById("rigaNumber").appendChild(n1);
}