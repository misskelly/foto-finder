// /VARIABLES

// var searchInput = document.querySelector('.search-input');
// var searchBtn = document.querySelector('.search-btn');
var titleInput = document.querySelector('.title-input');
var capInput = document.querySelector('.cap-input');
var uploadImg = document.querySelector('.addFile');
// var viewFavsBtn = document.querySelector('.view-favs-btn');
var addFotoBtn = document.querySelector('.add-btn');
// var trashBtn = document.querySelector('.trash');
// var favBtn = document.querySelector('.heart');
var gallery = document.querySelector('.gallery')
var fotoArr = JSON.parse(localStorage.getItem('savedFotos')) || [];

///////////

// [X] 9 var create = document.querySelector('button');
// [X] 7 var input = document.querySelector('input');
// [X] 12 var photoGallery = document.querySelector('.images');
// [X] 13 var imagesArr = JSON.parse(localStorage.getItem('photos')) || []; 
var reader = new FileReader();



window.addEventListener('load', appendPhotos);
// [X] 27 create.addEventListener('click', createElement);
addFotoBtn.addEventListener('click', createElement);

function appendPhotos() {
  fotoArr.forEach(function (foto) {
    gallery.innerHTML += `<article class="demo-foto card">
        <h4 class="card-title">
          ${titleInput.value}
        </h4>
        <div class="image-container">
          <img class="foto" src="${foto.file}">
        </div>
        <p class="caption">
          ${capInput.value}
        </p>
        <form class="card-buttons">
          <button class="trash card-btn">
            <img src="resources/images/delete.svg" class="trash-icon card-svg">
          </button>
          <button class="heart card-btn">
            <img src="resources/images/favorite.svg" class="heart-icon card-svg">
          </button>
        </form>
      </article>`
  })
}

function createElement() {
  // e.preventDefault();
  console.log(uploadImg.files[0])
  if (uploadImg.files[0]) {
    reader.readAsDataURL(uploadImg.files[0]); 
    reader.onload = addFoto;
  }
}

function addFoto(e) {
  console.log(e.target.result);
  var newFoto = new Foto(Date.now(), e.target.result);
  gallery.innerHTML += `<img src=${e.target.result} />`;
  fotoArr.push(newFoto);
  newFoto.saveToStorage(fotoArr),
}

