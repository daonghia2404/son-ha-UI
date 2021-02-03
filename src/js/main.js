window.onload = () => {
  tabComponent.init()
  homeCarousel.init()
}

const tabComponent = {
  init: function() {
    this.setupTabControl()
  },
  setupTabControl: function() {
    const tabControls = document.querySelectorAll('#tab-component-control .tab-item')
    const tabMains = document.querySelectorAll('#tab-component-main .tab-item')

    if (tabControls.length !== 0 && tabMains.length !== 0) {
      tabControls.forEach((item, index) => item.addEventListener('click', () => {
        tabControls.forEach(i => i.classList.remove('active'))
        tabMains.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
        tabMains[index].classList.add('active')
      }))
    }
  }
}

const homeCarousel = {
  init: function() {
    this.setupCarouselControl()
  },
  setupCarouselControl: function () {
    $("#home-slider-main").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      dotsContainer: '#home-slider-control',
      nav: false,
      margin: 0,
    });
  }
}