function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16 bg-red-100">Jonathan Welzel's homepage</div>
      <div className="flex-1 bg-blue-100">Content</div>
      <div className="bg-green-100">
        <ul>
          <li>
            <a href="https://github.com/jnwelzel/" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonwelzel/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
