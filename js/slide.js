document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".slide-container");
    const slideItems = document.querySelectorAll(".slide-item");
    const slideNav = document.querySelector(".slide-nav");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    const slideCount = slideItems.length;
    let currentIndex = 0;

    function prevSlide() {
        if (currentIndex === 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex--;
        }
        updateSlide();
    }

    function nextSlide() {
        if (currentIndex === slideCount - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlide();
    }

    function updateSlide() {
        slideItems.forEach((item) => {
            item.style.display = "none";
        });

        slideItems[currentIndex].style.display = "block";
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // 초기에 첫 번째 슬라이드를 보이도록 설정
    updateSlide();

    // 자동으로 슬라이드 변경 (5초마다)
    setInterval(nextSlide, 5000);
});
