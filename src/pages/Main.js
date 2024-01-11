import SideBar from "../components/SideBar/Sidebar";
import Standings from "../components/standings/Standings";

const Main = () => {
	return (
		<>
			<SideBar />
			<div className="text-black flex flex-col p-4 sm:ml-64 gap-3">
				<div className="flex flex-col md:flex-row gap-3 w-100">	
					<div className="w-100">
						<Standings id={55} />
					</div>
					<div className="w-100">
						<Standings id={87} />
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-3 w-100">	
					<div className="w-100">
						<Standings id={54} />
					</div>
					<div className="w-100">
						<Standings id={47} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
