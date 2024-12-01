import request from '@/utils/request'

// 通知系统相关接口
export function sendNotification(data) {
  return request({
    url: '/api/notification/send',
    method: 'post',
    data
  })
}

export function getNotificationList(params) {
  return request({
    url: '/api/notification/list',
    method: 'get',
    params
  })
}

export function deleteNotification(id) {
  return request({
    url: `/api/notification/delete/${id}`,
    method: 'delete'
  })
} 