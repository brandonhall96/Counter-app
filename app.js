let resultDisplay = document.getElementById('resultdisplay');
let minusButton = document.getElementById('button1');
let plusButton = document.getElementById('button2');
let countIncrement = document.getElementById('incrementcount').value
let input = document.querySelector('input');
// let log = document.getElementById('value');
let count = 0;
// let theInc = document.getElementById('input[type="text"]')
let counter = 1;
// let countPlus = incrementcount;
// let countMinus = incrementcount;
// countDown();

updateDisplay();
updateValue();

console.log(input)


input.addEventListener('input', updateValue);

function updateValue(e) {
    countIncrement.textContent = e.target.value;
    
    
}


minusButton.addEventListener('click', () => {
    count = count - countIncrement.value;
    updateDisplay();
    

    
});


plusButton.addEventListener('click', ()=> {
    count = count + countIncrement.value;
    updateDisplay();
});





function updateDisplay() {
    resultDisplay.textContent = count;
}



// function updateIncrement() {
//     incrementcount.textContent = counter;
// }

// function countUp() {
//     for(i = 0; i <= count; i++)

    
// }

// function buildingCounter() {
//     count = [counter]
// }

// function countDown() {
//     // for (let i = 0; i <= count; i++) {
//         let theResult = count - countIncrement
//         return count;
        

       
        

//     }
