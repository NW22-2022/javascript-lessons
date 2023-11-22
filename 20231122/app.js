const text = document.querySelectorAll(".msg");
console.log(text);

// text[0].innerHTML = "<em>こんちゃー</em>";
// text[1].innerHTML = "<em>こんちゃー</em>";
// text[2].innerHTML = "<em>こんちゃー</em>";
// text[3].innerHTML = "<em>こんちゃー</em>";

text.forEach(function (elem) {
  elem.innerHTML = "こんちゃ";
});
