// /VARIABLES

// var searchInput = document.querySelector('.search-input');
// var searchBtn = document.querySelector('.search-btn');
// var viewFavsBtn = document.querySelector('.view-favs-btn');
// var trashBtn = document.querySelector('.trash');
// var favBtn = document.querySelector('.heart');



var titleInput = document.querySelector('.title-input');
var capInput = document.querySelector('.cap-input');
// var uploadImg = document.querySelector('.add-file');
var addFotoBtn = document.querySelector('.add-btn');
var gallery = document.querySelector('.gallery')
var fotoArr = JSON.parse(localStorage.getItem("storedFotos")) || [];
// var reader = new FileReader();


///////////

// [X] 9 var create = document.querySelector('button');
// [X] 7 var input = document.querySelector('input');
// [X] 12 var photoGallery = document.querySelector('.images');
// [X] 13 var imagesArr = JSON.parse(localStorage.getItem('photos')) || []; 



// window.addEventListener('load', appendPhotos);
// [X] 27 create.addEventListener('click', createElement);

addFotoBtn.addEventListener('click', saveFoto);


// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();

//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }

function saveFoto(e) {
  e.preventDefault();
  let newFoto = new Foto(Date.now(), titleInput.value, capInput.value);
  fotoArr.push(newFoto);
  newFoto.saveToStorage(fotoArr);
  addFoto(newFoto);
}


// function appendPhotos() {
//   fotoArr.forEach(function (foto) {
//     gallery.innerHTML += `<article class="demo-foto card">
//         <h4 class="card-title">
//           ${titleInput.value}
//         </h4>
//         <div class="image-container">
//           <img class="foto" src="resources/images/emotion.jpg">
//         </div>
//         <p class="caption">
//           ${capInput.value}
//         </p>
//         <form class="card-buttons">
//           <button class="trash card-btn">
//             <img src="resources/images/delete.svg" class="trash-icon card-svg">
//           </button>
//           <button class="heart card-btn">
//             <img src="resources/images/favorite.svg" class="heart-icon card-svg">
//           </button>
//         </form>
//       </article>`
//   })
// }

// function createElement(e) {
//   e.preventDefault();
//   console.log(uploadImg.files[0])
//   if (uploadImg.files[0]) {
//     reader.readAsDataURL(uploadImg.files[0]); 
//     reader.onload = addFoto;
//   }
// }

function addFoto(foto) {
  // console.log(e.target.result);
  // var newFoto = new Foto(Date.now(), e.target.result);
  gallery.insertAdjacentHTML('afterbegin',
    `<article data-id=${foto.id} class="card">
        <h4 class="card-title">
          ${foto.title}
        </h4>
        <div class="image-container">
          <img class="foto" src="resources/images/emotion.jpg">
        </div>
        <p class="caption">
          ${foto.caption}
        </p>
        <form class="card-buttons">
          <button class="trash card-btn">
            <img src="resources/images/delete.svg" class="trash-icon card-svg">
          </button>
          <button class="heart card-btn">
            <img src="resources/images/favorite.svg" class="heart-icon card-svg">
          </button>
        </form>
      </article>`);
  console.log(foto.id);
  // fotoArr.push(newFoto);
  // newFoto.saveToStorage(fotoArr);
}




