let popupBg = document.querySelector('.popup__bg'); //фон попап окна
let popup = document.querySelector('.popup'); //само окно
let openPopupButtons = document.querySelectorAll('.open-popup');//кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');//кнопка для скрытия окна

openPopupButtons.forEach((Button) => {
    Button.addEventListener('click', (e) =>{
     e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
})

// openPopupButtons[0].addEventListener('click',(e) => {
//     console.log('test')
//     e.preventDefault();
//     popupBg.classList.add('active');
//     popup.classList.add('active');
// })

closePopupButton.addEventListener('click',() =>{

    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (e) =>{
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
const pushbar = new Pushbar({
    blur:true,
    overlay:true,
  });