// Lightbox popup for gallery images
window.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-masonry');
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!gallery || !lightbox || !lightboxImg || !lightboxClose) return;

    gallery.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            lightboxImg.src = e.target.src;
            lightbox.style.display = 'flex';
        }
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
