const btnav = document.querySelector('.bbtns');
const oph = document.querySelector('#head');
const header = document.querySelector('#header');
const izoom1 = document.querySelector('.sz');
const izoomm = document.querySelectorAll('.sz');
const izoom = document.querySelectorAll('.szoom');
const arms = document.querySelectorAll('.nav-item');

btnav.addEventListener('click', () =>{
    if(oph.classList.contains('openh')){
        oph.classList.remove('openh')
        btnav.classList.remove("fa-xmark")
        btnav.classList.add("fa-bars")
    } else {
        oph.classList.add('openh')
        btnav.classList.add("fa-xmark")
        btnav.classList.remove("fa-bars")
    }
});

document.addEventListener('scroll', () =>{
    header.classList.add("add")
    btnav.classList.remove("fa-xmark")
    btnav.classList.add("fa-bars")
});

arms.forEach(arm => {
    arm.addEventListener('click', () =>{
        oph.classList.remove('openh')
    })
});

//  izoom.forEach(zoom => {
//         zoom.addEventListener('mouseover',()=>{
//             izoomm.forEach(targe => {
//                 if(zoom.classList[1] === targe.classList[1])

//                 if(targe.classList.contains("szoom2")){

//                     targe.classList.remove("szoom2")
//                 }else{
//                     targe.classList.add("szoom2")

//                 }
//             });
//         })
//  });
//  izoom.forEach(zoom => {
//         zoom.addEventListener('mousedown',()=>{
//             // console.log(zoom.classList[1])
//             izoomm.forEach(targe => {
//                 if(zoom.classList[1] === targe.classList[1])

//                 if(targe.classList.contains("szoom2")){

//                     targe.classList.remove("szoom2")
//                 }
//             });
//         })
//  });

