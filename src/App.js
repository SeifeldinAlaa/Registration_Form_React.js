
import './App.css';

function App() {
  return (

    <div className="parent-div">

      <div className="form">
        <div className="ca">Create Account</div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3">
            <label for="exampleInputCountry1" class="form-label">Country:</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Egypt</option>
              <option value="2">USA</option>
              <option value="3">Germany</option>
            </select>

          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label className="label" class="form-check-label" for="exampleCheck1">I accept the terms of service</label>
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
