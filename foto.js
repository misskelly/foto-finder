class Foto {
  constructor(id, title, caption) {
    this.id = id;
    this.title = title;
    this.caption = caption;
    // this.file = file;
    this.fav = true || false;
  }

  saveToStorage(array) {
    var stringified = JSON.stringify(array);
    localStorage.setItem("storedFotos", stringified);
  }

  deleteFromStorage() {
  }
  updateFoto() {

  }
}
