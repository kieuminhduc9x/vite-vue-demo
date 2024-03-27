import axios from 'axios'
// import store from './../store/store'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { deepTrim } from './common'
import APIConfig from "../api/config.js";

console.log(import.meta,APIConfig,'APIConfig')

const service = axios.create({
  baseURL: APIConfig.base,
  timeout: 720000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    // if (error.response.status === 401) {
    //   store.dispatch('auth/logOut')
    // }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  // const currentUser = store.getters['auth/currentUser']
  const currentUser = {}
  if (config.params === undefined) {
    config['params'] = {}
  }
  if (currentUser) {
    if (currentUser.token) {
      config.headers['x-access-token'] = currentUser.token
    }
  }
  if (config.params) {
    deepTrim(config['params'])
  }
  if (config.data) {
    deepTrim(config['data'])
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
