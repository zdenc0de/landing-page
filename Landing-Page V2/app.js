document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault(); 
            const data = Object.fromEntries(new FormData(e.target));
            console.log(data); 
            alert('Gracias por tomarte el tiempo de escribirnos, estaremos en contacto contigo lo más pronto posible.');
        });
    }

    // Manejo del modal
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const openBtns = document.querySelectorAll('.open');

    if (modal && closeBtn && openBtns.length > 0) {
        openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});


