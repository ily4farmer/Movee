export default function scrollWindow() {
    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: "smooth"  
        })
    }

    const navElement = document.querySelectorAll(".nav__link"),
        title = document.querySelectorAll('.section__title'),
        header = document.querySelector('.header');

    navElement[4].addEventListener('click', () => {
        scrollTo(header);
    });

    function elScroll(el, i) {
        navElement[el].addEventListener("click", ()=> {
            scrollTo(title[i])
        });
    }

    elScroll(0, 1);
    elScroll(1, 2);
    elScroll(2, 3);
    elScroll(3, 4);

    // elScroll(4, header);
    elScroll(5, 1);
    elScroll(6, 2);
    elScroll(7, 3);
    elScroll(8, 4);
}