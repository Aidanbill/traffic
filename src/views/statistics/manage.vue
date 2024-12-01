<template>
  <div class="report-manage-container">
    <el-card>
      <div slot="header">
        <span>报告管理</span>
      </div>
      <div class="operation-bar">
        <el-button type="primary" @click="handleGenerateReport">
          <i class="el-icon-plus"></i> 生成报告
        </el-button>
      </div>
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="title" label="报告标题"></el-table-column>
          <el-table-column prop="type" label="报告类型"></el-table-column>
          <el-table-column prop="createTime" label="生成时间"></el-table-column>
          <el-table-column label="操作" width="250">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleView(scope.row)">查看</el-button>
              <el-button size="mini" type="success" @click="handleDownload(scope.row)">下载</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <!-- 生成报告对话框 -->
    <el-dialog title="生成报告" :visible.sync="dialogVisible" width="500px">
      <el-form :model="reportForm" :rules="rules" ref="reportForm" label-width="100px">
        <el-form-item label="报告标题" prop="title">
          <el-input v-model="reportForm.title" placeholder="请输入报告标题"></el-input>
        </el-form-item>
        <el-form-item label="报告类型" prop="type">
          <el-select v-model="reportForm.type" placeholder="请选择报告类型" style="width: 100%">
            <el-option label="日报" value="daily"></el-option>
            <el-option label="周报" value="weekly"></el-option>
            <el-option label="月报" value="monthly"></el-option>
            <el-option label="年报" value="yearly"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitGenerateReport" :loading="generating">生 成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { generateReport, getReportList, deleteReport } from '@/api'

export default {
  name: 'ReportManagePage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          title: '2024年1月交通数据报告',
          type: '月报',
          createTime: '2024-01-01 12:00:00'
        }
      ],
      dialogVisible: false,
      generating: false,
      reportForm: {
        title: '',
        type: ''
      },
      rules: {
        title: [{ required: true, message: '请输入报告标题', trigger: 'blur' }],
        type: [{ required: true, message: '请选择报告类型', trigger: 'change' }]
      }
    }
  },
  methods: {
    handleGenerateReport() {
      this.dialogVisible = true
      this.reportForm = {
        title: '',
        type: ''
      }
    },
    submitGenerateReport() {
      this.$refs.reportForm.validate(async valid => {
        if (valid) {
          try {
            this.generating = true
            // 后期接口ready后，取消注释下面的代码
            // await generateReport(this.reportForm)
            // this.$message.success('报告生成成功')
            // this.fetchList()
            this.$message.success('报告生成成功（模拟）')
            this.dialogVisible = false
          } catch (error) {
            this.$message.error('报告生成失败')
          } finally {
            this.generating = false
          }
        }
      })
    },
    // eslint-disable-next-line no-unused-vars
    handleView(row) {
      console.log('查看报告')
      this.$message.info('查看报告功能开发中')
    },
    // eslint-disable-next-line no-unused-vars
    handleDownload(row) {
      console.log('下载报告')
      this.$message.info('下载报告功能开发中')
    },
    // eslint-disable-next-line no-unused-vars
    async handleDelete(row) {
      try {
        await this.$confirm('确认删除该报告?', '提示', {
          type: 'warning'
        })
        // 后期接口ready后，取消注释下面的代码
        // await deleteReport(row.id)
        // this.$message.success('删除成功')
        // this.fetchList()
        this.$message.success('删除成功（模拟）')
      } catch (error) {
        if (error !== 'cancel') {
          this.$message.error('删除失败')
        }
      }
    },
    async fetchList() {
      try {
        // 后期接口ready后，取消注释下面的代码
        // const { data } = await getReportList()
        // this.tableData = data
      } catch (error) {
        this.$message.error('获取报告列表失败')
      }
    }
  },
  created() {
    // this.fetchList()
  }
}
</script>

<style scoped>
.report-manage-container {
  min-height: 100%;
  padding: 20px;
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
  .report-manage-container {
    padding: 10px;
  }
}
</style> 