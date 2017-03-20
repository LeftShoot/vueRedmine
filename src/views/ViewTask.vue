<template>
   <div id="viewTask">
    <el-table
         :data="tableData"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="日期"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="180">
         </el-table-column>
         <el-table-column
           prop="address"
           label="地址">
         </el-table-column>
       </el-table>
   </div>
</template>

<script>
    export default{
        data() {
            return {
                tableData: []
            }
        },
        mounted(){
            this.$http.get(this.PMT._config.GetAppList).then(m=>{
                console.log(m.data);
//                this.set('tableData',m.data.Data);
                this.tableData = m.data.Data;
                return{
                    tableData: m.data.Data
                }
            });
        }
    }
</script>

<style></style>