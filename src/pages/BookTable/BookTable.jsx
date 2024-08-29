import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableBookings from './TableBookings';


const BookTable = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupiedSeats, setOccupiedSeats] = useState([]);

    useEffect(() => {
      // Fetch the bookings data from your API
      axios.get('https://urban-eats-server.vercel.app/bookings')
        .then((response) => {
          const occupied = response.data.flatMap(booking => booking.bookedTable);
          setOccupiedSeats(occupied);
        })
        .catch((error) => {
          console.error('Error fetching bookings:', error);
        });
    }, []);
    console.log(occupiedSeats)
    return (
      <>
        <TableBookings
          occupiedSeats={occupiedSeats}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />
      </>
    );
}

export default BookTable