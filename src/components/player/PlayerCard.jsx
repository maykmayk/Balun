import { Link } from "react-router-dom";

function PlayerCard(props) {
    const handleError = (event) => {
        console.error(`Errore nel caricamento dell'immagine: ${props.image}`);
        event.target.src = "https://i.ibb.co/q9SWXK2/player-placeholder.png";
    };

    const positionStyle = 
        props.position === "CH"
        ? "text-red-600 bg-red-200"
        : props.position === "GK"
        ? "text-teal-600 bg-teal-200"
        : props.position === "DEF"
        ? "text-green-600 bg-green-200"
        : props.position === "MF"
        ? "text-sky-600 bg-sky-200"
        : props.position === "ATT"
        ? "text-purple-600 bg-purple-200"
        : "";  

    return (
        <>
        <Link  to={"/player/" + (props.playerId)}>
            <div className="bg-white w-72 brd rounded-lg px-4 pt-4 flex relative">
                <div className="flex flex-col gap-3 pb-3">
                    <img className="h-6 w-6 object-contain" src={props.teamLogo} alt="Team Logo"></img>
                    <div className="leading-snug text-lg text-[#6d6a7f] break-normal">{props.name}</div>
                    <div className="flex">
                        <div className={`text-sm rounded-full px-3 py-0.5 ${positionStyle}`}>
                            {props.position}
                        </div>
                    </div>
                    <div className="leading-snug text-lg text-[#6d6a7f] font-medium">{props.number}</div>
                </div>
                <div className="w-max flex items-end">
                    <img className="h-48 object-contain object-bottom mix-blend-multiply rounded-br-lg" alt={`propsPhotoNumber`} src={props.image} onError={handleError}></img>
                </div>
                {props.isInjured &&  <div className="absolute end-0 top-0 p-4">
                    <svg width="30" height="30" viewBox="0 0 16 16" className="rounded-full bg-gray-100 brd05"><g id="Page-1"><g id="icInjury"><path d="M8,0 C8.5252876,0 9.0455284,0.051239245 9.5607224,0.153717741 C10.0759163,0.25619623 10.5761642,0.40794486 11.0614672,0.60896367 C11.5467691,0.80998248 12.0078001,1.05640888 12.444561,1.348243 C12.8813219,1.64007711 13.2854195,1.9717112 13.6568537,2.3431456 C14.0282879,2.7145798 14.3599215,3.1186771 14.6517553,3.5554376 C14.9435892,3.9921982 15.1900158,4.4532294 15.3910341,4.9385319 C15.5920525,5.4238343 15.7438021,5.9240828 15.8462811,6.4392772 C15.9487591,6.9544711 16,7.4747119 16,8 C16,8.5252876 15.9487591,9.0455284 15.8462801,9.5607224 C15.7438011,10.0759163 15.5920525,10.5761642 15.3910341,11.0614672 C15.1900158,11.5467691 14.9435892,12.0078001 14.6517553,12.444561 C14.3599215,12.8813219 14.0282879,13.2854195 13.6568537,13.6568537 C13.2854195,14.0282879 12.8813219,14.3599215 12.444561,14.6517553 C12.0078001,14.9435892 11.5467691,15.1900158 11.0614672,15.3910341 C10.5761642,15.5920525 10.0759163,15.7438021 9.5607224,15.8462811 C9.0455284,15.9487591 8.5252876,16 8,16 C7.4747119,16 6.9544711,15.9487591 6.4392767,15.8462801 C5.9240823,15.7438011 5.4238343,15.5920525 4.9385319,15.3910341 C4.4532294,15.1900158 3.9921982,14.9435892 3.5554376,14.6517553 C3.1186771,14.3599215 2.7145798,14.0282879 2.3431456,13.6568537 C1.9717112,13.2854195 1.64007699,12.8813219 1.34824288,12.444561 C1.05640888,12.0078001 0.80998248,11.5467691 0.60896367,11.0614672 C0.40794486,10.5761642 0.25619623,10.0759163 0.153717741,9.5607224 C0.051239245,9.0455284 0,8.5252876 0,8 C0,7.4747119 0.051239245,6.9544711 0.153717741,6.4392767 C0.25619623,5.9240823 0.40794486,5.4238343 0.60896367,4.9385319 C0.80998248,4.4532294 1.05640888,3.9921982 1.348243,3.5554376 C1.64007711,3.1186771 1.9717112,2.7145798 2.3431456,2.3431456 C2.7145798,1.9717112 3.1186771,1.64007699 3.5554376,1.34824288 C3.9921982,1.05640888 4.4532294,0.80998248 4.9385319,0.60896367 C5.4238343,0.40794486 5.9240828,0.25619623 6.4392772,0.153717741 C6.9544711,0.051239245 7.4747119,0 8,0 Z" id="Fill-1" className="fill-gray-100 brd05"></path><path d="M7.4892709,12.095417 C6.8259709,12.095417 6.289571,11.5581174 6.289571,10.8957176 L6.289571,9.60691742 L4.80007094,9.60691742 C4.24837092,9.60691742 3.8001709,9.15871712 3.8001709,8.60701752 L3.8001709,7.28851722 C3.8001709,6.73591732 4.24837092,6.28771732 4.80007094,6.28771732 L6.289571,6.28771732 L6.289571,4.99891722 C6.289571,4.33651721 6.8259709,3.79921722 7.4892709,3.79921722 L8.4072709,3.79921722 C9.0705709,3.79921722 9.6078711,4.33651721 9.6078711,4.99891722 L9.6078711,6.28771732 L11.0964713,6.28771732 C11.6490712,6.28771732 12.0963707,6.73591732 12.0963707,7.28851722 L12.0963707,8.60701752 C12.0963707,9.15871712 11.6490712,9.60691742 11.0964713,9.60691742 L9.6078711,9.60691742 L9.6078711,10.8957176 C9.6078711,11.5581174 9.0705709,12.095417 8.4072709,12.095417 L7.4892709,12.095417 Z" id="Fill-2" fill="#FF3030"></path></g></g></svg>
                </div>}
            </div>
        </Link>
        </>
    );
}

export default PlayerCard;