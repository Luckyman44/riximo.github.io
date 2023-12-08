    const input = document.getElementById('miInput');
    const boton = document.getElementById('miBoton');
    const contenedor = document.getElementById('messages');

    boton.addEventListener('click', () => {
      const nuevoElemento = document.createElement('div');
      nuevoElemento.classList.add('message', 'user-message');
      nuevoElemento.textContent = input.value;

      contenedor.appendChild(nuevoElemento);
      contenedor.scrollTop = contenedor.scrollHeight;

      input.value = '';
    });