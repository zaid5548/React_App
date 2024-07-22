function DateTimeItem() {
  let currentTime = new Date();
  let datetime =
    currentTime.getDate() +
    "/" +
    currentTime.getMonth() +
    "/" +
    currentTime.getFullYear() +
    "  -  " +
    currentTime.toLocaleTimeString();

  return <>This is the current time : {datetime}</>;
}

export default DateTimeItem;
