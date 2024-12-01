import request from '@/utils/request'

// 设备管理相关接口
export function getDeviceList(params) {
  return request({
    url: '/api/device/list',
    method: 'get',
    params
  })
}

export function addDevice(data) {
  return request({
    url: '/api/device/add',
    method: 'post',
    data
  })
}

export function updateDevice(data) {
  return request({
    url: '/api/device/update',
    method: 'put',
    data
  })
}

export function deleteDevice(id) {
  return request({
    url: `/api/device/delete/${id}`,
    method: 'delete'
  })
} 