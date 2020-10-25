import React from "react";
import Main from "../Main/index";
import Header from "../Header/index";
import Search from "../Search/index";
import Footer from "../Footer/index";
import empList from "../../utils/API";

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchTerm: "",
      alphaOrder: false
    };
  };

  componentDidMount() {
    empList
      .then((res) => {
        this.setState({ employees: res.data.results });
      });
  };



  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };


  sortHandler(item) {
    console.log("emp: ", this.employees)
    let sortedEmployees;

    if (item === "first") {
      if (this.alphaOrder === true) {
        sortedEmployees = this.employees.sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedEmployees = this.employees.sort((a, b) => {
          if (a.name.first > b.name.first) {
            return -1;
          }
          if (a.name.first < b.name.first) {
            return 1;
          }
          return 0;
        });
      }

      this.setState({ employees: sortedEmployees, alphaOrder: !this.alphaOrder });
      console.log(sortedEmployees)
    
    }
  };





render() {
  console.log(this.state.empolyees)
  return (
    <div className="container">
      <Header />
      <Search
        searchTerm={this.state.searchTerm}
        handleChange={this.handleChange}
      />
      <Main
        employees={this.state.employees}
        sortHandler={this.sortHandler}
        searchTerm={this.state.searchTerm}
      />
      <Footer />
    </div>
  )
};
}

export default Wrapper;