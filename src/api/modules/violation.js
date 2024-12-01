import request from '@/utils/request'

// 交通违法信息管理相关接口
export function getViolationList(params) {
  return request({
    url: '/api/violation/list',
    method: 'get',
    params
  })
}

export function addViolation(data) {
  return request({
    url: '/api/violation/add',
    method: 'post',
    data
  })
}

export function updateViolation(data) {
  return request({
    url: '/api/violation/update',
    method: 'put',
    data
  })
}

export function deleteViolation(id) {
  return request({
    url: `/api/violation/delete/${id}`,
    method: 'delete'
  })
} 