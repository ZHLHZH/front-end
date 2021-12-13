<template>
    <div class="hello">
<!--        活动广告区域-->
        <h1>这里是home</h1>

<!--        墙服务区域 轮播图-->
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item>
                <div>表白墙</div>
            </el-carousel-item>
            <el-carousel-item>
                <div>交易墙</div>
            </el-carousel-item>
            <el-carousel-item>
                <div>心愿墙</div>
            </el-carousel-item>
        </el-carousel>
<!--        圈子区域-->
        <el-card>
            <div class="block">
                <span class="demonstration">社团</span>
                <el-image :src="src"></el-image>
            </div>
            <div class="block">
                <span class="demonstration">兴趣</span>
                <el-image :src="src">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <el-button type="primary">了解更多</el-button>
        </el-card>
<!--        交友区域-->
        <el-card>
            <div class="friend celarfix">
                <h1 class="title">爱情信箱</h1>
                <span class="love2 sp1"></span>
                <span class="love2 sp2"></span>
                <span class="love2 sp3"></span>
                <span class="love2 sp4"></span>
                <span class="love2 sp5"></span>
                <span class="love2 sp6"></span>
                <span class="love2 sp7"></span>
                <div class="fl">
                    <img src="../../../public/img/friend/love.png" alt="">
                </div>
                <div class="wrap fl">
                    <h1>SEND A MESSAGE</h1>
                    <br><br><br>
                    <div class="form-wrap">
                        <form action="">
                            <p>Hi, 那个TA,</p>
                            <label for="message">Your Message:</label>
                            <textarea name="message" id="message"
                            ></textarea>

                            <p>期待的TA</p>
                            <label for="name">要求:</label>
                            <input type="text" name="name" value="" id="name">

                            <label for="email">期待:</label>
                            <input type="text" name="email" value="" id="email">

                            <input type="submit" name="submit" value="投入爱情信箱">
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h1>爱情配对，活动限时开启，敬请期待</h1>
                <h2>每年情人节， 520， 双十一， 将会招募同学开启活动</h2>
                <el-button type="primary">了解详情</el-button>
            </div>
        </el-card>
<!--        生活模块-->
        <div class="life">
<!--            吃点啥-->
            <el-card class="eat">
                <h3>校园美食推荐</h3>
                <div class="block2">
                    <img src="../../assets/logo.png" alt="">
                    <span>南光老婆饼</span>
                    <span style="font-size: 30px; color: gold;" class="iconfont ph">&#xe60c;</span>
                    <div>
                        <el-rate
                                v-model="foodValue[0]"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                </div>
                <div class="block2">
                    <img src="../../assets/logo.png" alt="">
                    <span>勤业小龙虾</span>
                    <span style="font-size: 26px; color: lightgray;" class="iconfont ph">&#xe60d;</span>
                    <div>
                        <el-rate
                                v-model="foodValue[2]"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                </div>
                <div class="block2">
                    <img src="../../assets/logo.png" alt="">
                    <span>芙蓉沙茶面</span>
                    <span style="font-size: 23px; color: saddlebrown;" class="iconfont ph">&#xe60e;</span>
                    <div>
                        <el-rate
                                v-model="foodValue[3]"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                </div>
                <div class="block2">
                    <img src="../../assets/logo.png" alt="">
                    <span>海韵油泼面</span>
                    <span class="ph">4</span>
                    <div>
                        <el-rate
                                v-model="foodValue[4]"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                </div>
            </el-card>
<!--            外卖-->
            <el-card class="eat2">
                <h3>外卖美食推荐</h3>
            </el-card>
<!--            去哪玩-->
            <el-card class="play">
                <h3>周末去哪玩</h3>
            </el-card>
        </div>
<!--        学习模块-->
        <el-card>
            <h1>学习模块正在开发中。。。</h1>
        </el-card>
<!--        互助模块-->
        <el-card>
            <div class="block">
                <span class="demonstration">跑腿服务</span>
                <el-image :src="src"></el-image>
            </div>
            <div class="block">
                <span class="demonstration">互助服务</span>
                <el-image :src="src">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <el-button type="primary">了解更多</el-button>
        </el-card>
