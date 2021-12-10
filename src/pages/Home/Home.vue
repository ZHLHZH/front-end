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
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
</style>