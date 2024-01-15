import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import useCreateCabin from "./useCreateCabin";

export default function CreateCabinForm({ cabinToEdit = {} }) {
  console.log(cabinToEdit);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: cabinToEdit ? cabinToEdit : {},
  });

  const { isLoading, createCabin } = useCreateCabin();

  function onSubmit(data) {
    // console.log(data, data.image[0]);
    const img = data.image[0];
    // console.log(img);
    createCabin({ ...data, image: img });
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <form className="w-screen" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          type="text"
          className="w-full border bg-zinc-100 rounded-md p-2 shadow-md"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Maxium capacity" error={errors?.maxCapacity?.message}>
        <input
          type="number"
          className="w-full border bg-zinc-100 rounded-md p-2 shadow-md"
          id="regularPrice"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          type="number"
          className="w-full border bg-zinc-100 rounded-md p-2 shadow-md"
          id="name"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          className="w-full border bg-zinc-100 rounded-md p-2 shadow-md"
          id="name"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <textarea
          className="w-full border bg-zinc-100 rounded-md p-2 shadow-md"
          id="name"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Cabin photo">
        <input
          type="file"
          className="block w-full text-lg text-slate-500
      file:mr-4 file:py-5 file:px-6
      file:rounded-2xl file:border-0
      file:text-xl file:font-semibold
      file:bg-[#2563eb] file:text-slate-200	
      hover:file:bg-[#4338ca]"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <div className="flex justify-end pt-6 pb-10 gap-4">
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Create new cabin</Button>
      </div>
    </form>
  );
}
