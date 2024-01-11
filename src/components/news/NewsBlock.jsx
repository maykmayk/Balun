function NewsBlock(props) {
    const newsData = props.newsData
    const colorTeam= props.colorTeam

    return (
        <>
        <a href={newsData?.page?.url} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col rounded-lg bg-gray-100 w-100">
                <div className="flex h-48 relative">
                    <img src={newsData.imageUrl} className="h-30 w-100 object-cover rounded-lg"></img>
                    <div className="absolute bottom-0 end-0 p-4">
                        {/* <span className={`w-fit ${props.colorTeam && `bg-[${props.colorTeam}] text-[${props.colorTeam}] border-[${props.colorTeam}]`} text-xs font-medium px-2.5 py-0.5 rounded border flex text-end`}>{newsData.sourceStr}</span> */}
                        <span className="w-fit bg-orange-100 text-orange-800 border-orange-400 text-xs font-medium px-2.5 py-0.5 rounded border flex text-end">{newsData.sourceStr}</span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-base font-medium">{newsData.title}</div>
                </div>
            </div>
        </a>
        </>
    )
}

export default NewsBlock