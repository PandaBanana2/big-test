function styleValue(element,label){
  return parseInt(window.getComputedStyle(element).getPropertyValue(label),10);
}

function isCollide() {
  const oval = document.getElementById('oval');
  const rect = document.getElementById('rectangle');
  console.log("collide");
    return !(
        ((styleValue(oval,"top") + styleValue(oval,"height") < (styleValue(rect,"top")) ||
        (styleValue(oval, "top") > (styleValue(rect,"top") + styleValue(rect,"height")) ||
        ((styleValue(oval,"left") + styleValue(oval,"width") < styleValue(rect, "left") ||
        (styleValue(oval,"left") > (styleValue(rect,"left") + styleValue(rect,"width"))
    );
}

document.addEventListener('keyup', (event) => {
  const oval = document.getElementById('oval');
  if(event.key == 'ArrowUp'){
    oval.style.top = parseInt(window.getComputedStyle(oval).getPropertyValue('top'),10) - 10 + "px";
    if(isCollide()==true){
    console.log("collided!")}

  } else if(event.key == 'ArrowDown'){
    oval.style.top = parseInt(window.getComputedStyle(oval).getPropertyValue('top'),10) + 10 + "px";
      if(isCollide()==true){
        console.log("collided!")}

  } else if(event.key == 'ArrowLeft'){
    oval.style.left = parseInt(window.getComputedStyle(oval).getPropertyValue('left'),10) - 10 + "px";
      if(isCollide()==true){
     console.log("collided!")}

  } else if(event.key == 'ArrowRight'){
    oval.style.left = parseInt(window.getComputedStyle(oval).getPropertyValue('left'),10) + 10 + "px";
    if(isCollide()==true){
     console.log("collided!")}

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
if(isCollide()==true){
     console.log("collided!")}


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


