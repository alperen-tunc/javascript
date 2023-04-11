let text = "End of JavaScript";

var bool = (42 >= 1232) ? -1 : 42;

if (bool !== -1)
{
    document.writeln("<\p>yuhu");
}
else
{
    document.writeln("<\p>oh no klappt das nicht!");
}

switch (new Date().getDay())
{
    case 0:
        document.writeln("<\p>Heute ist Sonntag.");
        break;
    case 1:
        document.write("<\p>Heute ist Montag");
        break;
    case 2:
        document.write("Heute ist Dinstag");
        break;
    case 3:
        document.write("Heute ist Mitwoch");
        break;
    case 4:
        document.write("Heute ist Donnerstag");
        break;
    case 5:
        document.write("Heute ist Freitag");
        break;
    case 6:
        document.write("Heute ist Samstag");
        break;
    default:
        document.write("nichts übereinstimmen!");
        break;
}

var users = ["Darth maul", "Darth vader", "Alperen Tunc", "Darth Sidius"];
document.writeln("<\p>" + users.join(", ") + "<\p>");


//users.forEach(window.alert);
users.pop(); // Entfernt eine item vom Ende
users.push("Darth Revan"); // fügt neue item am Ende hinzu
users.shift(); // entfernt eine Item vom Vorne
users.unshift("Seyda Hazar"); // fügt eine item am Vorne hinzu.

users.sort(); // Sortiert Alphabetisch
document.writeln(users.join(", ") + "<\p>");

users.reverse(); // Sortiert umgekehrt.
document.writeln(users.join(", ") + "<\p>");

for (i in users)
{
    document.writeln(users[i]);
}

document.writeln("<\p><h2>Mathe Sachen..</h2><\p>");
// Mathe Sachen:

//window.alert(Math.round(Math.random()*10));

var x = Math.round(Math.random()*100+100);
var y = Math.round(Math.random()*100+100);

document.writeln("<\p>Max Zahl von x und y = " + Math.max(x,y));

document.writeln("<\p>Min Zahl von x und y = " + Math.min(x,y));

document.writeln("<\p>PI: " + Math.PI);

document.writeln("<\p>Potenzial: " + Math.pow(3,3));

// Funktionen: 
document.writeln("<\p><h2>Funktionen</h2><\p>")

function myFunction()
{
    document.writeln("<\p>Meine Funktion, die ich gerade geschrieben habe.")
}
myFunction();

function myFunction1(a,b)
{
    return a * b;
}

var a = myFunction1(2, 3);
document.writeln("<\p>myFunction wird hier aufgerufen: " + a);

function fak(n)
{
    if(n <= 2)
    {
        return n;
    }
    return n * fak(n-1);
}
function outfak(n)
{
    window.alert("fakultät von "+  n +"= " + fak(n));
}
var n = 4
document.writeln("<\p> fakultät von "+  n +"= " + fak(n));

//Globalle Variable
function myfunc1()
{
    w = 3; // Am Anfang soll keine 'var' stehen....
}
myfunc1();

//DOM document Objekt Model

function dynamischFuncForHead()
{
    document.getElementById("headline").innerHTML = "Dynmaisch";
}

function dynamischeFuncForParagraph()
{
    var x = document.getElementsByTagName("p"); // ByTagName liefert immer Array, Aber die Andere nicht.
    window.alert(x[1].innerHTML);
}

function dynamischeFuncForParagraph2()
{
    document.getElementById("Paragraph2").id = "para";

    document.getElementById("para").style.color = "red";

    var x = document.getElementById("para");
    var add = 0;
    var minus = 0;

    var id = setInterval(function () {
        if(add > 200)
        {
            clearInterval(id);
        }
        else
        {
            x.style.marginLeft = add + 'px';
            x.style.marginRight = add + 'px';
            x.style.marginTop = add + 'px';
            add++;
        }

    }, 5);
}

function event1(element)
{
    element.innerHTML = "was ich hier schreibe, habe in JavaScript eingegeben....";
    document.getElementById("Paragraph3").addEventListener("mouseover", dynamischFuncForHead);
}


function event2()
{
    var bBody = document.getElementById("Paragraph4")
    window.alert(bBody.parentNode);
}

