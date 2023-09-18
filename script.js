Draggable.create(".drag",{
    type : 'x',
    bounds:".container",
});

function checkOverlap(){
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector(".drag");
    
    var rec1 = div1.getBoundingClientRect();
    var rec2 = div2.getBoundingClientRect();

    if(rec1.left < rec2.right){
        document.querySelector('#video1').style.opacity=0;
    }else{
        document.querySelector('#video1').style.opacity=1;
    }
}

window.addEventListener("mousemove",checkOverlap);