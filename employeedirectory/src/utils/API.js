import axios from "axios";

const empList = axios.get("https://randomuser.me/api/?results=200&nat=us");
export default empList; 