import request from '@/utils/request'

// 登录接口
export const login = (data: any) => {
  request({
    url: '/api/authenticate/mobile_number',
    method: 'post',
    data
  })
}

// 获取用户信息接口
export const getUserInfo = () => {
  request({
    url: '/api/account',
    method: 'get'
  })
}
