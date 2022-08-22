// Can write with no closing tag in React if there is no content between tags
// Function recieved in component can be executed inside the component or forwarded to another component
function Backdrop(props){
    return(
        <div className="backdrop" onClick={props.onClick}/>
    );
}

export default Backdrop;