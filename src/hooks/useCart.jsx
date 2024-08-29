import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email], // Include user email in the query key
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
      }
      return [];
    },
    enabled: !!user, // Fetch data only when user is available
  });

  // Invalidate query when user logs in or logs out
  useEffect(() => {
    if (user) {
      queryClient.invalidateQueries("cart");
    }
  }, [user, queryClient]);

  return [cart, refetch];
};

export default useCart;
