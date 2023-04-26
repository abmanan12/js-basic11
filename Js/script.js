function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}

function clearOutput() {
    document.getElementById("output").innerHTML = " ";
}

function getFieldValue(fieldId) {
    return document.getElementById(fieldId).value
}

function getRandomId() {
    return Math.random().toString(36).slice(2)
}

// .................................................................................................

var users = []

function User(firstName, lastName, email, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
}

// claculate age
User.prototype.calculateAge = function () {

    let dob = new Date(this.dob)
    let currentDate = new Date()

    let month_diff = currentDate.getTime() - dob.getTime()

    let age_df = new Date(month_diff)

    let year = age_df.getFullYear()

    let age = Math.abs(year - 1970)

    return age

}

function handleSubmit() {
    event.preventDefault()

    let firstName = getFieldValue("firstName")
    let lastName = getFieldValue("lastName")
    let email = getFieldValue("email")
    let dob = getFieldValue("dob")

    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()

    if (firstName.length < 3) {
        alert("Please enter your first name correctly")
        return
    }

    // if (email.indexOf("@") < 1) {
    //     alert("Please enter your email correctly")
    // }

    if (!dob) {
        alert("Plase enter your date of birth")
        return
    }

    let user = new User(firstName, lastName, email, dob)

    user.id = getRandomId()
    user.dateCreated = new Date().getTime()

    users.push(user)
    alert("New user has been successfully added")

}

function showTable() {

    if (!users.length) {
        alert("There is not a single user availabe")
    }

    let tableStart = '<div class = "table-responsive"><table class = "table">'
    let tableEnd = '</table></div>'

    let tableHead = '<thead><tr><th scope = "col">#</th><th scope = "col">First Name</th><th scope = "col">Last Name</th><th scope = "col">Email</th><th scope = "col">Date of Birth</th><th scope = "col">Age</th></tr></thead>'

    let tableBody = ''

    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><th scope = "row">' + (i+1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob +  '</td><td>' + users[i].calculateAge() +  '</td><tr>'
    }

    let table = tableStart + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEnd

    // document.getElementById("output") = table
    showOutput(table)

}

function userConsole() {

    if (!users.length) {
        alert("There is not a single user availabe")
    }

    console.log(users)
    
}


// ......................................................................................................

// year in footer
let now = new Date()
let year = now.getFullYear()
document.getElementById("year").innerHTML = year


// ser max today date in dob field
let today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()

if (dd < 10) {
    dd = "0" + dd
}

if (mm < 10) {
    mm = "0" + mm
}

today = yyyy + "-" + mm + "-" + dd
document.getElementById("dob").setAttribute("max", today)
