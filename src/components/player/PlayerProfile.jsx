function PlayerProfile(props) {
    return (
        <>
            <div className="min-w-full p-4 rounded-lg bg-gray-100 flex overflow-hidden justify-between">
                <div className="flex gap-5 items-center">
                    <img className="h-14" alt="teamIco" src={props.teamLogo}></img>
                    <div className="flex flex-col">
                        <div className="text-3xl font-medium leading-snug">{props.teamName}</div>
                        <div className="text-lg font-medium text-[#6d6a7f] leading-snug">{props.teamNation}</div>
                    </div>
                </div>
                <div className="flex gap-2 items-end flex-col">
                    <span className="w-fit bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded border border-amber-400 flex text-end">{props.teamVenueName} </span>
                    <span className="w-fit bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded border border-orange-400 flex text-end">{props.teamVenueCity}</span>
                </div>
            </div>
        </>
    )
}

export default PlayerProfile