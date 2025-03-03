
//accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//tabs
(function () {
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabContol = e.target.closest('.tab-controls__link')

        if (!tabContol) return
        e.preventDefault()
        if (tabContol.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabContol.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }


        tabContol.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }


    //  Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelectorAll('.card__button')
    
    modal.addEventListener('click', closeModal)
    
    modalButton.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    function openModal(e) {
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }
})()
