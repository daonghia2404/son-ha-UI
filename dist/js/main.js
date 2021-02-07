window.onload = () => {
  tabComponent.init()
  carousel.init()
  categoryDropdown.init()
  clickEvent.init()
  drawerEvent.init()
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
    this.setupCarouselMobileControl()
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
  setupCarouselMobileControl: function () {
    const target = $("#home-slider-moblie-main").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      autoHeight: true,
      nav: false,
      dots: true,
      margin: 0,
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
    this.setupTabCategoryMobile()
    this.setupToggleCategoryMobile()
  },
  setupActionDropdown: function() {
    const btn = document.querySelector('#category-btn')
    if (btn) {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active')
      })
    }
  },
  setupToggleCategoryMobile: function() {
    const btn = document.querySelector('.header-mobile .btn-menu')
    const categoryMain = document.querySelector('.header-mobile .category-megamenu-mobile')

    if (btn && categoryMain) {
      btn.addEventListener('click', () => {
        categoryMain.classList.toggle('active')
      })
    }
  },
  setupTabCategoryMobile: function() {
    const listCategoryLink = document.querySelectorAll('.header-mobile .list-wrap span.category-link')
    const listCategoryMain = document.querySelectorAll('.header-mobile .category-submenu')

    if (listCategoryLink.length !== 0 && listCategoryMain.length !== 0) {
      listCategoryLink.forEach((item, index) => item.addEventListener('click', () => {
        listCategoryLink.forEach(i => i.parentNode.classList.remove('active'))
        listCategoryMain.forEach(i => i.classList.remove('active'))

        item.parentNode.classList.add('active')
        listCategoryMain[index].classList.add('active')
      }))
    }
  },
}

const clickEvent = {
  init: function() {
    this.setupClickSearchHeaderMobile()
  },
  setupClickSearchHeaderMobile: function() {
    const btnSearch = document.querySelector('.header-mobile .btn-search')
    const searchMain = document.querySelector('.header-mobile .header-search')

    if (btnSearch && searchMain) {
      btnSearch.addEventListener('click', () => {
        searchMain.classList.toggle('active')
      })
    }
  },
}

const drawerEvent = {
  init: function() {
    this.setupDrawerCategoryFilterMobile()
  },
  setupDrawerCategoryFilterMobile: function() {
    const btn = document.querySelector('.category-filter-btn')
    const main = document.querySelector('#category-sidebar')
    
    if (btn && main) {
      const overlay = main.querySelector('.category-sidebar-overlay')
      const btnClose = main.querySelector('.category-filter-close')

      btn.addEventListener('click', () => {
        main.classList.add('active')
        document.querySelector('body').style.overflow = 'hidden'
      })

      btnClose.addEventListener('click', () => {
        main.classList.remove('active')
        document.querySelector('body').style.overflow = 'auto'
      })
      
      overlay.addEventListener('click', () => {
        main.classList.remove('active')
        document.querySelector('body').style.overflow = 'auto'
      })
    }
  },
}