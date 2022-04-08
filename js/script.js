//selezionare btn
const firstBtn = document.getElementById('btn-1');
console.log(firstBtn);

//al click del btn genera i dati che inserisco nell input vanno a finire nel biglietto
firstBtn.addEventListener("click", 
    function () {

        //prendo input
        const inputName = document.getElementById('name').value;
        console.log(inputName);

        const inputAge = document.getElementById('age').value;

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

     }
);