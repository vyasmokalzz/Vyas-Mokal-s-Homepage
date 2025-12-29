const data = {
  "Chapter 1 – Special Relativity": {
    "1.1 Minkowski Interval": String.raw`
      <h2>Problem 1.1 – Minkowski Interval</h2>
      $$ s^2 = -c^2t^2 + x^2 + y^2 + z^2 $$
      <p><b>Solution.</b></p>
      $$ s'^2 = s^2 $$
    `,
    "1.13 Problem 13": String.raw`
      <h2>Problem 1.13 – Additional Term to Lagrangian of Electromagnetism</h2>
      <ul>
        <li>(a)</li>
        We have $F^{0i}=E^i$ and $F^{ij}=\epsilon^{ijk}B_k$
            \begin{equation}
                \begin{aligned}
                    \mathcal{L'} &= \epsilon_{\mu\nu\rho\sigma}F^{\mu\nu}F^{\rho\sigma}\\
                    &=\epsilon_{0\nu\rho\sigma}F^{0\nu}F^{\rho\sigma}+\epsilon_{1\nu\rho\sigma}F^{1\nu}F^{\rho\sigma}+\epsilon_{2\nu\rho\sigma}F^{2\nu}F^{\rho\sigma}+\epsilon_{3\nu\rho\sigma}F^{3\nu}F^{\rho\sigma}\\
                \end{aligned}
            \end{equation}
            Consider the first term in the equation 
            \begin{equation*}
                \begin{aligned}
                \epsilon_{0\nu\rho\sigma}F^{0\nu}F^{\rho\sigma}&=\epsilon_{01\rho\sigma}F^{01}F^{\rho\sigma}+\epsilon_{02\rho\sigma}F^{02}F^{\rho\sigma}+\epsilon_{03\rho\sigma}F^{03}F^{\rho\sigma}\\
                &=2\br{\epsilon_{0123}F^{01}F^{23}+\epsilon_{0231}F^{02}F^{31}+\epsilon_{0321}F^{03}F^{21}}\\
                &=2\br{E^1.B^1+E^2.B^2-E^3.(-B^3)}\\
                \end{aligned}
            \end{equation*}
            \begin{equation}
                \epsilon_{0\nu\rho\sigma}F^{0\nu}F^{\rho\sigma}=\vect{E}.\vect{B}
            \end{equation}
        Similarly we can work out the other terms giving
        \begin{equation}
            \epsilon_{1\nu\rho\sigma}F^{1\nu}F^{\rho\sigma}=2\br{E^3B^3-E^2B^2+E^1B^1}
        \end{equation}
        \begin{equation}
            \epsilon_{2\nu\rho\sigma}F^{2\nu}F^{\rho\sigma}=2\br{E^3B^3+E^2B^2-E^1B^1}
        \end{equation}
        \begin{equation}
            \epsilon_{3\nu\rho\sigma}F^{3\nu}F^{\rho\sigma}=2\br{-E^3B^3+E^2B^2+E^1B^1}
        \end{equation}
        Adding these four equations we get
        \begin{equation}
            \mathcal{L'}=4\vect{E}.\vect{B}
        \end{equation}
    </ul>
    `,
  },

  "Chapter 2 – Manifolds": {
    "2.1 Coordinate Charts": String.raw`
      <h2>Problem 2.1 – Coordinate Charts</h2>
      $$ x^{\mu} = (t,x,y,z) $$
    `
  },

  "Chapter 3 - Curvature":{
    "Problem 3.1": String.raw`
      <h2>Problem 3.1 – Consequenses of Metric Compatibility</h2>
      \begin{align}
        \cd{\sigma}\delta^{\alpha}{}_{\beta} &= 0 \tag{3.1.1} \\\
        \cd{\sigma}\!\br{\gu{\alpha}{\mu}\gd{\mu}{\beta}} &= 0 \tag{3.1.2} \\\
        (\cd{\sigma}\gu{\alpha}{\mu})\gd{\mu}{\beta}
        + \gu{\alpha}{\mu}(\cd{\sigma}\gd{\mu}{\beta}) &= 0 \tag{3.1.3} \\\
        (\cd{\sigma}\gu{\alpha}{\mu})\gd{\mu}{\beta} &= 0 \tag{3.1.4} \\\
        \cd{\sigma}\gu{\alpha}{\mu} &= 0 \tag{3.1.5}
      \end{align}
      where in (3.1.3) we have used the product rule for the covariant derivative.
      `,    
    
    "Problem 3.3": String.raw`
      <h2>Problem 3.3 – Christoffel Symbols for Diagonal Metric</h2>
      \begin{equation}
        \christoffel{\lambda}{\mu}{\nu} = \frac{g^{\lambda\alpha}}{2}\br{\del_\mu \gd{\alpha}{\nu}+\del_\nu\gd{\mu}{\alpha}-\del_\alpha\gd{\mu}{\nu}}\tag{3.3.1}
    \end{equation}
    <ul>
        <li></li> When all $\mu,\nu\text{ and } \lambda$ are different in (3.3.1) the christoffel symbol to be non-vanishing must have $\alpha=\lambda$ but then metric terms inside the parenthesis vanish and hence 
        \begin{equation}
            \christoffel{\lambda}{\mu}{\nu} = 0 \tag{3.3.2}
        \end{equation}
        

        <li></li>
          \begin{align}
              \christoffel{\lambda}{\mu}{\mu} &= \frac{g^{\lambda\alpha}}{2}\br{\del_\mu \gd{\alpha}{\mu}+\del_\mu\gd{\mu}{\alpha}-\del_\alpha\gd{\mu}{\mu}} \tag{3.3.3}\\
              & = -\frac{g^{\lambda\lambda}}{2}\br{\del_\lambda\gd{\mu}{\mu}} \tag{3.3.4}\\
              & = -\frac{\br{g_{\lambda\lambda}}^{-1}}{2}\br{\del_\lambda\gd{\mu}{\mu}}\tag{3.3.5}
          \end{align}
          When in last step we have used the fact that when the metric is diagonal $\gd{\mu}{\nu} = \br{\gu{\mu}{\nu}}^{-1}$.
        <li></li>
        \begin{align}
          \christoffel{\lambda}{\mu}{\lambda} &= \frac{g^{\lambda\alpha}}{2}\br{\del_\mu \gd{\alpha}{\lambda}+\del_\lambda\gd{\mu}{\alpha}-\del_\alpha\gd{\mu}{\lambda}}\tag{3.3.6}\\ 
          &= \frac{g^{\lambda\lambda}}{2}\br{\del_\mu \gd{\lambda}{\lambda}+\del_\lambda\gd{\mu}{\lambda}-\del_\lambda\gd{\mu}{\lambda}}\tag{3.3.7}\\
           &= \frac{g^{\lambda\lambda}}{2}\br{\del_\mu \gd{\lambda}{\lambda}}\tag{3.3.8}\\
           &= \frac{\br{g_{\lambda\lambda}}^{-1}}{2}\br{\del_\mu \gd{\lambda}{\lambda}}\tag{3.3.9}\\
           & = \del_\mu\ln\sqrt{|\gd{\lambda}{\lambda}|}\tag{3.3.10}
        \end{align}
        <li> </li>
          \begin{align}
                \christoffel{\lambda}{\lambda}{\lambda} &= \frac{g^{\lambda\alpha}}{2}\br{\del_\lambda \gd{\alpha}{\lambda}+\del_\lambda\gd{\lambda}{\alpha}-\del_\alpha\gd{\lambda}{\lambda}}\tag{3.3.11}\\
                 &= \frac{g^{\lambda\lambda}}{2}\br{\del_\lambda \gd{\lambda}{\lambda}+\del_\lambda\gd{\lambda}{\lambda}-\del_\lambda\gd{\lambda}{\lambda}}\tag{3.3.12}\\
                 &= \frac{\br{g_{\lambda\lambda}}^{-1}}{2}\br{\del_\lambda \gd{\lambda}{\lambda}}\tag{3.3.13}\\
                 &= \del_\lambda\ln\sqrt{|\gd{\lambda}{\lambda}|}\tag{3.3.14}
            \end{align}
    `,  

    "Problem 3.5": String.raw`
      <h2>Problem 3.5 – Parallel Transport along Constant Latitude</h2>
      <ul>
        <li>(a)</li> The geodesic equation is 
            \begin{equation}
                \frac{d^2x^\mu}{d\lambda^2} + \christoffel{\mu}{\rho}{\sigma} \dv{x^\rho}{\lambda}\dv{x^\sigma}{\lambda}=0\tag{3.5.1}
            \end{equation}
            We now need non vanishing Christoffel symbols\\
            \begin{equation}
                \christoffel{\phi}{\theta}{\phi} = \cot{\theta} \qquad \christoffel{\theta}{\phi}{\phi} = -\sin{\theta}\cos{\theta}\tag{3.5.2}
            \end{equation}
            Now we have geodesic Equations
            \begin{equation}
                \frac{d^2\theta}{d\lambda^2} - \sin{\theta}\cos{\theta} \br{\dv{\phi}{\lambda}}^2 = 0 \tag{3.5.3}
            \end{equation}
            \begin{equation}
                \frac{d^2\phi}{d\lambda^2} + 2\cot{\theta}\dv{\theta}{\lambda}\dv{\phi}{\lambda} = 0 \tag{3.5.4}
            \end{equation}
            Now for lines of constant longitude i.e. $\phi=\text{const}$ will satisfy (3.5.4) and hence are geodesic.\\
            Now for lines of constant latitude to satisfy (3.5.3) must have $\theta = \pi/2$, and hence will be geodesic equation.
        
        <li>(b)</li> Choose the affine parameter $\lambda$ to be $\phi$. We have initial vector $V^\mu=(1,0)$.
        Use of equation for parallel transport
        \begin{equation}
            \frac{d V^\mu}{d\phi}+\Gamma^{\mu}_{\nu\rho}\frac{d x^\nu}{d\phi}V^\rho=0\tag{3.5.5}
        \end{equation}
        \begin{equation}
            \frac{d V^\theta}{d\phi}-\sin\theta\cos\theta V^\phi=0 \tag{3.5.6}
        \end{equation}
        \begin{equation}
            \frac{d V^\phi}{d\phi}+\cot\theta V^\theta=0\tag{3.5.7}
        \end{equation}
        differentiate (3.6.6) w.r.t.$\phi$ and use the result in (3.5.7)
        \begin{equation}
            \ddv{V^\theta}{\phi} + \cos^2\theta V^\theta = 0\tag{3.5.8}
        \end{equation}
        putting $\omega = \cos\theta$, gives the solution
        \begin{equation}
            V^\theta
            =A\cos\omega\phi + B\sin\omega\phi\tag{3.5.9}
        \end{equation}
        Suppose we start from $\phi = 0$ then using initial conditions We have $A = 1$.\\
        using (3.5.6) we have
        \begin{equation}
            V^\phi = \frac{1}{sin\theta}\br{-sin\omega\phi + B\cos\omega\phi}\tag{3.5.10}
        \end{equation}
        Again using initial conditions $B=0$
        Hence final solution is
        \begin{equation}
            \br{V^\theta, V^\phi} = \br{\cos\br{\cos\theta\times\phi}, -\frac{\sin\br{\cos\theta\times\phi}}{\sin\theta}}\tag{3.5.11}
        \end{equation}
        After one round trip the components are
        \begin{equation}
            \br{V^\theta, V^\phi} = \br{\cos\br{2\pi\cos\theta}, -\frac{\sin\br{2\pi\cos\theta}}{\sin\theta}}\tag{3.5.12}
        \end{equation}
        Note: that for equator $\theta = \pi/2$ which is geodesic the final components are $(1,0)$, agreeing with result that vector is unchanged when parallel transported round trip around geodesic.
    </ul>
    `, 

    "Problem 3.8": String.raw`
      <h2>Problem 3.8 – Metric for three-Sphere</h2>
      <ul>
            <li>(a)</li> We'll find the Christoffel symbols by varying the integral
            \begin{equation}
                S = \int\cbr{\br{\dv{\psi}{\lambda}}^2 + \sin^2\psi\sbr{\br{\dv{\theta}{\lambda}}^2 + \sin^2\theta\br{\dv{\phi}{\lambda}}^2}}d\lambda
            \end{equation}
            Varying with respect to $\psi$ gives
            \begin{align}
                \int\cbr{2\dv{\psi}{\lambda}\dv{\delta \psi}{\lambda} + 2\sin\psi\cos\psi\sbr{\br{\dv{\theta}{\lambda}}^2 + \sin^2\theta\br{\dv{\phi}{\lambda}}^2}\delta\psi} d\lambda &=0
            \end{align}
            use integration by parts now
            \begin{align}
                \int\cbr{\ddv{\psi}{\lambda} - \sin\psi\cos\psi\sbr{\br{\dv{\theta}{\lambda}}^2 + \sin^2\theta\br{\dv{\phi}{\lambda}}^2}}\delta\psi d\lambda &=0
            \end{align}
            Therefore, 
            \begin{equation}
                \christoffel{\psi}{\theta}{\theta} = -\sin\psi\cos\psi \qquad\qquad \christoffel{\psi}{\phi}{\phi} = -\sin\psi\cos\psi\sin^2\theta
            \end{equation}
            Similarly varying with other coordinates gives us other christoffel symbols. The non vanishing ones are
                \begin{align}
                \christoffel{\psi}{\theta}{\theta} &= -\sin\psi\cos\psi &\qquad\qquad \christoffel{\psi}{\phi}{\phi} &= -\sin\psi\cos\psi\sin^2\theta\\
                \christoffel{\theta}{\phi}{\phi} &= -\sin\theta\cos\theta &\qquad\qquad \christoffel{\theta}{\theta}{\psi} &= \cot\psi\\
                \christoffel{\phi}{\psi}{\phi} &= \cot\psi &\qquad\qquad \christoffel{\phi}{\theta}{\phi} &= \cot\theta\\
                \end{align}
            <li>(b)</li>
            Non vanishing components of Riemann tensor are:
                \begin{align}
                    R^\psi_{\theta\psi \theta} &= \del_\psi\christoffel{\psi}{\theta}{\theta} - \del_\theta\christoffel{\psi}{\theta}{\psi}+\christoffel{\psi}{\psi}{\eta}\christoffel{\eta}{\theta}{\theta}-\christoffel{\psi}{\theta}{\eta}\christoffel{\eta}{\theta}{\psi}\\
                    &= -\cos^2\psi+\sin^2\psi+\sin\psi\cos\psi\cot\psi\\
                    &= \sin^2\psi
                \end{align}
                \begin{align}
                    R^\psi_{\phi\psi \phi} &= \sin^2\theta\sin^2\psi
                \end{align}
                \begin{align}
                    R^\theta_{\psi\theta \psi} &= \del_\theta\christoffel{\theta}{\psi}{\psi} - \del_\psi\christoffel{\theta}{\theta}{\psi}+\christoffel{\theta}{\theta}{\eta}\christoffel{\eta}{\psi}{\psi}-\christoffel{\theta}{\psi}{\eta}\christoffel{\eta}{\theta}{\psi}\\
                    &=\text{cosec}^2\psi-\cot^2\psi\\
                    &=1
                \end{align}
                \begin{align}
                    R^\theta_{\phi\theta \phi} &= \del_\theta\christoffel{\theta}{\phi}{\phi} - \del_\phi\christoffel{\theta}{\theta}{\phi}+\christoffel{\theta}{\theta}{\eta}\christoffel{\eta}{\phi}{\phi}-\christoffel{\theta}{\phi}{\eta}\christoffel{\eta}{\theta}{\phi}\\
                    &=-\cos^2\theta+\sin^2\theta-\cos^2\psi\sin^2\theta+\cos^2\theta\\
                    & = \sin^2\theta\sin^2\psi
                \end{align}
                \begin{align}
                    R^\phi_{\psi\phi \psi} &= \del_\phi\christoffel{\phi}{\psi}{\psi} - \del_\psi\christoffel{\phi}{\phi}{\psi}+\christoffel{\phi}{\phi}{\eta}\christoffel{\eta}{\psi}{\psi}-\christoffel{\phi}{\psi}{\eta}\christoffel{\eta}{\phi}{\psi}\\
                    &= \text{cosec}^2\psi - \cot^2\psi\\
                    &= 1
                \end{align}
                \begin{align}
                    R^\phi_{\theta\phi \theta} &= \del_\phi\christoffel{\phi}{\theta}{\theta} - \del_\theta\christoffel{\phi}{\phi}{\theta}+\christoffel{\phi}{\phi}{\eta}\christoffel{\eta}{\theta}{\theta}-\christoffel{\phi}{\theta}{\eta}\christoffel{\eta}{\phi}{\theta}\\
                    & = \text{cosec}^2\theta - \cot^2\theta - \sin\psi\cos\psi\cot\psi\\
                    & = 1 - cos^2\psi\\
                    & = \sin^2\psi
                \end{align}
            The metric components are $g_{\psi\psi}=1$, $g_{\theta\theta} = \sin^2\theta$ and $g_{\phi\phi} = \sin^2\psi\sin^2\theta$\\
            Ricci Tensor
            $$
                R_{\mu\nu} = R^\lambda_{\mu\lambda\nu}
            $$
            \begin{equation}
                R_{\psi\psi} = 2
            \end{equation}
            \begin{equation}
                R_{\theta\theta} = 2\sin^2\psi
            \end{equation}
            \begin{equation}
                R_{\phi\phi} = 2\sin^2\theta\sin^2\phi
            \end{equation}
            The metric components are $g_{\psi\psi}=1$, $g_{\theta\theta} = \sin^2\psi$ and $g_{\phi\phi} = \sin^2\psi\sin^2\theta$\\
            Ricci Scalar is 
                \begin{align}
                    R &= g^{\mu\nu}R_{\mu\nu}\\
                    & = 6
                \end{align}
        <li>(c)</li>
        \begin{equation}
            R_{\mu\nu\rho\sigma} = g_{\mu\eta}R^\eta_{\nu\rho\sigma}
        \end{equation}
        Therefore,
            \begin{align}
                R_{\psi\theta\psi\theta} &= \sin^2\psi\\
                R_{\psi\phi\psi\phi} &= \sin^2\theta\sin^2\psi\\
                R_{\theta\phi\theta\phi} &= \sin^2\theta\sin^4\psi\\
            \end{align}
        Others follow from property of Riemann Tensor. Now to verify 
            \begin{align}
                R_{\mu\nu\rho\sigma} &= \frac{R}{n(n-1)}\br{g_{\mu\rho }g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\rho}}\\
                & = g_{\mu\rho }g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\rho}
            \end{align}
        as $n=3$
            \begin{align}
                R_{\psi\theta\psi\theta} &= g_{\psi\psi}g_{\theta\theta}-g_{\psi\theta  }g_{\theta\psi}\\
                &=\sin^2\psi
            \end{align}
            \begin{align}
                 R_{\psi\phi\psi\phi} & = g_{\psi\psi}g_{\phi\phi}-g_{\psi\phi}g_{\phi\psi}\\
                 &=\sin^2\psi\sin^2\theta
            \end{align}
            \begin{align}
                 R_{\theta\phi\theta\phi} & = g_{\theta\theta}g_{\phi\phi}-g_{\theta\phi}g_{\phi\theta}\\
                 &=\sin^4\psi\sin^2\theta
            \end{align}
        </ul>
    `, 

    "Problem 3.0": String.raw`
      <h2>Problem 3.1 – Christoffel Symbols for Diagonal Metric</h2>
    `, 
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
