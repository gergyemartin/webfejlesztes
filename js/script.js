function ellenorzes() {
    let pontszam = 0;

    pontszam += ellenoriz('kerdes1', 'a');
    pontszam += ellenoriz('kerdes2', 'b');
    pontszam += ellenoriz('kerdes3', 'b');
    pontszam += ellenoriz('kerdes4', 'a');
    pontszam += ellenoriz('kerdes5', 'c');
    pontszam += ellenoriz('kerdes6', 'c');
    pontszam += ellenoriz('kerdes7', 'b');
    pontszam += ellenoriz('kerdes8', 'b');
    pontszam += ellenoriz('kerdes9', 'a');
    pontszam += ellenoriz('kerdes10', 'a');
    pontszam += ellenoriz('kerdes11', 'b');
    pontszam += ellenoriz('kerdes12', 'a');
    pontszam += ellenoriz('kerdes13', 'c');
    pontszam += ellenoriz('kerdes14', 'a');
    pontszam += ellenoriz('kerdes15', 'c');
    pontszam += ellenoriz('kerdes16', 'c');
    pontszam += ellenoriz('kerdes17', 'b');
    pontszam += ellenoriz('kerdes18', 'b');
    pontszam += ellenoriz('kerdes19', 'a');
    pontszam += ellenoriz('kerdes20', 'b');
    
    /*CAESAR*/
    if (document.getElementById("dobozka1").selectedIndex == 1)
    {
        pontszam += 1;
    }
    if(document.getElementById("dobozka2").selectedIndex == 1)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka3").selectedIndex == 3)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka4").selectedIndex == 2)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka5").selectedIndex == 1)
    {
    pontszam+=1;
    }
    /*NAPÓLEON*/
    if(document.getElementById("dobozka6").selectedIndex == 1)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka7").selectedIndex == 2)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka8").selectedIndex == 3)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka9").selectedIndex == 3)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka10").selectedIndex == 2)
    {
    pontszam+=1;
    }
    /*KENNEDY*/
    if(document.getElementById("dobozka11").selectedIndex == 2)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka12").selectedIndex == 2)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka13").selectedIndex == 1)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka14").selectedIndex == 3)
    {
    pontszam+=1;
    }
    if(document.getElementById("dobozka15").selectedIndex == 2)
    {
    pontszam+=1;
    }
    let szazalek = (pontszam / 25) * 100;

        let eredmenyP = document.getElementById('eredmeny');
        eredmenyP.innerHTML = 'Pontszám: ' + pontszam + '/25<br>Eredmény: ' + szazalek + '%';

        if (szazalek < 50) {
            eredmenyP.style.color = 'red';
        } else if (szazalek < 70) {
            eredmenyP.style.color = 'yellow';
        } else {
            eredmenyP.style.color = 'green';
        }

        if (szazalek >= 70) {
            eredmenyP.innerHTML += '<br>Gratulálunk!';
        }
}
function ellenoriz(kerdes, helyesValasz) {
    let valasz = document.querySelector('input[name="' + kerdes + '"]:checked');
    if (valasz) {
        if (valasz.value === helyesValasz) {
            return 1; 
        } else {
            return 0; 
        }
    } else {
        return 0; 
    }
}
function CaesarFv() {
    lathatosag();
    document.getElementById("szovegtesztCaesar").style.display = "block";
    document.getElementById("dobozka1").selectedIndex = 0;
    document.getElementById("dobozka2").selectedIndex = 0;
    document.getElementById("dobozka3").selectedIndex = 0;
    document.getElementById("dobozka4").selectedIndex = 0;
    document.getElementById("dobozka5").selectedIndex = 0;
}
function NapoleonFv() {
    lathatosag();
    document.getElementById("szovegtesztNap").style.display = "block";
    document.getElementById("dobozka6").selectedIndex = 0;
    document.getElementById("dobozka7").selectedIndex = 0;
    document.getElementById("dobozka8").selectedIndex = 0;
    document.getElementById("dobozka9").selectedIndex = 0;
    document.getElementById("dobozka10").selectedIndex = 0;
}
function KennedyFv() {
    lathatosag();
    document.getElementById("szovegtesztKennedy").style.display = "block";
    document.getElementById("dobozka11").selectedIndex = 0;
    document.getElementById("dobozka12").selectedIndex = 0;
    document.getElementById("dobozka13").selectedIndex = 0;
    document.getElementById("dobozka14").selectedIndex = 0;
    document.getElementById("dobozka15").selectedIndex = 0;
}
function lathatosag() {
    document.getElementById("szovegtesztCaesar").style.display = "none";
    document.getElementById("szovegtesztNap").style.display = "none";
    document.getElementById("szovegtesztKennedy").style.display = "none";
}