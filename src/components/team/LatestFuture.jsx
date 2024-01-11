import MatchCard from "../matches/MatchCard"

function LatestFuture(props) {
    const fixData = props.fixtureData

    return (
        <div className="flex flex-col gap-2">
            <div className="flex">
                <div className="basis-6/12 flex gap-3 items-center">
                    <div className="text-sm text-[#6d6a7f]">
                        Last Match
                    </div>
                    <span className="w-fit bg-teal-100 text-teal-800 border-teal-400 text-xs font-medium px-2.5 py-0.5 rounded border flex text-end">{fixData?.lastMatch?.tournament?.name}</span>
                </div>
                <div className="basis-6/12 flex gap-3 items-center">
                    <div className="text-sm text-[#6d6a7f]">
                        Next Match
                    </div>
                    <span className="w-fit bg-teal-100 text-teal-800 border-teal-400 text-xs font-medium px-2.5 py-0.5 rounded border flex text-end">{fixData?.nextMatch?.tournament?.name}</span>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col lg:flex-row gap-3 basis-6/12">
                    <MatchCard tournament={fixData?.lastMatch?.tournament} resultStr={fixData?.lastMatch?.status?.scoreStr} date={fixData?.nextMatch?.status?.utcTime} started={fixData?.lastMatch?.notStarted} homeTeamName={fixData?.lastMatch?.home?.name} homeTeamLogo={fixData?.lastMatch?.home?.id} awayTeamName={fixData?.lastMatch?.away?.name} awayTeamLogo={fixData?.lastMatch?.away?.id} status={fixData?.lastMatch?.status?.reason?.short}/>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 basis-6/12">
                    <MatchCard resultStr={fixData?.nextMatch?.status?.scoreStr} date={fixData?.nextMatch?.status?.utcTime} started={fixData?.nextMatch?.notStarted} homeTeamName={fixData?.nextMatch?.home?.name} homeTeamLogo={fixData?.nextMatch?.home?.id} awayTeamName={fixData?.nextMatch?.away?.name} awayTeamLogo={fixData?.nextMatch?.away?.id} status={fixData?.nextMatch?.status?.reason?.short}/>
                </div>
            </div>
        </div>
    )
}

export default LatestFuture