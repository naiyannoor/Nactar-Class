// script.js
const studentForm = document.getElementById('studentForm');
const list = document.getElementById('list');

studentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const studentClass = document.getElementById('class').value;
  const documentType = document.getElementById('document').value;

  const listItem = document.createElement('li');
  listItem.textContent = `${name} (${age} years old) - Class ${studentClass} - Document: ${documentType}`;

  list.appendChild(listItem);

  studentForm.reset();
});
