import React, { useState } from "react";
import "./CandidateApplicationForm.css";

const CandidateApplicationForm = () => {
  const [candidateForm, setCandidateForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    collegeId: "",
  });

  const onChangeHandler = (event) => {
    setCandidateForm({
      ...candidateForm,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitCandidateForm = (event) => {
    console.log(candidateForm);
    event.preventDefault();
  };

  return (
    <div className="wcs-main-wrapper">
      <div className="wcs-form-wrapper">
        <form onSubmit={onSubmitCandidateForm}>
          <div className="wcs-form-title">
            <h2>Application Form</h2>
            <p>Let's code for Space</p>
          </div>

          <div className="wcs-input-grid">
            <div>
              <label htmlFor="firstName" className="wcs-form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="wcs-form-input"
                aria-label="firstname"
                onChange={onChangeHandler}
                value={candidateForm.firstName}
              />
            </div>
          </div>
          <div className="wcs-input-grid">
            <div>
              <label htmlFor="lastName" className="wcs-form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="wcs-form-input"
                aria-label="lastName"
                onChange={onChangeHandler}
                value={candidateForm.lastName}
              />
            </div>
          </div>

          <div className="wcs-input-grid">
            <div>
              <label htmlFor="emailAddress" className="wcs-form-label">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="email"
                className="wcs-form-input"
                aria-label="emailAddress"
                onChange={onChangeHandler}
                value={candidateForm.emailAddress}
              />
            </div>
          </div>
          <div className="wcs-input-grid">
            <div>
              <label htmlFor="phoneNumber" className="wcs-form-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phone"
                className="wcs-form-input"
                aria-label="mobile number"
                onChange={onChangeHandler}
                value={candidateForm.phoneNumber}
              />
            </div>
          </div>
          <div className="wcs-input-grid">
            <div>
              <label htmlFor="collegeId" className="wcs-form-label">
                College/School ID
              </label>
              <input
                type="text"
                name="collegeId"
                id="collegeId"
                className="wcs-form-input"
                aria-label="College/School Id"
                onChange={onChangeHandler}
                value={candidateForm.collegeId}
              />
            </div>
          </div>

          {/* <div class="wcs-checkbox-wrapper">
            <label htmlFor="supportCheckbox" class="wcs-checkbox-label">
              <div class="wcs-relative">
                <input
                  type="checkbox"
                  id="supportCheckbox"
                  class="wcs-input-checkbox"
                />
                <div class="wcs-checkbox-inner">
                  <span class="wcs-opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      class="wcs-stroke-current"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        stroke-width="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              I agree to the defined
              <a href="#"> terms, conditions, and policies</a>
            </label>
          </div> */}

          <button className="wcs-btn wcs-full-width" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { CandidateApplicationForm };
