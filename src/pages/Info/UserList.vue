<template>
    <div class="leftarea">
        <div class="top">最近联系人</div>
        <div class="infolist" @click="chooseUser">
            <div v-for="(useritem, index) in userlist" :key="index" class="info-block">
                <div class="img-box">
                    <img class="img" style="width: 30px" src="../../assets/logo.png" alt="">
                </div>
                <div class="ditals">
                    <div class="headinfo">
                        <h4 class="name">{{useritem.name}}</h4>
                        <p class="time">{{useritem.msgList[useritem.msgList.length-1].time}}</p>
                    </div>
                    <div class="msg">
                        <p class="msgs">{{useritem.msgList[useritem.msgList.length-1].content}}</p>
                        <b class="noread" v-show="useritem.newmsg">{{useritem.newmsg}}</b>
                    </div>
                </div>
            </div>
<!--            <div class="info-block block-active">-->
<!--                <div class="img-box">-->
<!--                    <img style="width: 30px" src="../../assets/logo.png" alt="">-->
<!--                </div>-->
<!--                <div class="ditals">-->
<!--                    <div class="headinfo">-->
<!--                        <h4 class="name">MAY ccc</h4>-->
<!--                        <p class="time">17:50</p>-->
<!--                    </div>-->
<!--                    <div class="msg">-->
<!--                        <p>what happen at leatest! are you ok?</p>-->
<!--                        <b>2</b>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'UserList',
        props: ['getcheckinfo'],
        data () {
            return {
                userlist2: [
                    { name: 'May', time: ' 14:23', msg: 'what happen at leatest! are you ok?'},
                    { name: 'Lisa', time: ' 15:53', msg: 'what happen at leatest! are you ok?'},
                ]
            }
        },
        computed: {
            ...mapState({
                userlist: state => state.info.userlist
            }),
        },
        methods: {
            chooseUser (e) {
                // 当触发点击选择，改变info中 msglist的状态为可视
                this.getcheckinfo(true)
                // 点击用户列表，选择用户列表的当前node， 将挡墙node的class改变为选中状态
                let node
                if (e.target.className === 'img-box' || e.target.className === 'ditals') {
                    node = e.target.parentNode
                } else if (e.target.className === 'headinfo' || e.target.className === 'msg'
                    || e.target.className === 'img') {
                    node = e.target.parentNode.parentNode
                } else if (e.target.className === 'name' || e.target.className === 'time'
                    || e.target.className === 'msgs' || e.target.className === 'noread') {
                    node = e.target.parentNode.parentNode.parentNode
                } else if (e.target.className === 'info-block') {
                    node = e.target
                } else {
                    console.log(e.target.className)
                    return
                }
                // 用时间总线触发兄弟组件的内容，清空输入栏中的信息。
                this.$bus.$emit('clearMsg')
                // console.log(node)
                const usernode = document.getElementsByClassName('info-block');
                for(let user of usernode) {
                    user.className = 'info-block'
                }
                node.className = 'info-block block-active'
                const username = node.children[1].children[0].children[0].innerText
                this.$store.dispatch('info/chooseruser', username)
                // console.log(node.children[1].children[0].children[0].innerText)
                // 总线触发，获得消息框输入内容
                this.$bus.$emit('getUserInputMsg')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .leftarea{
        width: 200px;
        height: 600px;
        border-right: 1px solid #d3dce6;
        .top{
            width: 100%;
            /*padding: 5px 10px;*/
            height: 30px;
            text-align: left;
            border-bottom: 1px solid #d3dce6;
        }
        .infolist {
            width: 100%;
            height: calc(100% - 30px);
            overflow-y: auto;
            position: relative;
            /*background-color: #0086b3;*/
            .block-active {
                background-color: #efefef;
            }
            .info-block:hover {
                background-color: #f5f5f5;
            }
            .info-block {
                width: 100%;
                padding: 8px;
                box-sizing: border-box;
                display: flex;
                /*justify-content: center;*/
                align-items: center;
                border-bottom: 1px solid rgba(0,0,0,0.05);
                cursor: pointer;
                .img-box {
                    width: 30px;
                    height: 30px;
                    margin-right: 8px;
                    img{
                        border-radius: 50%;
                    }
                }
                .ditals {
                    width: 100%;
                    .headinfo {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                        h4 {
                            font-size: 1.1em;
                            font-weight: 600;
                            color: #111;
                        }
                        .time {
                            font-size: 0.8em;
                            color: #aaa;
                        }
                    }
                    .msg {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        p {
                            text-align: left;
                            font-size: 0.9em;
                            color: #aaa;
                            display:-webkit-box;
                            -webkit-box-orient:vertical;
                            -webkit-line-clamp:1;
                            overflow:hidden;
                            text-overflow: ellipsis;
                        }
                        b {
                            background-color: red;
                            color: #d3d3d3;
                            min-width: 16px;
                            height: 16px;
                            line-height: 16px;
                            font-size: 0.75em;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
</style>