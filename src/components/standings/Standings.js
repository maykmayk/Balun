import React, { useEffect, useState } from "react";
import StandingLine from "./StandingLine";
import ProvaApi from "../../api/ProvaApi";

function Standings(props) {
    const apiProva = new ProvaApi();
    const [standingData, setStandingData] = useState([]);
    const [leagueData, setLeagueData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (props.id) {
                    const responseProva = await apiProva.makeRequest(`api/tltable?leagueId=${props.id}`);
                    setStandingData(responseProva.data[0].data.table.all);
                    setLeagueData(responseProva.data[0].data);
                } else {
                    const responseFromSquad = props.responseTable;
                    setStandingData(responseFromSquad?.table?.[0]?.data.table?.all);
                    setLeagueData(responseFromSquad.table?.[0]?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, [props.id, props.responseTable]);

    return (
        <>
        {standingData && <div className="flex flex-col gap-5 p-4 rounded-lg bg-gray-100 w-auto">
            <div className="fixed flex justify-between relative">
                <div className="flex gap-5 items-center basis-6/12">
                <img className="h-8 w-8 object-contain" src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${leagueData?.leagueId}.png`} alt="leagueIcon" />
                    <div className="text-xl font-medium">{leagueData?.leagueName || "sdasfas A"}</div> 
                </div>
                <div className="flex items-center basis-5/12 text-end">
                    <div className="text-[#6d6a7f] basis-4/12 lg:block lg:basis-2/12">P</div>
                    <div className="text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">W</div>
                    <div className="text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">D</div>
                    <div className="text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">L</div>
                    <div className="text-[#6d6a7f] basis-4/12 lg:block lg:basis-2/12">GD</div>
                    <div className="font-medium basis-4/12 lg:block lg:basis-2/12">PT</div>
                </div>
            </div>
            <div className="max-h-96 overflow-y-auto flex flex-col gap-8">
                {standingData?.map((team, index) => (
                    <StandingLine
                        key={index}
                        index={team.idx}
                        shortName={team.shortName}
                        teamWins={team.wins}
                        teamDraws={team.draws}
                        teamLose={team.losses}
                        teamPoints={team.pts}
                        teamPlayed={team.played}
                        teamId={team.id}
                        teamDR={team.goalConDiff}
                    />
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full border-4 border-green-500"></div>
                    <div className="text-sm text-[#6d6a7f]">Champions League</div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full border-4 border-blue-500"></div>
                    <div className="text-sm text-[#6d6a7f]">Europa League</div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full border-4 border-red-500"></div>
                    <div className="text-sm text-[#6d6a7f]">Relegation</div>
                </div>
            </div>
        </div> }
        </>
    )
}

export default Standings;
