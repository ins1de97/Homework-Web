document.addEventListener("DOMContentLoaded", (event) => {
    //  Бургер
    document.addEventListener('click', burgerUnit)

    function burgerUnit(e) {

        const burgerUnit = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerUnit && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Аккардион
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        items.forEach((item) => {
            item.setAttribute('aria-expanded', 'false');
        });

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    // Форма

    const formElement = document.querySelector('.contact__form');
    if (!formElement) {
        console.error('Форма не найдена');
        return;
    }

    formElement.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(formElement)

        console.log( Object.fromEntries(formData) )

        formElement.reset()
    })

    // Табы
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabContol = e.target.closest('.tab-controls__link')
        e.preventDefault()
        if (!tabContol) return
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

});





