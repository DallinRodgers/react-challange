import { useState } from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import RepList from "./components/DisplayReps/RepList";
import RepDetails from "./components/DisplayReps/RepDetails";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [repResults, setRepResults] = useState([]);
  const [repValues, setRepValues] = useState({
    fname: "First Name",
    lname: "Last Name",
    district: "District",
    phone: "Phone",
    office: "Office",
    link: "Link",
  });

  const fetchRepData = async (values) => {
    setIsLoading(true);
    const repUrl = "http://localhost:5000/representatives/";
    const senUrl = "http://localhost:5000/senators/";

    if (values.rep === "rep") {
      repGetRequest(values.rep, repUrl, values.state);
    } else {
      repGetRequest(values.rep, senUrl, values.state);
    }
    setIsLoading(false);
    setRepValues({
      fname: "First Name",
      lname: "Last Name",
      district: "District",
      phone: "Phone",
      office: "Office",
      link: "Link",
    });
  };

  const repGetRequest = async (type, url, state) => {
    try {
      const response = await fetch(url + state);
      const data = await response.json();

      const transformedReps = data.results.map((repData) => {
        return {
          type: type,
          name: repData.name,
          district: repData.district,
          link: repData.link,
          office: repData.office,
          party: repData.party,
          phone: repData.phone,
          state: repData.state,
        };
      });
      setRepResults(transformedReps);
    } catch (err) {
      console.log("something went wrong.");
    }
  };

  // const resetRepSelection = () => {
  //   setRepResults([]);
  // };

  const getValues = (selected) => {
    fetchRepData(selected);
  };

  const getRepByName = (name) => {
    const findMe = name;
    var repIndex = repResults.findIndex((rep, spot) => {
      if (rep.name === findMe) return true;
    });
    processRepData(repResults[repIndex]);
  };

  const processRepData = (data) => {
    const fullName = data.name.split(" ");
    const lastIndex = fullName.length - 1;

    const firstName = fullName[0];
    const lastName = fullName[lastIndex];

    setRepValues({
      fname: firstName,
      lname: lastName,
      district: data.district,
      phone: data.phone,
      office: data.office,
      link: data.link,
    });
  };

  let content = <div></div>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (repResults.length > 0) {
    content = (
      <div className="flex">
        <RepList getRepName={getRepByName} reps={repResults} />
        <RepDetails values={repValues} />
      </div>
    );
  }

  return (
    <div className="p-2" id="top">
      <div>
        <h1 className="blue-txt">Who's My Representative?</h1>
      </div>
      <div>
        <DropDown onGetValues={getValues} />
        {content}
      </div>
    </div>
  );
}

export default App;
