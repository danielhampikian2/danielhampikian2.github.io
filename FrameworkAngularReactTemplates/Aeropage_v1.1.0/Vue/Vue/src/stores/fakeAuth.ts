import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const fakeData = {
  name: 'Aeropage',
  email: 'test@test.com',
  password: 'password',
}

export const useFakeAuthStore = defineStore('fakeAuth', {
  state: () => ({
    fakeUser: useStorage('Fake_User', { name: '', email: '' }),
  }),
  getters: {
    user: (state) => state.fakeUser,
    isAuthenticated: (state) => {
      return state.fakeUser.email.length > 0 && state.fakeUser.name.length > 0
    },
  },
  actions: {
    register(name: string, email: string, password: string) {
      if (password == '' || email == '' || name == '') {
        return false
      }
      this.fakeUser.name = name
      this.fakeUser.email = email
      return true
    },
    login(email: string, password: string) {
      if (fakeData.email == email && fakeData.password == password) {
        this.fakeUser.name = fakeData.name
        this.fakeUser.email = fakeData.email
        return true
      }
      return false
    },
    logout() {
      this.fakeUser = { name: '', email: '' }
    },
  },
})
