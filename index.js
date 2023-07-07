/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles', 20, 6, './images/heracles.svg', 0, 0);

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
const bow = new Weapon('bow', 8, './images/bow.svg', 1);
heracles.weapon = bow;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;


/** Creating all of his adversaries */
const mare1 = new Monster('🐴 Jument', 25, 12, './images/jument.png', 7, 7);
const mare2 = new Monster('🐴 Jument', 25, 12, './images/jument.png', 4, 3);
const mare3 = new Monster('🐴 Jument', 25, 12, './images/jument.png', 6, 2);


/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, mare1);

/** Your code goes here */
const arena = new Arena(heracles, [mare1, mare2, mare3])
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(arena);
ArenaHTML.setMoveEvent(arena);


/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate('heroInfo');
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}