import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import {
  RadioGroup,
  RadioButton,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tree,
  Dialog,
  Input,
  Form,
  FormItem,
  Upload,
  Icon,
  Message,
  Table,
  TableColumn,
  Checkbox 
} from "element-ui";

Vue.prototype.$ELEMENT = { size: "small" };
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Tree);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);
Vue.use(Icon);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Checkbox);

Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
