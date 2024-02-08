let courseTemp = `
    <div class="course">
        <div>
            <label for="course">Course Name</label>
            <input type="text" id="course">
        </div>
        <div>
            <label for="creditLoad">CL</label>
            <select id="creditLoad">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div>
            <label for="grade">Grade</label>
            <select id="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
        </div>
    </div>
`
let addCourse = document.getElementById("addCourse")
let courseContainer = document.getElementById("allCourses")
let table = document.querySelector('table')
let courseTable = document.getElementById("courseTable")

addCourse.addEventListener('click', e => {
    let course = document.createElement('div')
    course.innerHTML = courseTemp
    courseContainer.append(course)
})

let calcGP = document.querySelector(".calcGP")
calcGP.addEventListener('click', (e) => {
    e.preventDefault();
    let courses = document.querySelectorAll('.course')
    let totalGP = 0;
    let totalCl = 0;

    table.style.visibility = 'visible'

    courses.forEach( course => {
        let courseName = course.querySelector("#course")
        let creditLoad = course.querySelector("#creditLoad")
        let grade = course.querySelector("#grade")
        let gradePoint;
        let point;

        if (courseName.value != "") {
            totalCl += Number(creditLoad.value)
            switch (grade.value) {
                case 'A':
                    point = 5
                    break;
                case 'B':
                    point = 4
                    break;
                case 'C':
                    point = 3
                    break;
                case 'D':
                    point = 2
                    break;
                case 'E':
                    point = 1
                    break;
                default:
                    point = 0;
                    break;
            }
            gradePoint = point * Number(creditLoad.value)
            let tableHTML = `
                <tr>
                <td> ${courseName.value} </td>
                <td> ${creditLoad.value} </td>                    
                <td> ${grade.value} </td>                    
            </tr>
            `
            let tr = document.createElement('tr')
            tr.innerHTML = tableHTML
            courseTable.appendChild(tr)
        } else {
            gradePoint = 0;
        }
        totalGP += gradePoint
    })
    let gpaValue = (totalGP / totalCl).toFixed(2)
    let gpa = document.getElementById("gpa")
    if (gpaValue >= 0) {
        gpa.innerHTML = gpaValue;
    }
    courseContainer.innerHTML = "";
})
