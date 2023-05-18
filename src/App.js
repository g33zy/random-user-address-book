import React, { useState, useEffect } from "react";
// import React, { Component } from "react"
import axios from "axios";
import CustomCard from "./Card";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [],
//       isClicked: false,
//     };
//   }

// componentDidMount() {
//   axios.get("https://randomuser.me/api?results=25")
//   .then((res) => {
//     const { data } = res;
//     console.log(data)
//     this.setState({
//       users: data.results });
//   });
// }
// non destructured version of compdidmount
// this.setState({
//   users: res.data.results
// })


// Mila's
// changeName = (name) => {
//   console.log('state', this.state)
//   this.setState({
//     users: this.state.users.map((user) => {
//       if (user.name === name) {
//         return {
//           ...user,
//           name: name
//         }
//       }

//       return user;
//     })
//   })
// }

// moreInfo = (info) => {
//   console.log('state', this.state)
//   this.setState({
//     ...this.state,
//     isClicked: !this.state.isClicked
//   })
// }

function App() {
  const [users, setUsers] = useState([]);
  // const [text, setText] = useState('')

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=25").then((res) => {
      setUsers(res.data.results);
    });
  }, []);
console.log(users)
  return (
    <div className="App">
      <ul>
        {users.map((user, index) => {
          return (
            <CustomCard
              key={index}
              img={user.picture.large}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              phone={user.phone}
              // moreInfo={this.moreInfo} for class based 
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
