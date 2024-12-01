<template>
  <div class="user-container">
    <el-card>
      <div slot="header">
        <span>用户信息管理</span>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="role" label="角色"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserManagePage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          username: 'admin',
          role: '管理员',
          createTime: '2024-01-01'
        }
      ]
    }
  },
  methods: {
    handleEdit(row) {
      console.log('编辑', row)
    },
    handleDelete(row) {
      console.log('删除', row)
    }
  }
}
</script> 