(function () {
    const serviceSliders = [...document.querySelectorAll('.services__body')];
    const buttonServicesNext = document.querySelector('#servicesNext');
    const buttonServicesBefore = document.querySelector('#servicesBefore');
    let serviceValue;

    buttonServicesNext.addEventListener('click', () => {
        changeServicePosition(1);
    });

    buttonServicesBefore.addEventListener('click', () => {
        changeServicePosition(-1);
    });

    const changeServicePosition = (add) => {
        const currentService = document.querySelector('.services__body--show').dataset.id;
        serviceValue = Number(currentService);
        serviceValue += add;

        serviceSliders[Number(currentService) - 1].classList.remove('services__body--show');
        if (serviceValue === serviceSliders.length + 1 || serviceValue === 0) {
            serviceValue = serviceValue === 0 ? serviceSliders.length : 1;
        }

        serviceSliders[serviceValue - 1].classList.add('services__body--show');
    };
})();




