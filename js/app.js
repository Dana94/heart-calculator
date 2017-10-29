var buttons = document.getElementsByClassName('btn');


for(var i = 0; i < buttons.length; i++){
    console.log(buttons[i].id);
    buttons[i].addEventListener('click', () => {
        console.log(buttons[i].id);
    });
}