window.onload = () => {

    // NE RADI LOKALNO -> TREBALO BI ONLINE
    console.log(document.referrer);
    console.log(document.referrer === "product" /* ADEKVATAN URL */);

    if (document.referrer === '...') {
        document.querySelector("html").style.scrollBehavior = "auto";
        document.getElementById("our-products").scrollIntoView();
        document.querySelector("html").style.scrollBehavior = "smooth";
    }

    //TRANZICIJA
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

    // FADE-IN SEKCIJA
    const sections = document.querySelectorAll('.section');

    let observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // FADE-IN PROIZVODA
    const products = document.querySelectorAll('.product-wrapper');

    let productObserver = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("product-view");
            } else {
                entry.target.classList.remove("product-view");
            }
        });
    });

    products.forEach(product => {
        productObserver.observe(product);
    });

    // TOUCH MENI
    const menu = document.getElementById('menu-icon');
    const langNav = document.getElementById('language-nav');
    const nav = document.getElementById('navigation');
    const lang = document.getElementById('languages');

    const mq = window.matchMedia("(max-width: 1380px)");
    if(mq.matches) {

        menu.addEventListener('mousedown', () => {
            if (langNav.classList.contains('hide')) {
                langNav.classList.remove('hide');
                nav.classList.remove('hide');
                langNav.classList.add('show');
                nav.classList.add('show');
                menu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
                lang.classList.remove('show');
                lang.classList.add('hide');
            } else {
                langNav.classList.remove('show');
                nav.classList.remove('show');
                langNav.classList.add('hide');
                nav.classList.add('hide');
                menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
                lang.classList.remove('show');
                lang.classList.add('hide');
            };
        });
        
        langNav.addEventListener('mousedown', () => {
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
                nav.classList.add('hide');
                lang.classList.remove('hide');
                lang.classList.add('show');
            } else {
                nav.classList.remove('hide');
                nav.classList.add('show');
                lang.classList.remove('show');
                lang.classList.add('hide');
            }
        });
    };

    //NEWSLETTER PRIJAVA
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeACbwyziu0Rs51KhD98nrYFw7HmvyT8XFlKkiF6va4_zN-lQ/formResponse', {
            method: 'POST',
            body: formData
        })
        .catch(error => {
            console.error('Error:', error);
        });
        form.innerHTML = '<p style="font-size: 2.2rem">Thank you<br>for signing up!</p>';
    });
}


 