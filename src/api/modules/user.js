import request from '@/utils/request'

// 用户管理相关接口
export function getUserList(params) {
  return request({
    url: '/api/user/list',
    method: 'get',
    params
  })
}

export function addUser(data) {
  return request({
    url: '/api/user/add',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/api/user/update',
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: `/api/user/delete/${id}`,
    method: 'delete'
  })
} 