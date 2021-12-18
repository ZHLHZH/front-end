<template>
    <el-card class="wrap">
        <div class="topicon">
            <span>厦园生活网</span>
        </div>
        <h1>注册</h1>
        <el-form :model="loginForm"  :rules="logeRules" ref="loginForm" >
            <el-form-item  prop="userName">
                <el-input type="text" v-model="loginForm.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="passWord">
                <el-input type="password" v-model="loginForm.passWord" placeholder="密码"></el-input>
            </el-form-item>

            <el-form-item label="性别：">
                <el-radio-group v-model="loginForm.sex" size="medium">
                    <el-radio label="0">男</el-radio>
                    <el-radio label="1">女</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">注册</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="link">
            <span>已有账号&nbsp;&nbsp;</span>
            <router-link to="/login">直接登录</router-link>
        </div>

    </el-card>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                loginForm : {
                    userName: '',
                    passWord: '',
                    sex: "0"
                },
                logeRules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            async submitForm () {
                // const { data: res } = await this.$http.post('/register', { "userName":`${this.loginForm.userName}`, "passWord": 'xxx'}  )
                // const formData = { "userName":`${this.loginForm.userName}`, "passWord": 'xxx'}
                // console.log(JSON.stringify(this.loginForm))
                const { data: res } = await this.$http.post('/register', JSON.stringify(this.loginForm))
                if (res.code !== 200 ) return this.$message.error(res.message)
                this.$message.success('注册成功！')
                console.log(res)
            },
            resetForm () {
                this.loginForm.username = ''
                this.loginForm.password = ''
                this.loginForm.sex =  0
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