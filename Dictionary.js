    print("Hello, please write a word in the below space and then you can check if it exists in the dictionary</br> If the word does not exist in the dictionary, you can add it!");
    const dictionary = Array();

    function searchWord() {
      if (document.getElementById("text").value != "") {
        print("This word does not exist in this dictionary.</br> You can add it if you click the -Add word to dictionary- button!");
        if (dictionary.includes(document.getElementById("text").value) == true) {
          print("The searched word, is already in the dictionary</br>You can write a new word if you like.");
          document.getElementById("text").value = "";       
        }
      }
    }

    function addElementToArray() {
      if (document.getElementById("text").value != "") {
        dictionary.push(document.getElementById("text").value);
        print("The word, was successfully added to the dictionary.</br>You can write a new word if you like.");
        document.getElementById("text").value = "";
      }
    }

    function print(str) {
      return document.getElementById("mesage").innerHTML = str;
    }