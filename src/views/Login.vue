<template>
    <div id="Login">
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPsw">
                <el-input v-model="form.userPsw" type="password"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pswSave">
                <el-checkbox v-model="form.pswSave" label="记住密码" name="pswSave"></el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    let ss = sessionStorage.getItem('keykeykey') ? true : false;

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                   userName:'12312321',
                   userPsw: '123123',
                    pswSave: ss
                },
                rules: {
                    userName:[
                        { required:true, message:'请输入用户名', trigger: 'blur' }
                    ],
                    userPsw:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                },
                checked: false
            }
        },
        methods: {
            submitLogin(){
                var that = this;

                that.$refs.form.validate((valid) => {
                    debugger;
                   if(valid){

                   }
                })
            }
        }
    }
</script>

<style></style>