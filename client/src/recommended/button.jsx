
import $ from 'jquery';
export default function Button(props) {

    function search2()
    {
        props.onPress2(props.name);

        $("button").css("background-color", "white");
        document.getElementById(props.name).style.backgroundColor="grey";
    }

  return (
    <button className="button" id={props.name} onClick={search2}>{props.name}</button>
  )
}
