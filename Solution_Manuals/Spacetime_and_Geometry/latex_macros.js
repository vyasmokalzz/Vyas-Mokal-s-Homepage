window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$']],
    macros: {

      // Metric tensor
      gu: ["g^{#1#2}", 2],
      gd: ["g_{#1#2}", 2],
      christoffel: ["\\Gamma^{#1}_{#2#3}", 3],

      // Derivatives
      cd: ["\\nabla_{#1}", 1],
      dv: ["\\frac{d#1}{d#2}", 2],
      ddv: ["\\frac{d^2{#1}}{d{#2}^2}", 2],
      del: "\\partial",

      // Brackets
      br: ["\\left( #1 \\right)", 1],
      sbr: ["\\left[ #1 \\right]", 1],
      cbr: ["\\left\\{ #1 \\right\\}", 1],

      // Integrals
      integrate: ["\\left( \\\\int #1 \\\\right)", 1],

      // Vectors
      vect: ["\\mathbf{#1}", 1]
    }
  }
};
