/**
 * This form, complaintFormFunctional.js, is handled using Functional Based Component,
 *  while that in, complaintFormClass.js, is handled using class based
 */
import React from "react";
import { useState } from "react";
import Button from "./Button";
import Feedback from "./Feedback";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";


const ComplaintFormFunctional = () => {

    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const reasonOptions = [
        "My account was debited erroneously",
        "My card is expired",
        "My transaction failed",
        "Others"
    ];
    let showFeedbackDetails = useState(false);

    let feedbackDetails = {
        fullName: fullName,
        email: email,
        reason: reason,
        description: description
    }

    const handleFormSubmit = (e) => {
        if (fullName !== "" && email !== "" && reason !== "" && description !== "") {
            showFeedbackDetails = true;
        }
    }

    const handleClearForm = (e) => {
        e.preventDefault();
        feedbackDetails = {
            fullName: "",
            email: "",
            reason: "",
            description: "",
            showFeedbackDetails: false
        }
    }


    return (
        <div className="row mt-5">
            <div className="col-sm-6">
                <form>
                    <div>
                        <Input
                            title="Full Name"
                            name="fullName"
                            inputType="text"
                            value={fullName}
                            handleChange={(event) => setFullname(event.target.value)}
                            placeholder="e.g Berry Hills" />
                    </div>
                    <div className="mt-4">
                        <Input
                            title="Email"
                            name="email"
                            inputType="email"
                            value={email}
                            handleChange={(event) => setEmail(event.target.value)}
                            placeholder="e.g berryhills@gmail.com" />
                    </div>
                    <div className="mt-4">
                        <Select
                            title="Reason for Contsct"
                            name="reason"
                            placeholder="Select a reason..."
                            value={reason}
                            handleChange={(event) => setReason(event.target.value)}
                            options={reasonOptions}
                        />
                    </div>
                    <div className="mt-4">
                        <TextArea
                            title="Description"
                            rows="5"
                            name="description"
                            value={description}
                            handleChange={(event) => setDescription(event.target.value)}
                            placeholder="Reason for complaint..." />
                    </div>
                    <div className="my-4 d-flex flex-row">

                        <Button onButtonClick={handleFormSubmit} title="Submit Complaint" backgroundColor="#27ae60" color="white" />
                        <Button onButtonClick={handleClearForm} title="Reset Form" backgroundColor="#7f8c8d" color="white" />
                    </div>
                </form>
            </div>
            <div className="col-sm-6">
                {showFeedbackDetails && <Feedback feedbackDetails={feedbackDetails} />}

            </div>
        </div>
    )
}

export default ComplaintFormFunctional;
