document.querySelectorAll('.option-language').forEach((item) => {
  item.addEventListener('click', () => {
    window.location = item.getAttribute('href')
  })
})
