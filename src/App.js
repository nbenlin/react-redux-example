import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData, sendTableData } from "./store/table.actions";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  const dispatch = useDispatch();
  const table = useSelector((state) => state.table);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  useEffect(() => {
    if (table.changed) {
      dispatch(sendTableData(table));
    }
  }, [table, dispatch]);

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
