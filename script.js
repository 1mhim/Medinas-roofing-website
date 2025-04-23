document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', () => {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) { // Safari
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) { // IE11
        img.msRequestFullscreen();
      }
    });
  });
  