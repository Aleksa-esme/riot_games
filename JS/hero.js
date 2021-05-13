'use strict';

let button = document.getElementById('button');

button.onclick = function() {

    let heroArray = Array.from(document.querySelectorAll('.hero')); //сформировать массив из всех героев на странице
    let index = heroArray.findIndex(element => element.classList.contains('hero-active')); //определить у какого индекса в массиве сейчас active класс
 
    heroActive(heroArray, index);     //изменить active класс и инвертировать цвета                 
    
    if (index == heroArray.length - 1) {  //если убрали класс у последнего элемента в массиве, то переходим к нулевому элементу массива
        index = 0;
        heroActive(heroArray, index);                           
    } else {  //если элемент массива не последний, то переходим к следующему
        ++index;
        heroActive(heroArray, index);                                                    
    }
}

function heroActive(array, index) {
    let heroSkillsBlock = array[index].querySelector('.hero__skills');  //поиск подблока скиллов у выбранного индекса
    let skillsArray = Array.from(heroSkillsBlock.children);  //формирование массива скилов в выбранном подблоке
    let heroName = array[index].querySelector('.hero_name_img');  //поиск имени у выбранного индекса
    let mainSkills = Array.from(document.querySelectorAll('.main__skills_blocks'));  //формирование массива основных скилов
    let mainSkillsImages = Array.from(mainSkills[index].querySelectorAll('.main__skills-image'));  //формирование массива картинок скилов в основном блоке скиллов
    
    
    //добавить или убрать active классы
    array[index].classList.toggle('hero-active');
    heroSkillsBlock.classList.toggle('hero__skills-active');
    
    //инвертировать цвета элементов
    skillsArray.forEach(function(skill) {
        skill.classList.toggle('invert');
    });
    heroName.classList.toggle('invert');
    
    //добавить или убрать hide класс у блока
    mainSkills[index].classList.toggle('hide');
    //добавить анимацию блока при замене
    mainSkills[index].classList.add('scale-in-center');

    //инвертировать цвета картинок основных цветов
    mainSkillsImages.forEach(function(img) {
        img.classList.toggle('invert');
    });
    
}





