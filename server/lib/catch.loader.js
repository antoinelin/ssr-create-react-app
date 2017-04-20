module.exports = () => {}
module.exports.pitch = (req) => {
  this.cacheable()
  return 'require(' + JSON.stringify(require.resolve('./catch')) + ').add(require(' + JSON.stringify('!!' + req) + '));\n' +
    'delete require.cache[module.id];'
}