function event3()
{
    var event3 = document.getElementById("div2");
    var paragpaph = document.createElement("p");
    paragpaph.innerHTML = "JavaScript ist echt easy";
    event3.appendChild(paragpaph);
}

function event4()
{
    //window.alert(window.location.protocol);
    window.open("https://www.google.com", '_blank');
}

function event5()
{
    window.history.forward();
}

function event6()
{
    var input = window.prompt("Geben Sie hier was ein", "default");
    if(input == "google")
    {
        window.open("https://www.google.com", '_blank');
    }
}

function event7()
{
    document.cookie = "isread=1; 10 Apr 2023 12:00:00 UTC" ;
    var forCookies = document.cookie;
    window.alert(forCookies);
}

function Objekt()
{
    var pinguen =
    {
        name: "Franz",
        alter: 40,
        schwimmgeschwindigkeit: 4
    };

    window.alert(pinguen.name);
}

function Objekt2()
{
    class Pinguin2 {
        constructor(name, alter, geschwindigkeit) {
            this.name = name;
            this.alter = alter;
            this.geschwindigkeit = geschwindigkeit;
        }
    }

    /*function Pinguin2(name, alter, geschwindigkeit) 
    //{
            this.name = name;
            this.alter = alter;
            this.geschwindigkeit = geschwindigkeit;
    }*/

    var ali = new Pinguin2("ali", 42, 5);
    var veli = new Pinguin2("Veli", 50, 6);

    for(x in ali)
    {
        window.alert(ali[x]);
    }

}

function Objekt3()
{
    class Pinguin3 
    {
        constructor(name, alter, geschwindigkeit) 
        {
            this.name = name;
            this.alter = alter;
            this.geschwindigkeit = geschwindigkeit;
            this.gehschneller = function(schneller)
            {
                this.geschwindigkeit = this.geschwindigkeit + schneller;
            }
        }
    }

    var sait = new Pinguin3("Sait", 50, 7);

    Pinguin3.prototype.slowbro = function (){
        this.geschwindigkeit = this.geschwindigkeit - 1;
    };

    sait.gehschneller(3);
    sait.slowbro();
    window.alert(sait.geschwindigkeit);
}

function input()
{
// Gets user input
    var name = prompt("What is your name?");
    var num = prompt("What is your favorite number? ");

    // Uses user input to print out information

    // Prints out the variable type
    /*
    document.writeln("Name is a " + typeof name);
    document.writeln("Num is a " + typeof num);
    */

    var event3 = document.getElementById("div3");
    var paragpaph = document.createElement("p");

    paragpaph.innerHTML = "Hello " + name + "!" + "<\p>" + num + "?! That's my favorite number too!";


    event3.appendChild(paragpaph);
}

// Daten auszugeben und ändern
function fDate()
{
    var vDate = new Date().getTime();
    var nDate = new Date(vDate + 7*24*60*60*1000);

    var aktuellesDatum = new Date().toUTCString();
    window.alert(aktuellesDatum);
}

function* generator()
{
    //yield* ['Hello', 'World']; // Beide schreibeweise sind gleiche.
    yield 'Hello';
    yield 'World';
}

function outGenerator()
{
    /*
    var gen = generator();
    window.alert(gen.next().value);
    window.alert(gen.next().value);
    */

    for(let i of generator())
    {
        window.alert(i); 
    } 
}

// Arrow
function fArrow()
{
    function Player(health)
    {
        this.health = health;
    }
    
    Player.prototype.getPowerUp = function (myarr) {
    //var that = this; das ist für alte schreibweise!!!
     return myarr.map(t => this.health * t);
    }

    var player = new Player(100);
    window.alert(player.getPowerUp( [1,2,3,4,5,6,7]));
    const squared = arr.map(function (t) { return t * t }); // oder so für Lambda (item) => item * item
}

function aaa()
{
    const a = {
        i: 1,
        toString: function(){
            return a.i++;
        }
    }

    if(a == 1 && a == 2 && a==3)
    {
        window.alert("Funktioniert");
    }
}







document.writeln("<\p>" + text.split(" ")); // hier löst das ein alert und teilt das Wort in 'b'.

