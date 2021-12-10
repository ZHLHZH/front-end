<template>
    <div class="hello">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="墙首页" name="first">
                墙首页内容
            </el-tab-pane>
            <el-tab-pane label="闲置交易墙" name="second">
                <router-view></router-view>
            </el-tab-pane>
            <el-tab-pane label="表白墙" name="third">
                <router-view></router-view>
            </el-tab-pane>
            <el-tab-pane label="许愿墙" name="fourth">
                <router-view></router-view>
            </el-tab-pane>
        </el-tabs>
        <el-card>
            好阿萨德
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Wall',
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab) {
                switch (tab.index) {
                    case '2' :
                        this.$router.push('/biaobai')
                        break
                    case '1' :
                        this.$router.push('/jiaoyi')
                        break
                    case '3' :
                        this.$router.push('/xuyuan')
                        break
                    default:
                        break
                        // console.log(tab.index)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    h1{
        /*background-color: yellow;*/
    }
</style>