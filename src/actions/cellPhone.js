import { SEND_CELLPHONENUMBER } from "./types";
export const sendCellPhoneNumber = data => dispatch => {
  // в реальности здесь посылаем данные на сервер и в случае успешного ризолва диспатчим данные с сервера в стор
  dispatch({ type: SEND_CELLPHONENUMBER, data });
};
