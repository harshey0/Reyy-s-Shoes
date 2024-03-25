

export default function Options(props) {
  return (
      <label className="sidebar-label">
       <input type="radio" name="test" />
       <span className="checkmark"></span>{props.name}
    </label>
  )
}
