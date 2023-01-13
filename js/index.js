var mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay : true,
    pagination: {
        el: '.swiper-pagination',
    },
    paginationClickable :true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


setInterval(
    function(){
        var pageYoffset = document.documentElement.scrollTop || document.body.scrollTop; 
        if(pageYoffset > 200){
            document.getElementById("hide").style.display = "block"
            console.log(pageYoffset)
        }else{
            document.getElementById("hide").style.display = "none"
        }
        if(pageYoffset > 80){
            document.getElementById("hide-second-navtop").style.display = "block"
        }else{
            document.getElementById("hide-second-navtop").style.display = "none"
        }
    },20);
//第一个导航条的下载
var downloadClient = document.getElementById("hover-hide-download-client")
//下载客户端的隐藏格
var hideDownloadClient = document.getElementById("hide-Download-client")
var hideDownloadClient1 = document.getElementById("hide-Download-client1")
//第二个导航条的下载
var fatherSecondNavtopDownloading = document.getElementById("father-second-navtop-downloading")
downloadClient.onmousemove = function(){
    hideDownloadClient.style.display = "block"
}
downloadClient.onmouseout = function(){
    hideDownloadClient.style.display = "none"
}
fatherSecondNavtopDownloading.onmousemove = function(){
        hideDownloadClient1.style.display = "block"
}
fatherSecondNavtopDownloading.onmouseout = function(){
        hideDownloadClient1.style.display = "none"
}
hideDownloadClient.onmousemove = function(){
    hideDownloadClient.style.display = "block"
}
hideDownloadClient.onmouseout = function(){
    hideDownloadClient.style.display = "none"
}
hideDownloadClient1.onmousemove = function(){
    hideDownloadClient1.style.display = "block"
}
hideDownloadClient1.onmouseout = function(){
    hideDownloadClient1.style.display = "none"
}

var bigImg = document.getElementById("Head-portrait-box-bigImg")
var bigImgItems = document.getElementById("bigImgItems")
var bigImgItems1 = document.getElementById("bigImgItems1")
var popUpAvatar= document.getElementById("Pop-up-avatar1")
var popUpAvatar1= document.getElementById("Pop-up-avatar2")
var fatherBigImg = document.getElementById("father-bigImg")

bigImg.onmousemove = function(){
    bigImgItems.style.visibility = "visible"
    popUpAvatar.style.visibility = "visible"
    bigImg.style.visibility = "hidden"
}

fatherBigImg.onmousemove = function(){
    bigImgItems1.style.visibility = "visible"
    popUpAvatar1.style.visibility = "visible"
    fatherBigImg.style.visibility = "hidden"
}

bigImgItems.onmousemove = function(){
    bigImgItems.style.visibility = "visible"
    popUpAvatar.style.visibility = "visible"
    bigImg.style.visibility = "hidden"
    fatherBigImg.style.visibility = "hidden"
}
bigImgItems1.onmousemove = function(){
    bigImgItems1.style.visibility = "visible"
    popUpAvatar1.style.visibility = "visible"
    fatherBigImg.style.visibility = "hidden"
}
popUpAvatar.onmousemove = function(){
    bigImgItems.style.visibility = "visible"
    popUpAvatar.style.visibility = "visible"
    bigImg.style.visibility = "hidden"
    fatherBigImg.style.visibility = "hidden"
}
popUpAvatar1.onmousemove = function(){
    bigImgItems1.style.visibility = "visible"
    popUpAvatar1.style.visibility = "visible"
    fatherBigImg.style.visibility = "hidden"
}

bigImg.onmouseout = function(){
    bigImgItems.style.visibility = "hidden"
    popUpAvatar.style.visibility = "hidden"
    bigImg.style.visibility = "visible"
}    

fatherBigImg.onmouseout = function(){
    bigImgItems1.style.visibility = "hidden"
    popUpAvatar1.style.visibility = "hidden"
    fatherBigImg.style.visibility = "visible"
}     

bigImgItems.onmouseout = function(){
    bigImgItems.style.visibility = "hidden"
    popUpAvatar.style.visibility = "hidden"
    bigImg.style.visibility = "visible"
    fatherBigImg.style.visibility = "visible"
}
bigImgItems1.onmouseout = function(){
    bigImgItems1.style.visibility = "hidden"
    popUpAvatar1.style.visibility = "hidden"
    fatherBigImg.style.visibility = "visible"
}
popUpAvatar.onmouseout = function(){
    bigImgItems.style.visibility = "hidden"
    popUpAvatar.style.visibility = "hidden"
    bigImg.style.visibility = "visible"
    fatherBigImg.style.visibility = "visible"
}
popUpAvatar1.onmouseout = function(){
    bigImgItems1.style.visibility = "hidden"
    popUpAvatar1.style.visibility = "hidden"
    bigImg.style.visibility = "visible"
    fatherBigImg.style.visibility = "visible"
}
