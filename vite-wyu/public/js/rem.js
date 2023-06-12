
function remSize(){
    //获取设备宽度
    var devicewidth=document.documentElement.clientWidth||window.innerWidth
    if(devicewidth>=750){
        devicewidth=750
    }
    if(devicewidth<320){
        devicewidth=320
    }
    //750px-->1rem=100px
    document.documentElement.style.fontSize=(devicewidth/7.5)+'px'
    //设置字体大小
    document.querySelector("body").style.fontSize=0.3+"rem"
}

//调用上面函数
remSize()
//窗口适配事件,窗口改变重新调用
window.onresize=function(){
    remSize()
}