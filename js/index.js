
function cambiarVentana(event) {
    event.preventDefault();
    const input = document.querySelector('.busq').value.toLowerCase();
    switch(input) {
        case 'matematicas':
            window.location.href = 'matematicas.html';
            break;
    }
}

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contactModal').style.display = 'flex';
});

function closeModal() {
    const modalContent = document.querySelector('.part-contenido');
    modalContent.classList.add('cerrar');
    setTimeout(()=>{
        document.getElementById('contactModal').style.display = 'none';
        modalContent.classList.remove('cerrar');
    },700);
}


function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    if(sidebar.style.width === "250px"){
        sidebar.style.width = "0";
    }else{
        sidebar.style.width = "250px"
    }
}

window.onclick = function(event) {
    if (event.target === document.getElementById('contactModal')) {
        closeModal();
    }
}


function enviarCorreo(){
    const nombre = document.getElementById("nombreC").value;
    const codigo = document.getElementById("codigo").value;
    const correo = document.getElementById("correo").value;
    const carrera = document.getElementById('carrera').value;
    const grado = document.getElementById('grado').value;
    const materia = document.getElementById('materia').value;
    const esp = document.getElementById('esp').value;
    const promM = document.getElementById('promedioM').value;
    const promG = document.getElementById('promedioG').value;


    const dest = "luisangelalatorremorales299@gmail.com";
    const asunto = "Participacion en Paro";
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCodigo: ${codigo}\nCorreo: ${correo}\nCarrera: ${carrera}\nGrado: ${grado}\nMateria a participar: ${materia}\nEspecialidad: ${esp}\nPromedio de materia: ${promM}\nPromedio General ${promG}`);

    const mailtoLink = `mailto:${dest}?subject=${asunto}&body=${cuerpo}`;

    window.location.href = mailtoLink;

}

function toggleCon(){
    const togglet = document.getElementById("toggle");
    const hiddent = document.getElementById("hidden");
    
    togglet.addEventListener("click", () => {
        if (hiddent.style.opacity === "0" || hiddent.style.opacity === "") {
            hiddent.style.opacity = "1";
        } else {
            hiddent.style.opacity = "0";
        }
    });
}


document.addEventListener("DOMContentLoaded", toggleCon);



const maxWords = 50; 
const bannedWords = ['baboso', 'malo', 'violento', 'spam', 'mala', 'idiota', 'idiot', 'pendejo' ]; 

const suggestionBox = document.getElementById('suggestionBox');
const wordCounter = document.getElementById('wordCounter');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('submitButton'); 

suggestionBox.addEventListener('input', function() {
  const text = suggestionBox.value.trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  wordCounter.textContent = `Palabras: ${wordCount}/${maxWords}`;

  if (wordCount > maxWords) {
      suggestionBox.style.borderColor = 'red';
  } else {
      suggestionBox.style.borderColor = '#ccc';
  }
  errorMessage.textContent = '';
  let containsBannedWord = false;
  for (let word of bannedWords) {
      if (text.toLowerCase().includes(word)) {
          errorMessage.textContent = `Palabra prohibida: ${word}`;
          containsBannedWord = true;
          break;
      }
  }

 
  submitButton.disabled = containsBannedWord || wordCount > maxWords;
});

function submitSuggestion() {
  const text = suggestionBox.value.trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  if (wordCount > maxWords) {
      errorMessage.textContent = `Excediste el límite de ${maxWords} palabras`;
      alert(`Excediste el límite de ${maxWords} palabras`);
      return;
  }

  for (let word of bannedWords) {
      if (text.toLowerCase().includes(word)) {
          errorMessage.textContent = `Palabra no permitida: ${word}`;
          return;
      }
  }

  alert('Sugerencia enviada correctamente');
  suggestionBox.value = ''; 
  wordCounter.textContent = `Palabras: 0/${maxWords}`; 
  submitButton.disabled = true; 
}