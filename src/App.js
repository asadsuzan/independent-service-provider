import { Route, Routes } from "react-router-dom";
import WellcomeMsg from "./Components/WellcomeMsg/WellcomeMsg";

import About from "./Pages/About/About";
import Login from "./Pages/Authentication/Login/Login";
import Requreauth from "./Pages/Authentication/Requreauth/Requreauth";
import Resetauth from "./Pages/Authentication/Resetauth/Resetauth";
import Signup from "./Pages/Authentication/Signup/Signup";
import Socialauth from "./Pages/Authentication/Socialauth/Socialauth";
import Blog from "./Pages/Blog/Blog";
import Cheackout from "./Pages/Cheackout/Cheackout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Sheared/Footer/Footer";
import Header from "./Pages/Sheared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/social" element={<Socialauth />}></Route>
        <Route path="/reset_password" element={<Resetauth />}></Route>
        <Route path="wellcome" element={<WellcomeMsg />}></Route>
        <Route
          path="/cheackout"
          element={
            <Requreauth>
              <Cheackout />
            </Requreauth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
