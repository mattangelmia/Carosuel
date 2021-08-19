const slides = document.querySelectorAll(".carousel-item")
const prevBtn = document.querySelector("#carousel-button-prev")
const nextBtn = document.querySelector("#carousel-button-next")
let slidePosition = 0;

const totalSlides = slides.length;


console.log(slides.length)

prevBtn.addEventListener("click",prevSlide)

nextBtn.addEventListener("click", nextSlide)

function hideSlides(){
    for(slide of slides){
        slide.classList.remove("carousel-item-visible")
        
    }
}

function prevSlide(){
    hideSlides(); 
    if(slidePosition === 0){
        slidePosition = totalSlides - 1
    }
    else{
        slidePosition --
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}


function nextSlide(){
    hideSlides(); 
 if(slidePosition === totalSlides - 1){
        slidePosition = 0
        
    }
    else{
        slidePosition ++
    }
    console.log(slidePosition)
    console.log(slides[slidePosition])
    slides[slidePosition].classList.add("carousel-item-visible");
 
}





