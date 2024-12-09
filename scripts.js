let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){
    // console.log('clicked')
    let employeesCount = document.getElementById('employee-count').valueAsNumber;
    let employeesMakesPerDay = document.getElementById('employees-makes-per-day').valueAsNumber;
    let dayReservations = document.getElementById ('day-reservations').valueAsNumber;

    let bakeryTotal = employeesCount * employeesMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // }
    // console.log(logInfo)
    let resultsDiv = document.getElementById('results')
    // console.log(resultsDiv)
});






/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/