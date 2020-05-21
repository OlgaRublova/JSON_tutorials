// JSON Syntax
// var start = '{"favFood":"indian", "favDrink":"Coffee"}';
// var myObject  = JSON.parse(start);
// console.log(myObject);
//
// var myString = JSON.stringify(myObject);
// console.log(myString);

//Single Level JSON Data
// var theData1 = '{"name":"Olga", "age":"29"}';
// var myObject  = JSON.parse(theData1);
// console.log(myObject);
//
// document.getElementById("message").innerHTML =  myObject.name;

//Double Level JSON Data
// var theData2 = '{"Olga":{"hair":"blonde", "age":"29"}, "Elena":{"hair":"dark", "age":"38"}}';
// var myObject  = JSON.parse(theData2);
// console.log(myObject);
//
// document.getElementById("message").innerHTML =  myObject.Olga.hair;

//Triple Level JSON Data
// var theData3 = '{"Olga":{"hair":{"blonde": "long", "red": "medium"}, "age":"29"}, "Elena":{"hair":"dark", "age":"38"}}';
// var myObject  = JSON.parse(theData3);
// console.log(myObject);
//
// document.getElementById("message").innerHTML =  myObject.Olga.hair.blonde;

//External JSON Data
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'data.json', true);
//
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     console.log(xhr.status);
//     console.log(xhr.statusText);
//     console.log(xhr.readyState);
// }
//
// xhr.onload = function(){
//     if(xhr.status === 200){
//         var myStuff = JSON.parse(xhr.responseText);
//         console.log(myStuff);
//     }
// }
//
// xhr.send();
