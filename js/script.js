jQuery(document).ready(($) => {
    const $searchBtn = $('#open_search');
    const offcanvasEl = document.getElementById('sideMenu');
    const $searchInput = $('#sidebar_search');

    $searchBtn.on('click', () => {
        const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
        offcanvas.show();
        setTimeout(() => $searchInput.focus(), 500);
    });

    $(function() {
        const carousel = document.getElementById('offersCarousel');

        if (carousel) {
            // Обновляем счётчик при переключении слайда
            carousel.addEventListener('slide.bs.carousel', function(event) {
                const currentSlide = event.to + 1; // Индексы с 0, +1 для пользователя
                const totalSlides = $('.carousel-item', carousel).length;
                $('.carousel-current').text(currentSlide);
                $('.carousel-total').text(totalSlides);
            });
        }
    });

    $('.btn-next').on('click', function() {
        let track = $('.carousel-track');
        let cardWidth = $('.carousel-card').first().outerWidth(true); // Ширина карточки
        track.scrollLeft(track.scrollLeft() + cardWidth); // Листаем на 1 карточку
    });
});