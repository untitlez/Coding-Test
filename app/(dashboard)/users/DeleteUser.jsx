'use client'

import axios from "axios";

export default function DeleteUser({ users }) {

  const handleDelete = async() => {
    try {
      const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${users.id}`)
      console.log("Deleted user:", data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  return (
    <>
      <button onClick={handleDelete} className="btn btn-error btn-outline">
        Delete
      </button>
    </>
  );
}


