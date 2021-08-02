const auth = require("./auth")

challenge = "decode.call(this, 'VBWLbUd9HLCvwYxqJwSpeUptxOuV4EbTnzbrmyOIIZtDBxIvHV4EQosXm5LQpfgqin9WSduF1sYb9oaLqaAhuIZHBN5pdzAtXth1'); function decode(message) {var offset = (69 \t * (29 +   73) \t * (33 \t * 53) +   28); if( this \t . angular \t .\t isString\t ( offset \t )) console . log (\"Offset derived as: {\", offset, \"}\"); return \t _.replace   ( message,/./g, function(char, position) {return String.fromCharCode((((char.charCodeAt(0)*position)+ offset ) % 77) + 48);});}";
sessionToken = "YnQKNmgHclIZe3B5Am0sOUNfRV9QXDIFFVoCATZvUHElWA9wZVI0bWViXTF0AFhsKnBxc3JFCC9dXQ49WitkSV56e3QMW0IMLT8GTlgxDWIXb1A+XwBQREpbN0NNQkQD"

token = auth.getToken(sessionToken, challenge);

console.log(token);