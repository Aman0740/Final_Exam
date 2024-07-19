import axios from "axios";
import "./App.css";
import EmployeesTable from "./Components/EmployeesTable";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchdata = () => {
    axios
      .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <h2>Employees Database</h2>
      <EmployeesTable
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
      />
    </div>
  );
}

export default App;