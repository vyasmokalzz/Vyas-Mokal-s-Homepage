const solutions = [
    { name: "Spacetime and Geometry by Sean Carroll", file: "Solution_Manuals/Spacetime_and_Geometry/Spacetime_and_Geometry.pdf" },
    { name: "Particle Physics by Palash Pal", file: "Solution_Manuals/Particle_Physics_Palash_Pal/Particle_Physics_Palash_Pal.pdf" },
    { name: "Modern Quantum Mechanics J.J. Sakurai", file: "Solution_Manuals/Quantum_Mechanics/Modern_Quantum_Mechanics_Sakurai.html" }
];


const notes = [
    { 
        name: "Particle Physics", 
        file: "Notes/Particle_Physics/particle_physics.html",
        sublists: [
            { name: "Assignments", file: "pdf_viewer.html?file=Notes/Particle_Physics/Partcle_Physics_Assignment.pdf", target: "_self" }
        ]
    },
    { name: "Non-Linear Dynamics", file: "pdf_viewer.html?file=Notes/Non-Linear_Dyanmics/Non_Linear_Dynamics.pdf", target: "_self"},
    { name: "Quantum Field Theory", file: "pdf_viewer.html?file=Notes/QFT/Quantum_Field_Theory_Notes.pdf", target: "_self"},
    { name: "Group Theory", file: "pdf_viewer.html?file=Notes/Group_Theory/Group_Theory.pdf", target: "_self"},
    {
        name: "HRI Exams",
        isExpandable: true, // Custom property to indicate expandable only
        sublists: [
            {
                name: "Classical Mechanics 2024-25",
                isExpandable: true,
                sublists: [
                    { name: "HW1", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Mechanics_2024-25/CM_HW1.pdf", target: "_self" },
                    { name: "HW2", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Mechanics_2024-25/HW2.pdf", target: "_self" },
                    { name: "HW3", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Mechanics_2024-25/HW3.pdf", target: "_self" },
                    { name: "HW4", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Mechanics_2024-25/HW4.pdf", target: "_self" },
                    { name: "HW5", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Mechanics_2024-25/HW5.pdf", target: "_self" }
                ]
            },
            {
                name: "Classical Electrodynamics 2024-25",
                isExpandable: true,
                sublists: [
                    { name: "ED HW1", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW1_2024.pdf", target: "_self" },
                    { name: "ED HW2", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW2_2024%202.pdf", target: "_self" },
                    { name: "ED HW3", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW3_2024.pdf", target: "_self" },
                    { name: "ED HW4", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW4_2024.pdf", target: "_self" },
                    { name: "ED HW5", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW5_2024.pdf", target: "_self" },
                    { name: "ED HW6", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Classical_Electrodynamics_2024-25/ED_HW6_2024.pdf", target: "_self" }
                ]
            },
            {
                name: "Quantum Mechanics 2024-25",
                isExpandable: true,
                sublists: [
                    { name: "QM 1 Assignment 1", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_1_Assignment_1.pdf", target: "_self" },
                    { name: "QM 1 Assignment 2", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_1_Assignment_2.pdf", target: "_self" },
                    { name: "QM 1 Assignment 3", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_1_Assignment_3.pdf", target: "_self" },
                    { name: "QM 2 Assignment 1", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_2_Assignment-1.pdf", target: "_self" },
                    { name: "QM 2 Assignment 2", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_2_Assignment-2.pdf", target: "_self" },
                    { name: "QM 2 Assignment 3", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_2_Assignment-3.pdf", target: "_self" },
                    { name: "QM 2 Assignment 4", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/QM_2_Assignment-4.pdf", target: "_self" },
                    { name: "Scattering Problem Sheet", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Quantum_Mechanics2024-25/ScatteringProblemSheet.pdf", target: "_self" }
                ]
            },
            { name: "Lab Theory Exam PDF", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Lab_Theory_Exams.pdf", target: "_self" },
            { name: "Numerical Methods 2025-26", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Numerical_Methods_2025-26.pdf", target: "_self" },
            { name: "Statistical Mechanics 2025-26", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Statistical_Mechanics_2025-26.pdf", target: "_self" }
        ]
    }
];

function createListItem(item) {
    const li = document.createElement("li");

    if (item.isExpandable) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.innerText = item.name;
        details.appendChild(summary);
        if (item.sublists && item.sublists.length > 0) {
            const sublist = document.createElement("ul");
            item.sublists.forEach(subitem => sublist.appendChild(createListItem(subitem)));
            details.appendChild(sublist);
        }
        li.appendChild(details);
    } else {
        const a = document.createElement("a");
        a.href = item.file;
        a.innerText = item.name;
        a.target = item.target || "_blank";
        li.appendChild(a);
        if (item.sublists && item.sublists.length > 0) {
            const sublist = document.createElement("ul");
            item.sublists.forEach(subitem => sublist.appendChild(createListItem(subitem)));
            li.appendChild(sublist);
        }
    }

    return li;
}

function populateList(listId, data) {
    const list = document.getElementById(listId);
    data.forEach(item => list.appendChild(createListItem(item)));
}

populateList("solution-list", solutions);
populateList("notes-list", notes);

// Blog expand/collapse behavior for homepage
document.addEventListener('DOMContentLoaded', () => {
    const navBlog = document.getElementById('nav-blog');
    const blogSection = document.getElementById('blog');
    if (!blogSection || !navBlog) return;

    // start collapsed
    blogSection.classList.add('blog-section-collapsed');
    blogSection.classList.remove('expanded');
    navBlog.setAttribute('aria-expanded', 'false');

    function toggleBlog(e) {
        if (e) e.preventDefault();
        const isExpanded = blogSection.classList.toggle('expanded');
        blogSection.classList.toggle('blog-section-collapsed', !isExpanded);
        navBlog.setAttribute('aria-expanded', String(isExpanded));
        const blogExpandBtn = document.getElementById('blog-expand');
        if (blogExpandBtn) blogExpandBtn.setAttribute('aria-expanded', String(isExpanded));
        if (isExpanded) {
            // scroll into view smoothly
            blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Click on nav link toggles blog instead of jumping
    navBlog.addEventListener('click', toggleBlog);

    // Allow clicking the section heading to toggle as well
    const blogHeading = blogSection.querySelector('h2');
    if (blogHeading) {
        blogHeading.style.cursor = 'pointer';
        blogHeading.addEventListener('click', toggleBlog);
    }
    const blogExpandBtn = document.getElementById('blog-expand');
    if (blogExpandBtn) {
        blogExpandBtn.addEventListener('click', toggleBlog);
        blogExpandBtn.style.cursor = 'pointer';
    }
});