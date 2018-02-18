
// https://developer.mozilla.org/hr/docs/Web/API

//kreiram HTML element ul
var lista = document.createElement("ul");
//definira id elemenat kako bi kasnije koristeći događaj mogao znati na koju listu dodavati
lista.setAttribute("id","lista");

//kreiram stavku liste li
var li = document.createElement("li");

//kreiram text čvor koji će se nalaziti u stavci
var naziv = document.createTextNode("Tekst stavke");

//dodjeljujem tekst stavci
li.appendChild(naziv);

//mijenjam svojstvo stavke
li.style.color="#f00";

//dodjeljujem stavku listi
lista.appendChild(li);

//listu postavljam na stranicu dodjeljivanjem na body element
//getElementsByTagName vraća niz i onda uzimam prvi element niza [0] te na njega dodajem listu
document.getElementsByTagName("body")[0].appendChild(lista);


//dodajem još 7 elemenata
for(var i=0;i<7;i++){
    li = document.createElement("li");
    //svakom drugom dodjeljujem CSS klasu parni čija su svojstva definirana u css/stil.css
    if(i%2===0){
        li.classList.add("parni");
    }
    li.appendChild(document.createTextNode("Tekst stavke iz petlje: " + i));
    lista.appendChild(li);
}


