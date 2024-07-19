# Final_Exam

This React application displays a paginated table of employees with the ability to filter by department. It includes three main components: `App`, `EmployeesTable`, and `Pagination`.

### App Component
- **State Management**: Uses `useState` to manage `data` (employee data) and `currentPage` (current page in pagination).
- **Data Fetching**: Uses `axios` to fetch employee data from an API and stores it in the `data` state.
- **Effect Hook**: Uses `useEffect` to fetch data when the component mounts.
- **Rendering**: Renders a title and the `EmployeesTable` component, passing `data`, `currentPage`, and `setCurrentPage` as props.

### EmployeesTable Component
- **State Management**: Uses `useState` to manage `selectedDepartment` (currently selected department filter).
- **Filtering**: Filters `data` based on the `selectedDepartment`.
- **Pagination**: Calculates the start and end indices for the current page and slices the filtered data accordingly.
- **Handlers**:
  - `handlePageChange`: Updates `currentPage` when a new page is selected.
  - `handleDepartmentChange`: Updates `selectedDepartment` when a new department is selected.
- **Rendering**:
  - A dropdown to select the department.
  - A table displaying the paginated and filtered employee data.
  - The `Pagination` component for navigating through pages.

### Pagination Component
- **Props**: Accepts `totalItems`, `currentPage`, `pageSize`, and `onPageChange` as props.
- **Calculation**: Computes the total number of pages.
- **Rendering**: Displays a button for each page, highlighting the active page, and calls `onPageChange` when a page is clicked.

### CSS Styling
- **App**: Centers the content and sets a light background.
- **Department List Dropdown**: Styles the dropdown for department selection.
- **Table**: Styles the table, including alternating row colors, hover effects, and header styling.
- **Pagination Buttons**: Styles the active page button with a distinct background color.
