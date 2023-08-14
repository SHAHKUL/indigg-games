import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./TournamentComponent/Create";
import View from "./TournamentComponent/View";
import Edit from "./TournamentComponent/Edit";

import Teams from "./Teams";
import Createteam from "./TeamComponent/Createteam";
import Editteam from "./TeamComponent/Editteam";
import Viewteam from "./TeamComponent/Viewteam";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/teams/:id" element={<Teams />} />
          <Route path="/teams/:id/create" element={<Createteam />} />
          <Route path="/teams/:id/edit/:id" element={<Editteam />} />
          <Route path="/teams/:id/view/:id" element={<Viewteam />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
