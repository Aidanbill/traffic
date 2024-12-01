import request from '@/utils/request'

// 视频数据管理相关接口
export function getVideoList(params) {
  return request({
    url: '/api/video/list',
    method: 'get',
    params
  })
}

export function uploadVideo(data) {
  return request({
    url: '/api/video/upload',
    method: 'post',
    data
  })
}

export function deleteVideo(id) {
  return request({
    url: `/api/video/delete/${id}`,
    method: 'delete'
  })
} 