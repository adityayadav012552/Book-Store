// book constructor
function Book(title, author, ISBN) {
   this.title = title;
   this.author = author;
   this.ISB = ISBN;
}

// UI constructor
function UI() { }

// Event Listner for adding a book
UI.prototype.addBooktoList = function (book) {
   const list = document.getElementById('book-list');

   // create tr
   const row = document.createElement('tr');
   // insert cols
   row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">x<a></td>
      `;
   list.appendChild(row);
}

// clear fields
UI.prototype.clearFields=function(){
   document.getElementById('title'),value='';
   document.getElementById('author'),value='';
   document.getElementById('isbn'),value='';
}

// show Alert
UI.prototype.showAlert=function(message,className){
   const div=document.createElement('div');
   // Add className
   div.className=`alert ${className}`;
   // Add text
   div.appendChild(document.createTextNode(message));

   // Get Parent
   const container=document.querySelector('.container');
   const form=document.getElementById('book-form');
   
   container.insertBefore(div,form);

   // dissaper after 3 sec
   setTimeout(function(){
      document.querySelector('.alert').remove();

   },2500);
}
// delete book

UI.prototype.deleteBook=function(target){
   if(target.className==='delete'){
      target.parentElement.parentElement.remove();
   }
}

// Event Listners
document.getElementById('book-form').addEventListener('submit', function (e) {
   const title = document.getElementById('title').value, author = document.getElementById('author').value, isbn = document.getElementById('isbn').value;
   // Instiate book
   const book = new Book(title, author, isbn);

   // Institate UI
   const ui = new UI();

   // validate
   if(title===''|| author===''|| isbn===''){
      // Error Alert
      ui.showAlert('Please fill all the required field','error')
   }
   else{
      // Add book to list
      ui.addBooktoList(book);

      // success book added
      ui.showAlert('Congratulation! Book Added','success')
      // clear field
      ui.clearFields();
   }
   e.preventDefault();
});

// Event Listner for Delete
document.getElementById('book-list').addEventListener('click',function(e){

   
   // Institate UI
   const ui = new UI();
   // deleted succesfully
   ui.deleteBook(e.target);
   // show Message
   ui.showAlert('Succesfully Deleted','success');

   e.preventDefault();
});

