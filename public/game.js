document.addEventListener('keyup', (event) => {
  if(event.key == 'ArrowUp'){
    const rect = document.getElementById('rectangle');
    rect.style.top = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) + 10 + "px";
    console.log('hi',rect.style.top);
  }
  if(event.key == 'ArrowDown'){
    const rect = document.getElementById('rectangle');
    rect.style.top = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) - 10 + "px";
    console.log('hi',rect.style.top);
  }
  if(event.key == 'ArrowLeft'){
    const rect = document.getElementById('rectangle');
    rect.style.left = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) + 10 + "px";
    console.log('hi',rect.style.top);
  }
  if(event.key == 'ArrowRight'){
    const rect = document.getElementById('rectangle');
    rect.style.left = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) - 10 + "px";
    console.log('hi',rect.style.top);
  }

})
