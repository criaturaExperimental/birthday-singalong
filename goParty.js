const puppeteer = require('puppeteer');
const player = require('play-sound')(opts = {});

async function init(page) {
  await page.goto('https://translate.google.com/');
  await page.focus('#source');
}

async function clear(page) {
  const clearSelector = '.tlid-clear-source-text';
  await page.click(clearSelector);
}

const lyrics = ['¡cumpleaños feliz!', 'te deseamos, placeholder!'];

(async () => {
  const browser = await puppeteer.launch(
  {headless: false}
  );
  const spechOn = '.ttsbutton'
  player.play('foo.mp3', function(err){
    if (err) throw err
  })
  const page = await browser.newPage();
  await init(page);
  await page.keyboard.type(lyrics[0]);
  await page.waitFor(1000);
  await page.click(spechOn);
  await page.waitFor(2500);
  await page.click(spechOn);
  await page.waitFor(3000);
  await clear(page);
  await page.keyboard.type(lyrics.pop());
  await page.waitFor(900);
  await page.click(spechOn);
  await page.waitFor(3000);
  await clear(page);
  await page.keyboard.type(lyrics[0]);
  await page.waitFor(900);
  await page.click(spechOn);
  await page.waitFor(4000);
  await clear(page);
  await thrilled(page);
  await page.click(spechOn);
  await page.waitFor(5000);
  await finalle(page);
  await page.click(spechOn);
  audio.kill();
  await browser.close();
})();

async function thrilled(page) {
  await page.keyboard.type('Un poquito de entusiasmo jamía que esto es una felicitación virtual');
  await page.waitFor(2500);
}

async function finalle(page) {
  await clear(page);
  await page.keyboard.type('debugger en producción, error, con sole punto log NaN por todos lados, esto ha vuelto a petar al desplegar, git blame yo no he sido, salir de aplicación y que cumplas muchos más');
  await page.waitFor(1500);
}