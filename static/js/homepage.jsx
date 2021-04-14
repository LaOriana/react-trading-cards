"use strict";

function Homepage() {
  return (
    // Changed div to React.Fragment
    <React.Fragment>
      <p>Hello user!</p>
      <p>
        <a href="/cards">Cards</a>
      </p>
      <p>
      <img src="/static/img/balloonicorn.jpg" alt="Girl in a jacket"/> 
      </p>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
