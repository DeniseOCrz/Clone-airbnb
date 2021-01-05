document.addEventListener("DOMContentLoaded", function (event) {
    const headerSize = document.getElementById('header').clientHeight;
    document.getElementById('container-background').style.height = (window.innerHeight - headerSize) + "px";
});

function iniciaModal(modalID) {
    if(localStorage.fechaModal !== modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechaModal = modalID;
                }
            });
        }
    }
}

const logo = document.querySelector('.logo-parent');
logo.addEventListener('click', () => iniciaModal('modal-idiomas'));

document.addEventListener('scroll', () => {
    if(window.pageYOffset > 800) {
        iniciaModal('modal-idiomas')
    }
})
