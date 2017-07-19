document.querySelectorAll('ul[id*=slot]').forEach((swatch,i) => {
  document.getElementById(`slot${i+1}`).innerHTML = swatch.outerHTML;
  swatch.remove();
})

document.querySelectorAll('#mainSwatches').forEach((swatch,i) => {
  document.getElementById('swatches').innerHTML = swatch.outerHTML;
  swatch.remove();
})
