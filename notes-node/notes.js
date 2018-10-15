console.log( "Starting notes.js" );

// console.log( module );
module.exports.age = 43;

// module.exports.addAge = () => {
//   console.log( "addAge() function is invoked!..." );
//   return "44";
// }
//
// module.exports.add = ( a, b ) => {
//   console.log( "Input value of a is: " + a +" and second variable is: " + b );
//   return a + b;
// }

var addNote = ( title, body ) => {
  console.log( "Add note", title, body );
}

var removeNote = ( title ) => {
  console.log( "Removing note - ", title );
}

var getAll = () => {
  console.log( 'Getting all notes' );
}

var getNote = ( title ) => {
  console.log( "Title is: ", title );
}

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote
}
