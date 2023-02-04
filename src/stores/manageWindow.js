import { reactive } from "vue";

export const windowManagement = reactive({
  addWindow: false,
  editWindow: false,
  manageAdd() {
    this.addWindow = !this.addWindow;
  },
  manageEdit() {
    this.editWindow = !this.editWindow;
  },
});
