// burger handler

(function() {
  const burger_item = document.querySelector('.burger');
  const menu = document.querySelector('.header');
  const close = document.querySelector('.headre_nav_close');
  burger_item.addEventListener('click', function() {
    burger_item.style.display = 'none';
    menu.classList.add('header_active');
  });

  close.addEventListener('click', function() {
    menu.classList.remove('header_active');
    burger_item.style.display = '';
  });
}());


// Scroll to anchors
(function () {
  const burger_item = document.querySelector('.burger');
  const menu = document.querySelector('.header');

    const smoothScroll = function (targetEl, duration) {
        let headerElHeight =  document.querySelector('.menu').clientHeight;
        if (window.innerWidth <= 767) {
          headerElHeight = 40;
        }
        let target = document.querySelector(targetEl);
        if (targetEl == '#Next_block'){
          headerElHeight = 0;
        }
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        const arrow = document.querySelector('.arrow');

        arrow.addEventListener('click', function(){
          smoothScroll('#Next_block', 800)
        })
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 800);
                menu.classList.remove('header_active');
                burger_item.style.display = '';
            });
        });
    };
    scrollTo();
}());

(function() {
  const flash = document.querySelectorAll('.js-flash')
  flash[0].addEventListener('click', function(){
      flash[0].style.display = 'none'
  })
}());
