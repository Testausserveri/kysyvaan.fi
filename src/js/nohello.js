// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'moi mul on kysymys',
    'osaaks joku hakkeroida',
    'moi voiks joku auttaa?',
    'tietääks joku linuxist?',
  ],
  typeSpeed: 40,
  backSpeed: 10,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 1500,
  startDelay: 0,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
