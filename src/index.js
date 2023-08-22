module.exports = function reverse (n) {
    const text = n + ""
    const t = text.split('')
    if (t[0] === "-") {
        t.shift()
    } 
    let r = []
    let index;
    for (index = 0; index < t.length; ++index) {
        r.unshift(t[index])
        console.log(t[index])
    }
    let yt = r.join('')
    let result = +yt
    return result}
