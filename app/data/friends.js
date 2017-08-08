

var friends = [
  {
    name: "Evan",
    photo: "https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png",
    scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

var characters = [
  {
    name: "John Snow",
    photo: "https://media.vanityfair.com/photos/576195600904a5835f0daee5/master/w_768,c_limit/GOT609_091715_HS_DSC_7379%5B1%5D.jpg",
    scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
module.exports = characters;