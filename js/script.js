jQuery(document).ready(($) => {
    const $searchBtn = $('#open_search');
    const offcanvasEl = document.getElementById('sideMenu');
    const $searchInput = $('#sidebar_search');

    $searchBtn.on('click', () => {
        const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
        offcanvas.show();
        setTimeout(() => $searchInput.focus(), 500);
    });
});