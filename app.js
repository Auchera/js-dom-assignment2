

  

  //! COLOR SHIFTING FUNCTION
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorInput').value = randomColor;
    document.getElementById('colorText').innerText = `Seçilen Renk: ${randomColor}`;
  }

  //! EVENTS
  document.querySelector('.btn-click').addEventListener('click', changeBackgroundColor);
  document.querySelector('.btn-over').addEventListener('mouseover', changeBackgroundColor);
  
  document.getElementById('copy').addEventListener('click', function() {
 
    //! COPY AND ALERT
    const selectedColor = document.getElementById('colorInput').value;
    navigator.clipboard.writeText(selectedColor)
      .then(() => alert(`Renk ${selectedColor} kopyalandı!`))
  });
  
  