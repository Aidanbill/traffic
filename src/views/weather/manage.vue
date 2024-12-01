<template>
  <div class="weather-manage-container">
    <el-card>
      <div slot="header">
        <span>天气数据管理</span>
      </div>
      <div class="operation-bar">
        <el-button type="primary" @click="handleFetchWeather">
          <i class="el-icon-download"></i> 获取天气数据
        </el-button>
      </div>
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="temperature" label="温度"></el-table-column>
          <el-table-column prop="weather" label="天气"></el-table-column>
          <el-table-column prop="wind" label="风向"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { fetchWeatherData, getWeatherList, deleteWeatherData } from '@/api'

export default {
  name: 'WeatherManagePage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2024-01-01',
          temperature: '25°C',
          weather: '晴',
          wind: '东南风 3级'
        }
      ]
    }
  },
  methods: {
    async handleFetchWeather() {
      try {
        // 后期接口ready后，取消注释下面的代码
        // await fetchWeatherData()
        // this.$message.success('天气数据获取成功')
        // this.fetchList()
        this.$message.success('天气数据获取成功（模拟）')
      } catch (error) {
        this.$message.error('获取天气数据失败')
      }
    },
    async fetchList() {
      try {
        // 后期接口ready后，取消注释下面的代码
        // const { data } = await getWeatherList()
        // this.tableData = data
      } catch (error) {
        this.$message.error('获取天气数据列表失败')
      }
    },
    // eslint-disable-next-line no-unused-vars
    async handleDelete(row) {
      try {
        await this.$confirm('确认删除该条天气数据?', '提示', {
          type: 'warning'
        })
        // 后期接口ready后，取消注释下面的代码
        // await deleteWeatherData(row.id)
        // this.$message.success('删除成功')
        // this.fetchList()
        this.$message.success('删除成功（模拟）')
      } catch (error) {
        if (error !== 'cancel') {
          this.$message.error('删除失败')
        }
      }
    }
  },
  created() {
    // this.fetchList()
  }
}
</script>

<style scoped>
.weather-manage-container {
  min-height: 100%;
  padding: 20px;
  background-color: #f0f2f5;
}

.operation-bar {
  margin-bottom: 20px;
}

.el-card {
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-table {
  border-radius: 4px;
}

/* 添加响应式padding */
@media screen and (max-width: 768px) {
  .weather-manage-container {
    padding: 10px;
  }
}
</style> 