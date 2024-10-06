
import './App.css';
import Taskdata from './Taskdata';
const packageData = {
  id: 1,
  title: "Service 1",
  description: "Sample Test",
  price: 0.00,
  currency: "INR",
  servicePackageTasks: [
    { id: 4, servicePackageId: 1, title: "First Step 1", estimatedMinutes: 30, parentServicePackageTaskId: null },
    { id: 5, servicePackageId: 1, title: "Second  Step", description: "Do the second step first", estimatedMinutes: 30, parentServicePackageTaskId: null },
    { id: 6, servicePackageId: 1, title: "Sub 1 Step 1", description: "Sub 1", estimatedMinutes: 10, parentServicePackageTaskId: 4 },
    { id: 10, servicePackageId: 1, title: "Anothe Step 2", description: null, estimatedMinutes: 10, parentServicePackageTaskId: 4 },
    { id: 11, servicePackageId: 1, title: "Another Step", description: "<ol><li>Step1</li><li>Step 2</li><li>Step 3</li></ol>", estimatedMinutes: 10, parentServicePackageTaskId: 4 },
    { id: 12, servicePackageId: 1, title: "Another Step", description: "Do the below steps<div>1. Collect documents</div>", estimatedMinutes: 10, parentServicePackageTaskId: null },
    { id: 19, servicePackageId: 1, title: "Document submission", description: "Collect Adhaar, PAN and submit in GST porta", estimatedMinutes: 30, parentServicePackageTaskId: 4 }
  ]
};

function App() {
  return (
    <div className="App">
     <Taskdata  packageData={packageData}/>
    </div>
  );
}

export default App;
