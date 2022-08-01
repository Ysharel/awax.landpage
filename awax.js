window.onload = function () {
    document.querySelector(".menu-opener").addEventListener("click", () => {
        if (document.querySelector(".menu nav ").style.display == 'flex') {
            document.querySelector(".menu nav ").style.display = 'none';
        } else {
            document.querySelector(".menu nav ").style.display = 'flex'
        }
    });
};
window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    if (largura > 768)
        document.querySelector(".menu nav").removeAttribute('style');
});


let pointer1 = document.getElementsByClassName("jscript")
let pointer2 = document.getElementsByClassName("jscript2")
let pointer3 = document.getElementsByClassName("jscript3")

for (let x = 0; x < 1; x++) {
    pointer1[x].addEventListener("click", aplicarEstil)
    pointer2[x].addEventListener("click", aplicarEstilo)
    pointer3[x].addEventListener("click", aplicarEstiloo)
    console.log('leu')
}

function aplicarEstil() {
    let mover = document.querySelector(".sliders")
    mover.style="margin-left:0vw;"
    //mover.style.display='none'
    pointer1[0].style="background-color:#B28756;"
    pointer2[0].style="background-color:none;"
    pointer3[0].style="background-color:none;"
    
}

function aplicarEstilo() {
    let mover = document.querySelector(".sliders")
    mover.style="margin-left:-100vw;"
    //mover.style="animation:mymove 2s;" 
   
    pointer2[0].style="background-color:#B28756;"
    pointer1[0].style="background-color:none;"
    pointer3[0].style="background-color:none;"
}

function aplicarEstiloo() {
    let mover = document.querySelector(".sliders")

    mover.style="margin-left:-200vw;"
    //mover.style="animation:mymove2 2s;" 
    pointer3[0].style="background-color:#B28756;"
    pointer2[0].style="background-color:none;"
    pointer1[0].style="background-color:none;"

}




