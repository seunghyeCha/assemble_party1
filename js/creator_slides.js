document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.creator_track');
  const slides = Array.from(track.children);

  const slideWidth = 340; // CSS와 동일
  const gap = 55;         // CSS gap
  const moveDistance = slideWidth + gap;

  const visibleCount = 3.5;
  const cloneCount = Math.ceil(visibleCount); // 👉 4
  const totalSlides = slides.length;

  // 🔹 앞쪽 clone (마지막 4개)
  for (let i = totalSlides - cloneCount; i < totalSlides; i++) {
    const clone = slides[i].cloneNode(true);
    clone.classList.add('clone');
    track.insertBefore(clone, track.firstChild);
  }

  // 🔹 뒤쪽 clone (처음 4개)
  for (let i = 0; i < cloneCount; i++) {
    const clone = slides[i].cloneNode(true);
    clone.classList.add('clone');
    track.appendChild(clone);
  }

  // 🔹 시작 위치 (앞 clone만큼 밀기)
  let index = cloneCount;
  track.style.transition = 'none';
  track.style.transform = `translateX(${-index * moveDistance}px)`;

  let isAnimating = false;

  function moveSlide() {
    if (isAnimating) return;
    isAnimating = true;

    index += 1; // ✅ 한 장씩 이동
    track.style.transition = 'transform 0.6s ease';
    track.style.transform = `translateX(${-index * moveDistance}px)`;

    setTimeout(() => {
      // 🔁 마지막 clone 영역 도달 시
      if (index >= totalSlides + cloneCount) {
        track.style.transition = 'none';
        index = cloneCount;
        track.style.transform = `translateX(${-index * moveDistance}px)`;
      }
      isAnimating = false;
    }, 600);
  }

  // 🔁 자동 실행
  setInterval(moveSlide, 10000);
});
