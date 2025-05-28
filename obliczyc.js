 function Oblicz() {
            var Szerokosc = parseFloat(document.getElementById("szerokosc").value);
            var dlugosc = parseFloat(document.getElementById("dlugosc").value);
            var wynik = document.getElementById("wynik")
            
            var typ =0;
            if (document.getElementById("lam").checked) {
                typ = 12;
            }
            else if (document.getElementById("win").checked) {
                typ = 14;
            }
            else if (document.getElementById("des").checked) {
                typ = 18;
            }

            if (!isNaN(Szerokosc) && !isNaN(dlugosc) && typ !== 0) {
                var powierzchnia = Szerokosc * dlugosc;
                var koszt = powierzchnia * typ;
                wynik.innerHTML = "Pole powierzchni pomieszczenia :"+ powierzchnia + "m², koszt montażu"+ koszt +"zł.";
            }
            else {
                wynik.innerHTML = "Wprowadź poprawne dane.";
            }
        }