import React from "react";
import "./style.css";
import { useTable, useSortBy } from 'react-table'
import empList from "../../utils/API";

function Table({ columns, empList }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        empList,
      },
      useSortBy
    )
  
    // We don't want to render all 2000 rows for this example, so cap
    // it at 100 for this use case
    const firstPageRows = rows.slice(0, 100)
  
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </table>
        <br />
        <div>Showing the first 100 results of {rows.length} rows</div>
      </>
    )
  }
  
  function Main() {
    const columns = React.useMemo(
      () => [
        {
            Header: 'Image',
            columns: [
                {
                    Header: 'Photo',
                    accessor: 'thumbnail',
                }
            ]
        },
        {
          Header: 'Name',
          columns: [
            {
              Header: 'First Name',
              accessor: 'firstName',
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
            },
          ],
        },
        {
          Header: 'Info',
          columns: [
            {
              Header: 'Email',
              accessor: 'email',
            },
            {
              Header: 'Phone Number',
              accessor: 'cell',
            },
          ],
        },
      ],
      []
    )
  
    //const data = React.useMemo(() => empList(200), [])
  
    return (
        <Table columns={columns} data={empList} />
    )
  }
  
  

// function Main(props) {
//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th scope="col">Photo</th>
//                     <th scope="col" onClick={() => { props.sortHandler("first") }}>First Name</th>
//                     <th scope="col" onClick={() => { props.sortHandler("last") }}>Last Name</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Phone Number</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.employees.filter(employee => employee.name.last.toLowerCase().startsWith(props.searchTerm.toLowerCase()) || employee.name.first.toLowerCase().startsWith(props.searchTerm.toLowerCase())).map((emp, id) =>
//                     <tr key={id}>
//                         <td><img src={emp.picture.thumbnail}></img></td>
//                         <td>{emp.name.first}</td>
//                         <td>{emp.name.last}</td>
//                         <td>{emp.email}</td>
//                         <td>{emp.cell}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     )
// }

export default Main