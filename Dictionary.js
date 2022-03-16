const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//const fruits = ["Banana", "Orange", "Apple"];
//fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


//document.getElementById("demo").innerHTML = ages.find(checkAge);



//const ages = [3, 10, 18, 20];

//function checkAge(age) {
//  return age > 18;
//}

//function myFunction() {
//  document.getElementById("demo").innerHTML = ages.find(checkAge);
//}



function addWord() {
  //alert("test test")
  var newWord = document.getElementById("newWord").value
  alert(newWord)
  cars.push(newWord)
  alert(cars[3])
}


var searchedWord

function searchWord() {
  searchedWord = document.getElementById("searchedWord").value
  alert(searchedWord)
  //salert(cars.find(checkWord)
  var found = cars.includes(searchedWord);
  alert(found)
}




var randomNr
function luckyButton(clicked_id) {
  if (clicked_id == randomNr) {
    alert("You clicked the lucky button!")
  } else {
    alert("You didn't click the lucky button! The lucky button is: " + randomNr)
  }
}


function addButtons() {
  var buttonsNr = document.getElementById("buttonsNr").value
  if (buttonsNr < 2) {
    alert("Minimum buttons nr is 2, the game will restart.")
    restartTheGame();
  } else {
    randomNr = Math.floor((Math.random() * buttonsNr) + 1)
    submitButton.disabled = true
    for (let i = 1; i <= buttonsNr; i++) {
      buttonsGroup.innerHTML += ('\
        <button type="button" class="btn btn-outline-primary" id="' + i + '" onclick="luckyButton(this.id)">Button ' + i + '</button>\
      ')
    }
  }
  return false;
}

function restartTheGame() {
  window.location.reload()
}