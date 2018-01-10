/*
* U ovoj datoteci je dan kratak pregled gradivnih elemenata
* Preporuča se primjena principa Promjeni pa vidi što će se dogoditi! 
* https://www.facebook.com/ilp2013/photos/a.572414929476429.1073741827.175820909135835/1621527641231814/?type=3&theater&ifg=1
*/

//tipovi podataka
var ime			= "Nataša"; 	//Niz znakova			[String]
var godine		= 24; 			//cijeli broj			[Number]
var zaposlen 	= true; 		//logička vrijednost	[Boolean]
var nettoPlaca 	= 7345.93; 		//decimalni broj		[Number]
var imena = ["Dora", "Lada", "Mara"]; // indeksni niz 		[Array]
var indeksniNiz = Array(); //indeksni niz [Array]
indeksniNiz.push("Javascript");
indeksniNiz.push("HTML");
indeksniNiz.push("CSS");

var asocijativniNiz = []; // [Array]
asocijativniNiz["ime"]="Tomislav";
asocijativniNiz["godine"]=36;

var kombinatorniNiz = Array(); // [Array]
kombinatorniNiz["ime"]="Tomislav";
kombinatorniNiz.push(36);

var objekt = {ime: "Tomislav", godine: 36}; // [Object]

var json = [{ime: "Dora", godine: 11 }, {ime: "Lada", godine: 2 }]; // [Array]

console.log(ime);
console.log(godine);
console.log(zaposlen);
console.log(nettoPlaca);
console.log(imena);
console.log(indeksniNiz);
console.log(asocijativniNiz);
console.log(kombinatorniNiz);
console.log(objekt);
console.log(json);
console.log("-----------------");

// svojstva i metode

var ime = "Mara";
//svojstvo
console.log("ime.length: " + ime.length);
//metoda
console.log("ime.charAt(0): " + ime.charAt(0));
console.log("ime.charCodeAt(0): " + ime.charCodeAt(0));
console.log("ime.toUpperCase(): " + ime.toUpperCase());
console.log("ime: " + ime);
console.log("-----------------");
var x=2.62366;



//operatori
//aritmetički operatori
var x=12;
var y=2;

console.log("x + y: " + x+y);
console.log("x - y: " + (x-y));
console.log("x * y: " + x*y);
console.log("x / y: " + x/y);
console.log("x % y: " + x%y);
x++;
console.log("x++: " + x);
y--;
console.log("x--: " + y);
console.log("-----------------");


//operatori dodjeljivanja

var x=2;

console.log("x = 2: " + x);
x+=3;
console.log("x+=2: " + x);
x-=3;
console.log("x-=2: " + x);
x*=3;
console.log("x*=3: " + x);
x/=3;
console.log("x/=3: " + x);
x%=2;
console.log("x%=3: " + x);
console.log("-----------------");


//operatori usporedbe i logički operatori

var x=2;

console.log("x==2: " + (x==2)); // po vrijednosti
console.log("x==\"2\": " + (x=="2")); // po vrijednosti - implicitna konverzija
console.log("x===\"2\": " + (x==="2")); // po tipu i vrijednosti
console.log("x!=2: " + (x!=2));
console.log("x>2: " + (x>2));
console.log("x<2: " + (x<2));
console.log("x>=2: " + (x>=2));
console.log("x<=2: " + (x<=2));
console.log("!x===\"2\": " + !(x==="2"));
console.log("x!==\"2\": " + (x!=="2"));
console.log("-----------------");



//operator "nadoljepljivanja"
console.log("Prvi dio " + " drugi dio");
console.log(3 + 4);
console.log("Prvi dio " + 4);
console.log(3 + " drugi dio");
console.log("-----------------");


//ostali operatori
//već viđen typeof
console.log(typeof x);
console.log("-----------------");

// UVJETNA GRANANJA

//if - jednostruko grananje - binarno (radi s tipom podatka boolean)
var x=12;
var y=2;

var rezultat;

if (x>y)
	console.log("x je veće od y za vrijednosti x=" + x + ", y="+y);
else
	console.log("x NIJE veće od y za vrijednosti x=" + x + ", y="+y);

console.log("x " + ((x>y) ? "je" : "NIJE") + " veće od y za vrijednosti x=" + x + ", y="+y);

//loše
if (x>y)
	console.log("Kada if nema {} zagrade odnosi se samo na prvi liniju nakon njega");
	x=4;

if(x>y & x>10){
	rezultat=x+y;
}else{
	rezultat=x-y;
}

console.log("rezultat: " + rezultat);

//inline if
rezultat = (x>9) ? x+y : x-y;

console.log("rezultat inline if: " + rezultat);


console.log("--------------");



//switch - višestruko grananje



var ocjena=2;

if (ocjena==1){
	console.log("Nedovoljan");
} else if (ocjena==2){
	console.log("Dovoljan");
}
// itd...


switch(ocjena){
	case 1:
		console.log("Nedovoljan");
		break;
	case 2:
		console.log("Dovoljan");
		break;
	case 3:
		console.log("Dobar");
		break;
	case 4:
		console.log("Vrlo dobar");
		break;
	case 5:
		console.log("Odličan");
		break;
	default:
		console.log("Nije ocjena");
}



// NIZOVI

var ime ="Tomislav";

var imena = ["Dora", "Lada", "Mara"];

console.log("imena: " + imena);

