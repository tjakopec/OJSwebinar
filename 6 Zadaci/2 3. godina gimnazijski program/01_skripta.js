var podaci=[];

function dodajPodatke(){

    var objekt = {
        "ime": document.getElementById("ime").value, 
        "godine": document.getElementById("godine").value, 
        "omiljenaBoja": document.getElementById("omiljenaBoja").value};

    podaci.push(objekt);
    dodajStavku(objekt);

    return false;
}

function filtriraj(){
    var ul = document.getElementById("podaci");
    ul.innerHTML="";
    var uvjet = document.getElementById("uvjet").value;
    uvjet = uvjet.trim().toLowerCase();
    var o;
    for(var i=0;i<podaci.length;i++){
        o=podaci[i];
        if (o.ime.trim().toLowerCase().indexOf(uvjet)>=0){
            dodajStavku(o);
        }
    }
}

function dodajStavku(objekt){
    var li = document.createElement("li");
	var naziv = document.createTextNode(objekt.ime + " (" + objekt.godine + ")");
	li.appendChild(naziv);
	li.style.color=objekt.omiljenaBoja;
    document.getElementById("podaci").appendChild(li);
}

