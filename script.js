document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  if (nome && telefone) {
    const contactList = document.getElementById('contact-list');
    const newRow = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = nome;
    
    const phoneCell = document.createElement('td');
    phoneCell.textContent = telefone;
    
    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);
    contactList.appendChild(newRow);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
  }
});
