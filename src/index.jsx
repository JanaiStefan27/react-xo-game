import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import GameBoardPage from "./pages/game-board.page";
import GameMenuPage from "./pages/game-menu.page";
import RegisterPage from "./pages/register.page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Tip: It provides specific hooks and data global accessible within children components */}
    <BrowserRouter>
      {/* Tip: The Routes must be parent of any set of routes */}
      <Routes>
        {/* Tip: The Toure helps us to create a page */}
        <Route index={true} element={<RegisterPage />} />
        {/* Tip: nested routes helps use to group pages under specifi prefixes */}
        <Route path="/game">
          {/* Tip: We can acces the page under "/game/menu" */}
          <Route path="menu" element={<GameMenuPage />} />
          <Route path="board" element={<GameBoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
