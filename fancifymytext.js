function bigger() {
  document.getElementById("text-area").style.fontSize = "24pt";
}

function fancyShmancy() {
  const textArea = document.getElementById("text-area");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

function boringBetty() {
  const textArea = document.getElementById("text-area");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
}

function moo() {
  const textArea = document.getElementById("text-area");
  var value = textArea.value.toUpperCase();
  var parts = value.split(" ");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].includes(".")) {
      parts[i] = parts[i].slice(0, -1) + "-Moo.";
    }
  }
  value = parts.join(" ");
  textArea.value = value;
}
