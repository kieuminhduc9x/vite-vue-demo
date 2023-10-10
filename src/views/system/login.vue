<template>
  <div class="container-fluid">
    <div class="background-login">
      <a-row :gutter="16" style="width: 100%; margin-left: 0px!important; margin-right: 0px@important">
        <a-col :lg="9" :md="9" :xs="0"></a-col>
        <a-col :lg="6" :md="6" :xs="24">
          <a-form
              autocomplete="off"
              class="user-layout-login"
              ref="formLoginRef"
              :model="formLogin"
              @finish="handleSubmit">
            <a-spin :spinning="loading">
              <div style="padding-top: 15px">
                <div class="header" style="display: flex; justify-content: center;">
                  <a href="/">
                    <img alt="logo" class="logo" src="../../assets/logo.png" style="width: 150px; height: 45px">
                    <br>
                  </a>
                </div>
                <p style="text-align: center; font-weight: bold; font-size: 24px; margin-top: 15px; color: white">
                  BÃI ĐỖ EPARKING</p>
              </div>
              <a-form-item
                  name="username"
                  :rules="{
                            required: true,
                            message: 'Tài khoản bắt buộc nhập',
                             trigger: 'change'
                          }">
                <a-input
                    size="large"
                    type="text"
                    :placeholder="'Tài khoản'"
                    v-model:value="formLogin.username"
                >
                  <template #prefix>
                    <font-awesome-icon icon="user" :style="{ color: 'rgba(0,0,0,.25)', marginRight: '5px' }"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  name="password"
                  :rules="{
                            required: true,
                             message: 'Mật khẩu bắt buộc nhập',
                              trigger: 'change'
                          }">
                <a-input
                    size="large"
                    type="password"
                    :placeholder="'Mật khẩu'"
                    v-model:value="formLogin.password"
                >
                  <template #prefix>
                    <font-awesome-icon icon="lock" :style="{ color: 'rgba(0,0,0,.25)', marginRight: '5px' }"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <div style="display: flex; justify-content: flex-end">
                  <a-button
                      size="large"
                      :loading="loading"
                      html-type="submit"
                      style="background-color: #3499dc; color: #FFFFFF; border: none; width: 45%; text-transform: none; "
                  >Đăng nhập
                    <font-awesome-icon icon="right-to-bracket" style="color: #ffffff; margin-left: 5px"/>
                  </a-button>
                </div>
              </a-form-item>
            </a-spin>
          </a-form>
        </a-col>
        <a-col :lg="9" :md="9" :xs="0"></a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import { notification } from 'ant-design-vue'
import {axios} from '../../utils/request'
import api from '../../api/index'

export default defineComponent({
  setup() {


    const apiUrl = import.meta.env.VUE_APP_API_SERVER_URL

    // refs của form login
    const formLoginRef = ref();

    // thông tin params form đăng nhập
    const formLogin = reactive({
      username: '',
      password: ''
    });

    // loading của trang login
    const loading = ref(false)

    // Submit đăng nhập
    const handleSubmit = async values => {
      if (values) {
        loading.value = true
        try {
          // Gọi API login
          const response = await axios.post(apiUrl +  api.login, {
            username: values.username,
            password: values.password,
          })
          console.log(response)
          console.log(response.data)
          console.log(response.data.data.userData)
          if(response.data.result_status === 1) {
            loading.value = false
            console.log('Đăng nhập thành công', response.data);
            this.$router.push({name: 'users'});
          } else {
            loading.value = false
            notification.error({
              message: response.data.message
            })
          }

        } catch (error) {
          // Xử lý lỗi
          console.error('Lỗi đăng nhập:', error)
        }

      }
    }
    const loginSuccess = (response) => {
      if (response.result_status === 1) {
        this.$router.push({name: 'transactionManagement'})
      }
    }

    return {
      loading,
      formLoginRef,
      formLogin,
      handleSubmit,
      loginSuccess
    };
  },
});
</script>

<style>

.background-login {
  width: 100%;
  min-height: 100%;
  height: 100%;
  background: #f0f2f5 url(../../assets/background_login.jpg) no-repeat 50%;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;

  a {
    text-decoration: none;
  }
}

.user-layout-login {
  margin-top: 15rem;
  width: 100%;
  padding: 15px 25px;
  background-color: #4c434378 !important;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  label {
    font-size: 14px;
  }
}
</style>
