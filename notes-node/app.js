console.log( "Starting app.js" );

const aFile = require( 'fs' );
const anOS = require( 'os' );
const notesService = require( './notes.js' );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );

console.log( "--------------Example code to use File System -----" );
// Example code to use File System
aFile.appendFile( "newfile.txt", "First name: Ananth Krishnan", function( err ) {
  if( err ) {
    console.log( "Error occurred while writing to file...")
  }
});

console.log( "--------------Example code to use OS user details ------" );
// Example code to use OS user details
var userInfo = anOS.userInfo();
aFile.appendFile( "newfile.txt", `First name: Ananth Krishnan Sudo as: ${userInfo.username}`, function( err ) {
  if( err ) {
    console.log( "Error occurred while writing to file...")
  }
})
console.log( "User info is: " +  userInfo.username );

// console.log( "--------------Example code for using notes.js file -----" );
// // Example code for using notes.js file
// console.log( `You are now ${notesService.age} years old!!` );
// console.log( `Next year you will be: ${notesService.addAge()} years old`);
//
// var newAge = notesService.addAge();
// console.log( "New age is: " + newAge );
//
// var sum = notesService.add( 2, 3 );
// console.log( "Sum of 2 and 3 is: " + sum );

console.log( "----------Example to use lodash -----" );
// Example to use lodash
console.log( "Is 5 a string? " + _.isString( 5 ));
console.log( "Is Boolean true is a string? " + _.isString( true ));
console.log( "Is logged in user name " + userInfo.username + " is a String? " + _.isString( userInfo.username ))

var unfilteredArray = ['NodeJS', 'nodeJS', 1, 2, 3, 'Ananth', 4, 1, 3, 'Ananth', "name2" ];
var filteredArray = _.uniq( unfilteredArray );
console.log( "UnFiltered array is: " + unfilteredArray );
console.log( "Filtered array is: " + filteredArray );

console.log( "----------Input of command line args -----" );
var yargsCommand = yargs.argv;
console.log( "Printing command line args[]:" + process.argv );
console.log( yargs.argv );

var inputCommand = process.argv[2];

if( inputCommand === 'list' ) {
  console.log( "Listing notes, command is: " + inputCommand );
}
else if( inputCommand === 'read' )  {
  console.log( "Read a note, command is: " + inputCommand );
  notesService.getNote( yargs.argv['title'] );
}
else if( inputCommand === 'remove' )  {
  console.log( "Removing a Note, command is: " + inputCommand );
  notesService.removeNote( yargs.argv.title );
}
else if( inputCommand === 'add' )  {
  console.log( "Adding a note, command is: " + inputCommand );
}
else  {
  console.log( "Command not recognized" );
}

//---
console.log( yargs.argv.title );
console.log( yargs.argv.body );
//notesService.addNode( yargs.argv[] );
