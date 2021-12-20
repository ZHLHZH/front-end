<template>
    <div class="rightarea">
        <div class="right-header">
            <h4>{{currentlist.username}}</h4>
        </div>
        <div class="msg-content">
            <div class="message my-msg">
                <p>how are you <br> <span>12:15</span></p>
            </div>
            <div class="message font-msg">
                <p>ok, im fine! tanks very much, you are welcome aaaaaaaaaaaaaaaaaaaaaaaaaa<br><span>12:30</span></p>
            </div>
            <div v-for="(infos,index) in currentlist.msglist" :key="index"
                 :class="['message', infos.from? 'font-msg' : 'my-msg']">
                <p>{{infos.content}}<br> <span>{{infos.time}}</span></p>
            </div>
        </div>
        <div class="input-box">
            <div class="top-icon"><span class="iconfont">&#xe60c;</span>
                <span class="iconfont">&#xe60c;</span>
            </div>
            <textarea placeholder="请输入内容" maxlength="200" v-model="inputmsg"></textarea>
            <button @click="sendmsg">发送</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'MsgList',
        props: ['sessionInfoList'],
        data () {
            return {
                inputmsg: '',
            }
        },
        methods: {
            sendmsg () {
                // console.log(this.$store.state.info.username)
                this.$store.dispatch('info/sendinfo', [this.inputmsg, this.$store.state.info.currentlist.username])
                this.inputmsg = ''
            },
            clearmsg () {
                this.$bus.$emit('saveUserMsg', [this.$store.state.info.currentlist.username,this.inputmsg])
                this.inputmsg = ''
            },
            getuserinbputmsg () {
                if ( this.sessionInfoList.has(this.$store.state.info.currentlist.username)) {
                    this.inputmsg = this.sessionInfoList.get(this.$store.state.info.currentlist.username)
                } else {
                    this.inputmsg = ''
                }
            }
        },
        computed: {
            ...mapState({
                currentlist: state => state.info.currentlist,
            }),
        },
        mounted() {
            this.$bus.$on('clearMsg', this.clearmsg)
            this.$bus.$on('getUserInputMsg', this.getuserinbputmsg)
        },
        beforeDestroy() {
            this.$bus.$off('clearMsg')
            this.$bus.$off('getUserInputMsg')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .rightarea {
        width: 450px;
        /*width: calc(100% - 230px);*/
        height: 600px;
        /*border: 1px solid black;*/

        .right-header {
            background-color: #ededed;
            width: 100%;
            height: 30px;

            h4 {
                line-height: 30px;
                font-weight: 400;
                font-size: 1.2em;
                margin-left: 10px;
            }
        }

        .msg-content {
            /*background-color: #666;*/
            width: 100%;
            height: 450px;
            overflow-y: auto;
            /*display: flex;*/
            position: relative;
            padding: 20px;
            box-sizing: border-box;

            .message {
                margin: 5px 0;
                display: flex;
                width: 100%;

                p {
                    position: relative;
                    display: inline-block;
                    padding: 8px;
                    max-width: 70%;
                    border-radius: 10px;

                    span {
                        display: block;
                        margin-top: 4px;
                        font-size: 0.85em;
                        color: #333;
                    }
                }
            }

            .my-msg {
                justify-content: flex-end;
                text-align: right;

                p {
                    background-color: #63a35c;
                }

                p::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: -8px;
                    width: 15px;
                    height: 15px;
                    background: linear-gradient(135deg, #63a35c 0%, #63a35c 50%, transparent 50%, transparent);
                }
            }

            .font-msg {
                justify-content: flex-start;
                text-align: left;

                p {
                    background-color: #d3dce6;
                }

                p::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -8px;
                    width: 15px;
                    height: 15px;
                    background: linear-gradient(225deg, #d3dce6 0%, #d3dce6 50%, transparent 50%, transparent);
                }
            }
        }

        .input-box {
            background-color: #ededed;
            width: 100%;
            position: relative;
            height: 120px;

            .top-icon {
                text-align: left;

                span {
                    cursor: pointer;
                    margin: 3px 3px;
                }
            }

            textarea {
                width: 98%;
                height: 60px;
                border: none;
                outline: none;
                font-size: 1em;
                padding: 3px 5px;
                box-sizing: border-box;
                word-break: break-all;
                word-wrap: break-word;

            }

            button {
                position: absolute;
                right: 10px;
                bottom: 10px;
                background-color: #0086b3;
                color: white;
                border: none;
                width: 40px;
                height: 18px;
                line-height: 18px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>