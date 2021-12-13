<template>
    <div class="hello">
        <el-tabs tab-position="left" style="height: 700px;">
            <el-tab-pane label="个人信息">
                <el-card class="wrap">
                    <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="100px">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="userForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group v-model="userForm.sex">
                                <el-radio label="male">男</el-radio>
                                <el-radio label="female">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="昵称" prop="name">
                            <el-input v-model="userForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="个人简介" prop="info">
                            <el-input style="width: 400px;" type="textarea" v-model="userForm.info"></el-input>
                        </el-form-item>
                        <el-form-item label="头像" prop="img">
                            <template>
                                <el-upload
                                        action="#"
                                        list-type="picture-card"
                                        :auto-upload="false">
                                    <i slot="default" class="el-icon-plus"></i>
                                    <div slot="file" slot-scope="{file}">
                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                    </div>
                                </el-upload>
                            </template>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="contact">
                            <el-input v-model="userForm.contact"></el-input>
                        </el-form-item>
                        <el-form-item label="联系邮箱" prop="email">
                            <el-input v-model="userForm.email"></el-input>
                        </el-form-item>

                        <el-form-item label="校区" prop="region">
                            <el-select style="width: 400px" v-model="userForm.region" placeholder="请选择校区">
                                <el-option label="思明校区" value="siming"></el-option>
                                <el-option label="翔安校区" value="xiangan"></el-option>
                                <el-option label="马来校区" value="malai"></el-option>
                                <el-option label="漳州校区" value="zhangzhou"></el-option>
                                <el-option label="其他校区" value="other"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="身份验证">配置管理</el-tab-pane>
            <el-tab-pane label="隐私设置">配置管理</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'Setting',
        data () {
            return {
                userForm: {
                    username: '',
                    sex: 'male',
                    name: '',
                    info: '',
                    contact: '',
                    email: '',
                    region: '',
                    introduce: ['item1','item2'],
                },
                imageUrl: '',
                userRules: {}
            }
        },
        methods: {
            submitForm () {
                console.log('submit')
                console.log(this.userForm.introduce)
            },
            resetForm () {
                console.log('submit')
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
    label {
        margin-left: 30px;
    }

</style>
