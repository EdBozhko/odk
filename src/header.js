document.addEventListener('scroll', function (evt) {
    if (window.pageYOffset > 150) {
      document.documentElement.style.setProperty('--opacity', 0.6);
    } else {
      document.documentElement.style.setProperty('--opacity', 0);
    }
  });

