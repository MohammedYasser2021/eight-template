/* bars in navbar */
let barsBtn = document.querySelectorAll('.bars')
let closeBtn = document.querySelectorAll('.close')
let links = document.querySelector('.links')

barsBtn.forEach((item) => {
  item.addEventListener('click', function () {
    links.style.transform = 'scale(1)'
  })
})

closeBtn.forEach((item) => {
  item.addEventListener('click', function () {
    links.style.transform = 'scale(0)'
  })
})

/* fixed navbar */

$(window).on('scroll', function () {
  let scroll = $(this).scrollTop()
  if (scroll > 55) {
    $('.nav-fixed').slideDown(500)
  } else {
    $('.nav-fixed').slideUp(500)
  }
})
/* slider */
let i = 0
let items = $('.folio-item')

$('.next').on('click', function () {
  items.each(function () {
    $(this).css('display', 'none')
  })

  if (i === items.length - 1) {
    i = 0
  } else {
    i++
  }
  $(items[i]).fadeIn(1000)
})

$('.prev').on('click', function () {
  items.each(function () {
    $(this).css('display', 'none')
  })

  if (i === 0) {
    i = items.length - 1
  } else {
    i--
  }
  $(items[i]).fadeIn(1000)
})

/* fancy box */

$(function () {
  $('.fancybox').fancybox()
})

/* accordion */

$('.accordion-btn').each(function () {
  $(this).on('click', function () {
    $(this)
      .toggleClass('active')
      .siblings('.accordion-btn')
      .removeClass('active')
    $(this)
      .next('.accordion-desc')
      .slideToggle(500)
      .siblings('.accordion-desc')
      .slideUp(500)
  })
})

/* timer */

$('.timer').countTo()

/* filter images */

$('.recent-container').mixItUp()

$('.filter').each(function () {
  $(this).on('click', function () {
    $(this).addClass('btn-active').siblings().removeClass('btn-active')
  })
})

/* smooth scroll */

$('.links li a').each(function () {
  $(this).on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).data('scroll')).offset().top - 80,
      },
      1500,
    )
  })
})

/* scroll to top */

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 500) {
    $('.scroll-to-top').fadeIn(500)
  } else {
    $('.scroll-to-top').fadeOut(500)
  }
})

$('.scroll-to-top').on('click', function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1500,
  )
})
