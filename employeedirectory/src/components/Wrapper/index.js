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



  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };



  sortHandler(item) {
    const { employees, alphaOrder } = this.state;

    console.log("emp: ", employees)
    let sortedNames;
    console.log(sortedNames)
    if (item === 'first') {
      sortedNames = this.state.employees.sort((a, b) => { return b.name[item] });
      this.setState({ employees: sortedNames, alphaOrder: true });
      console.log(sortedNames)
    }
    //else if (sortBy === 'last') {
    // logic
    //}
  };


  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="container">
        <Header />
        <Search
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
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