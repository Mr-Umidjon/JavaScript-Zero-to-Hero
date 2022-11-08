'use strict';

// to string
// 1-)
console.log(String(4));
console.log(typeof String(4));

// 2-)
console.log('Umidjon ' + 20);
console.log(typeof ('Umidjon ' + 20));

const youtubeChannel = 10;
console.log('youtube.com/channel/' + youtubeChannel);


// to number
// 1-)
console.log(Number('4'));
console.log(typeof Number('4'));

// 2-)
console.log(+'4');
console.log(typeof +'4');

// 3-)
console.log(parseInt('4'));
console.log(typeof parseInt('4'));


// to boolean
// 0, '', null, undefined, NaN = always false
// 1-)
console.log(Boolean('4'));
console.log(typeof Boolean('4'));

// 2-) 
console.log(!!"4");
console.log(typeof !!"4");
