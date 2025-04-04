document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todos los elementos con la clase 'game-card'
  const gameCards = document.querySelectorAll('.game-card');

  // Seleccionamos los elementos de la sección "Hero" que vamos a actualizar
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroDescription = document.getElementById('hero-description');
  const heroImage = document.getElementById('hero-image');

  // Función para actualizar la sección Hero con los datos de una tarjeta
  function updateHero(card) {
    const title = card.getAttribute('data-title');
    const subtitle = card.getAttribute('data-subtitle');
    const description = card.getAttribute('data-description');
    const image = card.getAttribute('data-image');

    heroTitle.textContent = title;
    heroSubtitle.textContent = subtitle;
    heroDescription.textContent = description;
    heroImage.src = image;
    heroImage.alt = `Captura de ${title}`;
  }

  // Asignamos el evento click a cada tarjeta para actualizar el Hero
  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      updateHero(card);
    });
  });

  // Al cargar la página, si existe al menos una tarjeta, usamos la primera
  if (gameCards.length > 0) {
    updateHero(gameCards[0]);
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   // Elementos del hero original
//   const playBtn = document.querySelector('.play-btn');
//   const heroContent = document.getElementById('hero-content');
//   const heroTitle = document.getElementById('hero-title');
//   const heroSubtitle = document.getElementById('hero-subtitle');
//   const heroDescription = document.getElementById('hero-description');
//   const heroImage = document.getElementById('hero-image');
  
//   // Elementos del contenedor del juego
//   const gameContainer = document.getElementById('game-container');
//   const closeGameBtn = document.querySelector('.close-game');
//   const gameFrame = document.getElementById('game-frame');
  
//   // Variable para almacenar el archivo del juego seleccionado
//   let currentGameFile = '';

//   // Seleccionamos todas las tarjetas de juego
//   const gameCards = document.querySelectorAll('.game-card');
  
//   // Función para actualizar la sección Hero (y guardar la ruta del juego)
//   function updateHero(card) {
//     const title = card.getAttribute('data-title');
//     const subtitle = card.getAttribute('data-subtitle');
//     const description = card.getAttribute('data-description');
//     const image = card.getAttribute('data-image');
//     currentGameFile = card.getAttribute('data-file'); // Ruta del HTML del juego

//     // Actualizamos el contenido del hero
//     heroTitle.textContent = title;
//     heroSubtitle.textContent = subtitle;
//     heroDescription.textContent = description;
//     heroImage.src = image;
//     heroImage.alt = `Imagen de ${title}`;
//   }
  
//   // Asignamos el evento click a cada tarjeta para actualizar el hero
//   gameCards.forEach(card => {
//     card.addEventListener('click', () => {
//       updateHero(card);
//     });
//   });
  
//   // Al cargar la página, si hay al menos una tarjeta, actualizamos con la primera
//   if (gameCards.length > 0) {
//     updateHero(gameCards[0]);
//   }
  
//   // Al hacer clic en "JUGAR", se oculta el contenido original y se muestra el juego
//   playBtn.addEventListener('click', () => {
//     if (currentGameFile) {
//       gameFrame.src = currentGameFile; // Cargamos el HTML del juego en el iframe
//       heroContent.style.display = 'none';
//       gameContainer.style.display = 'block';
//     } else {
//       alert('No se ha seleccionado ningún juego.');
//     }
//   });
  
//   // Al hacer clic en la "X", se cierra el juego y se restaura el hero original
//   closeGameBtn.addEventListener('click', () => {
//     gameFrame.src = ''; // Limpiamos el iframe (opcional)
//     gameContainer.style.display = 'none';
//     heroContent.style.display = 'flex';
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  // Elementos del hero
  const playBtn = document.querySelector('.play-btn');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroDescription = document.getElementById('hero-description');
  const heroImage = document.getElementById('hero-image');
  
  // Variable para almacenar la ruta del juego seleccionado
  let currentGameFile = '';
  
  // Seleccionamos todas las tarjetas de juego
  const gameCards = document.querySelectorAll('.game-card');
  
  // Función para actualizar la sección hero y guardar la ruta del juego
  function updateHero(card) {
    const title = card.getAttribute('data-title');
    const subtitle = card.getAttribute('data-subtitle');
    const description = card.getAttribute('data-description');
    const image = card.getAttribute('data-image');
    currentGameFile = card.getAttribute('data-file'); // Guardamos la ruta del juego
    
    heroTitle.textContent = title;
    heroSubtitle.textContent = subtitle;
    heroDescription.textContent = description;
    heroImage.src = image;
    heroImage.alt = `Imagen de ${title}`;
  }
  
  // Asignamos el evento click a cada tarjeta para actualizar el hero
  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      updateHero(card);
    });
  });
  
  // Al cargar la página, actualizamos con la primera tarjeta (si existe)
  if (gameCards.length > 0) {
    updateHero(gameCards[0]);
  }
  
  // Al hacer clic en "JUGAR", se abre una nueva pestaña con el juego
  playBtn.addEventListener('click', () => {
    if (currentGameFile) {
      window.open(currentGameFile, '_blank');
    } else {
      alert('No se ha seleccionado ningún juego.');
    }
  });
});
