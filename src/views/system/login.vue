<template>
  <div class="container-fluid">
    <div class="background-login">
      <a-row :gutter="16" style="width: 100%; margin-left: 0 !important; margin-right: 0 !important">
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
<!--                <div class="header" style="display: flex; justify-content: center;">-->
<!--                  <a href="/">-->
<!--                    <img alt="logo" class="logo" src="../../assets/logo.png" style="width: 150px; height: 45px">-->
<!--                    <br>-->
<!--                  </a>-->
<!--                </div>-->
                <p style="text-align: center;text-transform: uppercase; font-weight: bold; font-size: 24px; margin-top: 15px; color: white">
                  Đăng nhập</p>
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
                  <a href="#" class="text-decoration-none text-blue-500	font-semibold text-md cursor-pointer">Quên mật khẩu</a>
                </div>
                <div style="display: flex; justify-content: flex-end; margin-top: 8px">
                  <a-button
                      size="large"
                      :loading="loading"
                      html-type="submit"
                      style="background-color: rgb(0 81 135); color: #FFFFFF; border: none; width: 45%; text-transform: none; "
                      class="fw-semibold fs-6"
                  >Đăng nhập
                    <font-awesome-icon icon="right-to-bracket" style="color: #ffffff; margin-left: 8px"/>
                  </a-button>
                </div>
              </a-form-item>
              <div class="bg-red-500 text-white p-4">
                Đây là một box với Tailwind CSS!
              </div>
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
import {login} from "../../api/login.js";
import { useRouter} from "vue-router";

export default defineComponent({
  setup() {

    // refs của form login
    const formLoginRef = ref();
    const router = useRouter()



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
        // loading.value = true
        const params = {
          username: values.username,
          password: values.password,
        }
        // router.push({name: 'admin-users'});
        router.push({name: 'admin-dashboard'});
        loginSuccess(response)
        // try {
        //   // Gọi API login
        //   const response = await login(params)
        //   console.log(response)
        //   //
        //   // if(response.result_status === 1) {
        //   //   loading.value = false
        //   //   console.log('Đăng nhập thành công', response.data);
        //   //   router.push({name: 'admin-users'});
        //   //   loginSuccess(response)
        //   // } else {
        //   //   loading.value = false
        //   //   notification.error({
        //   //     message: response.error
        //   //   })
        //   // }
        //
        // } catch (error) {
        //   // Xử lý lỗi
        //   console.log('Lỗi đăng nhập:', error)
        // }

      }
    }
    const loginSuccess = (response) => {
      if (response.result_status === 1) {
        router.push({name: 'admin-dashboard'});
      }
    }

    return {
      loading,
      formLoginRef,
      formLogin,
      router,
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
  background: #f0f2f5 url(../../assets/wallpaper.jpg) no-repeat 100%;
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
