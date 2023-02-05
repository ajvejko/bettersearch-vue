import { reactive } from "vue";

export const windowManagement = reactive({
  addWindow: false,
  editWindow: false,
  editName: "",
  editHome: "",
  editSearch: "",
  manageAdd() {
    this.addWindow = !this.addWindow;
  },
  manageEdit(name, home, search) {
    this.editWindow = !this.editWindow;
    this.editName = name;
    this.editHome = home;
    this.editSearch = search;
  },
});
