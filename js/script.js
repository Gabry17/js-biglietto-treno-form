//selezionare btn
const firstBtn = document.getElementById('btn-1');
console.log(firstBtn);

const secondBtn = document.getElementById('btn-2');

//biglietto
const footer = document.getElementById('foot');

//al click del btn genera i dati che inserisco nell input vanno a finire nel biglietto
firstBtn.addEventListener("click", 
    function () {

        //prendo input
        //nome
        let inputName = document.getElementById('name').value;
        console.log(inputName);

        //km
        let inputKm = document.getElementById('km').value;
        console.log(inputKm);

        //eta
        let inputAge = document.getElementById('age').value;


        //inserisco valore input nella loro casella
        //nome
        const addValueName = document.getElementById('name-value');
        console.log(addValueName);
        addValueName.innerHTML = `${inputName}`;

        //offerta
        const addValueAge = document.getElementById('age-value');
        addValueAge.innerHTML = `${inputAge}`;

        //carrozza
        const numberCarrozza = Math.floor(Math.random() * 10) + 1;
        console.log(numberCarrozza);

        const addNumberCarrozza = document.getElementById('n-carrozza');
        addNumberCarrozza.innerHTML = `${numberCarrozza}`;

        //codice
        const numberCode = Math.floor(Math.random() * 100) + 1;
        console.log(numberCode);

        const addNumberCode = document.getElementById('n-code');
        addNumberCode.innerHTML = `${numberCode}`;


        
        //prezzo
        //prezzo normale
        let normalPrice = 0.21 * inputKm;
        console.log(normalPrice);

        
        //eta
        let selectAge = document.getElementById('age');
        let option1 = document.getElementById('min');
        console.log(option1);
        let option3 = document.getElementById('over65');
        console.log(option3);

        //sconto
        let finalPrice;
        let sale20 = normalPrice * 20 / 100;
        let sale40 = normalPrice * 40 / 100;

        if (selectAge == option1) {
            finalPrice = normalPrice - sale20;
            console.log(finalPrice);
        } else if (selectAge == option3) {
            finalPrice = normalPrice - sale40;
            console.log(finalPrice);
        } else {
            finalPrice = normalPrice;
            console.log(finalPrice);
        }

        //aggiungere prezzo al biglietto
        document.getElementById('price').innerHTML = finalPrice;

        //far apparire biglietto con dati
        footer.classList.add('block');


     }
);

secondBtn.addEventListener("click", 
    function () {

        //annullare biglietto
        footer.classList.remove('block');

        //svuotare input
        let inputName = document.getElementById('name');
        inputName.value = "";

        let inputKm = document.getElementById('km');
        inputKm.value = "";

        let inputAge = document.getElementById('age');
        inputAge.value = "";



    }
);