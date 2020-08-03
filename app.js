const moonPath =
  'M16.5 27.5C16.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16.5 12.3122 16.5 27.5Z';

const sunPath =
  'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';

const darkMode = document.querySelector('#dark-mode');
let toggle = false;

darkMode.addEventListener('click', () => {
  // NEED TO USE ANIME.JS
  // SETUP THE TIMELINE HERE
  const timeline = anime.timeline({
    duration: 750,
    easing: 'easeInOutQuad',
  });

  // ADD DIFFERENT ANIMATIONS TO THE TIMELINE
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: '#dark-mode',
        rotate: 320,
      },
      '-= 300'
    )
    .add(
      {
        targets: 'section',
        // default will be white.
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
        // default will be black.
        color: toggle ? 'rgb(0,0,0)' : 'rgb(255,255,255)',
      },
      '-= 700'
    );

  // I WANT TO SWITCH
  toggle = !toggle;
});
