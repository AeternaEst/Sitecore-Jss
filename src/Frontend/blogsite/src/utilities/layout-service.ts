import { SimpleField } from "../types/sitecore/layoutServiceFieldTypes";

export const removeTimeFromDate = (
  dateField: SimpleField<string>
): SimpleField<string> => {
  const date = dateField.value.substring(0, dateField.value.indexOf("T"));
  return {
    value: date
  };
};
