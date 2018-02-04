var buttons = document.getElementsByClassName('btn');
//console.log(buttons);

for(var i = 0; i < buttons.length; i++){
    //console.log(buttons[i].id);
    buttons[i].addEventListener('click', () => {
        var id = this.id;
        console.log(id);
    });
}


document.getElementById('zero').addEventListener('click', () => {
        console.log(0);
});

document.getElementById('one').addEventListener('click', () => {
        console.log(0);
});

document.getElementById('add').addEventListener('click', () => {
        console.log(0);
});

document.getElementById('equals').addEventListener('click', () => {
        calculate();
});

function calculate() {


    
}