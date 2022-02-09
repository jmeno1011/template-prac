import React from "react";
import "./App.css";

function Template1() {
  return (
    <>
      <header className="App-header">header</header>
      <nav className="App-nav">nav</nav>
      <div className="App-container">
        <aside className="App-aside">
          aside
          <div className="App-aside-content">aside-content</div>
        </aside>
        <section className="App-section">
          section
          <article className="App-article">article</article>
        </section>
      </div>
      <footer className="App-footer">footer</footer>
    </>
  );
}

export default Template1;
