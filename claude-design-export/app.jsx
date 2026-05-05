const { useState, useEffect, useRef, useMemo } = React;

function Page() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Compare />
        <PainPoints />
        <Build />
        <Workflows />
        <Packages />
        <Credibility />
        <Process />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);
