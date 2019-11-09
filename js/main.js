window.document.addEventListener('DOMContentLoaded', function() {
    'use strict';    
    let sliders = document.querySelectorAll('.item'),
        dotsWrap = document.querySelector('.dots'),
        dot = document.querySelectorAll('.dot'),
        btn = document.querySelectorAll('BUTTON'),
        wrap = document.querySelector('.slider');

    function hideSlides() { // функция которая скрывает все слайды, делает кнопки не видными и отключает активность точек
        for(let i = 0; i < 4; i++) {
            sliders[i].style.display = 'none';
            dot[i].classList.remove('active');
            btn[i].style.display = 'none';
        }
        
    }
    function showSlides(a) { // функция обратная функции выше, устанавливая точку активной и делая видной кнопку
        sliders[a].style.display = 'flex';
        dot[a].classList.add('active');
        btn[a].style.display = 'block';
        wrap.style.height = '482px';
    }
    hideSlides(); // параметры по-
    showSlides(0); // умолчанию
    dotsWrap.addEventListener('click', function(e) {
        if(e.target && e.target.classList.contains('dot')) {
            for(let i = 0; i < 4; i++) {
                if(e.target == dot[i]){ // находим точку на которую кликнули и вызываем все необходимые функции
                    hideSlides(); // с соответствующими параметрами
                    showSlides(i);
                    break;
                }
            }
        }
    });
});