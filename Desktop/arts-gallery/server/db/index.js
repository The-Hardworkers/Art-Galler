/**
 * Your Database Connection comes here
 */
 const mongoose =require ("mongoose") ;

 // connect to the data base :
 mongoose.connect('mongodb://localhost:27017/paintings-management', () => {
     console.log(" successfully connected to the data base ") ;
 });

 module.exports = mongoose