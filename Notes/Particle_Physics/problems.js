const data = {
  "Course Structure": {
    "1. Books and References": String.raw`
      <h2>Books & References</h2>
      <ul>
        <li>Peter Renton, <em>An Introduction to the Physics of Quarks and Leptons</em>, Cambridge University Press, 1990.</li>
        <li>Francis Halzen & Alan D. Martin, <em>Quarks and Leptons: An Introductory Course in Modern Particle Physics</em>, Wiley, 1984. <strong>(Classic text)</strong></li>
        <li>Vernon D. Barger and Roger J. N. Phillips, <em>Collider Physics</em>, Addison–Wesley, 1997.</li>
        <li>David J. Griffiths, <em>Introduction to Elementary Particles</em>, 2nd ed., Wiley-VCH, 2008. <strong>(Accessible)</strong></li>
        <li>David Tong, <em>Particle Physics (lecture notes)</em> — <a href="https://www.damtp.cam.ac.uk/user/tong/particle.html" target="_blank" rel="noopener">https://www.damtp.cam.ac.uk/user/tong/particle.html</a> (Cambridge)</li>
      </ul>
    `,

    "2. Class Timings & Instructor": String.raw`
      <h2>Class Timings</h2>
      <ul>
        <li>Monday — 11:05 a.m.</li>
        <li>Wednesday — 11:05 a.m.</li>
        <li>Friday — 09:30 a.m.</li>
      </ul>
      <p><strong>Tutor:</strong> Utsav Atta</p>
    `,

    "3. Marks Distribution": String.raw`
      <h2>Marks Distribution</h2>
      <ul>
        <li>Attendance + Assignments + Quizzes: 25%</li>
        <li>Mid-Semester Exam: 35%</li>
        <li>End-Semester Exam: 40%</li>
      </ul>
    `,

    "4. Syllabus": String.raw`
      <h2>Syllabus (Overview)</h2>
      <ul>
        <li>Experimental methods and an introduction to relativistic kinematics</li>
        <li>Role of symmetries in particle physics</li>
        <li>Quantum Electrodynamics (QED) and the quark model</li>
        <li>Deep Inelastic Scattering &amp; an introduction to QCD
          <p style="font-size:0.95em;color:#555;margin-top:6px;">Note: Deep Inelastic Scattering is Experimental technique to to find internal structure of particle. Find if particle is made of sub-particles. Eg: Rutherford's Scattering Experiment which told us that atom has a nucleus. Calculations done here are not exact (as involves non-perturbative interactions)</p>
        </li>
        <li>The Standard Model of particle physics</li>
        <li>Beyond the Standard Model: neutrino physics and oscillations</li>
      </ul>
    `
  }
};

const sidebar = document.getElementById("sidebar");
const container = document.getElementById("problem-container");

for (const chapter in data) {

  const chapterHeader = document.createElement("h3");
  chapterHeader.innerText = chapter;
  chapterHeader.style.cursor = "pointer";

  const problemList = document.createElement("div");
  problemList.style.display = "none";
  problemList.style.marginLeft = "10px";

  chapterHeader.onclick = () => {
    problemList.style.display =
      problemList.style.display === "none" ? "block" : "none";
  };

  sidebar.appendChild(chapterHeader);
  sidebar.appendChild(problemList);

  for (const prob in data[chapter]) {
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = prob;
    a.style.display = "block";
    a.onclick = () => {
      container.innerHTML = data[chapter][prob];
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([container]).catch((err) => console.error('MathJax typeset failed:', err && err.message ? err.message : err));
      } else if (window.MathJax && MathJax.typeset) {
        MathJax.typeset();
      }
    };
    problemList.appendChild(a);
  }
}
