interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Stéph :",
    lastName: "Python",
    age: 38,
    location: "Réunion/France",
};

const student2: Student = {
    firstName: "Lucas :",
    lastName: "Boyadjian",
    age: 32,
    location: "Arménie/Etats-unis/France/Belgique/Normandie/Parisien",
}

const studentsList: Student[] = [student1, student2];

// Création du tableau et du tbody
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const tr = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    tr.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    tr.appendChild(locationCell);

    tbody.appendChild(tr);
});

table.appendChild(tbody);
document.body.appendChild(table);





