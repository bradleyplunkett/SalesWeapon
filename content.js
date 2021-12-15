// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }

// const employerObj = document.querySelectorAll(`.pvs-list
// ph5 display-flex flex-row flex-wrap`);
// console.dir(employerObj)
// console.log('brad!')

// const employerObj = document.querySelector('div[aria-label="Current company"]');
//         console.log(employerObj)

var images = document.getElementsByTagName('img');
console.log('these are all the images')
console.dir(images)

console.log('this is the document body',)
console.dir(document.body)

console.log('these are the children elements',)
console.dir(document.children)

console.log('these are all the elements with the class name t-14 t-normal',)
console.log(document.getElementsByClassName('t-14 t-normal'))


console.log('these are all the elements with the class name t-14 t-normal t-black--light',)
console.log(document.getElementsByClassName('t-14 t-normal t-black--light'))

console.log('below is the name of the user')
let user = document.getElementsByTagName('title')[0];
console.log(user);
console.dir(user);

