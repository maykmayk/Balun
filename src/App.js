import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import TeamDetail from "./pages/TeamDetail"
import Matches from "./pages/Matches"
import PlayerDetail from "./pages/PlayerDetails"

function App() {
    return (
        <>
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/team/:id" exact element={<TeamDetail />} />
				<Route path="/player/:id" exact element={<PlayerDetail />} />
				<Route path="/matches/" exact element={<Matches />} />
			</Routes>
        </>
    )
}

export default App