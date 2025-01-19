import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./pages/MainLayout";

import "typeface-inter";
import "typeface-poppins";
import NotFound from "./components/request/NotFound";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
