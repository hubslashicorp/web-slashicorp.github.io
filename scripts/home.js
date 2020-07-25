let slideIndex = 0;

const showSlides = () => {
   
    const slides = document.getElementsByClassName("vitrine-media");

    for(let i=0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display="none";
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex -1].styledisplay = "block";

    setTimeout(showSlides , 3000);
};

showSlides();