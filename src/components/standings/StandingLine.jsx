import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function StandingLine(props) {
    const getBorderClass = (rank) => {
        if (rank <= 4) {
            return "border-4 border-green-500";  
        } else if (rank <= 6) {
            return "border-4 border-blue-500";
        } else if (rank >= 18){
            return "border-4 border-red-500";
        } else {
            return "border-2 border-[#6d6a7f]";
        }
    };

    return (
        <Link to={"/team/" + (props.teamId)}>
            <div className="flex justify-between">
                <div className="flex gap-3 items-center basis-6/12">
                    <div className="font-medium text-sm text-end">{props.index}</div>
                    <div className={`w-2 h-2 rounded-full ${getBorderClass(props.index)}`}></div>
                    <img className="h-7 object-fit" src={`https://images.fotmob.com/image_resources/logo/teamlogo/${props.teamId}.png`} alt="teamLogo" />
                    <div className="text-sm font-medium">{props.shortName}</div>
                </div>
                <div className="flex items-center basis-5/12 text-end">
                    <div className="text-sm text-[#6d6a7f] basis-4/12 lg:block lg:basis-2/12">{props.teamPlayed}</div>
                    <div className="text-sm text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">{props.teamWins}</div>
                    <div className="text-sm text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">{props.teamDraws}</div>
                    <div className="text-sm text-[#6d6a7f] basis-4/12 hidden lg:block lg:basis-2/12">{props.teamLose}</div>
                    <div className="text-sm text-[#6d6a7f] basis-4/12 lg:block lg:basis-2/12">{props.teamDR}</div>
                    <div className="text-sm font-medium basis-4/12 lg:block lg:basis-2/12">{props.teamPoints}</div>                
                </div>
            </div>
        </Link>
    );
}

export default StandingLine;
