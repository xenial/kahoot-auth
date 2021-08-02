var atob = require('atob')

var decodeSessionToken = function (e, t, n) {
    var r = reserveChallengeToAnswer(t, n),
    i = base64Decode(e);
    return xorString(i, r)
}
var base64Decode = function (e) {
    return atob(e)
}
var xorString = function (e, t) {
    for (var n = '', r = 0; r < e.length; r++) {
      var i = e.charCodeAt(r) ^ t.charCodeAt(r % t.length);
      n += String.fromCharCode(i)
    }
    return n
}
var extractMessageAndOffset = function (e) {
    var t = e.search('='),
    n = e.slice(t + 1),
    r = n.search(';'),
    i = n.slice(0, Math.max(0, r)).trim(),
    o = e.match(/'(\d*[a-z]*[A-Z]*)\w+'/);
    return {
      message: (o && o.length > 0 ? o[0] : '').slice(1, - 1),
      offsetEquation: i
    }
}
var reserveChallengeToAnswer = function reserveChallengeToAnswer(message, offsetEquation) {
    var decode = function decode(message) {
      return message.replace(/./g, (function (char, position) {
        return String.fromCharCode((char.charCodeAt(0) * position + eval(offsetEquation)) % 77 + 48)
      }))
    };
    return decode(message)
}

auth = {
    getToken: function (sessionToken, challenge) {
        temp = extractMessageAndOffset(challenge);
        return decodeSessionToken(sessionToken, temp.message, temp.offsetEquation);
    }
}

module.exports = auth;