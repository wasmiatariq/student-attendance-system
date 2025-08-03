const form = document.getElementById("attendance-form");
const tableBody = document.querySelector("#recordsTable tbody");

function loadRecords() {
  const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
  tableBody.innerHTML = "";
  records.forEach(record => {
    const row = document.createElement("tr");
    row.innerHTML = \`
      <td>\${record.studentName}</td>
      <td>\${record.rollNo}</td>
      <td>\${record.fatherName}</td>
      <td>\${record.attendanceStatus}</td>
      <td>\${record.date}/\${record.month}/\${record.year} (\${record.day})</td>
      <td>\${record.courseTitle} (\${record.courseCode})</td>
    \`;
    tableBody.appendChild(row);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const record = {
    teacherName: form.teacherName.value,
    courseTitle: form.courseTitle.value,
    courseCode: form.courseCode.value,
    date: form.date.value,
    day: form.day.value,
    month: form.month.value,
    year: form.year.value,
    studentName: form.studentName.value,
    rollNo: form.rollNo.value,
    fatherName: form.fatherName.value,
    attendanceStatus: form.attendanceStatus.value
  };

  const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
  records.push(record);
  localStorage.setItem("attendanceRecords", JSON.stringify(records));
  loadRecords();
  form.reset();
});

loadRecords();