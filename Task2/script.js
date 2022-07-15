const color = ["blue", "black", "red", "green", "brown", "pink"];
let selectedColor = null;
function changebackground() {
  const random = Math.floor(Math.random() * color.length);
  console.log(color[random]);
  if (selectedColor === color[random]) {
    document.body.style.backgroundColor = color[random];

    alert("color matched");
  } else {
    selectedColor = color[random];
    document.body.style.backgroundColor = color[random];
    alert("color not matched");
  }
}
