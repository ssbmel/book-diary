import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import LoginHome from "./login-signup/LoginHome";

const Router = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/loginhome" element={<LoginHome/>}/>
        </Routes>
      </BrowserRouter>
  );

};

export default Router;