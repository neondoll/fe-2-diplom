import Api from "../api";
import queryString from "query-string";
import useApi from "./useApi";

export default function useGetSeats(id, params) {
  const paramsObject = {};

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      paramsObject[name] = value;
    }
  });

  return useApi(`${Api.SEATS(id)}?${queryString.stringify(paramsObject)}`, []);
}
