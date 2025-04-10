import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-white min-h-screen py-8 px-4 text-teal-500">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-700">Users</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-teal-300 p-3 w-full rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-300"
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-teal-700">{user.name}</h2>
                <p className="text-sm text-teal-600 mt-2">{user.email}</p>
                <p className="text-sm text-teal-600 mt-2">{user.phone}</p>
                <div className="mt-4">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-teal-500 hover:text-teal-700 font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UsersPage;
