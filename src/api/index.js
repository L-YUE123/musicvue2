import axios from 'axios'

axios.defaults.baseURL = 'https://zyxcl.xyz/music/api'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.cookie = localStorage.getItem('curCookie') || ''
	config.params = {...config.params, cookie: localStorage.getItem('curCookie') || ''}
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
	console.log('响应', response)
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
	if (error.response.status === 301) {
		console.log('响应拦截错误需要登陆', error)
		const isGetInfo = async () => {
			try {
				const res = await loginTouristApi()
				console.log('游客登陆返回结果', res)
				if (res.data.code === 200) {
					axios.get(error.config.url).then(res => {
						return res
					}).catch(e => {})
				}
			}catch(e) {}
		}
		isGetInfo()
	}
  return Promise.reject(error);
});

// 邮箱登录
export const loginApi = (email, password) => {
  return axios.get('/login', {
    params: {
      email,
      password
    }
  })
}

// 游客登陆
export const loginTouristApi = () => {
  return axios.get('/register/anonimous')
}

// 登陆状态
export const loginStatusApi = () => {
  return axios.get('/login/status')
}

// 退出登录
export const exitLoginApi = () => {
  return axios.get('/logout')
}

// 获得首页图标
export const getHomeIconApi = () => {
  return axios.get('/homepage/dragon/ball')
}

// 首页轮播图
export const getBannerApi = () => {
  return axios.get('/banner')
}

// 获得每日推荐歌单  /recommend/resource
export const getRrecommendApi = () => {
	return axios.get('/recommend/resource')
}

// 获得推荐歌单
export const getCommandApi = () => {
	return axios.get('/personalized')
}

// 获取用户歌单
export const getUserSongSheetApi = (uid) => {
	return axios.get('/user/playlist', {
		params: {
			uid
		}
	})
}

// 获取用户详细信息
export const getUserInfoApi = (uid) => {
	return request('/user/detail', {
		params: {
			uid
		}
	})
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserSUMApi = () => {
  return axios.get('/user/subcount')
}

// 默认搜索  searchDefaultApi
export const searchDefaultApi = () => {
  return axios.get('/search/default')
}

// 搜索接口
export const searchKeywordApi = (keywords, type=1018, offset=0, limit=30 ) => {
	return axios.get('/search', {
		params: {
			keywords,
			type,
			offset,
			limit
		}
	})
}

// 热搜详情列表
export const searchHotApi = () => {
	return axios.get('/search/hot/detail')
}

// 搜索建议
export const searchSuggestApi = (keywords) => {
	return axios.get('/search/suggest', {
		params: {
			keywords
		}
	})
}
