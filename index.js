

const dropDowns = () => {
    const featureBtn = document.querySelector('.features');
    const featureContent = document.querySelector('.features-content');
    const companyBtn = document.querySelector('.company');
    const companyContent = document.querySelector('.company-content');
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links-container');
    const shade = document.querySelector('.shade');
    let toggleCImage = true;
    let toggleFImage = true;
    

    featureBtn.addEventListener('click', () => {
        //toggle feature dropdown
        let featureArrow = document.getElementById('f-arrow');
        featureContent.classList.toggle('show-feature');
        featureContent.classList.toggle('show-feature-mobile');
        featureBtn.classList.toggle('feature-expand');
        toggleFImage = !toggleFImage
        if (toggleFImage) {
            featureArrow.src = "./images/icon-arrow-down.svg";
        } else {
            featureArrow.src = "./images/icon-arrow-up.svg";
        }
    });

    companyBtn.addEventListener('click', () => {
        //toggle company dropdown
        let companyArrow = document.getElementById('c-arrow');
        companyContent.classList.toggle('show-company');
        companyContent.classList.toggle('show-company-mobile');
        companyBtn.classList.toggle('company-expand');
        toggleCImage = !toggleCImage
        if (toggleCImage) {
            companyArrow.src = "./images/icon-arrow-down.svg";
        } else {
            companyArrow.src = "./images/icon-arrow-up.svg";
        }
    })

    burger.addEventListener('click', () => {
        links.classList.toggle('show-nav');
        burger.classList.toggle('toggle');
        shade.classList.toggle('shade-on');
    })
}

dropDowns();