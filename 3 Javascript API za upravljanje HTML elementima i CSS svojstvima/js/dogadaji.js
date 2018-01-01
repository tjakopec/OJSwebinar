//samo jednom prilikom učitanja skripte postavim referencu na element s id lista
var lista = document.getElementById("lista");
//na element s id pokreniDogadaj registriram slušanje događaja click. Kada se on dogodi izvršiti će se ono što je definirano u funkciji kao drugom parametru
document.getElementById("pokreniDogadaj").addEventListener("click", 
    // bezimena unutarnja funkcija kao parametar
    function(){
        var li = document.createElement("li");
        var naziv = document.createTextNode(document.getElementById("tekst").value);
        li.appendChild(naziv);
        lista.appendChild(li);
    }

);
