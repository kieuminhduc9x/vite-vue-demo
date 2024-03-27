import api from './index'
import { axios } from '../utils/request'
import APIConfig from "./config.js";

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
// export async function login (parameter) {
//   return axios({
//     url: api.Login,
//     method: 'post',
//     data: parameter
//   })
// }

export async function login(parameter) {
  const url = `${APIConfig.base} + ${api.login}`
  return axios.post(url,parameter )
}

export function getInfo () {
  return axios({
    url: api.GetInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout (data, headers) {
  const defaultHeaders = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  headers = headers !== undefined ? { ...defaultHeaders, ...headers } : defaultHeaders
  return axios({
    url: api.Logout,
    method: 'post',
    headers: headers,
    data: data
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
// export function get2step (parameter) {
//   return axios({
//     url: api.twoStepCode,
//     method: 'post',
//     data: parameter
//   })
// }
