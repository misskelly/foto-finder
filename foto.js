class Foto {
  constructor(id, title, caption) {
    this.id = id;
    this.title = title;
    this.caption = caption;
    // this.file = file;
    this.fav = false;
  }

  saveToStorage(array) {
    var stringified = JSON.stringify(array);
    localStorage.setItem("storedFotos", stringified);
  }

  deleteFromStorage(index, array) {
    array.splice(index, 1);
    this.saveToStorage(array);
  }
}

  // updateFoto(change, key) {
  //   this [key] = change;
  // }

