import ComplaintFormClass from "./component/ComplaintFormClass";
import ComplaintFormFunctional from "./component/ComplaintFormFunctional";



function App() {



  return (
    <div className="m-3">
      <h5 className="text-center">Customer Complaint Form</h5>
      <hr />
      <ComplaintFormClass />
      {/* <ComplaintFormFunctional /> */}
    </div>

  );
}

export default App;
