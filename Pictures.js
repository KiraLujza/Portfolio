const pictures = [
  { src: "web-pics/DSC_0710.jpg",
    full: "pictures/DSC_0710.jpg",
    alt: "Photo 1" },
  { src: "web-pics/DSC_0063.jpg",
    full: "pictures/DSC_0063.jpg",
    alt: "Photo 2" },
  { src: "web-pics/DSC_0080.jpg",
    full: "pictures/DSC_0080.jpg",
    alt: "Photo 3" },
  { src: "web-pics/DSC_0345.jpg",
    full: "pictures/DSC_0345.jpg",
    alt: "Photo 4" },
  { src: "web-pics/DSC_0280.jpg",
    full: "pictures/DSC_0280.jpg",
    alt: "Photo 5" },
  { src: "web-pics/DSC_0302.jpg",
    full: "pictures/DSC_0302.jpg",
    alt: "Photo 6" },
  { src: "web-pics/DSC_0349.jpg",
    full: "pictures/DSC_0349.jpg",
    alt: "Photo 7" },
  { src: "web-pics/DSC_0350.jpg",
    full: "pictures/DSC_0350.jpg",
    alt: "Photo 8" },
  { src: "web-pics/DSC_0458.jpg",
    full: "pictures/DSC_0458.jpg",
    alt: "Photo 9" },
  { src: "web-pics/Mikey.jpg",
    full: "pictures/Mikey.jpg",
    alt: "Photo 10" },
  { src: "web-pics/DSC_0581.jpg",
    full: "pictures/DSC_0581.jpg", 
    alt: "Photo 11" },
  { src: "web-pics/DSC_0613.jpg", 
    full: "pictures/DSC_0613.jpg", 
    alt: "Photo 12" },
  { src: "web-pics/DSC_0413.jpg", 
    full: "pictures/DSC_0413.jpg", 
    alt: "Photo 13" },
  { src: "web-pics/DSC_0784.jpg", 
    full: "pictures/DSC_0784.jpg", 
    alt: "Photo 14" },
  { src: "web-pics/DSC_0407.jpg", 
    full: "pictures/DSC_0407.jpg", 
    alt: "Photo 15" },
  { src: "web-pics/DSC_0840.jpg", 
    full: "pictures/DSC_0840.jpg", 
    alt: "Photo 16" },
  { src: "web-pics/Statue.png", 
    full: "pictures/Statue.png", 
    alt: "Photo 17" },
  { src: "web-pics/DSC_0038.jpg", 
    full: "pictures/DSC_0038.jpg", 
    alt: "Photo 18" },
  { src: "web-pics/DSC_0051.jpg", 
    full: "pictures/DSC_0051.jpg", 
    alt: "Photo 19" }
];

const gallery = document.querySelector(".gallery-masonry");

pictures.forEach(pic => {
    const img = document.createElement("img");

    img.src = pic.src;          
    img.alt = pic.alt;
    img.loading = "lazy";

    img.dataset.full = pic.full; 

    gallery.appendChild(img);
});