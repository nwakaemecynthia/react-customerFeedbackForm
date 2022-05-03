const Feedback = (props) => {
    return (
        <div className="ml-4">
            <h5 className="mb-4">Customer Complaint Details</h5>
            <div className="mb-3">
                <h6>Name of Customer</h6>
                <p>{props.feedbackDetails.fullName}</p>
            </div>
            <div className="mb-3">
                <h6>Email</h6>
                <p>{props.feedbackDetails.email}</p>
            </div>
            <div className="mb-3">
                <h6>Reason</h6>
                <p>{props.feedbackDetails.reason}</p>
            </div>
            <div className="mb-3">
                <h6>Description</h6>
                <p>{props.feedbackDetails.desription}</p>
            </div>
        </div>
    )
}

export default Feedback;