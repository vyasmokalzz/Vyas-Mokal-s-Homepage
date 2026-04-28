const solutions = [
    { name: "Spacetime and Geometry by Sean Carrol", file: "Solution_Manuals/Spacetime_and_Geometry/Carrol_Gravity.html" },
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
            { name: "Lab Theory Exam PDF", file: "pdf_viewer.html?file=Notes/HRI%20Exams/Lab_3_Theory_Exam_2026.pdf", target: "_self" }
        ]
    }
];

function populateList(listId, data) {
    const list = document.getElementById(listId);
    data.forEach(item => {
        const li = document.createElement("li");
        if (item.isExpandable) {
            // Create expandable details/summary
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            summary.innerText = item.name;
            details.appendChild(summary);
            if (item.sublists && item.sublists.length > 0) {
                const sublist = document.createElement("ul");
                item.sublists.forEach(subitem => {
                    const subli = document.createElement("li");
                    const suba = document.createElement("a");
                    suba.href = subitem.file;
                    suba.innerText = subitem.name;
                    suba.target = subitem.target || "_blank";
                    subli.appendChild(suba);
                    sublist.appendChild(subli);
                });
                details.appendChild(sublist);
            }
            li.appendChild(details);
        } else {
            const a = document.createElement("a");
            a.href = item.file;
            a.innerText = item.name;
            a.target = item.target || "_blank";
            li.appendChild(a);
            // Add sublists if they exist
            if (item.sublists && item.sublists.length > 0) {
                const sublist = document.createElement("ul");
                item.sublists.forEach(subitem => {
                    const subli = document.createElement("li");
                    const suba = document.createElement("a");
                    suba.href = subitem.file;
                    suba.innerText = subitem.name;
                    suba.target = subitem.target || "_blank";
                    subli.appendChild(suba);
                    sublist.appendChild(subli);
                });
                li.appendChild(sublist);
            }
        }
        list.appendChild(li);
    });
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
