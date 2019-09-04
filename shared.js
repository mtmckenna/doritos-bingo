export const GUMMIS = [
  { name: "Bears", img: "gummi-bears.jpg" },
  { name: "Butterflies", img: "gummi-butterflies.jpg" },
  { name: "Jets", img: "gummi-jets.jpg" },
  { name: "Worms", img: "gummi-worms.jpg" },
  { name: "Frogs", img: "gummi-frogs.jpg" },
];

export const DORITOS = [
  { name: "Flamas", img: "doritos-flamas.jpeg" },
  { name: "Blaze", img: "doritos-blaze.jpeg" },
  { name: "Taco", img: "doritos-taco.jpeg" },
  { name: "Tapatio", img: "doritos-tapatio.jpeg" },
  { name: "Salsa Verde", img: "doritos-salsa-verde.jpeg" },
  { name: "Poppin' Jalepeno", img: "doritos-poppin-jalepeno.jpeg" },
  { name: "Flamin' Hot", img: "doritos-flamin-hot.jpeg" },
  { name: "Jacked Ranch Dipped Hot Wings", img: "doritos-jacked-ranch-dipped-hot-wings.jpeg" },
  { name: "Spicy White Cheddar", img: "doritos-spicy-white-cheddar.jpeg" },
  { name: "Nacho Cheese", img: "doritos-nacho-cheese.jpeg" },
  { name: "Cool Ranch", img: "doritos-cool-ranch.jpeg" },
  { name: "Spicy Sweet Chili", img: "doritos-spicy-sweet-chili.jpeg" },
  { name: "Chile Limon", img: "doritos-chile-limon.jpeg" },
  { name: "Spicy Nacho", img: "doritos-spicy-nacho.jpeg" },
];

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
