import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import { GamePage } from "./pages/game-page/game-page";
import { OrderPage } from "./pages/order-page/order-page";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/games/:title" element={<GamePage />} />
        </Routes>
      </div>
  );
}

export default App;