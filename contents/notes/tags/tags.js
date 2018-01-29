const tagTypes = document.querySelectorAll('.tag-types__item');
const table = document.querySelector('.table');
const rows = document.querySelectorAll('.table tr');

function removeActive(tag) {
  tag.classList.remove('active');
}

function addActive(tag) {
  tag.classList.add('active');
}

function handleClick() {
  tagTypes.forEach(tag => removeActive(tag));
  addActive(this);
  this.dataset.tagType === 'reset' ? removeActive(table) : addActive(table);
  this.dataset.tagType === 'reset' ? removeActive(this) : null;
  
  rows.forEach(row => {
    if (this.dataset.tagType === 'reset') {
      removeActive(row);
      return;
    }
    removeActive(row);
    if(row.classList.contains(this.dataset.tagType)) {
      addActive(row);
    }
  })
}

tagTypes.forEach(tag => tag.addEventListener('click', handleClick));