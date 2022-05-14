import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Organization</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Overall Report</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Student Database</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>

  <div className="profile_img">
    
  </div>
  <ul className="name">
        <li className="list-group-item list-group-item-primary">Rohit</li>
        
      </ul>
      <ul className="surename">
        <li className="list-group-item list-group-item-primary">Kakde</li>
        
      </ul>
      <ul className="roll_no">
        <li className="list-group-item list-group-item-primary">Roll No</li>
        
      </ul>
      <table className="table_1">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Amount to be paid</th>
            <th scope="col">Amount paid</th>
            <th scope="col">Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">January</th>
            <td>500</td>
            <td><input id="input_width" type="text" class="form-control"  aria-describedby="emailHelp"/></td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">February</th>
            <td>500</td>
            <td><input id="input_width" type="text" class="form-control"  aria-describedby="emailHelp"/></td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">March</th>
            <td>500</td>
            <td><input id="input_width" type="text" class="form-control"  aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">April</th>
            <td>500</td>
            <td><input id="input_width" type="text" class="form-control" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">May</th>
            <td>500</td>
            <td><input  id="input_width"type="text" class="form-control"  aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">June</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">July</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">August</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">September</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">October</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Nobember</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">December</th>
            <td>500</td>
            <td><input type="text" class="form-control" id="input_width" aria-describedby="emailHelp"/></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      {/* <div className="table_1">
      <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Month    </li>
          <li className="list-group-item">To be Paid</li>
          <li className="list-group-item">Amount Paid</li>
          <li className="list-group-item">Remaining</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">January  </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
          <li className="list-group-item">February </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">March    </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-lg">
          <li className="list-group-item">April    </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xl">
          <li className="list-group-item">May      </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xxl">
          <li className="list-group-item">June     </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">July     </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">August   </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">September</li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">October</li>
          <li className="list-group-item">500</li> 
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Nobember</li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">December </li>
          <li className="list-group-item">500</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div> */}
  </div>
  );
}

export default App;
