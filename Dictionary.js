var wordsArr = []

function addWord() {
  var newWord = document.getElementById("newWord").value
  if (wordsArr.includes(newWord)) {
    alert("The word: '" + newWord + "' is already in the dictionary, please try another one.")
  } else {
    wordsArr.push(newWord)
  }
  //alert(wordsArr[wordsArr.length - 1])
  document.getElementById("newWord").value = ''
}

function checkWord() {
  var checkedWord = document.getElementById("checkedWord").value
  if (wordsArr.includes(checkedWord)) {
    alert("The word: '" + checkedWord + "' is already in the dictionary.")
  } else {
    alert("The word: '" + checkedWord + "' is not found in the dictionary.")
  }
  document.getElementById("checkedWord").value = ''
}