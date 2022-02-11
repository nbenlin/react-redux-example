import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "./store/table.actions";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  const dispatch = useDispatch();
  const displayTable = useSelector((state) => state.ui.tableIsVisible);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <HomePage display={displayTable} />
    </>
  );
}

export default App;
