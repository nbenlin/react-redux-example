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
          users: listData || [],
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

export const sendTableData = (table) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending table data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
        {
          method: "PUT",
          body: JSON.stringify({
            users: table.users,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending table data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent table data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending table data failed!",
        })
      );
    }
  };
};
