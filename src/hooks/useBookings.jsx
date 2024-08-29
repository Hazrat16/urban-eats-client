import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useBookings = () => {
  const axios = useAxiosPublic();
    const { user } = useAuth();
    const queryClient = useQueryClient();
      const { data: bookings=[],refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axios.get(`/bookings`);
            return res.data;
            
        }
    })
  
    useEffect(() => {
      if (user) {
        queryClient.invalidateQueries("bookings");
      }
    }, [user, queryClient]);
  
    return [bookings, refetch];
  };

export default useBookings;