import { Link } from "react-router-dom";

function SidebarElement(props) {
    return (
        <li>
            <Link to={props.link} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ay-700 group">
            <img alt="sideBarElmentIcon" className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-gray-900" src={props.icon}/> 
            <span className="flex-1 ms-3 whitespace-nowrap">{props.name}</span>
            </Link>
        </li>
    )
}

export default SidebarElement