import React from "react";
import "./style.css";


const Bookings = ({ movie, selectedSeats, onSelectedSeatsChange }) => {
  

  return (
    <div>
      <div className="flex flex-col justify-center content-center my-4">
        <h2 className="text-3xl text-center">All Users</h2>
        <h2 className="text-xl text-center">
          Total Number of Users: {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto border-t-lg">
        <table className="table table-zebra w-full">
          <thead className="bg-[#197BFD] h-20 text-white text-center ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" text-center ">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaUsers
                        className="text-white 
                                    text-2xl"
                      ></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBookings;
