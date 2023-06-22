const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
    const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offsetTop(animItem);
            const animStart = 4;

            let animItemPoint =  window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            }
        }
    }
    function offsetTop(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}