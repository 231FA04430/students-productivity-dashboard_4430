const savedNotes = [
  "Finish math assignment",
  "Buy study materials"
];

const deadlines = {
  5: "Science Project Due",
  12: "Submit Lab Report",
  22: "Exam - History"
};

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user && pass) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    loadNotes();
    loadCalendar();
  } else {
    alert("Please enter username and password!");
  }
}

function loadNotes() {
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = "";
  savedNotes.forEach(note => {
    const li = document.createElement('li');
    li.innerText = note;
    notesList.appendChild(li);
  });
}

function addNote() {
  const newNote = document.getElementById('noteInput').value;
  if (newNote.trim() !== "") {
    savedNotes.push(newNote);
    document.getElementById('noteInput').value = "";
    loadNotes();
  }
}

function loadCalendar() {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = "";
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    calendar.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.className = 'calendar-day';
    dayCell.innerHTML = `<strong>${day}</strong>`;
    if (deadlines[day]) {
      const event = document.createElement('div');
      event.className = 'event';
      event.innerText = deadlines[day];
      dayCell.appendChild(event);
    }
    calendar.appendChild(dayCell);
  }
}
