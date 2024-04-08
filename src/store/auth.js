// store/auth.js
import {login} from "../api/login"
import CryptoJS from 'crypto-js'

export const state = {
    loggedIn: false,
    user: null,
    token: null
}
export const mutations = {
    SET_LOGGED_IN(state, loggedIn) {
        state.loggedIn = loggedIn;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    }
}
export const actions = {
    async login({commit}, values) {
        values.password = CryptoJS.AES.encrypt(
            values.password,
            '4338aefbc30b0a0eb604935e36b509ee5f563ef5b1ff0d1ad0aa1d69267cf77100bed13ce0112f4d7fb185071f412e3616c4ea35b9bbfd06d4b39ea15ec5b0de'
        ).toString()
        values.remember = values.remember || false

        try {
            const response = await login(values)
            if (response.result_status === 1 && response && response.userData) {
                const permission = []
                response.userData.ability.forEach(item => {
                    if (item) {
                        permission.push(item.subject)
                    }
                })
                commit('SET_LOGGED_IN', true)
                commit('SET_USER', response.userData)
                commit('SET_TOKEN', response.userData.accessToken)
                return new Promise((resolve, reject) => {
                    resolve(response)
                })
            }
        } catch (error) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
    },
    logout({commit}) {
        // Đăng xuất bằng cách xóa user (hoặc token) khỏi state
        commit('SET_LOGGED_IN', false);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
    },
}
