document.addEventListener('keyup', (event) => {
  if(event.key == 'ArrowUp'){
    const rect = document.getElementById('rectangle');
    rect.style.top = parseInt(window.getComputerStyle.getPropertyValue('top'),10) + 10 + "px";
    console.log('hi',rect.style.top);
  }
})
