// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);

        for (i = 0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);

            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        }

        var myString = "";
        for (i = 0; i < myStuff.presidents.length; i++) {
            var x = i + 1;
            myString += "President " + x + " was ";
            myString += myStuff.presidents[i].first + " ";
            myString += myStuff.presidents[i].last + " <br>";
        }
        document.getElementById('message').innerHTML = myString;
    } // end if
} // end function

