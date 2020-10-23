import React from "react";
import Main from "../Main/index";
import Header from "../Header/index";
import Search from "../Search/index";
import Footer from "../Footer/index";
import empList from "../../utils/API";

// class Wrapper extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       employees: [],
//       searchTerm: "",
//       sorted: false
//     };
//   };



//   componentDidMount() {
//     empList
//       .then((res) => {
//         this.setState({ employees: res.data.results });
//       });
//   };

//   handleInputChange = event => {
//     this.setState({
//       searchTerm: event.target.value
//     });
//   };

//   sortHandler(item) {
//     const { employees, sorted } = this.state;

//     console.log("emp: ", employees)
//     let sortedNames;
//     console.log(sortedNames)
//     if (item === 'first') {
//       sortedNames = this.state.employees.sort((a, b) => { return b.name[item] });
//       this.setState({ employees: sortedNames, sorted: true });
//       console.log(sortedNames)
//     }
//     //else if (sortBy === 'lastName') {
//     // logic
//     //}
//   };


//   render() {

//     return (
//       <div className="container">
//         <Header />
//         <Search
//           searchTerm={this.state.searchTerm}
//           handleInputChange={this.handleInputChange}
//         />
//         <Main
//           employees={this.state.employees}
//           sortHandler={this.sortHandler}
//           searchTerm={this.state.searchTerm}
//         />
//         <Footer />
//       </div>
//     )
//   };
// }


function Wrapper() {
  return (
    <div className="App">
        <Header />
        <Main />
      <Footer />
    </div>
  );
}
export default Wrapper;