/**
 * Основной скрипт для тестового задания
 * Использует jQuery, Bootstrap JS и Slick Slider
 */

jQuery(document).ready(($) => {
    // ========================
    // 1. Offcanvas (выезжающее меню) с поиском
    // ========================

    // Кэшируем DOM элементы для производительности
    const $searchBtn = $('#open_search');           // Кнопка открытия меню
    const offcanvasEl = document.getElementById('sideMenu'); // Элемент offcanvas
    const $searchInput = $('#sidebar_search');      // Поле поиска внутри меню

    // Обработчик клика по кнопке поиска/меню
    $searchBtn.on('click', () => {
        // Создаём экземпляр Bootstrap Offcanvas и открываем его
        const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
        offcanvas.show();

        // Задержка перед фокусом на поле поиска (ждём завершения анимации открытия)
        setTimeout(() => $searchInput.focus(), 500);
    });

    // ========================
    // 2. Карусель Hero (Bootstrap нативная)
    // ========================

    // Самовызывающаяся функция для изоляции логики карусели
    (function initHeroCarousel() {
        const carousel = document.getElementById('heroCarousel');

        // Проверяем, существует ли элемент на странице
        if (!carousel) return;

        // Получаем общее количество слайдов
        const totalSlides = $('.carousel-item', carousel).length;

        // Устанавливаем начальные значения счётчика
        $('.carousel-total').text(totalSlides);
        $('.carousel-current').text(1); // Первый слайд активен по умолчанию

        // Слушаем событие переключения слайда Bootstrap
        // 'slide.bs.carousel' срабатывает перед началом анимации
        carousel.addEventListener('slide.bs.carousel', function (event) {
            // event.to возвращает индекс следующего слайда (начиная с 0)
            // Прибавляем 1 для отображения пользователю
            const currentSlide = event.to + 1;
            $('.carousel-current').text(currentSlide);
            // totalSlides не меняется, но можно обновить на всякий случай
            $('.carousel-total').text(totalSlides);
        });
    })();

    // ========================
    // 3. Slick Slider для товаров (ЛУЧШИЕ ПРЕДЛОЖЕНИЯ)
    // ВНИМАНИЕ: код закомментирован, так как функционал не доделан
    // ========================

    /*
    // Инициализация слайдера товаров
    const $slider = $('.offers-slider');

    // Проверяем, существует ли слайдер на странице
    if ($slider.length) {

        // Функция обновления текстового счётчика (1/3, 2/3 и т.д.)
        // Использует внутренние элементы Slick: .slick-active и .slick-dots
        function updateTextCounter() {
            // Получаем номер активного слайда из текста кнопки внутри .slick-active
            const currentPage = $('.slick-active > button').text();

            // Получаем общее количество точек (страниц)
            const totalPages = $('.slick-dots li').length;

            // Обновляем счётчик на странице
            $('.carousel-current').text(currentPage);
            $('.carousel-total').text(totalPages);
        }

        // Инициализация Slick Slider с настройками
        $slider.slick({
            slidesToShow: 4,          // Количество видимых слайдов на десктопе
            slidesToScroll: 4,        // Количество слайдов при прокрутке (группами)
            infinite: true,           // Бесконечная прокрутка
            dots: true,               // Показывать точки пагинации
            arrows: true,             // Показывать стрелки
            appendArrows: '.carousel-counter', // Куда вставить стрелки (рядом с заголовком)
            autoplay: true,           // Автоматическое переключение слайдов
            responsive: [             // Адаптивные настройки
                {
                    breakpoint: 992,  // Планшеты (до 992px)
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 576,  // Мобильные телефоны (до 576px)
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1  // На мобилках прокручиваем по одному
                    }
                }
            ]
        });

        // Событие инициализации Slick (срабатывает один раз)
        $slider.on('init', updateTextCounter);

        // Событие после каждого переключения слайда
        $slider.on('afterChange', updateTextCounter);

        // Обновляем счётчик при изменении размера окна (адаптив)
        // Используем setTimeout для debounce, чтобы не дёргать часто
        let resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateTextCounter, 100);
        });

    } else {
        console.warn('Элемент .offers-slider не найден на странице');
    }
    */

    // ========================
    // TODO: Доделать Slick Slider
    // Планируемые доработки:
    // 1. Раскомментировать код выше
    // 2. Доработать выравнивание элементов карусели
    // 3. Протестировать на разных разрешениях
    // ========================

});