let afwezigheidFetch = [];
let klasFetch = [];
let lessenFetch = [];
let teachersFetch = [];
let studentsFetch = [];

async function loadData() {
    afwezigheidFetch = await fetchAndMerge('afwezigheden');
    klasFetch = await fetchAndMerge('klassen');
    lessenFetch = await fetchAndMerge('lessen');
    teachersFetch = await fetchAndMerge('teachers');
    studentsFetch = await fetchAndMerge('students');

    console.log(lessenFetch)
}

async function initialize() {
    await loadData();
    getTime(year, weekNumber, currentUser.id);
    addAbsent()
    createLesson();
}

initialize();

async function fetchAndMerge(name) {
    const res = await fetch(`assets/json/${name}.json`);
    const text = await res.text();
    const jsonData = text ? JSON.parse(text) : [];
    const localData = JSON.parse(localStorage.getItem(name)) || [];

    return [...jsonData, ...localData];
}

document.getElementById("imageLink").src = currentUser.plaatje;
document.getElementById("name").innerHTML = "Welkom " + currentUser.type + " " + currentUser.naam;
document.getElementById("studentId").value = currentUser.id;
var logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("currentUser");
    window.location.href = "index.html";
});

// if (currentUser.isZiek == "true") {
//     document.getElementById("ziekButton").innerHTML = '<a onclick="callIsSick(false)" class="btn btn-success mx-2">Beter melden</a>'
// } else {
//     document.getElementById("ziekButton").innerHTML = '<a onclick="callIsSick(true)" class="btn btn-danger mx-2">Ziek melden</a>'
// }
//
// function callIsSick(isSick) {
//     if(isSick) {
//         document.getElementById("ziekButton").innerHTML = '<a onclick="callIsSick(false)" class="btn btn-success mx-2">Beter melden</a>'
//         currentUser.isZiek = "true";
//     }
//
//     else {
//         document.getElementById("ziekButton").innerHTML = '<a onclick="callIsSick(true)" class="btn btn-danger mx-2">Ziek melden</a>'
//         currentUser.isZiek = "false";
//     }
// }

function getMondayOfWeek(year, week) {
    const januaryFirst = new Date(year, 0, 1);
    const daysToFirstMonday = (8 - januaryFirst.getDay()) % 7;
    const daysToTargetMonday = (week - 1) * 7;
    const totalDaysOffset = daysToFirstMonday + daysToTargetMonday;
    return new Date(januaryFirst.getTime() + totalDaysOffset * 24 * 60 * 60 * 1000);
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('nl-NL', options);
}

function formatDay(date) {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('nl-NL', options);
}

function getWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getTime(year, weekNumber, studentId) {
    const monday = getMondayOfWeek(year, weekNumber);
    const daysOfWeek = [];

    const mondayOfTheWeekFull = formatDate(monday);
    const sundayOfTheWeekFull = formatDate(new Date(monday.getTime() + 6 * 24 * 60 * 60 * 1000));

    document.getElementById("week-number").innerHTML = "Week " + weekNumber;
    document.getElementById("week-days").innerHTML = mondayOfTheWeekFull + " - " + sundayOfTheWeekFull;

    const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    let currentDay;
    for (let i = 0; i < weekdays.length; i++) {
        currentDay = new Date(monday.getTime() + i * 24 * 60 * 60 * 1000);
        daysOfWeek.push(formatDay(currentDay));
        document.getElementById(weekdays[i]).innerHTML = daysOfWeek[i];

        document.getElementById(weekdays[i] + "-lessons").innerHTML = "";
    }

    Promise.all([klasFetch, lessenFetch, teachersFetch])
    .then(([klasData, lessenData, teachersData]) => {
        let day;
        let month;
        let date_now;
        let currentDay;
        for (let i = 0; i < weekdays.length; i++) {
            currentDay = new Date(monday.getTime() + i * 24 * 60 * 60 * 1000);

            day = String(currentDay.getDate()).padStart(2, '0');
            month = String(currentDay.getMonth() + 1).padStart(2, '0');
            year = currentDay.getFullYear();
            date_now = `${day}-${month}-${year}`;

            const output = document.getElementById(weekdays[i] + "-lessons");
            lessenData.forEach(les => {
                if (!les || !les.datum) return;

                if (les.datum === date_now) {
                    const klas = klasData.find(klas => klas.id === parseInt(les.klas));
                    if (klas && klas.studenten.includes(parseInt(studentId))) {
                        const teachers = les.docenten.map(teacherId => {
                            const teacher = teachersData.find(teacher => teacher.id === parseInt(teacherId));
                            return teacher ? teacher.naam : 'Onbekend';
                        }).join(', ');

                        const div = document.createElement("div");
                        div.innerHTML = `
                <div class="card my-3 curser-pointer opacity-hover-7" data-bs-toggle="modal" data-bs-target="#lessonModal" 
                    onclick="displayLessonDetails('${les.datum}', '${les.startTijd} - ${les.eindTijd}', '${les.vak}', '${les.lokaal}', '${les.opmerking}', '${klas ? klas.naam : 'Onbekend'}', '${les.klas}', '${les.docenten.join(', ')}')">
                    <div class="border-bottom p-2">${les.startTijd} - ${les.eindTijd}</div>
                    <div class="p-2">
                        <div class="font-weight-bold">${les.vak}</div>
                        <div class="">${les.lokaal}</div>
                        <div class="">Groep(en): ${klas ? klas.naam : 'Onbekend'}</div>
                        <div class="">Docent(en): ${teachers}</div>
                    </div>
                </div>`;
                        output.appendChild(div);
                    }
                }
            });
        }
    })
    .catch(error => console.error("Error fetching data:", error));
}

