<template>
    <div class="header">
        <div id="headMessage" class="celarfix">
            <ul class="firstul">
                <li class="ls1">
                    <a href="">首页</a>
                </li>
                <li class="ls1" @mouseenter="lsView1=true" @mouseleave="lsView1=false">
                    <router-link to="/wall">万能墙</router-link>
                    <div class="secondmune" v-show="lsView1" >
                        <ul>
                            <li><router-link to="/biaobai">表白墙</router-link></li>
                            <li><router-link to="/jiaoyi">交易墙</router-link> </li>
                            <li><router-link to="/xuyuan">许愿墙</router-link></li>
                        </ul>
                    </div>
                </li>
                <li class="ls1" @mouseenter="lsView2=true" @mouseleave="lsView2=false">
                    <a href="">圈子</a>
                    <div class="secondmune" v-show="lsView2" >
                        <ul>
                            <li><a href="">社团</a></li>
                            <li><a href="">兴趣</a></li>
                        </ul>
                    </div>
                </li>
                <li class="ls1" @mouseenter="lsView3=true" @mouseleave="lsView3=false">
                    <router-link to="/friend">交友</router-link>
                    <div class="secondmune" v-show="lsView3" >
                        <ul>
                            <li><a href="">爱情信箱</a></li>
                            <li><a href="">交友速配</a></li>
                            <li><a href="">随便看看</a></li>
                        </ul>
                    </div>
                </li>
                <li class="ls1" @mouseenter="lsView4=true" @mouseleave="lsView4=false">
                    <a href="">生活</a>
                    <div class="secondmune" v-show="lsView4" >
                        <ul>
                            <li><a href="">吃点啥</a></li>
                            <li><a href="">去哪玩</a></li>
                            <li><a href="">。。。</a></li>
                        </ul>
                    </div>
                </li>
                <li class="ls1">
                    <a href="">学习</a>
                </li>
                <li class="ls1" @mouseenter="lsView5=true" @mouseleave="lsView5=false">
                    <a href="">互助</a>
                    <div class="secondmune" v-show="lsView5" >
                        <ul>
                            <li><a href="">跑腿服务</a></li>
                            <li><a href="">互助服务</a></li>
                        </ul>
                    </div>
                </li>
                <li class="ls1">
                    <a href="">周边</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                lsView1: false,
                lsView2: false,
                lsView3: false,
                lsView4: false,
                lsView5: false,
            }
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*头部信息*/
    #headMessage {
        background-color: lightblue;
        height: 180px;
        .firstul {
            display:flex;
            justify-content:center;
        }
        .firstul .ls1 {
            float: left;
            width: 80px;
            line-height: 25px;
            margin: 5px 10px;
            /*padding: 0 20px;*/
            font-size: 15px;
        }
        .secondmune{
            overflow: hidden;
            width: 80px;
            background-color: white;
            /*display: none;*/
            li {
                margin: 12px 0;
            }
        }
        a {
            color: #3c3c3c;
            font-size: 18px;
        }
        a:hover {
            color: lightsalmon;
        }
    }

</style>