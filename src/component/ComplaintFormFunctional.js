/**
 * This form, complaintFormFunctional.js, is handled using Functional Based Component,
 *  while that in, complaintFormClass.js, is handled using class based
 */
import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";


const ComplaintFormFunctional = () => {

    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="row mt-5">
            <div className="col-sm-6">
                <div>
                    <Input
                        title="Full Name"
                        name="fullName"
                        inputType="text"
                        value={fullName}
                        handleChange={setFullname}
                        placeholder="e.g Berry Hills" />
                </div>
                <div className="mt-4">
                    <Input
                        title="Email"
                        name="email"
                        inputType="email"
                        value={email}
                        handleChange={setEmail}
                        placeholder="e.g berryhills@gmail.com" />
                </div>
                <div className="mt-4">
                    {/* <Select /> */}
                </div>
                <div className="mt-4">
                    <TextArea
                        title="Description"
                        rows="5"
                        name="description"
                        value={description}
                        handleChange={setDescription}
                        placeholder="Reason for complaint..." />
                </div>
                <div className="my-4 d-flex flex-row">
                    <Button title="Submit" backgroundColor="red" color="white" />
                    <Button title="Clear" backgroundColor="green" color="white" />
                </div>

            </div>
            <div className="col-sm-6">
                {/* <Feedback /> */}
            </div>
        </div>
    )
}

export default ComplaintFormFunctional;