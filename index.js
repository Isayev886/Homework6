var komp = 0;
var user = 0;

const range = (min, max) => Math.ceil( Math.random() * (max - min) + min );


const getRandomLetter = () => {
    const letters = 'spr';
    const ind = range(0, 2);
    return letters[ind];
}

window.onkeyup = function (e) {
    const istifadechininSechimi = e.key;
    const compChoice = getRandomLetter();
    if (istifadechininSechimi =='r' && compChoice == 's' ) {
        user++;

        console.log("Komputer qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    } else if (istifadechininSechimi == 's' && compChoice == 'r') {
        komp++;
        console.log("Istifadechi qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    }else if (istifadechininSechimi == 'p' && compChoice == 'r') {
        user++;
        console.log("Istifadechi qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    }else if (istifadechininSechimi == 'r' && compChoice == 'p') {
        komp ++;
        console.log("Istifadechi qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    }else if (istifadechininSechimi == 'p' && compChoice == 's') {
        komp ++;
        console.log("Istifadechi qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    }else if (istifadechininSechimi == 's' && compChoice == 'p') {
        user++;
        console.log("Istifadechi qalib geldi. Komputerin sechimi " + compChoice + " idi");
        console.log("Komputer qalib gelib:", komputer_udub);
        console.log("istifadechi qalib gelib:", user_udub);
    }
}