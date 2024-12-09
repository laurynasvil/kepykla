let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){
    // console.log('clicked')
    let employeesCount = document.getElementById('employee-count').valueAsNumber;
    let employeesMakesPerDay = document.getElementById('employees-makes-per-day').valueAsNumber;
    let dayReservations = document.getElementById ('day-reservations').valueAsNumber;

    let bakeryTotal = employeesCount * employeesMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations

   
    let resultsDiv = document.getElementById('results')
    
    resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti:</strong> ${bakeryTotal} kepalu</p>`;
    resultsDiv.innerHTML += `<p><strong>Jai reik speti pagaminti:</strong> ${dayReservations} kepalu</p>`;
    resultsDiv.innerHTML += `<p><strong>Ar spes pagaminti?</strong> ${isBakeryGonnaMakeIt ? `taip`: `Ne`}</p>`
});

document.getElementById('employee-count').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0 ){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('employees-makes-per-day').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})


document.getElementById('day-reservations').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('employee-count').value = 0;
  document.getElementById('employees-makes-per-day').value = 0;
  document.getElementById('day-reservations').value = 0;
  document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
})






/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/