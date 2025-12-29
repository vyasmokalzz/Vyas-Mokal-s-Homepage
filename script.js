const solutions = [
    { name: "Spacetime and Geometry by Sean Carrol", file: "Solution_Manuals/Spacetime_and_Geometry/Carrol_Gravity.html" },
    { name: "Quantum Mechanics", file: "quantum_mechanics.html" }
];


const notes = [
    { name: "Machine Learning Notes", file: "files/ml_notes.pdf" },
    { name: "Optimization Theory", file: "files/optimization.pdf" }
];

function populateList(listId, data) {
    const list = document.getElementById(listId);
    data.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.file;
        a.innerText = item.name;
        a.target = "_blank";
        li.appendChild(a);
        list.appendChild(li);
    });
}

populateList("solution-list", solutions);
populateList("notes-list", notes);
