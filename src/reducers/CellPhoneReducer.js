import { SEND_CELLPHONENUMBER } from "../actions/types";
export default function cellPhoneReducer(
  state = { success: false, number: "" },
  action = {}
) {
  switch (action.type) {
    case SEND_CELLPHONENUMBER:
      return { ...state, success: true, number: action.data.number };
    default:
      return state;
  }
}
