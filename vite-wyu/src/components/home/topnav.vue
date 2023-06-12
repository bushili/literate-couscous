<template>
    <div class="topnav">
        <div class="topleft">
            <svg t="1681281217624" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3625" width="200" height="200"><path d="M512 665.6a92.16 92.16 0 1 1 0 184.32 92.16 92.16 0 0 1 0-184.32z m0-256a92.16 92.16 0 1 1 0 184.32 92.16 92.16 0 0 1 0-184.32z m0-256a92.16 92.16 0 1 1 0 184.32 92.16 92.16 0 0 1 0-184.32z" fill="#FAB005" p-id="3626"></path></svg>
        </div>
        
        <div class="topcenter">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topright">
            <svg t="1681297377530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3779" width="200" height="200"><path d="M277.8112 236.8512c103.97696-103.97696 272.54784-103.97696 376.5248 0a266.12736 266.12736 0 0 1 68.16768 259.9936 30.72 30.72 0 1 1-59.1872-16.49664 204.6976 204.6976 0 0 0-52.4288-200.04864c-79.9744-79.9744-209.65376-79.9744-289.62816 0-79.9744 79.9744-79.9744 209.64352 0 289.62816a204.88192 204.88192 0 0 0 232.07936 40.52992 204.36992 204.36992 0 0 0 57.5488-40.52992 30.72 30.72 0 0 1 43.43808 0l202.752 202.74176a30.72 30.72 0 0 1-43.44832 43.43808L631.36768 633.856a264.77568 264.77568 0 0 1-51.85536 32.18432c-100.7616 47.44192-221.66528 27.37152-301.70112-52.67456-103.97696-103.96672-103.97696-272.5376 0-376.5248z" fill="#FAB005" p-id="3780"></path></svg>

        </div>
    </div>
</template>
<style lang="less" scoped>
    .topnav{
        width: 100%;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;//垂直居中
        .topcenter{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            //align-items: center;//垂直居中
            font-size: 18px;
            .active{
                font-weight: 900;//控制粗细不用加px
            }
        }
    }
    
</style>