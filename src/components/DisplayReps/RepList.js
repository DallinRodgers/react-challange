import Rep from "./Rep";

const RepList = (props) => {
  const getName = (givenName) => {
    props.getRepName(givenName);
  };
  if (props.reps[0].type === "sen") {
    return (
      <div>
        <h2>
          List / <span className="blue-txt">Senators</span>
        </h2>
        <table cellSpacing="0">
          <tbody>
            <tr className="gray-bg">
              <th className="sm-p-1">Name</th>
              <th className="sm-p-1">Party</th>
            </tr>
            {props.reps.map((rep) => (
              <Rep
                giveName={getName}
                key={rep.name}
                id={rep.district}
                name={rep.name}
                party={rep.party}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h2>
        List / <span className="blue-txt">Representatives</span>
      </h2>
      <table cellSpacing="0">
        <tbody>
          <tr className="gray-bg">
            <th className="sm-p-1">Name</th>
            <th className="sm-p-1">Party</th>
          </tr>
          {props.reps.map((rep) => (
            <Rep
              giveName={getName}
              key={rep.name}
              id={rep.district}
              name={rep.name}
              party={rep.party}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepList;
