<template>
  <div class="example">
    <van-form @submit="onSubmit">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="输入邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
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
import { loginStatusApi } from '../../api'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('userInfo', ['getUserInfo']),
    async getLoginstatus () {
      const status = await loginStatusApi()
      if (status.data.account && status.data.account.status === 0) {
        localStorage.setItem('id', String(status.data.account.id))
        getUserInfo()
        Toast.success('登录成功')
      }
    },
    async isLogin () {
      const res = await loginApi(this.email, this.password)
      if (res.code !== 200) {
        Toast.fail('账号或密码错误')
        return
      }
      localStorage.setItem('curCookie', res.cookie)
      localStorage.setItem('token', res.token)
      this.getLoginStatus()

      this.$router.push('/myhome')
    },
    onSubmit(values) {
      console.log("登录", values)
    }
  },
  computed: {
    ...mapState('userInfo', ['profile', 'musicSum'])
  },
  created() {
    this.getLoginStatus()
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
    background: red;
	}
</style>