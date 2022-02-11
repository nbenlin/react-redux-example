import { uiActions } from "./ui.slice";
import { tableActions } from "./table.slice";

export const fetchTableData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );
      if (!response.ok) {
        throw new Error("Could not fetch users data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const listData = await fetchData();
      dispatch(
        tableActions.replaceTable({
          users: listData.users || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching users data failed!",
        })
      );
    }
  };
};
