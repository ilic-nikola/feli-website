
window.onload = () => {
    
    //TRANZICIJA
    document.querySelectorAll('.transparent').forEach(el => {
        el.style.opacity = 1;
    });

    const transitionElement = document.getElementById('transition-layer');
    const transit = document.querySelectorAll('.transit');

    setTimeout(() => {
        transitionElement.classList.remove('activated');
    }, 500);

    transit.forEach(t => {
        t.addEventListener('click', () => {
            t.preventDefault();
            let target = e.target.getAttribute("href");
            transitionElement.classList.add('activated');
            setTimeout(() => {
                window.location.href = target;
            }, 500)
        })
    })

    //GALERIJA
    const arrows = document.querySelectorAll('.arrow');
    const pics = document.getElementById('picture-wrapper');
    const indi = document.getElementById('indicator-div');
    const start = pics.children.length - 1;
    let count = start;

    const hidePic = () => {
        pics.children[count].classList.remove('show');
        pics.children[count].classList.add('hide');
        indi.children[count].classList.remove('light');
        indi.children[count].classList.add('dark');
    }

    const showPic = () => {
        pics.children[count].classList.remove('hide');
        pics.children[count].classList.add('show');
        indi.children[count].classList.remove('dark');
        indi.children[count].classList.add('light');    
    }

    const switchPic = (ar) => {
        if (ar.classList.contains('next')) {
            if (count < start) {
                hidePic();
                count++;
                showPic();         
            } else {
                hidePic();
                count = 0;
                showPic();
            }
        } else {
            if (count > 0) {
                hidePic();
                count--;
                showPic();
            } else {
                hidePic();
                count = start;
                showPic();
            }
        }
    }

    const autoPreview = () => {
        if (count < start) {
            hidePic();
            count++;
            showPic();         
        } else {
            hidePic();
            count = 0;
            showPic();
        }
    }

    setTimeout(autoPreview, 500);
    setInterval(autoPreview, 8000);
    arrows.forEach(arrow => arrow.addEventListener('click', () => switchPic(arrow)));
}
