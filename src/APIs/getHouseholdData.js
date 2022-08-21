import { get } from "./Common";

export default function getHouseholdData(householdId) {
  return get("family-members/" + householdId);
}
