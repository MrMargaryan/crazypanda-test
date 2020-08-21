$(() => {
  // Radio Butons
  $(() => {
    $('.radio').checkboxradio()
  })

  let mode = 'backgroundColor'

  $('.radio--color').click(function () {
    mode = this.id
  })

  $('.radio--bgcolor').click(function () {
    mode = this.id
  })

  // Slider
  const hexFromRGB = (r, g, b) => {
    const hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ]

    $.each(hex, (index, val) => {
      console.log(val)
      if (val.length === 1) {
        hex[index] = `0${val}`
      }
    })

    return hex.join('').toUpperCase()
  }

  const refreshSwatch = () => {
    const red = $('.slider--red').slider('value')
    const green = $('.slider--green').slider('value')
    const blue = $('.slider--blue').slider('value')
    const hex = hexFromRGB(red, green, blue)

    $('.swatch').css(mode, `#${hex}`)
  }

  $('.slider--red, .slider--green, .slider--blue').slider({
    orientation: 'horizontal',
    range: 'min',
    max: 255,
    value: 0,
    slide: refreshSwatch,
    change: refreshSwatch
  })

  $('.slider--red').slider('value', 255)
  $('.slider--green').slider('value', 140)
  $('.slider--blue').slider('value', 60)
})