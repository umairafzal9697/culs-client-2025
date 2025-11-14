function changeColor(button) {
  const card = button.parentElement;

  const colors = [
    "#ffe0e0",
    "#e0ffe0",
    "#e0e8ff",
    "#fff0cc",
    "#f2e0ff",
    "#d9f7ff"
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  card.style.background = randomColor;
}
