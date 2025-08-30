function generateTriangle(height) {
  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j < i + 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}

generateTriangle(5);
