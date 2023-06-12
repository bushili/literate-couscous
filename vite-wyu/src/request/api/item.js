import service from "..";

//获取歌单信息 
export function getmusicitemlist(data){
    return service({
        method: "GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单歌曲
export function getmusiclist(data){
    return service({
        method: "GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
//获取歌词
export function getmusiclyric(data){
    return service({
        method: "GET",
        url:`/lyric?id=${data}`
    })
}