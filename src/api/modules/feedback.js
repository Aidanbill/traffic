import request from '@/utils/request'

// 反馈信息相关接口
export function getFeedbackList(params) {
  return request({
    url: '/api/feedback/list',
    method: 'get',
    params
  })
}

export function addFeedback(data) {
  return request({
    url: '/api/feedback/add',
    method: 'post',
    data
  })
}

export function updateFeedback(data) {
  return request({
    url: '/api/feedback/update',
    method: 'put',
    data
  })
}

export function deleteFeedback(id) {
  return request({
    url: `/api/feedback/delete/${id}`,
    method: 'delete'
  })
} 