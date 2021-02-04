window.onload = () => {
  tabComponent.init()
  carousel.init()
  categoryDropdown.init()
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

const carousel = {
  init: function() {
    this.setupCarouselControl()
    this.setupProductCarousel()
  },
  setupCarouselControl: function () {
    const target = $("#home-slider-main").owlCarousel({
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
    $('#home-slider-control .owl-dot').click(function () {
      target.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  },
  setupProductCarousel: function() {
    const target = $("#product-carousel").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: false,
      dots: true,
      dotsContainer: '#product-carousel-control',
      nav: false,
      margin: 0,
    });
    $('#product-carousel-control .owl-dot').click(function () {
      target.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  }
}

const categoryDropdown = {
  init: function() {
    this.setupActionDropdown()
  },
  setupActionDropdown: function() {
    const btn = document.querySelector('#category-btn')
    if (btn) {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active')
      })
    }
  },
}