import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const url = "https://dummyjson.com/users";
    axios
      .get(url)
      .then((response) => {
        console.log("Response Data: ", response.data.users);
        setusers(response.data.users);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);
  const createTableRows = () => {
    const array = users.slice(0, 4);
    return array.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>
          <img src={item.image} alt="profile" width={"30px"} />
        </td>
        <td className="straight-line-column">{item.firstName}</td>
        <td className="straight-line-column">{item.lastName}</td>
        <td className="straight-line-column">{item.gender}</td>
        <td className="straight-line-column">{item.email}</td>
        <td className="straight-line-column">{item.username}</td>
        <td className="straight-line-column">{item.domain}</td>
        <td className="straight-line-column">{item.ip}</td>
        <td className="straight-line-column">{item.university}</td>
      </tr>
    ));
  };
  return (
    <>
      <div className="back d-flex justify-content-center align-items-center">
        <div>
          <div className="text d-flex justify-content-center">Dummy data</div>
          <div className="table">
            <table border="1">
              <thead>
                <tr>
                  <th className="straight-line-column">Sno</th>
                  <th className="straight-line-column">Profile</th>
                  <th className="straight-line-column">First Name</th>
                  <th className="straight-line-column">Last Name</th>
                  <th className="straight-line-column">Gender</th>
                  <th className="straight-line-column">E-mail</th>
                  <th className="straight-line-column">Username</th>
                  <th className="straight-line-column">Domain</th>
                  <th className="straight-line-column">IP</th>
                  <th className="straight-line-column">University</th>
                </tr>
              </thead>
              <tbody>{createTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
