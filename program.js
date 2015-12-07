//1
//console.log("HELLO WORLD");

//----------------------------------------------------
//2
// var result = 0;
// for (var i = 2; i < process.argv.length; i++) {	
// 	// console.log(process.argv[i]);
// 	result += Number(process.argv[i]);
// };
// console.log(result);

//----------------------------------------------------------
// 3
// var fs = require('fs');

// var buf = fs.readFileSync(process.argv[2]);

// var str = buf.toString();

// var noOfNewLines = str.split('\n');

// console.log(noOfNewLines.length-1);
//--------------------------------------------------------------

// 4


// var fs = require('fs');

// fs.readFile(process.argv[2],'utf-8',cb);

// function cb(err, data){
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(data.split('\n').length-1);
// 	}
// }

// 5