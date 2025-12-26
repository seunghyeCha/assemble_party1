document.addEventListener("DOMContentLoaded", function () {
    const slideWrap = document.querySelector(".slide_wrap");
    const slides = document.querySelectorAll(".m_slides");
    const slideCount = slides.length;

    const firstClone = slides[0].cloneNode(true);
    slideWrap.appendChild(firstClone);

    let currentIndex = 0;
    const totalSlides = slideCount + 1;

    slideWrap.style.width = `${totalSlides * 100}vw`;

    function moveSlide(index) {
        slideWrap.style.transition = "transform 0.6s ease";
        slideWrap.style.transform = `translateX(-${index * 100}vw)`;
    }

    function nextSlide() {
        currentIndex++;
        moveSlide(currentIndex);

        if (currentIndex === slideCount) {
            setTimeout(() => {
                slideWrap.style.transition = "none";
                currentIndex = 0;
                slideWrap.style.transform = `translateX(0)`;
            }, 600);
        }
    }

    setInterval(nextSlide, 3000);
});