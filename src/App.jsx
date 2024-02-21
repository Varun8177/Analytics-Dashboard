import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex max-h-screen min-h-screen w-full bg-[#242424]">
            <NavigationBar />
            <Container />
          </div>
        }
      />
    </Routes>
  );
}
