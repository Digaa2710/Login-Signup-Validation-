// DisplayTable.js
import React from 'react';

const DisplayTable = ({ inputData }) => {
  return (
    <div>
      <h1>Table of Inputs</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
