document.querySelectorAll(".img2").forEach(item=>{
    item.addEventListener("click",function () {
        mdlimg.src=item.children[0].src
        document.getElementsByClassName("modals")[0].style="display:block"
        document.querySelector("body").style="overflow-y: hidden"
    })
})
document.querySelectorAll(".modalClose1").forEach(item=>{
    item.addEventListener("click",function () {
        document.getElementsByClassName("modals")[0].style="display:none"
        document.querySelector("body").style="overflow-y: auto"

    })
})