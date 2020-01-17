calculate = () => {
  let hours = parseFloat(document.getElementById("hours").value);
  let minutes = parseFloat(document.getElementById("minutes").value);
  const tip = parseFloat(document.getElementById("tip").value);
  //Converts minutes to decimal value
  minutes /= 60;
  //Adds decimal value to hours
  hours += minutes;
  //Multiplies hours by hourly rate
  hours *= 13;
  //Adds the tip into wage income
  hours += tip;
  //Removes approximate 17% tax
  hours *= 0.83;

  document.getElementById("result").value = hours;
};
