import React from "react";
import "./style.css";  

function Main(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col" onClick={() => { props.sortHandler("first") }}>First Name</th>
                    <th scope="col" onClick={() => { props.sortHandler("last") }}>Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.filter(employee => 
                employee.name.last.toLowerCase().includes(props.searchTerm.toLowerCase()) || employee.name.first.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map((emp, id) =>
                    <tr key={id}>
                        <td><img src={emp.picture.thumbnail}></img></td>
                        <td>{emp.name.first}</td>
                        <td>{emp.name.last}</td>
                        <td>{emp.email}</td>
                        <td>{emp.cell}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Main