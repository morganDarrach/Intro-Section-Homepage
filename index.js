

const dropDowns = () => {
    const featureBtn = document.querySelector('.features');
    const featureContent = document.querySelector('.features-content');
    const companyBtn = document.querySelector('.company');
    const companyContent = document.querySelector('.company-content');
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links-container');
    const shade = document.querySelector('.shade');

    featureBtn.addEventListener('click', () => {
        //toggle feature dropdown
        featureContent.classList.toggle('show-feature');
        featureContent.classList.toggle('show-feature-mobile');
        featureBtn.classList.toggle('feature-expand');
    });

    companyBtn.addEventListener('click', () => {
        //toggle company dropdown
        companyContent.classList.toggle('show-company');
        companyContent.classList.toggle('show-company-mobile');
        companyBtn.classList.toggle('company-expand');
    })

    burger.addEventListener('click', () => {
        links.classList.toggle('show-nav');
        burger.classList.toggle('toggle');
        shade.classList.toggle('shade-on');
    })
}

dropDowns();