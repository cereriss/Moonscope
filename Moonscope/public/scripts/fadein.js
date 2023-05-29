document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in');
  const animationDuration = 300; // Duration of the animation in milliseconds
  const delayBetweenElements = 100; // Delay between each element in milliseconds

  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transform = 'translateX(-20px)'; // Initial position off the screen

    setTimeout(function () {
      let opacity = 0;
      let position = -20;
      const startTime = performance.now();

      function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        opacity = Math.min(1, elapsedTime / animationDuration);
        position = Math.min(0, (elapsedTime / animationDuration) * 20);

        element.style.opacity = opacity;
        element.style.transform = `translateX(${position}px)`;

        if (elapsedTime < animationDuration) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, delayBetweenElements);
  }

  elements.forEach(function (element, index) {
    setTimeout(function () {
      fadeIn(element);
    }, index * delayBetweenElements);
  });
});
