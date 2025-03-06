const q = document.querySelectorAll.bind(document)

/* tracking */
;((c, l, a, r, i, t, y) => {
  c[a] =
    c[a] ||
    function () {
      ;(c[a].q = c[a].q || []).push(arguments)
    }
  t = l.createElement(r)
  t.async = 1
  t.src = 'https://www.clarity.ms/tag/' + i
  y = l.getElementsByTagName(r)[0]
  y.parentNode.insertBefore(t, y)
})(window, document, 'clarity', 'script', 'o8cjnil62g')

/* apply image background */
q('[data-bg]').forEach(el => (el.style.backgroundImage = `url('${el.dataset.bg}')`))
