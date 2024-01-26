const reviews = document.querySelectorAll('.reviews__content');
reviews.forEach(showNextReview);

function showNextReview (reviewsContainer) {
  const revBtn = reviewsContainer.querySelector('.prev-button');

  const revSlides = reviewsContainer.querySelector('.slider');
  const slidesCount = revSlides.childElementCount;
  let slideIndex = 0;

  revBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1 + slidesCount) % slidesCount;
    slide(revSlides);
  });

  const slide = (slider) => {
    const imageHeight = slider.clientHeight
    const slideOffset = -slideIndex * imageHeight
    slider.style.transform = `translateY(${slideOffset}px)`;
  }
};


