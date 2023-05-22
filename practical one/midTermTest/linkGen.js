let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

function displayTable() {
  let startRange = parseInt(document.querySelector('#startRange').value);
  let endRange = parseInt(document.querySelector('#endRange').value);

  let message = document.querySelector('#message');
  let table = document.querySelector('#linksTable');
  

  table.innerHTML = '';

  if (startRange < 1 || endRange > data.length || startRange > endRange) {
    message.textContent = "Invalid range, valid range: 1-" + data.length;
  } else {
    message.textContent = "Valid Range: 1-" + data.length;

    for (let i = startRange - 1; i < endRange; i++) {
      let link = data[i];
      let row = table.insertRow();
      let cell = row.insertCell();
      cell.innerHTML = "<a href='" + link + "'>" + link + "</a>";
    }
  }
}