// Utility function to generate the date in the format required for the UI
export const getFormattedDate = (dateObj) => {
  var dd = dateObj.getDate();
  var mm = dateObj.getMonth() + 1;

  var yyyy = dateObj.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + " - " + mm + " - " + yyyy;
};
