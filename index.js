// Handle 'Department' dropdown
const departments = {
"Engineering": ["Frontend", "Backend", "DevOps", "QA", "Mobile"],
"Design": ["UI/UX", "Graphic", "Product Design"],
"Marketing": ["Content", "SEO", "Social Media", "Advertising"],
"Sales": ["Inside Sales", "Field Sales", "Account Management"],
"HR": ["Recruitment", "Employee Relations", "Learning & Development"],
"Finance": ["Accounting", "Payroll", "Financial Planning"],
"Support": ["Customer Support", "Technical Support", "Onboarding"]
};

const departmentSelect = document.getElementById("department");
const teamSelect = document.getElementById("team");

// Populate department dropdown
Object.keys(departments).forEach(dept => {
const option = document.createElement("option");
option.value = dept;
option.textContent = dept;
departmentSelect.appendChild(option);
});

// Update teams when department changes
departmentSelect.addEventListener("change", () => {
const selectedDept = departmentSelect.value;

// Clear previous teams
teamSelect.innerHTML = '<option value="">-- Select Team --</option>';

if (selectedDept && departments[selectedDept]) {
  departments[selectedDept].forEach(team => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamSelect.appendChild(option);
  });
}
});
// Handle details: Employee
let employeeName = document.querySelector('#name');
let employeeID;
let department;
let team;
let emailAddress;
let phoneNumber;

// Handle details: Salary
let hoursWorked;
let ratePerHour;
let totalSalary = hoursWorked * ratePerHour

function displayDetails() {
    // Get Employee Input Values
    let employeeName = document.getElementById("name").value;
    let employeeID = document.getElementById("id").value;
    let department = document.getElementById("department").value || "N/A";
    let team = document.getElementById("team").value || "N/A";
    let emailAddress = document.getElementById("email-address").value;
    let phoneNumber = document.getElementById("phone-number").value;

    let hoursWorked = parseFloat(document.getElementById("working-hours").value) || 0;
    let ratePerHour = parseFloat(document.getElementById("rate-per-hour").value) || 0;

    let totalSalary = hoursWorked * ratePerHour;

    // Update Employee Details Section
    document.getElementById("results-display-left-section").innerHTML = `
        <h2>Employee Details</h2>
        <p><strong>Name:</strong> ${employeeName}</p>
        <p><strong>I.D.:</strong> ${employeeID}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Team:</strong> ${team}</p>
        <p><strong>Email Address:</strong> ${emailAddress}</p>
        <p><strong>Phone No.:</strong> ${phoneNumber}</p>
    `;

    // Update Salary Details Section
    document.getElementById("results-display-right-section").innerHTML = `
        <h2>Salary Details</h2>
        <p><strong>Hours Worked:</strong> ${hoursWorked}</p>
        <p><strong>Rate per Hour:</strong> ₱${ratePerHour.toFixed(2)}</p>
        <p><strong>Total Salary:</strong> ₱${totalSalary.toFixed(2)}</p>
    `;
}

