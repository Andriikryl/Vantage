let canvas = document.querySelector('canvas');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;

let ctx = canvas.getContext('2d');


let amountPoints = 100;

let arr = []
for(let i = 0; i < amountPoints; i++){
    arr.push([0,0]);
}



window.addEventListener('mousemove', (e) => {
    let x = e.clientX,
         y = e.clientY;

         arr = arr.slice(1,amountPoints);

         arr.push([x,y]);

         drawLine();
})


function drawLine(){
    ctx.clearRect(0,0,width,height);
    ctx.beginPath();

    ctx.moveTo(arr[0][0], arr[0][1]);
    for (let i = 1; i < amountPoints; i++){
        ctx.lineTo(arr[i][0],arr[i][1]);
    }

    ctx.strokeStyle = 'hsla(45, 43%, 42%, 1)'
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';

    ctx.stroke();
    ctx.closePath();
}


gsap.registerPlugin(ScrollTrigger);

const textEls = document.querySelectorAll('[wb-data="text"]');

textEls.forEach((textEl) => {
    const splitType = new SplitType(textEl, { types: "chars"});
    gsap.set(textEl, {autoAlpha: 1});
    gsap.from(splitType.chars, {
        autoAlpha: 0,
        scale: 10,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
            trigger: textEl,
            start: `bottom 100%`
        },
        // repeat: -1,
        // repeatDelay: 0.5
    });
});