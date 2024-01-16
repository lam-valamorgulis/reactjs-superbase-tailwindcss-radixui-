import FormRow from "../UI/FormRow";
import useSettings from "../features/settings/useSettings";
import useUpdateSetting from "../features/settings/useUpdateSetting";

import Spinner from "../UI/Spinner";

function Settings() {
  const { isLoading, settings } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;
  console.log(settings);

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: parseInt(value) });
  }
  return (
    <div className="flex flex-col gap-3">
      <h1>Update hotel setting</h1>
      <form>
        <FormRow label="Minimum nights/booking">
          <input
            type="number"
            id="min-nights"
            defaultValue={minBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
          />
        </FormRow>
      </form>
    </div>
  );
}

export default Settings;
