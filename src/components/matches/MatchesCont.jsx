import MatchLine from "./MatchLine";

function MatchesCont(props) {
    return (
        <>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-100 p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex  items-center basis-6/12 justify-between">
                        <div className="flex gap-3 items-center">
                            <img className="h-8 w-8 object-contain" src={props.leagueIcon} alt="leagueIcon" />
                            <div className="text-base text-[#6d6a7f] leading-normal">{props.leagueTitle}</div> 
                        </div>
                        <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded border border-violet-400">{props.leagueCountry}</span>
                    </div>
                </div>
                {props.matchData?.map((match, index) => (
                    <>
                        <MatchLine matchData={match} key={index}/>
                        {index < props.matchData.length - 1 && <div className="border"></div>}
                    </>
                ))}
            </div>
        </>
    );
}

export default MatchesCont;
