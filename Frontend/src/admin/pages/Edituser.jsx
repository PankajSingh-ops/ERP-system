import React from 'react'
import Header from '../../shared/components/Header'

export default function Edituser() {
  return (
    <div>
        <Header/>
      <form onSubmit={formSubmit}>
      <p>First Name</p>
      <input type="text" name="Firstname"    />
      <p>Last Name</p>
      <input type="text" name="Lastname"  />
      <p>Email Address</p>
      <input type="email" name="Email"  />
      <p>Contact No</p>
      <input type="number" name="Phone" />
      <p>Age</p>
      <input type="Number" name="Age"/>
      <p>Select Role</p>
      <select name="Role" id="">
       <option value="Admin">Admin</option>
       <option value="Manager">Manager</option>
       <option value="Employee">Employee</option>
      </select>
      <button>Add</button>
      </form>
    </div>
  )
}