<!--        周边-->
        <el-card>
            <h1>周边模块正在开发中。。。</h1>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                foodValue: [5, 4.7, 4.6, 4, 3.8],
                iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .el-card {
        display: flex;
        justify-content:center;
    }

    .block {
        width: 500px;
        float: left;
        margin: 10px 30px;
        span {
            display: block;
            font-size: 18px;
            line-height: 20px;
            margin-bottom: 15px;
        }
    }

    /*这是墙服务的轮播图样式*/
    .el-carousel__item div {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

/*信箱相关样式*/
    .friend{
        position: relative;
        display: block;
        .title {
            font-size: 40px;
            color: #0086b3;
            position: absolute;
            left: 650px;
            top:80px
        }
        .sp1 {
            left: 90px;
            top:50px;
        }
        .sp2 {
            left: 160px;
            top:150px
        }
        .sp3 {
            left: -260px;
            top:20px
        }
        .sp4 {
            left: -360px;
            top:100px
        }
        .sp5 {
            left: -460px;
            top:80px
        }
        .sp6 {
            left: -300px;
            top:120px
        }
        .sp7 {
            left: 240px;
            top:30px
        }

        img {
            margin-left: 50px;
            width: 300px;
        }
        p {
            font-size: 24px;
        }
        .wrap {
            width: 530px;
            margin: 20px 100px;
            height: 700px;
        }
        h1{
            margin-bottom: 20px;
            text-align: center;
            font-size: 35px;
            font-family: Tahoma;
            color: white;
        }
        .form-wrap{
            text-align: left;
            overflow: hidden;
            height: 447px;
            position: relative;
            top:0px;
            transition: all 1s ease-in-out .3s;
        }

        .form-wrap::before{
            content: "爱情信箱";
            text-align: center;
            font-family: Tahoma;
            font-weight: bold;
            line-height: 80px;
            color: black;
            position: absolute;
            bottom: 128px;
            left: 0;
            background-color: burlywood;
            width: 530px;
            height: 217px;
        }
        .form-wrap::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: transparent;
            /*width: 530px;*/
            /*height: 259px;*/
            border-top: 100px solid transparent;
            border-bottom: 100px solid lightgoldenrodyellow;
            border-right: 265px solid lightgray;
            border-left: 265px solid burlywood;
        }

        /*.form-wrap.hide:after,*/
        /*.form-wrap.hide:before{*/
        /*    display: none;*/
        /*}*/

        .form-wrap:hover{
            height: 777px;
            top:-200px;
        }

        form{
            background-color: white;
            position: relative;
            top: 200px;
            overflow: hidden;
            height: 200px;
            width: 400px;
            margin: 0px auto;
            padding: 20px;
            border: 1px solid white;
            border-right: 3px;
            transition: all 1s ease-in-out .3s;
        }

        .form-wrap:hover form{
            height: 530px;
        }

        label{
            margin: 11px 20px 0 0;
            font-size: 15px;
            color: grey;
            text-transform: uppercase;
        }
        input[type=text], textarea {
            font: 14px normal uppercase, arial, serif;
            color: dimgray;
            background: none;
            width: 380px;
            height: 37px;
            padding: 0 10px;
            margin: 0 0 10px 0;
            border: 1px solid #f8f5f1;
            border-radius: 5px;
        }

        textarea{
            height: 80px;
            padding-top: 14px;
        }

        textarea:focus,
        input[type=text]:focus{
            background: white;
        }

        .form-wrap input[type=submit] {
            position: relative;
            font-family: Tahoma;
            font-size: 24px;
            color: gray;
            width: 100%;
            text-align: center;
            opacity: 0;
            background: none;
            cursor: pointer;
            border-radius: 3px;
            transition: opacity 0.7s ease-in-out 0s;
        }

        .form-wrap:hover input[type=submit]{
            z-index: 1;
            opacity: 1;
            transition: opacity 0.5s ease-in-out 1.3s;
        }
    }

    .life{

        display: flex;
        justify-content: space-between;

        .el-card {
            width: 380px;
        }
        h3{
            font-size: 20px;
            margin: 5px 5px;
        }

        .block2 {
            position: relative;
            width: 360px;
            padding: 5px 0;
            /*border: 1px solid gray;*/
            span {
                font-size: 16px;

            }
            img {
                position: absolute;
                left:40px;
                width: 50px;
            }
            .ph {
                position: absolute;
                right:30px;
                top: 5px;
                font-size: 20px;
            }
        }

    }




</style>