<template>
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
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                   userName:'',
                   userPsw: '',
                    pswSave: ''
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
        mounted() {
            let loginInfo = JSON.parse(localStorage.getItem(this.storageKeyName.loginInfo));
            let checked = loginInfo ? true : false;

            this.form.pswSave = checked;

            if(checked){
                this.form.userName = loginInfo.username;
                this.form.userPsw = loginInfo.password;
            }
        },
        methods: {
            submitLogin(){
                var that = this;

                that.$refs.form.validate((valid) => {
                   if(valid){
                       let loginParams = {
                           username: this.form.userName,
                           password: this.form.userPsw
                       }

                       this.$http.get(this.PMT._config.Login,{ params: loginParams }).then(m => {

                           let result = m.data;

                           if(result.IsCompleted){
                               console.log(result.Data);
                               sessionStorage.setItem(that.storageKeyName.userInfo, JSON.stringify(result.Data))

                               if(that.form.pswSave){ //是否记住密码
                                   localStorage.setItem(that.storageKeyName.loginInfo, JSON.stringify(loginParams));
                               }else{
                                   localStorage.removeItem(that.storageKeyName.loginInfo);
                               }
                               that.$router.push({path: '/'});
                           }else{
                               console.log(result.Message);
                           }

                       });
                   }
                })
            }
        }
    }
</script>

<style></style>