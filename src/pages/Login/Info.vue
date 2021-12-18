<template>
    <div class="hello">
        <el-tabs tab-position="left" style="height: 700px;">
            <el-tab-pane label="我的发布">
                <el-card class="wrap">
                    <el-tabs border-card v-model="activeName">
                        <el-tab-pane label="墙信息" name="first">
                            <el-card class="box-card">
                                <!--      上面的搜索栏-->
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-input placeholder="请输入内容" class="input-with-select"
                                                  v-model="queryParams.query" clearable @clear="getUserList">
                                            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
                                        </el-input>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button type="primary" @click="addDialog=true">添加</el-button>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button  icon="el-icon-edit" @click="getUserList">发布墙信息</el-button>
                                    </el-col>

                                </el-row>
                                <!--      表格内容区域-->
                                <el-table :data="wallInfoList" border stripe>
                                    <el-table-column type="index" label="#"></el-table-column>
                                    <el-table-column label="内容" prop="content"></el-table-column>
                                    <el-table-column label="日期" prop="date"></el-table-column>
                                    <el-table-column label="类型" prop="wall_type"></el-table-column>
                                    <el-table-column label="状态" prop="status"></el-table-column>
                                    <el-table-column label="操作" width="130px">
                                        <template class="temp-btn" >
                                            <el-button type="primary" icon="el-icon-edit" size="mini" ></el-button>
                                            <el-button type="danger" icon="el-icon-delete" size="mini" ></el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <!--      页脚分页区-->
                                <div class="block">
                                    <el-pagination
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :current-page="queryParams.pagenum"
                                            :page-sizes="[1, 2, 4, 10]"
                                            :page-size="queryParams.pagesize"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="total">
                                    </el-pagination>
                                </div>
                            </el-card>
                        </el-tab-pane>
                        <el-tab-pane label="圈子信息" name="second">圈子信息</el-tab-pane>
                        <el-tab-pane label="交友信息" name="third">交友信息</el-tab-pane>
                        <el-tab-pane label="互助信息" name="fourth">互助信息</el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="私信">
                <el-card class="info">
                    <div class="infomation celarfix">
                        <div class="area leftarea">
                            <div class="top">最近联系人</div>
                            <div class="infolist">
                                <div class="info-block">
                                    <div class="img-box">
                                        <img style="width: 30px" src="../../assets/logo.png" alt="">
                                    </div>
                                    <div class="ditals">
                                        <div class="headinfo">
                                            <h4 class="name">MAY ccc</h4>
                                            <p class="time">17:50</p>
                                        </div>
                                        <div class="msg">
                                            <p>what happen at leatest! are you ok?</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="info-block block-active">
                                    <div class="img-box">
                                        <img style="width: 30px" src="../../assets/logo.png" alt="">
                                    </div>
                                    <div class="ditals">
                                        <div class="headinfo">
                                            <h4 class="name">MAY ccc</h4>
                                            <p class="time">17:50</p>
                                        </div>
                                        <div class="msg">
                                            <p>what happen at leatest! are you ok?</p>
                                            <b>2</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="area rightarea">
                            <div class="right-header">
                                <h4>Chat user</h4>
                            </div>
                            <div class="msg-content">
                                <div class="message my-msg">
                                    <p>how are you <br> <span>12:15</span></p>
                                </div>
                                <div class="message font-msg">
                                    <p>ok, im fine! tanks very much, you are welcome aaaaaaaaaaaaaaaaaaaaaaaaaa<br><span>12:30</span></p>
                                </div>
                                <div class="message my-msg">
                                    <p>ok, im fine! tanks very much, you are welcome aaaaaaaaaaaaaaaaaaaaaaaaaa<br><span>12:30</span></p>
                                </div>
                                <div class="message font-msg">
                                    <p>ok, im fine! tanks very much, you are welcome aaaaaaaaaaaaaaaaaaaaaaaaaa<br><span>12:30</span></p>
                                </div>
                            </div>
                            <div class="input-box">
                                <div class="top-icon"><span class="iconfont">&#xe60c;</span>
                                    <span class="iconfont">&#xe60c;</span>
                                </div>
                                <textarea placeholder="请输入内容" maxlength="200"></textarea>
                                <button>发送</button>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="黑名单">黑名单</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        data () {
            return {
                activeName: 'second',
                queryParams: {
                    query: '',
                    pagenum: 1,
                    pagesize: 2
                },
                total: 5,
                wallInfoList: [
                    {
                        content: 'test',
                        date: '2021-12-07',
                        wall_type: '表白墙',
                        status: '审核中',
                    }
                ]
            }
        },
        methods: {
            getUserList () {

            },
            handleSizeChange (newSize) {
                // console.log(newSize)
                this.queryParams.pagesize = newSize
                this.getUserList()
            },
            handleCurrentChange (newPage) {
                this.queryParams.pagenum = newPage
                this.getUserList()
            },
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .hello {
        margin: 0 auto;
        width: 800px;
    }
    .el-input{
        width: 400px;
    }
    .el-table{
            font-size: 12px;
    }

    .infomation {
        .area {
            float: left;
        }
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
        .rightarea{
            width: calc(100% - 230px);
            height: 600px;
            /*border: 1px solid black;*/

            .right-header {
                background-color: #ededed;
                width: 100%;
                height: 30px;
                h4{
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
                        span{
                            display: block;
                            margin-top: 4px;
                            font-size: 0.85em;
                            color: #333;
                        }
                    }
                }
                .my-msg{
                    justify-content: flex-end;
                    text-align: right;
                    p{
                        background-color: #63a35c;
                    }
                    p::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        right: -8px;
                        width: 15px;
                        height: 15px;
                        background: linear-gradient(135deg,#63a35c 0%, #63a35c 50%, transparent 50%, transparent);
                    }
                }
                .font-msg{
                    justify-content: flex-start;
                    text-align: left;
                    p{
                        background-color: #d3dce6;
                    }
                    p::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -8px;
                        width: 15px;
                        height: 15px;
                        background: linear-gradient(225deg,#d3dce6 0%, #d3dce6 50%, transparent 50%, transparent);
                    }
                }
            }
            .input-box{
                background-color: #ededed;
                width: 100%;
                position: relative;
                height: 120px;
                .top-icon{
                    text-align: left;
                    span{
                        cursor: pointer;
                        margin: 3px 3px;
                    }
                }
                textarea{
                    width: 98%;
                    height: 60px;
                    border: none;
                    outline: none;
                    font-size: 1em;
                    padding: 3px 5px;
                    box-sizing: border-box;
                    word-break:break-all;
                    word-wrap: break-word;

                }
                button{
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

    }

</style>
