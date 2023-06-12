import service from "..";

//获取首页轮播图数据
export  function getbanner(){
    return service({
        method: "GET",
        url:"/banner?type=2",
    })
}
//获取每日歌单
export function getmusiclist(){
    return service({
        method: "GET",
        url:"/personalized?limit=10"
    })
}