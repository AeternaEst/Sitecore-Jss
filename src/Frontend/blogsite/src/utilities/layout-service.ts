import { Field } from "../types/sitecore/layoutServiceFieldTypes";
import { SitecoreContext } from "../types/sitecore/layoutServiceTypes";

export const DISCONNECTED_MODE_IDENTIFIER = "available-in-connected-mode";

export const removeTimeFromDate = (dateField: Field<string>): Field<string> => {
  const date = dateField.value.substring(0, dateField.value.indexOf("T"));
  return {
    value: date,
  };
};

export const isDisconnectedMode = (
  sitecoreContext?: SitecoreContext<any>
): boolean =>
  !sitecoreContext ||
  sitecoreContext.route.databaseName === DISCONNECTED_MODE_IDENTIFIER;
