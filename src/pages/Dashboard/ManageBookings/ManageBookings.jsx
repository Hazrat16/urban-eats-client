import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBookings from "../../../hooks/useBookings";
import "./style.css";

const ManageBookings = () => {
  const [bookings, refetch] = useBookings();
  const axiosSecure = useAxiosSecure();

  const handleDeleteBooking = (id) =>{
    console.log("deleted bookings id",id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  }
  return (
    <div>
      <div className="flex flex-col justify-center content-center my-4">
        <h2 className="text-3xl text-center">Bookings</h2>
        <h2 className="text-xl text-center">
          Total Number of Users: {bookings.length}
        </h2>
      </div>
      <div className="overflow-x-auto border-t-lg">
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider"></th>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider">Selected Date</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider">Meal Type</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider">Phone No</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider">Table No</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-white  uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 text-center">
        {bookings.map((booking, index) => (
          <tr key={booking._id}>
            <th className="px-6 py-4 whitespace-nowrap">{index + 1}</th>
            <td className="px-6 py-4 whitespace-nowrap">{booking.selectedDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.mealType}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.phoneNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {booking.bookedTable.join(', ')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
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

export default ManageBookings;
