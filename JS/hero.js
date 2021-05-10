'use strict';

let button = document.getElementById('button');

button.onclick = function() {
    //сформировать массив из всех героев на странице
    let heroArray = Array.from(document.querySelectorAll('.hero'));
    //определить у какого индекса в массиве сейчас active класс
    let index = heroArray.findIndex(element => element.classList.contains('hero-active'));
 
    //изменить active класс и инвертировать цвета
    heroActive(heroArray, index);                      
    //если убрали класс у последнего элемента в массиве, то переходим к нулевому элементу массива
    if (index == heroArray.length - 1) {
        index = 0;
        heroActive(heroArray, index);
    //если элемент массива не последний, то переходим к следующему                           
    } else {
        ++index;
        heroActive(heroArray, index);                                                    
    }
}

function heroActive(array, index) {
    //поиск подблока скиллов у выбранного индекса
    let heroSkillsBlock = array[index].querySelector('.hero__skills');
    //формирование массива скилов в выбранном подблоке
    let skillsArray = Array.from(heroSkillsBlock.children);
    //поиск имени у выбранного индекса
    let heroName = array[index].querySelector('.hero_name_img');
    //формирование массива основных скилов
    let mainSkills = Array.from(document.querySelectorAll('.main__skills_blocks'));
    //формирование массива картинок скилов в основном блоке скиллов
    let mainSkillsImages = Array.from(mainSkills[index].querySelectorAll('.main__skills-image'));
    
    
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





