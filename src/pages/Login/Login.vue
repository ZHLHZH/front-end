<template>
    <div class="hello">
        <el-card class="wrap">
            <div class="topicon">
                <span>厦园生活网</span>
            </div>
            <h1>登录</h1>
            <el-form :model="loginForm"  :rules="logeRules" ref="loginForm" >
                <el-form-item  prop="username">
                    <el-input type="text" v-model="loginForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm">登录</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
            <div class="link">
                <a href="#">找回密码</a>
                <span>&nbsp;|&nbsp;</span>
                <router-link to="/register">快速注册</router-link>
            </div>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                loginForm : {
                    username: '',
                    password: ''
                },
                logeRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm () {
                console.log('submit')
            },
            resetForm () {
                this.loginForm.username = ''
                this.loginForm.password = ''
            }

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .wrap {
        width: 500px;
        height: 600px;
        margin: 20px auto;
        border-radius: 20px;
        .topicon {
            line-height: 200px;
            font-size: 30px;
            font-family: Tahoma ;
            width: 100%;
            height: 200px;
            background-color: lightblue;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            margin-bottom: 30px;
            span {
                color: #3e3e3e;
            }
        }
        .el-form {

            .el-form-item {
                width: 300px;
                margin: 20px auto;
            }
        }
        .link {
            a {
                color: red;
            }
        }


    }
</style>