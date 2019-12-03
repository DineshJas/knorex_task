import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render(){    
    return (
      <div className="App">
        <h1>Welcome</h1>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="bg-light d-flex justify-content-center">
              <input type="text" />
              <span className="ml-2"></span>
              <input type="text" />
              <span className="ml-2"></span>
              <button className="btn btn-danger">X</button>
              {/* 

                code for Action

              */}
            </div>
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary mt-3">Add Option</button>
            </div>
            <hr/>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary mr-2">Export CSV</button>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
