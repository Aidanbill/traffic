import request from '@/utils/request'

// 数据统计相关接口
export function getDashboardData() {
  return request({
    url: '/api/statistics/dashboard',
    method: 'get'
  })
}

export function generateReport(data) {
  return request({
    url: '/api/statistics/report/generate',
    method: 'post',
    data
  })
}

export function getReportList(params) {
  return request({
    url: '/api/statistics/report/list',
    method: 'get',
    params
  })
}

export function deleteReport(id) {
  return request({
    url: `/api/statistics/report/delete/${id}`,
    method: 'delete'
  })
} 