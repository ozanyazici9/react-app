import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  function handleFromSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));
    console.log(formData.getAll("hobbies"));

    const hobbies = formData.getAll("hobbies");
    const data = Object.fromEntries(formData.entries());
    data.hobbies = hobbies;
    console.log(data);
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Register</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFromSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Re-Password
                      </label>
                      <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="hobbies" className="form-label">
                    Hobbies
                  </label>
                  <div className={`card card-body border ${cardColor}`}>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="cars"
                        name="hobbies"
                        className="form-check-input"
                        value="cars"
                      />
                      <label htmlFor="cars" className="form-check-label">
                        Cars
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="books"
                        name="hobbies"
                        className="form-check-input"
                        value="books"
                      />
                      <label htmlFor="books" className="form-check-label">
                        Books
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="cinema"
                        name="hobbies"
                        className="form-check-input"
                        value="cinema"
                      />
                      <label htmlFor="cinema" className="form-check-label">
                        Cinema
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="sports"
                        name="hobbies"
                        className="form-check-input"
                        value="sports"
                      />
                      <label htmlFor="sports" className="form-check-label">
                        Sports
                      </label>
                    </div>
                  </div>
                </div>

                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
