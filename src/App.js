import React from "react";
import "./App.css";
import DashBoardwithoutLogin from "./components/DashBoardWithoutLogin/DashBoardwithoutLogin";
import { Routes, Route } from "react-router-dom";

import { OAuthProvider } from "firebase/auth";
import Blog from "./components/Routes/Blog/Blog";
import Events from "./components/Routes/Events/Events";
import Team from "./components/Routes/Team/Team";
import Newsletter from "./components/Routes/Newsletter/NewsLetter";
import ContactUs from "./components/Routes/ContactUs/ContactUs";

const provider = new OAuthProvider("microsoft.com");

provider.setCustomParameters({
  // Optional "tenant" parameter in case you are using an Azure AD tenant.
  // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
  // or "common" for tenant-independent tokens.
  // The default value is "common".
  tenant: "6d28e4fb-9074-4a0b-a5b8-9a89f632cc60",
});

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<DashBoardwithoutLogin />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/newsletter" exact element={<Newsletter />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
