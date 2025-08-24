function daysDropdown(dayDropdownID) {
  const dropdown = document.getElementById(dayDropdownID);

  for (let day = 1; day <= 31; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.text = day;
    dropdown.appendChild(option);
  }
}

function monthsDropdown(monthDropdownID) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dropdown = document.getElementById(monthDropdownID);

  for (let month = 0; month <= 11; month++) {
    const option = document.createElement("option");
    option.value = months[month];
    option.text = months[month];
    dropdown.appendChild(option);
  }
}

function yearsDropdown(yearDropdownID) {
  const dropdown = document.getElementById(yearDropdownID);

  for (let year = 2025; year >= 1900; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;

    dropdown.appendChild(option);
  }
}

daysDropdown("days");
monthsDropdown("months");
yearsDropdown("years");
