function update(){
    let start = document.getElementById('dateStart').value;
    let end = document.getElementById('dateEnd').value;
    let guests = document.getElementById('numberGuests').value;
    let price = document.getElementById('priceUpdate');
    let alert = document.getElementById('alertPrice');
    document.getElementById('toUpdate').innerHTML = `${start} do ${end} • ${guests} gości`;

    switch (start) {
        case '2024-07-08':

            if(end === '2024-07-15') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Brak miejsc, zapraszamy za rok!`;
            } else if(end === '2024-07-22') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Brak miejsc, zapraszamy za rok!`;
            } else if(end === '2024-07-29') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Brak miejsc, zapraszamy za rok!`;
            } else if(end === '2023-08-05') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Brak miejsc, zapraszamy za rok!`;
            } else if(end === '2023-08-12') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Brak miejsc, zapraszamy za rok!`;
            } else if(end === '2023-07-08') {
                price.innerHTML = `0zł`
                alert.innerHTML = `Termin został wybrany błędnie.`;
            } else {
                alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty!`;
            }

            break;
        case '2024-07-13':
            if(end === '2024-07-20') {
                alert.innerHTML = ``;
                price.innerHTML = `${7*400}zł`
            } else if(end === '2024-07-27') {
                alert.innerHTML = ``;
                price.innerHTML = `${(14*400)}zł`
            } else if(end === '2024-08-03') {
                alert.innerHTML = ``;
                price.innerHTML = `${(21*400)}zł`
            } else if(end === '2024-08-10') {
                alert.innerHTML = ``;
                price.innerHTML = `${(28*450)}zł`
            } else if(end === '2023-07-15') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2023-07-08') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else {
                alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty!`;
            }
            break;
        case '2024-07-20':
            if(end === '2024-07-27') {
                alert.innerHTML = ``;
                price.innerHTML = `${7*400}zł`
            } else if(end === '2024-08-03') {
                alert.innerHTML = ``;
                price.innerHTML = `${(14*400)}zł`
            } else if(end === '2024-08-10') {
                alert.innerHTML = ``;
                price.innerHTML = `${(21*400)}zł`
            } else if(end === '2024-07-22') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2023-07-15') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2023-07-08') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else {
                alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty!`;
            }
            break;
        case '2024-07-27':
            if(end === '2024-08-03') {
                alert.innerHTML = ``;
                price.innerHTML = `${7*400}zł`
            } else if(end === '2024-08-10') {
                alert.innerHTML = ``;
                price.innerHTML = `${(14*400)}zł`
            } else if(end === '2024-07-29') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-22') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-15') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-08') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else {
                alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty!`;
            }
            break;
        case '2024-08-03':
            if(end === '2024-08-10') {
                alert.innerHTML = ``;
                price.innerHTML = `${7*400}zł`
            } else if(end === '2024-08-05') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-29') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-22') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-15') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else if(end === '2024-07-08') {
                alert.innerHTML = `Termin został wybrany błędnie.`;
                price.innerHTML = `0zł`
            } else {
                alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty!`;
            }
            break;
        case '2023-08-12':
            alert.innerHTML = `Termin został wybrany błędnie.`;
            price.innerHTML = `0zł`
            break;
        default:

            alert.innerHTML = `Wynajmujemy domki <b>tylko</b> od soboty do soboty! <br> Wyjątki pod numerem telefonu <b>501 077 778</b>`;
            price.innerHTML = `0zł`;

            break;
    }
}

function book() {
    let alert = document.getElementById('alertPrice');

    alert.style.color = '#7cec26';
    alert.innerHTML = `Aby potwierdzić wstępną rezerwację zadzwoń pod numer <b>501077778</b> podając termin oraz ilość osób.`
    //alert.innerHTML = `Aktualnie nie przyjmujemy rezerwacji...!`

}