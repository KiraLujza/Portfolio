window.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-masonry');
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    gallery.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            lightboxImg.src = e.target.dataset.full; // FULL IMAGE HERE
            lightbox.style.display = 'flex';
        }
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});