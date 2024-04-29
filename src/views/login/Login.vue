<template>
  <div class="example">
    <van-form @submit="onSubmit">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="输入邮箱"
        :rules="[
          { required: true, message: '请填写邮箱' },
          { pattern, message: '请输入正确的邮箱格式', trigger: 'onChange'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { loginStatusApi, loginApi } from '../../api'

export default {
  data () {
    return {
      email: '',
      password: '',
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/
    }
  },
  methods: {
    ...mapActions('userInfo', ['getUserInfo']),
    async getLoginstatus () {
      const status = await loginStatusApi()
      console.log('登录信息', status)
      if (status.data.account && status.data.account.status === 0) {
        localStorage.setItem('id', String(status.data.account.id))
        getUserInfo()
        Toast.success('登录成功')
      }
    },
    async isLogin () {
      const res = await loginApi(this.email, this.password)
      console.log('登录信息', res)
      if (res.data.code !== 200) {
        Toast.fail('账号或密码错误')
        return
      }
      localStorage.setItem('curCookie', res.data.cookie)
      localStorage.setItem('token', res.data.token)
      this.getLoginstatus()
      this.$router.push('/myhome')
    },
    onSubmit(values) {
      console.log("登录", values)
      this.isLogin()
    }
  },
  computed: {
    ...mapState('userInfo', ['profile', 'musicSum'])
  },
  created() {
    this.getLoginstatus()
  }
}
</script>

<style lang="scss" scoped>
  @function rem($px) {
    @return $px / 100 * 1rem;
  }

  .example {
		position: fixed;
    width: rem(272);
    height: rem(300);
		left: 50%;
		top: 50%;
		transform:translate(-50%, -50%);
	}
</style>