import moment from "moment";

const currentDate = new Date();

export const formatDate = (date = currentDate) => {
  return moment(date).format("DD/MM/YYYY");
};
