<template>
  <div class="login">
      <!-- el ui卡片组件 -->
      <el-card class="login-card">
          <!-- 卡片内容 -->
        <div class="title">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <el-form style="margin-top:30px">
            <el-form-item>
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-input style="width:280px"></el-input>
                <el-button style='float:right' plain>朴素按钮</el-button>
            </el-form-item>
            <el-form-item>
                <!-- 勾选框 -->
                <el-checkbox>我已阅读并同意用户协议及条款</el-checkbox>

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