console.log("vrijednost na 1. mjestu: " + imena[0]); //index počinje brojem 0 i završava na broj emelanta -1
console.log("vrijednost na zadnjem mjestu: " + imena[imena.length-1]);


//prazan niz
var mjeseci=[];
//https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
mjeseci.push(prompt("broj (skripta:205)"));
mjeseci.push(2);
mjeseci.push(3);
console.log("vrijednost na zadnjem mjestu: " + mjeseci[mjeseci.length-1]);

mjeseci.pop(); //miče zadnji element iz niza
console.log("vrijednost na zadnjem mjestu: " + mjeseci[mjeseci.length-1]);


mjeseci.push(3);

mjeseci[1]=null; 

console.log(mjeseci);

mjeseci[1]=2;

console.log("mjeseci: " + mjeseci);

mjeseci.splice(1,1);

console.log("mjeseci: " + mjeseci);

mjeseci.push("Prosinac");

console.log("mjeseci: " + mjeseci);

//Višedimenzionalni nizovi: niz u nizu
var niz=[]; //prva dimenzija
niz[0]=[];//druga dimenzija
niz[1]=[];

niz[0][0]=0;
niz[0][1]=0;
niz[1][0]=0;
niz[1][1]=1;

console.log(niz);



// PETLJE


//for petlja
// for( početna vrijednost; uvjet izlaska iz petlje; povečanje brojača )

var suma=0;
for (var i=0; i<=100; i++){
	suma+=i;
}
console.log(suma);

//nastavak i prekid petlje

for (var i=0; i<10; i++){
	if(i==3){
		continue;
	}
	if(i>8){
		break;
	}
	console.log("Vrijednost varijable i: " + i);
}

console.log("-----------------------");

//petlja u petlji

var x=[];
var y=[];
for (var i=1; i<=10; i++){
	y=[];
	for (var j=1; j<=10; j++){
		y.push(i*j);
	}
	x.push(y);
}
for (var i=0; i<x.length; i++){
	console.log(x[i]);
}

document.write("<table>");
for (var i=0; i<x.length; i++){
	document.write("<tr>");
	for (var j=0; j<x[i].length; j++){
			document.write("<td>" + x[i][j] + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>*skripta.js:271-294");


console.log("-----------------------");

var i=0;
while(i<10){
	console.log("Vrijednost varijable i: " + i++);
}

console.log("-----------------------");


var i=0;
do{
	console.log("Vrijednost varijable i: " + i++);
}while(i<10);

console.log("-----------------------");


var imena=["Tomislav","Nataša","Dora","Lada","Mara"];
for (var i=0; i<imena.length; i++){
	console.log("Vrijednost elementa niza na mjestu " + i + ": " + imena[i]);
}

console.log("-----------------------");

//beskonačne petlja

var t=4;

for(;;){
	if(t==4){
		break;
	}
}


while(true){
	if(t==4){
		break;
	}
}



// OBJEKT
// implementacija koristeći strukturu niza
var osoba=[];

osoba.push("ime");
osoba.push(77);

osoba["ime"]="Mara";
osoba["godine"]=22;
console.log(osoba);
console.log("osoba[\"ime\"]: " + osoba["ime"]);

for(var o in osoba){
	console.log(o);
}

console.log("-------------");

// implementacija koristeći klasu Object
var osoba = new Object();
osoba.ime="Lada";
osoba.godine=22;

console.log("osoba.ime: " + osoba.ime);
console.log(osoba);

console.log("-------------");

// implementacija koristeći JSON
var osoba = {ime: "Pero", godine: 22};


console.log("osoba.ime: " + osoba.ime);
console.log(osoba);


var studenti= [
{ime: "Mara", prezime: "Herc", godine: 22},
{ime: "Lada", prezime: "Kulik", godine: 19},
{ime: "Dora", prezime: "Redit", godine: 28},
];

var s;
for(var i=0; i < studenti.length; i++){
	s=studenti[i];
	console.log(s.ime);
}


// FUNKCIJE


//ne vraća vrijednost
function odradiPosao(){ //ne prima parametre
	alert("Hello  (skripta:396)");
	console.log("Odradio sam posao");
}


//vraća vrijednost
function slucajniBroj(x,y){ //prima 2 parametra
	return Math.random()*x+y;	
}


odradiPosao();
console.log("slučajni broj: " + slucajniBroj(3,7));



console.log("----------------------");


//objekt i fukncija
var o = {ime: "Tomislav",prezime: "Jakopec", grad: "Osijek"};
console.log("o: " + o);
console.log("o.ime: " + o.ime);
console.log("opis: " + o.ime + " " + o.prezime + " " + "(" + o.grad +")");

console.log("----------------------");

function Osoba (ime,prezime) {
    this.ime = ime;
    this.prezime=prezime;
    this.grad = "Osijek";
    this.opis = function(){
    	return this.ime + " " + this.prezime + " " + "(" + this.grad +")";
    };
}


var o = new Osoba("Tomislav", "Jakopec");
console.log("o: " + o);
console.log("o.ime: " + o.ime);
console.log("o.opis: " + o.opis());

console.log("----------------------");

var o = {
	ime: "Tomislav",
	prezime: "Jakopec", 
	grad: "Osijek",
	//ne radi
	opis: function(){
    	return this.ime + " " + this.prezime + " " + "(" + this.grad +")";
    }
};

console.log(o.opis);
