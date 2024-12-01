import request from '@/utils/request'

// 天气数据相关接口
export function fetchWeatherData(params) {
  return request({
    url: '/api/weather/fetch',
    method: 'post',
    data: params
  })
}

export function getWeatherList(params) {
  return request({
    url: '/api/weather/list',
    method: 'get',
    params
  })
}

export function deleteWeatherData(id) {
  return request({
    url: `/api/weather/delete/${id}`,
    method: 'delete'
  })
} 