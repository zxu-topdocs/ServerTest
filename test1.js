const fs = require('fs');
const myfiles = fs.readdir('./', function(err,files){
         if (err) console.log('error', err);
         else console.log("result", files);
})|"ascii";

const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('somethinghappen', (arg)=>{return console.log("something is happen", arg)});

emitter.emit('somethinghappen', {id:1, mydata:'first time events'});





// fs.readdir('./', function(err,files){
//     if (err) console.log('error', err);
//     else console.log("result", files);
// });

// class fileTest{   

//     myFiles(){
//         return files
//     };
    
//     writetoMyFile(filename, myText) {
//         fs.writeFile(filename, myText, (err) => {  
//             throws an error, you could also catch it here
//             if (err) throw err;
        
//             success case, the file was saved
//             console.log('myText saved!');
//         });
//     };

   

// }


// module.exports =fileTest;

