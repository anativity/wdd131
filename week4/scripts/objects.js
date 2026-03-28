let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 97, instructor: "Jesus" },
        { section: "002", enrolled: 100, instructor: "Princess" }
    ]
};
function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `Course code: ${course.code}, ${course.title}`;
};
setCourseInformation(aCourse);

function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
        rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
    }
    tbody.innerHTML = rows;
};
renderSections (aCourse);