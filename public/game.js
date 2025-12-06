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

//Detect touch device
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  let myDiv = document.getElementById("rectangle");
  console.log("MYDIV: ", myDiv);

  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  myDiv.style.left = x - 50 + "px";
  myDiv.style.top = y - 50 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});
