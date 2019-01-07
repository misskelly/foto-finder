class Foto {
  constructor(id, title, file) {
    this.id = id;
    this.title = title;
    this.caption = caption;
    this.file = file;
    this.fav = true || false;
  }

  saveToStorage(fotoArr) {
    let stringified = JSON.stringify(fotoArr);
    localStorage.setItem("savedFotos", stringified);
  }

  deleteFromStorage() {

  }
  updateFoto() {

  }
}
