function MatchCard(props) {
    const data = new Date(props.date);
    const mese = ("0" + (data.getMonth() + 1)).slice(-2); 
    const giorno = ("0" + data.getDate()).slice(-2);
    const dataFormattata = `${mese}/${giorno}`;

    return (
        <div className="p-4 rounded-lg w-full bg-gray-100">
            <div className="flex justify-between">
                <div className="flex flex-col text-center gap-2 relative">
                    <img className="h-10 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${props.homeTeamLogo}.png` || ""} alt="teamLogo" />
                    <div className="text-xs font-medium">{props.homeTeamName}</div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    {props.started === false ? (
                        <>
                            <div className="text-lg font-medium">{props.resultStr}</div>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400">{props.status}</span>
                        </>
                    ) : (
                        <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded border border-pink-400">{dataFormattata}</span>
                    )}
                    
                </div>
                <div className="flex flex-col text-center gap-2">
                    <img className="h-10 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${props.awayTeamLogo}.png` || ""} alt="teamLogo" />
                    <div className="text-xs font-medium">{props.awayTeamName}</div>
                </div>
            </div>
            
        </div>
    )
}

export default MatchCard