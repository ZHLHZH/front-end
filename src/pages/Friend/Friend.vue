<template>
    <div class="hello">
        <h1>这里是相亲交友</h1>
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item>
                <div class="info">
                    <img src="../../../public/img/friend/fangyuan.png" alt="#">
                    <div>
                        <p>姓名： 朱方圆</p>
                        <p>年龄： 23</p>
                        <p>身高： 164cm &nbsp;&nbsp;  体重：保密</p>
                        <p>身份：超级终生VVVVVVVip</p>
                        <p>爱好： 喝酒，蹦迪，夜夜笙歌</p>
                        <p>交友宣言： 我是方圆我超甜，我要男人不要钱。</p>
                    </div>
                    <div class="love2 ps1"></div>
                    <div class="love2 ps2"></div>
                    <div class="love2 ps3"></div>
                    <div class="love2 ps4"></div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="info">
                    <img src="../../../public/img/friend/mengyuan.png" alt="#">
                    <div>
                        <p>姓名： 王梦媛</p>
                        <p>年龄： 23</p>
                        <p>身高： 167cm &nbsp;&nbsp;  体重：保密</p>
                        <p>身份：黑金VVVip</p>
                        <p>爱好： 喝酒，挣钱，发呆</p>
                        <p>交友宣言： 我是梦媛，我来自非洲毛里求斯，欢迎大家找我玩。</p>
                    </div>
                    <div class="love2 ps8"></div>
                    <div class="love2 ps7"></div>
                    <div class="love2 ps6"></div>
                    <div class="love2 ps4"></div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="info">
                    <img src="../../../public/img/friend/ziyuan.png" alt="#">
                    <div>
                        <p>姓名： 吕子月</p>
                        <p>年龄： 23</p>
                        <p>身高： 166cm &nbsp;&nbsp;  体重：保密</p>
                        <p>身份：黄金Vip</p>
                        <p>爱好： 喝酒，烫头，跑步</p>
                        <p>交友宣言： 我是子月，我的理想型是王嘉尔。</p>
                    </div>
                    <div class="love2 ps4"></div>
                    <div class="love2 ps2"></div>
                    <div class="love2 ps5"></div>
                    <div class="love2 ps7"></div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'Friend',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*这是墙服务的轮播图样式*/
    .el-carousel__item div {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 25px;
        margin: 0;
    }

    /*.el-carousel__item:nth-child(2n) {*/
    /*    background-color: #99a9bf;*/
    /*}*/

    .el-carousel__item:nth-child(n) {
        /*background-color: #d3dce6;*/
        background-color: pink;
    }

    .info {
        img {
            margin: 30px 0;
            width: 160px;
            height: 160px;
            border: 1px solid orange;
            border-radius: 50%;
        }
    }

    .love2{
        height: 30px;
        width: 30px;
        /*background-color: #55a532;*/
        margin: 10px 10px;
        position: relative;
    }
    .love2::before{
        position: absolute;
        content: "";
        width: 20px;
        height: 30px;
        background-color: hotpink;
        border-radius: 10px 10px 0 0;
        transform-origin: 0 100%;
        transform: rotate(-45deg);
        left: 20px;
    }
    .love2::after{
        position: absolute;
        content: "";
        width: 20px;
        height: 30px;
        background-color: hotpink;
        border-radius: 10px 10px 0 0;
        transform-origin: 100% 100%;
        transform: rotate(45deg);
        left: 0;
    }
    .ps1 {
        top: -200px;
        right: -410px;
    }
    .ps2 {
        top: -360px;
        right: -480px;

    }
    .ps3 {
        top: -250px;
        right: -100px;
    }
    .ps4 {
        top: -160px;
        right: -70px;
    }
    .ps5 {
        top: -260px;
        right: -150px;
    }
    .ps6 {
        top: -360px;
        right: -370px;
    }
    .ps7 {
        top: -160px;
        right: -170px;
    }
    .ps8 {
        top: -60px;
        right: -420px;
    }
</style>