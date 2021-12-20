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
                <el-card class="info infomation celarfix">
                        <div class="area">
                            <UserList :getcheckinfo = 'getcheckinfo'></UserList>
                        </div>
                        <div class="area" v-show="hasinfo">
                            <MsgList :sessionInfoList = 'sessionInfoList' ></MsgList>
                        </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="黑名单">黑名单</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import MsgList from '@/pages/Info/MsgList'
    import UserList from '@/pages/Info/UserList'
    export default {
        name: 'Info',
        components: { UserList, MsgList },
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
                ],
                hasinfo: false,
                sessionInfoList: new Map()
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
            getcheckinfo (vlaue) {
                this.hasinfo = vlaue
            },
            saveusermsg (data) {
                this.sessionInfoList.set(data[0],data[1])
                // console.log(this.sessionInfoList)
            }
        },
        mounted() {
            this.$bus.$on('saveUserMsg', this.saveusermsg)
        },
        beforeDestroy() {
            this.$bus.$off('saveUserMsg')
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


    .area {
        float: left;
    }


</style>
