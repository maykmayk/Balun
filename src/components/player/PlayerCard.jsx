import { Link } from "react-router-dom";

function PlayerCard(props) {
    // console.log(props.playerData)
    return (
        <>
        <Link  to={"/player/" + (props.playerId)}>
            <div className="flex gap-3">
                <div className="bg-gray-100 rounded-lg px-3 pt-3 flex items-center">
                    <div className="flex flex-col gap-3 pb-3">
                        <img className="h-10 w-10 object-contain" src={props.teamLogo} alt="Team Logo"></img>
                        <div className="leading-snug text-lg text-[#6d6a7f] break-normal">{props.name}</div>
                        <div className="flex">
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-400">ATT</span>
                        </div>
                        <div className="leading-snug text-lg text-[#6d6a7f] font-medium">{props.number}</div>
                    </div>
                    <div className="w-max flex items-end">
                        <img className="h-48 object-contain object-bottom mix-blend-multiply rounded-br-lg" alt={`propsPhotoNumber`} src={props.image}></img>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default PlayerCard;
