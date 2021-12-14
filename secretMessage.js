let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

let lastElement=secretMessage.pop();

let newElement=secretMessage.push('to', 'program');

let replace=secretMessage.indexOf('easily');
secretMessage[replace]='right';

let remove=secretMessage.shift();

let add=secretMessage.unshift('Programming');

replace=secretMessage.indexOf('get');
secretMessage[replace]='know,';
let removedItems=secretMessage.splice((replace+1), 4)

let message=secretMessage.join(" ");
console.log(message);