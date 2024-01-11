import { Link } from "react-router-dom";

function MatchLine(props) {
    const matchData = props.matchData

    let dateString = matchData?.time
    const dateObject = new Date(dateString);

    const formattedTime = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });

    return (
        <div className="flex items-center ">
            <div className="flex gap-5 items-center justify-start">
                <div className="flex text-center justify-center">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{formattedTime}</span>
                </div>
                <div className="flex flex-col w-100 gap-2">
                    <div className="flex gap-3 items-center">
                        <Link to={"/team/" + (matchData.home.id)}>
                            <img className="h-6 w-6 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${matchData.home.id}.png`} alt="teamLogo" />
                        </Link>
                        <div className="font-base md:flex hidden">{matchData.home.name}</div>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <Link to={"/team/" + (matchData.away.id)}>
                            <img className="h-6 w-6 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${matchData.away.id}.png`} alt="teamLogo" />
                        </Link>
                        <div className="font-base md:flex hidden">{matchData.away.name}</div>
                    </div>            
                </div>
            </div>
            {/* <div className="basis-2/12 justify-end hidden md:flex">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded border border-emerald-400">Full Time</span>
            </div> */}
        </div>
    )
}

export default MatchLine