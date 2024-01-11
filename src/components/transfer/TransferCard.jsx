function TransferCard(props) {
    const playerData = props.playerData

    return (
        <div className="p-4 rounded-lg w-full bg-gray-100 flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="text-base font-medium text-center leading-snug">{playerData?.name}</div>
                <div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded border border-indigo-400 capitalize">{playerData.position.label}</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col text-center gap-2">
                    <img className="h-10 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${playerData?.fromClubId}.png` || ""} alt="teamLogo" />
                </div>
                <div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400 capitalize">
                        {playerData.fee.value ? playerData.fee.value : (playerData.fee.feeText === "on loan" ? "Loan" : playerData.fee.feeText)}
                    </span>
                </div>
                <div className="flex flex-col text-center gap-2">
                    <img className="h-10 object-contain" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${playerData?.toClubId}.png` || ""} alt="teamLogo" />
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-xs font-medium text-[#6d6a7f]">{playerData?.fromClub}</div>
                <div className="text-xs font-medium text-[#6d6a7f]">{playerData?.toClub}</div>
            </div>
        </div>
    );
}

export default TransferCard;
