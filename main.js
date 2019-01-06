// /VARIABLES

var searchInput = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-btn');
var titleInput = document.querySelector('.title-input');
var capInput = document.querySelector('.cap-input');
var chooseFileBtn = document.querySelector('.choose-btn');
var viewFavsBtn = document.querySelector('.view-favs-btn');
var addFotoBtn = document.querySelector('.add-btn');
var trashBtn = document.querySelector('.trash');
var favBtn = document.querySelector('.heart');
var fotoArr = JSON.parse(localStorage.getItem('photos')) || [];

///////////

var create = document.querySelector('button');
var input = document.querySelector('input');
var photoGallery = document.querySelector('.images');
// [X]var imagesArr = JSON.parse(localStorage.getItem('photos')) || []; 
var reader = new FileReader();



window.addEventListener('load', appendPhotos);
create.addEventListener('click', createElement);

function appendPhotos() {
  fotoArr.forEach(function (photo) {
    photoGallery.innerHTML += `<img src=${photo.file} />`
  })
}

function createElement() {
  // console.log(input.files[0])
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]); 
    reader.onload = addFoto
  }
}

function addFoto(e) {
  // console.log(e.target.result);
  var newPhoto = new Foto(Date.now(), e.target.result);
  photoGallery.innerHTML += `<img src=${e.target.result} />`;
  fotoArr.push(newPhoto)
  newPhoto.saveToStorage(fotoArr)
}