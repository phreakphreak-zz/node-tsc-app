//let editBook = document.getElementById("editBook");


let editBooks = document.getElementsByName("editBook");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopup = document.getElementById("btn-cerrar-popup");
let bookTitle = document.getElementsByClassName("bookTitle");
let bookAuthor = document.getElementsByClassName("bookAuthor");
let bookIsbn = document.getElementsByClassName("bookIsbn");


editBooks.forEach((editBook) => {
  editBook.addEventListener("click", function () {

    overlay.classList.add("active");
    popup.classList.add("active");
  });
});

btnCerrarPopup.addEventListener("click", function () {
  overlay.classList.remove("active");
  popup.classList.remove("active");

});