function displayLessonDetails(date, time, subject, room, note, thegroup, groupId, teachers) {
    document.getElementById('lessonModalLabel').innerText = date;
    document.getElementById('lessonTime').innerText = time;
    document.getElementById('lessonSubject').innerText = subject;
    document.getElementById('lessonRoom').innerText = room;
    document.getElementById('lessonNote').innerText = note;
    document.getElementById('lessonGroup').innerHTML = `<a href="#" data-bs-toggle="modal" data-bs-target="#groupModal" onclick="displayGroupData('${groupId}')">${thegroup}</a>`;

    const group = klasFetch.find(klas => klas.id == groupId);
    if (group) {
        const studentsIds = group.studenten;
        const groupStudentsContainer = document.getElementById('klasStudents');
        groupStudentsContainer.innerHTML = '';

        const studentsHTML = studentsFetch.reduce((html, student) => {
            const isZiek = student.isZiek == "true" ? "Ziek" : "";
            if (studentsIds.includes(student.id)) {
                html += `
                    <div class="d-flex flex-column align-items-center me-2">
                        <a href="#" data-bs-toggle="modal" class="d-flex flex-column align-items-center me-2" onclick="displayPersonData('student', '${student.id}')" data-bs-target="#personModal">
                            <img src="${student.plaatje}" alt="${student.naam}" class="img-fluid rounded border-dark border" style="width: 50px;">
                            <p>${student.naam}</p>
                        </a>
                        <button class="btn btn-sm" onclick="setPresent(this, '${student.id}')" style="width: 100px;">
                            Aanwezig
                        </button>
                        ${isZiek}
                    </div>`;
            }
            return html;
        }, '');

        groupStudentsContainer.insertAdjacentHTML('beforeend', studentsHTML);

    } else {
        console.error("Klas not found with ID:", groupId);
    }

    const allTeachersContainer = document.getElementById('lessonTeachers');
    allTeachersContainer.innerHTML = '';

    const teachersHTML = teachersFetch.reduce((html, teacher) => {
        if (teachers.includes(teacher.id)) {
            html += `
                <a href="#" data-bs-toggle="modal" class="d-flex flex-column align-items-center me-2" onclick="displayPersonData('teacher','${teacher.id}')" data-bs-target="#personModal">
                    <img src="${teacher.plaatje}" alt="${teacher.naam}" class="img-fluid rounded border-dark border" style="width: 50px;">
                    <p>${teacher.naam}</p>
                </a>`;
        }
        return html;
    }, '');

    allTeachersContainer.insertAdjacentHTML('beforeend', teachersHTML);

}

function displayGroupData(group) {
    Promise.all([klasFetch, studentsFetch, lessenFetch])
        .then(([klasData, studentsData]) => {
            const groupData = klasData.find(klas => klas.id === parseInt(group));
            document.getElementById('groupName').innerText = groupData.naam;
            const students = groupData.studenten;
            const allTeachersContainer = document.getElementById('groupStudents');
            allTeachersContainer.innerHTML = '';

            const teachersHTML = studentsData.reduce((html, student) => {
                if (students.includes(student.id)) {
                    const isZiek = student.isZiek == "true" ? "Ziek" : "";
                    html += `
                        <div class="d-flex flex-column align-items-center me-2">
                            <a href="#" data-bs-toggle="modal" class="d-flex flex-column align-items-center me-2" onclick="displayPersonData('student', '${student.id}')" data-bs-target="#personModal">
                                <img src="${student.plaatje}" alt="${student.naam}" class="img-fluid rounded border-dark border" style="width: 50px;">
                                <p>${student.naam}</p>
                            </a>
                            ${isZiek}
                        </div>`;
                }
                return html;
            }, '');

            allTeachersContainer.insertAdjacentHTML('beforeend', teachersHTML);
        })
        .catch(error => console.error("Error fetching data:", error));
}

