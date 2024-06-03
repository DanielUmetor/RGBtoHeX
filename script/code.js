function convertToHex() {
    let red = parseInt(document.getElementById('red').value);
    let green = parseInt(document.getElementById('green').value);
    let blue = parseInt(document.getElementById('blue').value);
  
    let hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  
    document.getElementById('hexValue').innerText = hex;
  }
  
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  