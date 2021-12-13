<template>
    <div class="hello">
        <el-tabs tab-position="left" style="height: 700px;">
            <el-tab-pane label="我的发布">
                <el-card class="wrap">
                    <el-tabs border-card v-model="activeName">
                        <el-tab-pane label="墙信息" name="first">墙信息</el-tab-pane>
                        <el-tab-pane label="圈子信息" name="second">圈子信息</el-tab-pane>
                        <el-tab-pane label="交友信息" name="third">交友信息</el-tab-pane>
                        <el-tab-pane label="互助信息" name="fourth">互助信息</el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="私信">
                <el-card>

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
                activeName: 'second'
            }
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
</style>
