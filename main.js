// /VARIABLES

// var viewFavsBtn = document.querySelector('.view-favs-btn');
// var trashBtn = document.querySelector('.trash');
// var favBtn = document.querySelector('.heart');



var searchInput = document.querySelector('.search-input');
// var searchBtn = document.querySelector('.search-btn');
var titleInput = document.querySelector('.title-input');
var capInput = document.querySelector('.cap-input');
// var uploadImg = document.querySelector('.add-file');
var addFotoBtn = document.querySelector('.add-btn');
var showMoreBtn = document.querySelector('.show-more');
var gallery = document.querySelector('.gallery')
var fotoArr = JSON.parse(localStorage.getItem("storedFotos")) || [];
// var reader = new FileReader();


///////////

// [X] 9 var create = document.querySelector('button');
// [X] 7 var input = document.querySelector('input');
// [X] 12 var photoGallery = document.querySelector('.images');
// [X] 13 var imagesArr = JSON.parse(localStorage.getItem('photos')) || []; 



window.addEventListener('load', pageLoad);
// [X] 27 create.addEventListener('click', createElement);
searchInput.addEventListener('input', search)
addFotoBtn.addEventListener('click', saveFoto);
// gallery.addEventListener('dblclick', editText);
gallery.addEventListener('click', clickCatcher);
showMoreBtn.addEventListener('click', moreLess);



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

function saveFoto() {
  let newFoto = new Foto(Date.now(), titleInput.value, capInput.value);
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
          <img class="foto" src="resources/images/emotion.jpg">
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
  let whichButton = event.target.className;
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





