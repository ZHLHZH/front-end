<template>
    <div class="header">
        <div id="headMessage" class="celarfix">
            <ul>
                <li>
                    <a href="">首页</a>
                </li>
                <li>
                    <a href="">万能墙</a>
                </li>
                <li>
                    <a href="">圈子</a>
                </li>
                <li>
                    <a href="">交友</a>
                </li>
                <li>
                    <a href="">生活</a>
                </li>
                <li>
                    <a href="">学习</a>
                </li>
                <li>
                    <a href="">互助</a>
                </li>
                <li>
                    <a href="">周边</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*头部信息*/
    #headMessage {
        background-color: lightblue;
        ul {
            display:flex;
            justify-content:center;
        }
        li {
            float: left;
            line-height: 35px;
            padding: 0 15px;
            font-size: 15px;
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