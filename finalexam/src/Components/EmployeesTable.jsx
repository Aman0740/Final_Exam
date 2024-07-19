import React, { useState } from 'react';
import Pagination from "./Pagination";

const EmployeesTable = ({ data, currentPage, setCurrentPage, pageSize }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  let filteredData = data;

  if (selectedDepartment) {
    filteredData = data.filter((employee) => employee.department === selectedDepartment);
  }

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <select value={selectedDepartment} onChange={handleDepartmentChange} name="" id="">
            <option value="">--Select department--</option>
            <option value="hr">hr</option>
            <option value="finance">finance</option>
            <option value="marketing">marketing</option>
            <option value="engineering">engineering</option>
            <option value="operations">operations</option>
          </select>
        </div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {paginatedData.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.gender}</td>
                <td>{el.department}</td>
                <td>{el.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredData.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EmployeesTable;