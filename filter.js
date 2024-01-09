
//КАТЕГОРИИ ФИЛЬТРА

const Cat = document.querySelectorAll(".Cat")
const Dog = document.querySelectorAll(".Dod")
const YoungAge = document.querySelectorAll(".YoungAge")
const adultAge = document.querySelectorAll(".adultAge")
const teenAge = document.querySelectorAll(".teenAge")
const oldAge = document.querySelectorAll(".oldAge")
const HaveCat = document.querySelectorAll(".HaveCat")
const HaveDog = document.querySelectorAll(".HaveDog")
const HaveOther = document.querySelectorAll(".HaveOther")
const ReadyYes = document.querySelectorAll(".ReadyYes")
const ReadyNo = document.querySelectorAll(".ReadyNo")


//ФИЛЬТР

let FilterButton = document.querySelector(".FilterButton")

const modal = document.querySelector(".modal");

function switchVisibility(){

    modal.classList.toggle("hidden");
    modal.classList.toggle("visible");
}

document.addEventListener('click', function (event) {
    const target = event.target;
    if (!target.closest('.modal') && !target.closest('.FilterButton')) {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
});

FilterButton.addEventListener("click",switchVisibility);




document.addEventListener('DOMContentLoaded', function () {
    // Получаем все чекбоксы и карточки
    const checkboxes = document.querySelectorAll('.checkbox');
    const cards = document.querySelectorAll('.Card');
    const cardBlock = document.querySelector('.cardBlock');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Флаг для проверки, выбран ли хотя бы один чекбокс
            let anyCheckboxChecked = false;

            checkboxes.forEach(function (cb) {
                if (cb.checked) {
                    anyCheckboxChecked = true;
                }
            });

            // Обработка каждой карточки в соответствии с выбранными чекбоксами
            cards.forEach(function (card) {
                // Флаг для определения, следует ли показывать текущую карточку
                const showCard = Array.from(checkboxes).some(function (cb) {
                    return cb.checked && card.classList.contains(cb.getAttribute('data-target'));
                });

                // Показываем или скрываем карточку в зависимости от флага
                if (anyCheckboxChecked) {
                    if (showCard) {
                        card.classList.remove('hidden-Card');
                    } else {
                        card.classList.add('hidden-Card');
                    }
                } else {
                    card.classList.remove('hidden-Card');
                }
            });

            // Добавляем стиль min-height: 100vh; если ни один элемент не выводится
            const anyCardVisible = Array.from(cards).some(function (card) {
                return !card.classList.contains('hidden-Card');
            });

            if (!anyCardVisible) {
                cardBlock.style.minHeight = '100vh';
            } else {
                cardBlock.style.minHeight = ''; // Сбрасываем стиль, если есть видимые элементы
            }
        });
    });

    // Добавлен код для закрытия модального окна при клике вне его области
   
});


