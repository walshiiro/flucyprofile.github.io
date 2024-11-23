document.getElementById('scrollToAboutMe').addEventListener('click', function () {
    const aboutMeBox = document.getElementById('aboutMeSection');
    aboutMeBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  