import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export default function useEditCabin() {
  //The QueryClient can be used to interact with a cache:
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),

    onSuccess: () => {
      // https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries
      // The invalidateQueries method can be used to invalidate and
      // all matching queries are immediately marked as invalid and active queries are refetched in the background.
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
