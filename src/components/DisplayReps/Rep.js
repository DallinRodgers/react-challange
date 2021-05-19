const Rep = (props) => {
  const showRepHandler = () => {
    props.giveName(props.name);
  };

  return (
    <tr>
      <td className="sm-p-1" onClick={showRepHandler}>
        <a href="#top">{props.name}</a>
      </td>
      <td className="sm-p-1">{props.party}</td>
    </tr>
  );
};

export default Rep;
