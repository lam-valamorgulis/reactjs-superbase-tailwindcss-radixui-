import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export default function useCreateCabin() {
  //The QueryClient can be used to interact with a cache:
  const queryClient = useQueryClient();

  const { isLoading, mutate: createCabin } = useMutation({
    mutationFn: createCabinApi,

    onSuccess: () => {
      // https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries
      // The invalidateQueries method can be used to invalidate and
      // all matching queries are immediately marked as invalid and active queries are refetched in the background.
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, createCabin };
}
