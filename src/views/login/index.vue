<template>
  <div class="login">
      <!-- el ui卡片组件 -->
      <el-card class="login-card">
          <!-- 卡片内容 -->
        <div class="title">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单                -----------------            验证---------- -->
        <el-form style="margin-top:30px" :model='loginForm' :rules='loginRules'>
            <el-form-item prop="mobile">
                <!-- 手机号 -->
                <el-input v-model="loginForm.mobile" placeholder="请输入您的手机号"></el-input>
            </el-form-item>

            <el-form-item prop="code">
                <!-- 验证码 -->
                <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:280px"></el-input>
                <el-button style='float:right' plain>发送验证码</el-button>
            </el-form-item>

            <el-form-item prop="checked">
                <!-- 勾选框 -->
                <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议及条款</el-checkbox>

            </el-form-item>
            <el-form-item>
               <el-button style='width:100%' type="primary">登陆</el-button>

            </el-form-item>
        </el-form>
      </el-card>
  </div>

</template>

<script>
export default {
  data () {
    return {
      // 要校验的表单数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 勾选框

      },
      // 校验规则对象
      loginRules: {
        // key(要校验的字段名):value(数组：多条或1条或没有s)

        // 手机号验证
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确手机号' }
        ],
        // 验证码
        code: [
          { required: true, message: '请输入你的验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确验证码' }
        ],
        // 勾选框
        checked: [
          // 自定义校验
          { validator: function (rule, value, callback) {
            //  rule     代表当潜规则
            //  value    代表当前值
            //  callback 回调函数
            if (value) {
              // true 代表通过
              callback()
            } else {
            //   false代表不通过
              callback(new Error('您需要勾选用户协议'))
            }
          } }
        ]
      }
    }
  }
}
</script>

<style lang='less'>
    .login{
        height: 100vh;

        background-image: url('../../assets/img/login_bg.jpg');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-card{
            width: 440px;
            height: 360px;
            .title {
                text-align: center;
                img {
                   height: 45px;
                }
            }
        }
    }
</style>
