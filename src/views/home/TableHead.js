import { uuid } from "@/utils/index";
const TableHead = class {
  constructor(obj) {
    for (let i in obj) {
      this[i] = obj[i];
    }
    if (!this.key) {
      this.key = uuid();
    }
    if (!this.label) {
      this.label = this.value;
    }
    this.prop = this.key;
  }
};
export default TableHead;
