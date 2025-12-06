document.addEventListener('keyup', (event) => {
  const rect = document.getElementById('oval');
  if(event.key == 'ArrowUp'){
    rect.style.top = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) - 10 + "px";

  } else if(event.key == 'ArrowDown'){
    rect.style.top = parseInt(window.getComputedStyle(rect).getPropertyValue('top'),10) + 10 + "px";

  } else if(event.key == 'ArrowLeft'){
    rect.style.left = parseInt(window.getComputedStyle(rect).getPropertyValue('left'),10) - 10 + "px";

  } else if(event.key == 'ArrowRight'){
    rect.style.left = parseInt(window.getComputedStyle(rect).getPropertyValue('left'),10) + 10 + "px";
  }
})

//Detect touch device
function isTouchDeviceFn() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const isTouchDevice = isTouchDeviceFn()

const move = (e) => {
  const rect = document.getElementById("rectangle");

  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  rect.style.left = x - 50 + "px";
  rect.style.top = y - 50 + "px";
};

//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});

if (isTouchDevice) {
  //For touch
  document.addEventListener("touchmove", (e) => {
    move(e);
  });
}
