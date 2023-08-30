import React, { Fragment, useState } from "react";
import "./CandidateApplicationForm.css";
import { addCandidateForm } from "../../Api/CandidateFormApi/CandidateFormApi";
import { useLocation, useNavigate } from "react-router-dom";
import { Notification } from "../../Components/Notification/Notification";

const CandidateApplicationForm = () => {
  const [candidateForm, setCandidateForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    collegeId: "",
  });
  const routerNavigate = useNavigate();
  const routerParams = useLocation();

  const onChangeHandler = (event) => {
    setCandidateForm({
      ...candidateForm,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitCandidateForm = (event) => {
    event.preventDefault();
    addCandidateForm(candidateForm)
      .then((res) => {
        console.log("res--> in component", res);
        if (res.status === 200) {
          routerNavigate({
            pathname: "/form",
            search: "?submited=true",
          });
        }
      })
      .catch((error) => {
        console.log("error in fomr", error);
      });
  };

  return (
    <div className="wcs-main-wrapper">
      {routerParams.search ? (
        <Fragment>
          <Notification redirectUrl={"/form"} />{" "}
        </Fragment>
      ) : (
        <Fragment>
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
              <button className="wcs-btn wcs-full-width" type="submit">
                Submit
              </button>
            </form>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export { CandidateApplicationForm };
