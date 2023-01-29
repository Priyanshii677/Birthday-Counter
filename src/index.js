const endDate = "23 March 2023 12:00 AM";
const inputs = document.querySelectorAll("input");

document.getElementById("end-date").innerHTML = endDate;

const clock = () => {
  const end = new Date(endDate);

  const now = new Date();

  const diff = (end - now) / 1000;
  //convert days
  const days = Math.floor(diff / 60 / 60 / 24);
  inputs[0].value = days;
  inputs[1].value = Math.floor((diff / 60 / 60) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
  console.log(inputs[1].value);
  console.log(days);
};

setInterval(() => {
  clock();
}, 1000);
