

export default function Options(props) {

  function search3()
  {
    props.onSidepress3(props.name);
  }

  return (
      <label className="sidebar-label" onClick={search3}>
       <input type="radio" name="test" />
       <span className="checkmark"></span>{props.name}
    </label>
  )
}
