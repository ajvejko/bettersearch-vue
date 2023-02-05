import { reactive } from "vue";

export const buttonManagement = reactive({
  list: [],
  name: "",
  home: "",
  search: "https://www.google.com/search?q=",
  toggleButton(name, home, search) {
    //Check to properly toggle selected button
    if (buttonManagement.name === name) {
      buttonManagement.name = "";
      buttonManagement.home = "";
      buttonManagement.search = "https://www.google.com/search?q=";
    } else {
      buttonManagement.name = name;
      buttonManagement.home = home;
      buttonManagement.search = search;
    }
  },
});
