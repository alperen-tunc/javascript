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

document.writeln("<\p>Max Zahl von x und y" + Math.max(x,y));

document.writeln("<\p>Min Zahl von x un y" + Math.min(x,y));

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







document.writeln("<\p>" + text.split(" ")); // hier löst das ein alert und teilt das Wort in 'b'.

