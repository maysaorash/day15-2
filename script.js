
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
    return new Promise((resolve,reject) => {
    let img1 = document.createElement('img'); 
    let img2 = document.createElement('img'); 
    let img3 = document.createElement('img'); 
    
    img1.src = './images/img-1.jpg'; 
    img2.src = './images/img-2.jpg';
    img3.src = './images/img-3.jpg';

    imgContainer.appendChild(img1);
    setTimeout (()=>{
        imgContainer.appendChild(img1).style.display='none';
        imgContainer.appendChild(img2);
    },2000)
     setTimeout (()=>{
        imgContainer.appendChild(img2).style.display='none';
        imgContainer.appendChild(img3);
    },4000)

     resolve('image loaded');
     reject('error')
     })
}
 console.log(createImage())


//call createImage with then and catch
createImage().then ((message) => {
    console.log('Mountain ' + message)
}).catch ((message) => {
    console.log('error ' + message)
})
//create a wait function
// const waitFor = function (second) {
//     const wait = message => new Promise(resolve => setTimeout(resolve, message),2000);
//     console.log(wait)
// }
// console.log(waitFor())