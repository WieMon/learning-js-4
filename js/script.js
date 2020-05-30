const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  //h1.textContent = `${e.clientX}, ${e.clientY}`
  h1.textContent = `${e.pageX}, ${e.pageY}`
  h1.textContent = `${e.screenX}, ${e.screenY}`
})