// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let monicaColors = ['Yellow', 'Pink', 'White', 'Purple'];
let wendyColors = ['Blue', 'Black', 'Gray'];

let education = new Map();
education.set("monica",["name: SMA 03, city: Tangerang"]);
education.set("monica",["name: SMP 02, city: Jakarta, graduate: 2019", ...education.get('monica')]);
education.set("monica",["name: SD 01, city: Jakarta, graduate: 2016", ...education.get('monica')]);

education.set("wendy",["name: Universitas Maju, city: Tangerang"]);
education.set("wendy",["name: SMA 01, city: Surabaya, graduate: 2016", ...education.get('wendy')]);
education.set("wendy",["name: SMP 03, city: Bogor, graduate: 2013", ...education.get('wendy')]);
education.set("wendy",["name: SD 02, city: Bogor, graduate: 2010", ...education.get('wendy')]);

let monicaFavoriteResto = new Set();
monicaFavoriteResto.add("Bento");
monicaFavoriteResto.add("Sushi");
monicaFavoriteResto.add("Pancake");
monicaFavoriteResto.add("Tempura");
monicaFavoriteResto.add("Bento");
monicaFavoriteResto.add("Eggy");
monicaFavoriteResto.add("Padang");
monicaFavoriteResto.add("Tteok");
monicaFavoriteResto.add("Sushi");
monicaFavoriteResto.add("Sushi");

let monicaUniqueResto = [...new Set(monicaFavoriteResto)];

let wendyFavoriteResto = new Set();
wendyFavoriteResto.add("Tempura");
wendyFavoriteResto.add("Bento");
wendyFavoriteResto.add("Sushi");
wendyFavoriteResto.add("Pancake");
wendyFavoriteResto.add("Padang");
wendyFavoriteResto.add("Katsu");
wendyFavoriteResto.add("Geprek");
wendyFavoriteResto.add("Pancake");
wendyFavoriteResto.add("Eggy");

let wendyUniqueResto = [...new Set(wendyFavoriteResto)];

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: monicaColors,
  isHavePet: true,  
  education: education.get('monica'),
  favoriteRestaurant: monicaUniqueResto,
}

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: wendyColors,
  isHavePet: false,
  education: education.get('wendy'),
  favoriteRestaurant: wendyUniqueResto,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};