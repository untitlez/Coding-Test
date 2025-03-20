"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto rounded-box border border-base-content/20 bg-base-200">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>
                <Link href="/form">
                  <button className="btn btn-accent">Add</button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-base-100">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