async function displayPersonData(typePerson, id) {
    if (typePerson === 'teacher') {
        document.getElementById('personModalLabel').innerText = 'Docent';
        const teachersData = await teachersFetch;
        personData = teachersData.find(teacher => teacher.id === parseInt(id));
        document.getElementById("presentie").style.display = "none";
    } else if (typePerson === 'student') {
        document.getElementById("presentie").style.display = "block";
        document.getElementById('personModalLabel').innerText = 'Student';
        const studentsData = await studentsFetch;
        const afwezigData = await afwezigheidFetch;
        const klasData = await klasFetch;
        const lessenData = await lessenFetch;

        personKlasData = klasData.filter(klas => klas.studenten.includes(parseInt(id)));
        personlessenData = lessenData.filter(les => personKlasData.map(klas => klas.id).includes(parseInt(les.klas)));
        personData = studentsData.find(student => student.id === parseInt(id));
        personData.afwezig = afwezigData.filter(afwezig => afwezig.persoon === parseInt(id));

        const totalLessons = personlessenData.length;
        const absentLessons = personlessenData.reduce((count, les) => {
            const isAbsentForThisLesson = personData.afwezig.some(afwezig => isAbsent(afwezig, les));
            return count + (isAbsentForThisLesson ? 1 : 0);
        }, 0);

        const presentPercentage = Math.round(((totalLessons - absentLessons) / totalLessons) * 100);
        const absentPercentage = 100 - presentPercentage;

        updateAttendanceBar(presentPercentage, absentPercentage);

        const attendanceContainer = document.getElementById('personAttendance');
        attendanceContainer.innerHTML = personlessenData.reduce((html, les) => {
            const attendanceStatus = personData.afwezig.find(afwezig => isAbsent(afwezig, les));
            const statusIcon = attendanceStatus ? '<i class="fas fa-times text-danger"></i>' : '<i class="fas fa-check text-success"></i>';
            html += `
        <tr>
            <td>${les.vak}</td>
            <td>${les.startTijd} - ${les.eindTijd}</td>
            <td>${les.datum}</td>
            <td>${statusIcon}</td>
        </tr>`;
            return html;
        }, '');
    }

    document.getElementById('personName').innerText = personData.naam;
    const the_image = document.getElementById('personImage');
    the_image.src = personData.plaatje;
    the_image.alt = personData.naam;
}

function isAbsent(afwezig, les) {
    const afwezigStartDate = new Date(afwezig.startDatum.split('-').reverse().join('-') + ' ' + afwezig.startTijd);
    const afwezigEndDate = new Date(afwezig.eindDatum.split('-').reverse().join('-') + ' ' + afwezig.eindTijd);
    const lessonDate = new Date(les.datum.split('-').reverse().join('-'));
    const lesStartDate = new Date(lessonDate.getFullYear(), lessonDate.getMonth(), lessonDate.getDate(), les.startTijd.split(':')[0], les.startTijd.split(':')[1]);
    const lesEndDate = new Date(lessonDate.getFullYear(), lessonDate.getMonth(), lessonDate.getDate(), les.eindTijd.split(':')[0], les.eindTijd.split(':')[1]);

    return lesStartDate >= afwezigStartDate && lesEndDate <= afwezigEndDate;
}

function voegAfwezigheidToe(nieuweAfwezigheid) {
    let localData = JSON.parse(localStorage.getItem("afwezigheden")) || [];

    localData.push(nieuweAfwezigheid);

    localStorage.setItem("afwezigheden", JSON.stringify(localData));
}

function voegLesToe(nieuweLes) {
    let localData = JSON.parse(localStorage.getItem("lessen")) || [];

    localData.push(nieuweLes);

    localStorage.setItem("lessen", JSON.stringify(localData));
}

function updateAttendanceBar(presentPercentage, absentPercentage) {
    const personAttendanceBar = document.getElementById('personAttendanceBar');
    const personAbsentBar = document.getElementById('personAbsentBar');

    personAttendanceBar.style.width = `${presentPercentage}%`;
    personAbsentBar.style.width = `${absentPercentage}%`;
    personAttendanceBar.setAttribute('aria-valuenow', presentPercentage);
    personAbsentBar.setAttribute('aria-valuenow', absentPercentage);
    personAttendanceBar.setAttribute('title', `${presentPercentage}% aanwezig`);
    personAbsentBar.setAttribute('title', `${absentPercentage}% afwezig`);
}

