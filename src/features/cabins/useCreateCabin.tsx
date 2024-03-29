import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export default function useCreateCabin() {
  //The QueryClient can be used to interact with a cache:
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,

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

  return { isCreating, createCabin };
}
