(function () {
  const SlideInOnScroll = {
    cacheDom() {
      this.eBody = document.querySelector('body');
      this.eNav = document.querySelector('#main');
      this.iTopOfNav = this.eNav.offsetTop;
    },
    init() {
      this.cacheDom();
      window.document.documentElement.classList.add('js-enabled');
      this.addEventListeners();
    },
    checkScroll() {
      if (window.scrollY >= this.iTopOfNav) {
        this.eBody.style.paddingTop = `${this.eNav.offsetHeight}px`;
        this.eBody.classList.add('fixed-nav');
      } else {
        this.eBody.classList.remove('fixed-nav');
        this.eBody.style.paddingTop = '0';
      }
    },
    addEventListeners() {
      window.addEventListener('scroll', () => {
        this.checkScroll();
      });
    },
  };
  SlideInOnScroll.init();
})();