function setPresent(element, id) {
    const presentButton = element;

    if (presentButton.classList.contains('btn-success')) {
        presentButton.classList.remove('btn-success');
        presentButton.classList.add('btn-danger');
        presentButton.innerText = 'Afwezig';
    } else {
        presentButton.classList.remove('btn-danger');
        presentButton.classList.add('btn-success');
        presentButton.innerText = 'Aanwezig';
    }
}

const today = new Date();

let year;
let weekNumber;

function changeWeek(action) {
    if (action === "now") {
        weekNumber = getWeek(today) - 1;
        year = today.getFullYear();
    } else {
        weekNumber = weekNumber + action;
        if (weekNumber === 53) {
            year = year + 1;
            weekNumber = 1;
        }

        if (weekNumber === 0) {
            year = year - 1;
            weekNumber = 52;
        }
    }
    getTime(year, weekNumber, currentUser.id);
}

weekNumber = getWeek(today) - 1;
year = today.getFullYear();

function formatTheDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function addAbsent(){
    const form = document.querySelector('#addAbsent');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fromDate = document.getElementById('inputFromDate').value;
        const toDate = document.getElementById('inputToDate').value;
        const reason = document.getElementById('inputReason').value;
        const studentId = document.getElementById('studentId').value;

        if (fromDate === '' || toDate === '' || reason === '') {
            alert('Vul zowel de Van- als de Tot-datum in en de reden.');
            return;
        }

        if (new Date(fromDate) >= new Date(toDate)) {
            alert('De Van-datum moet kleiner zijn dan de Tot-datum.');
            return;
        }

        if (new Date(fromDate) < today || new Date(toDate) < today) {
            alert('De datums mogen niet in het verleden liggen.');
            return;
        }

        const newAbsent = {
            startDatum: formatTheDate(fromDate),
            eindDatum: formatTheDate(toDate),
            startTijd: "00:00",
            eindTijd: "23:59",
            reden: reason,
            persoon: parseInt(studentId)
        };

        voegAfwezigheidToe(newAbsent);
        form.submit();
    });
}

function vulOptiesAanmakenLes(klasFetch, teachersFetch) {
    const klasSelect = document.getElementById('inputGroup');
    const teacherSelect = document.getElementById('inputTeacher');

    klasSelect.innerHTML = '';
    teacherSelect.innerHTML = '';

    klasSelect.innerHTML = '<option value="">-- Kies een klas --</option>';
    teacherSelect.innerHTML = '<option value="">-- Kies een docent --</option>';

    klasFetch.forEach(klas => {
        const option = document.createElement('option');
        option.value = klas.id;
        option.textContent = klas.naam;
        klasSelect.appendChild(option);
    });

    teachersFetch.forEach(teacher => {
        const option = document.createElement('option');
        option.value = teacher.id;
        option.textContent = teacher.naam;
        teacherSelect.appendChild(option);
    });
}

function parseTimeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

function createLesson() {
    const form = document.querySelector('#addLesson');

    vulOptiesAanmakenLes(klasFetch, teachersFetch);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const lessonDate = document.getElementById('inputDate').value;
        const lessonStartTime = document.getElementById('inputStartTime').value;
        const lessonEndTime = document.getElementById('inputEndTime').value;
        const lessonSubject = document.getElementById('inputSubject').value;
        const lessonRoom = document.getElementById('inputRoom').value;
        const lessonGroup = document.getElementById('inputGroup').value;
        const lessonTeacher = document.getElementById('inputTeacher').value;
        const lessonNote = document.getElementById('inputNote').value;

        if (lessonDate === '' || lessonStartTime === '' || lessonEndTime === '' || lessonSubject === '' || lessonRoom === '' || lessonGroup === '' || lessonTeacher === '') {
            alert('Vul alle velden in.');
            return;
        }

        if (new Date(lessonDate) < today) {
            alert('De datum mag niet in het verleden liggen.');
            return;
        }

        const startMinutes = parseTimeToMinutes(lessonStartTime);
        const endMinutes = parseTimeToMinutes(lessonEndTime);

        if (startMinutes >= endMinutes) {
            alert('De starttijd moet voor de eindtijd liggen.');
            return;
        }

        const newLesson = {
            datum: formatTheDate(lessonDate),
            startTijd: lessonStartTime,
            eindTijd: lessonEndTime,
            vak: lessonSubject,
            lokaal: lessonRoom,
            klas: lessonGroup,
            docenten: [parseInt(lessonTeacher)],
            opmerking: lessonNote
        };

        voegLesToe(newLesson);
        form.submit();
    });
}



