let galkaTextcolor = document.querySelectorAll(".galkaTextcolor");
let color = document.querySelector('.color')
let strelka = document.querySelectorAll('.strelka')
let priceInputBlock = document.querySelector(".priceInputBlock");
let priceInput = document.querySelector(".priceInput");
color.onclick = function(){
    galkaTextcolor[0].classList.toggle('Act')
    galkaTextcolor[1].classList.toggle('Act')
    strelka[0].classList.toggle('strelka180')
}
priceInputBlock.onclick = function(){
    priceInput.classList.toggle('Act')
    strelka[1].classList.toggle('strelka180')
}
