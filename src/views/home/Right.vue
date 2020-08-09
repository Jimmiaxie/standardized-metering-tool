<template>
  <div>
    <div>
      <el-button @click="selectTemplate">选择标准化模板</el-button>
    </div>
    <div class="p-left-table">
      <my-table :head="tableHead" :data="tableInfo" />
    </div>
    <my-dialog title="导入文件" :visible.sync="dialogVisible" :footer="false">
      <template v-slot:content>
        <el-upload
          drag
          action="/api/upload"
          :on-success="handleUploadSuccess"
          :before-upload="checkFile"
          list-type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传excel文件</div>
        </el-upload>
      </template>
      <template v-slot:footer></template>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from "@/components/Dialog";
import MyTable from "./components/Table";

export default {
  components: {
    MyDialog,
    MyTable
  },
  data() {
    return {
      dialogVisible: false,
      tableHead: [
        {
          eidtable: "0",
          key: "number",
          value: "序号"
        },
        {
          eidtable: "0",
          key: "spotName",
          value: "测点名称"
        },
        {
          eidtable: "0",
          key: "standardName",
          value: "标准化测点名称"
        },
        {
          eidtable: "0",
          key: "unit",
          value: "单位"
        },
        {
          eidtable: "0",
          key: "mapper",
          value: "状态描述"
        }
      ],
      tableInfo: [
        {
          id: "",
          mapper: "",
          number: "1",
          precision: "",
          rw: "0",
          spotName: "UPS型号",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "2",
          precision: "",
          rw: "0",
          spotName: "输出额定视在功率",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "3",
          precision: "",
          rw: "0",
          spotName: "输出功率因数",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "4",
          precision: "",
          rw: "0",
          spotName: "输入相位/输出相位",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "5",
          precision: "",
          rw: "0",
          spotName: "输入额定电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "6",
          precision: "",
          rw: "0",
          spotName: "输出额定电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "7",
          precision: "",
          rw: "0",
          spotName: "电池片编号",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "8",
          precision: "",
          rw: "0",
          spotName: "电池标准电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper:
            "P=开机模式;S=待机模式;Y=旁路模式;L=线条模式;B=电池模式;T=电池测试模式;F=故障模式;E=经济模式;C=转换器模式;D=关机模式",
          number: "9",
          precision: "",
          rw: "0",
          spotName: "UPS模式",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "10",
          precision: "",
          rw: "0",
          spotName: "额定输出电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "11",
          precision: "",
          rw: "0",
          spotName: "额定输出电流",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "12",
          precision: "",
          rw: "0",
          spotName: "电池电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "13",
          precision: "",
          rw: "0",
          spotName: "额定输出频率",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "14",
          precision: "",
          rw: "0",
          spotName: "输入电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "15",
          precision: "",
          rw: "0",
          spotName: "输入频率",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "16",
          precision: "",
          rw: "0",
          spotName: "输出电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "17",
          precision: "",
          rw: "0",
          spotName: "输出频率",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "18",
          precision: "",
          rw: "0",
          spotName: "输出电流",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "19",
          precision: "0.01",
          rw: "0",
          spotName: "输出负载百分比",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "20",
          precision: "",
          rw: "0",
          spotName: "正母线电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "21",
          precision: "",
          rw: "0",
          spotName: "负母线电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "22",
          precision: "",
          rw: "0",
          spotName: "P蓄电池电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "23",
          precision: "",
          rw: "0",
          spotName: "n蓄电池电压",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "24",
          precision: "",
          rw: "0",
          spotName: "检测指针最高温度",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "0=标准;1=交互;2=在线",
          number: "25",
          precision: "",
          rw: "0",
          spotName: "UPS状态",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "26",
          precision: "",
          rw: "0",
          spotName: "预留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "27",
          precision: "",
          rw: "0",
          spotName: "实用程序失败",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "28",
          precision: "",
          rw: "0",
          spotName: "电池电量低",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "29",
          precision: "",
          rw: "0",
          spotName: "旁路/增压激活",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "30",
          precision: "",
          rw: "0",
          spotName: "UPS故障",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "31",
          precision: "",
          rw: "0",
          spotName: "紧急接口",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "32",
          precision: "",
          rw: "0",
          spotName: "正在进行测试",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "33",
          precision: "",
          rw: "0",
          spotName: "关闭激活",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "34",
          precision: "",
          rw: "0",
          spotName: "电池停止",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "35",
          precision: "",
          rw: "0",
          spotName: "电池测试失败",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "36",
          precision: "",
          rw: "0",
          spotName: "电池测试成功",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "37",
          precision: "",
          rw: "0",
          spotName: "电压高损耗点",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "38",
          precision: "",
          rw: "0",
          spotName: "电压低损耗点",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "39",
          precision: "",
          rw: "0",
          spotName: "频率高损耗点",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "40",
          precision: "",
          rw: "0",
          spotName: "频率低损耗点",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "41",
          precision: "",
          rw: "0",
          spotName: "蓄电池断开",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "42",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "43",
          precision: "",
          rw: "0",
          spotName: "中性线和线路线反向连接",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "44",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "45",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "46",
          precision: "",
          rw: "0",
          spotName: "旁路输入频率不稳定",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "47",
          precision: "",
          rw: "0",
          spotName: "蓄电池充电过度",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "48",
          precision: "",
          rw: "0",
          spotName: "电池电量不足",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "49",
          precision: "",
          rw: "0",
          spotName: "超载",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "50",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "51",
          precision: "",
          rw: "0",
          spotName: "EPO已启用",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "52",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "53",
          precision: "",
          rw: "0",
          spotName: "超温报警",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "54",
          precision: "",
          rw: "0",
          spotName: "充电器报警",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "55",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "56",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "57",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "58",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "59",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "60",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "61",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "62",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "63",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "64",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "65",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "66",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "67",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "68",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "69",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "70",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "71",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "72",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "73",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "74",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "75",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "76",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "77",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "78",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "79",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "80",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "81",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "82",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "83",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "84",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "85",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "86",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "87",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "88",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "89",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "90",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "91",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "92",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "93",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "94",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "95",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "96",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "97",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "98",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "99",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "100",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "101",
          precision: "",
          rw: "0",
          spotName: "旁路不稳定",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "102",
          precision: "",
          rw: "0",
          spotName: "EEPROM操作错误",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "103",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        },
        {
          id: "",
          mapper: "",
          number: "104",
          precision: "",
          rw: "0",
          spotName: "保留",
          standardName: "",
          status: "0",
          unit: ""
        }
      ]
    };
  },
  computed: {},
  watch: {
    dialogVisible(val) {
      console.log(val);
    }
  },
  methods: {
    importExcel() {
      this.dialogVisible = true;
    },
    checkFile(file) {
      if (!/\.xlsx$/.test(file.name)) {
        this.$message({
          message: "请上传Excel文件",
          type: "warning"
        });
        return false;
      }
      return true;
    },
    handleUploadSuccess() {}
  }
};
</script>

<style lang="scss" scoped>
.p-left-table {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>