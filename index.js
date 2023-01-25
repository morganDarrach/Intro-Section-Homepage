

const dropDowns = () => {
    const featureBtn = document.querySelector('.features');
    const featureContent = document.querySelector('.features-content');
    const companyBtn = document.querySelector('.company');
    const companyContent = document.querySelector('.company-content');

    featureBtn.addEventListener('click', () => {
        //toggle feature dropdown
        featureContent.classList.toggle('show-feature');
    });

    companyBtn.addEventListener('click', () => {
        //toggle company dropdown
        companyContent.classList.toggle('show-company');
    })
}

dropDowns();