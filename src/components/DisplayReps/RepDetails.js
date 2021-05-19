const RepDetails = (props) => {
  const link = props.values.link;

  if (props.values.district === "") {
    return (
      <div className="ml-3">
        <h2>Info</h2>
        <p className="gray-bg p-1 min-w-500">{props.values.fname}</p>
        <p className="gray-bg p-1 min-w-500">{props.values.lname}</p>
        <p className="gray-bg p-1 min-w-500">N/A</p>
        <p className="gray-bg p-1 min-w-500">{props.values.phone}</p>
        <p className="gray-bg p-1 min-w-500">{props.values.office}</p>
        <p className="gray-bg p-1 min-w-500">
          <a target="_blank" href={link}>
            {props.values.link}
          </a>
        </p>
      </div>
    );
  }
  return (
    <div className="ml-3">
      <h2>Info</h2>
      <p className="gray-bg p-1 min-w-500">{props.values.fname}</p>
      <p className="gray-bg p-1 min-w-500">{props.values.lname}</p>
      <p className="gray-bg p-1 min-w-500">{props.values.district}</p>
      <p className="gray-bg p-1 min-w-500">{props.values.phone}</p>
      <p className="gray-bg p-1 min-w-500">{props.values.office}</p>
      <p className="gray-bg p-1 min-w-500">
        <a target="_blank" href={link}>
          {props.values.link}
        </a>
      </p>
    </div>
  );
};

export default RepDetails;
