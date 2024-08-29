import React, { useState } from "react";
import Swal from "sweetalert2";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useBookings from "../../hooks/useBookings";

const TableBookings = ({ occupiedSeats, selectedSeats, onSelectedSeatsChange }) => {
  const [bookedTable, setBookedTable] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [mealType, setMealType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookings,refetch] = useBookings();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log("..............",occupiedSeats)
 

  const onSeatClick = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    const isOccupied = occupiedSeats.includes(seat);

    if (!isOccupied) {
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
        );
        setBookedTable(bookedTable.filter((bookedSeat) => bookedSeat !== seat));
      } else {
        onSelectedSeatsChange([...selectedSeats, seat]);
        setBookedTable([...bookedTable, seat]);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user && user?.email) {
      const bookingInfo = {
        bookedTable,
        selectedDate,
        mealType,
        phoneNumber,
      };

      console.log(bookingInfo);
      axiosSecure.post("/bookings", bookingInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Table has been booked successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  

console.log(bookings)
  return (
    <div>
      <div className="my-18 perspective-400 grid place-items-center gap-12 ">
        <div className=" bg-white h-16 w-5/6 mx-auto shadow mt-20"></div>
        <div className="flex">
          <div className="flex w-1/2">
            <div className="seats grid grid-cols-6 gap-3 items-center mb-20">
              {Array.from({ length: 60 }, (_, i) => (
                <div
                  key={i}
                  className={`seat ${
                    occupiedSeats.includes(i) ? "occupied" : ""
                  } ${selectedSeats.includes(i) ? "selected" : ""} 
                          ${i % 8 === 1 || i % 8 === 6 ? "mr-12" : ""}`}
                  onClick={() => onSeatClick(i)}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center ">
            <div className=" flex-col  mb-20 ">
              <div className="my-5">
                <form onSubmit={handleSubmit}>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="date"
                      id="selectedDate"
                      name="selectedDate"
                      className="w-full"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </label>
                  <div className="my-5">
                    <select
                      className="select select-info w-full max-w-xs"
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value)}
                    >
                      <option disabled value="">
                        Select Meal Type
                      </option>
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                    </select>
                  </div>
                  <div className="my-5">
                    <label className="input input-bordered flex items-center gap-2">
                      <PhoneIcon />
                      <input
                        type="text"
                        className="grow"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </label>
                  </div>
                  <button className="btn btn-outline mb-10 w-1/2" type="submit">
                    Book
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBookings;
