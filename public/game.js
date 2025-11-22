document.addEventListener('keyup', (event) => {
  if(event.key == 'ArrowUp'){
    console.log('up arrow pressed')
    const rect = document.getElementById('rect');
    rect.style.top = parseInt(rect.style.top,10) + 10 + "px"
  }
})
