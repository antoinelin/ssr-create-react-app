exports.collect = (fn) => {
  const stuff = []
  function add(css) {
    stuff.push(css)
  }
  const old = exports.add
  exports.add = add
  fn()
  exports.add = old
  return stuff.join('\n')
}

exports.add = () => {}
