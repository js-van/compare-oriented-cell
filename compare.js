'use strict'

var compareCells = require('compare-cell')

module.exports = compareOrientedCells

function parity(s) {
  var p = 1
  for(var i=1; i<s.length; ++i) {
    for(var j=0; j<i; ++j) {
      if(s[j] < s[i]) {
        p = -p
      } else if(s[j] === s[i]) {
        return 0
      }
    }
  }
  return p
}

function compareOrientedCells(a, b) {
  var n = a.length, m = b.length
  if(n !== m) {
    return n - m
  }
  switch(n) {
    case 0:
      return 0
    case 1:
      return a[0] - b[0]
    case 2:
      return (a[0] - b[0]) || (a[1] - b[1])
    default:
      return compareCells(a, b) || (parity(a) - parity(b))
  }
}
