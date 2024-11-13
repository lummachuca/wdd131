myInfo = {
  name: "Sister M",
  photo: "images/photo.jpg",
  favoriteFoods: ["Risotto", "Chicken", "Pasta", "Salmon"],
  hobbies: ["Reading", "Singning", "Running"],
  placesLived: [
    {
      place: "Hurlingham, BA",
      length: "22 years",
    },
    {
      place: "Cobilandia, ES",
      length: "4 months",
    },
    {
      place: "Florianopolis, BR",
      length: "1 year",
    },
  ],
};

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1]; 

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3]; 

document.querySelector("#favoite-foods").appendChild(favoriteFood1);
