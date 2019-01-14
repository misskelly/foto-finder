// /VARIABLES

// var viewFavsBtn = document.querySelector('.view-favs-btn');
// var trashBtn = document.querySelector('.trash');
// var favBtn = document.querySelector('.heart');



var searchInput = document.querySelector('.search-input');
var titleInput = document.querySelector('.title-input');
var capInput = document.querySelector('.cap-input');

var fileInput = document.querySelector('.add-file');
// var chooseFileBtn = document.querySelector('.choose');
var addFotoBtn = document.querySelector('.add-btn');

var showMoreBtn = document.querySelector('.show-more');
var gallery = document.querySelector('.gallery')
var fotoArr = JSON.parse(localStorage.getItem("storedFotos")) || [];
// var reader = new FileReader();


///////////


window.addEventListener('load', pageLoad);

searchInput.addEventListener('input', search)
addFotoBtn.addEventListener('click', createElement);
// gallery.addEventListener('dblclick', editText);
gallery.addEventListener('click', clickCatcher);
showMoreBtn.addEventListener('click', moreLess);


////////
// var create = document.querySelector('button');
// var input = document.querySelector('input');
// var photoGallery = document.querySelector('.images');
// var imagesArr = JSON.parse(localStorage.getItem('photos')) || [];
var reader = new FileReader();

// window.addEventListener('load', appendPhotos);
// create.addEventListener('click', createElement);

// function appendPhotos() {
//   imagesArr.forEach(function (photo) {
//     photoGallery.innerHTML += `<img src= />`
//   })
// }

function createElement() {
  console.log(fileInput.files[0])
  if (fileInput.files[0]) {
    reader.readAsDataURL(fileInput.files[0]); 
    reader.onload = saveFoto;
  }
}

// function addPhoto(e) {
//   // console.log(e.target.result);
//   var newPhoto = new Photo(Date.now(), e.target.result);
//   photoGallery.innerHTML += `<img src=${e.target.result} />`;
//   imagesArr.push(newPhoto)
//   newPhoto.saveToStorage(imagesArr)
// }

//////////



function saveFoto(e) {
  var newFoto = new Foto(Date.now(), titleInput.value, capInput.value, e.target.result);
  fotoArr.push(newFoto);
  newFoto.saveToStorage(fotoArr);
  addFoto(newFoto);
}


function addFoto(foto) {
  gallery.insertAdjacentHTML('afterbegin',
    `<article data-id=${foto.id} class="card">
        <h4 class="card-title">
          ${foto.title}
        </h4>
        <div class="image-container">
          <img class="foto" src="${foto.file}">
        </div>
        <p class="card-caption">
          ${foto.caption}
        </p>
        <form class="card-buttons">
          <button class="trash-btn card-btn">
            <img src="resources/images/delete.svg" class="trash card-svg">
          </button>
          <button class="heart-btn card-btn">
            <img src="resources/images/favorite.svg" class="heart card-svg">
          </button>
        </form>
      </article>`);
}

function pageLoad() {
  appendFotos();
  instFoto();
}

function appendFotos() {
  if (fotoArr.length === 0) {
    gallery.insertAdjacentHTML('afterbegin',
      `<article>
          <h5>Add photos to your gallery!
          </h5>
      </article>`);
  } else if (fotoArr.length <= 10) {
    showAll();
    showMoreBtn.style.display = "none";
  } else if (fotoArr.length >= 11) {
    showTen();
    showMoreBtn.disabled = false;
  }
}

function instFoto() {
  fotoArr.forEach(function(foto) {
    var fotoObj = new Foto(foto.id, foto.title, foto.caption);
  });
}

// var photoObj = new Photo(image.title, image.caption, image.file, image.favorite, image.id);

function showAll() {
  gallery.innerHTML = "";
  fotoArr.forEach(function(foto) {
    addFoto(foto);
  });
  if (fotoArr.length >= 11) {
    showMoreBtn.innerText = "Show Less";
  }
}

function showTen() {
  // debugger
  var tenFotos = fotoArr.slice(-10);
  gallery.innerHTML = '';
  tenFotos.forEach(function(foto) {
    addFoto(foto);
  });
}


function moreLess() {
  if (showMoreBtn.innerText === "Show More") {
    showAll(); 
  } else if (showMoreBtn.innerText === "Show Less") {
    showTen();
    showMoreBtn.innerText = "Show More";
  } 
}

function search() {
  gallery.innerHTML = "";
  var query = searchInput.value;
  var filteredCards = fotoArr.filter(function(foto) {
    return foto.title.toLowerCase().includes(query) || foto.caption.toLowerCase().includes(query);
  });
  filteredCards.forEach(function(foto) {
    addFoto(foto);
  });
}

// function editText(event) {
//   var domFoto = parseInt(event.target.parentElement.dataset.id);
//   var lsFoto = fotoArr.find(function(foto) {
//     return foto.id === domFoto;
//   });
//   event.target.contentEditable = true;
//   console.log(lsFoto);
//   if (event.target.classList.contains("card-title")) {
//     lsFoto.updateFoto(event.target.value, "title");
//   } else if (event.target.classList.contains("card-caption")) {
//     lsFoto.updateFoto(event.target.value, "caption");
//   }
//   // document.body.addEventListener('keyup', function(e) {
//   //   if (e.keycode === 13) {
//   //     saveChanges();
//   //   }
//   // });
//   event.target.addEventListener('focusout', function() {
//     lsFoto.saveToStorage(fotoArr);
//   });
//   event.target.contentEditable = false;
// }

function clickCatcher(e) {
  e.preventDefault();
  let targetCard = e.target.parentElement.parentElement.parentElement;
  let cardId = parseInt(targetCard.dataset.id);
  let whichButton = e.target.className;
  // console.log(targetCard, cardId, whichButton);
  targetCard.parentNode.removeChild(targetCard);
  if (whichButton = 'trash') {
    deleteFoto(cardId);
  }
}

function deleteFoto(trashedId) {
  let index = fotoArr.findIndex(function(foto) {
    return foto.id === trashedId;
  });
  let trashed = new Foto(trashedId, '', '')
  trashedId.toString();
  trashed.deleteFromStorage(index, fotoArr);
  window.location.reload();
}

// function saveFoto() {
//   let newFoto = new Foto(Date.now(), titleInput.value, capInput.value);
//   fotoArr.push(newFoto);
//   newFoto.saveToStorage(fotoArr);
//   addFoto(newFoto);
// }







// function unstringify(e) {
//   JSON.parse(fotoArr);
// }



// function createElement(e) {
//   e.preventDefault();
//   console.log(uploadImg.files[0])
//   if (uploadImg.files[0]) {
//     reader.readAsDataURL(uploadImg.files[0]); 
//     reader.onload = addFoto;
//   }
// }





