import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./Component/loading/Loading";

const Header = React.lazy(() => import("./Component/Header/Header"));
const Profile = React.lazy(() => import("./Component/profile/Profile"));
const MoneyAdd = React.lazy(() => import("./Component/AddMoney/MoneyAdd"));
const Footer = React.lazy(() => import("./Component/Footer/Footer"));
const Home = React.lazy(() => import("./Component/Home/Home"));
const ReceivePayment = React.lazy(() =>
  import("./Component/receive/ReceivePayment")
);
const Register = React.lazy(() => import("./Component/Register/Register.js"));
const Signin = React.lazy(() => import("./Component/Signin/Signin"));
const Slider = React.lazy(() => import("./Component/slider/Slider"));
const IntroPage = React.lazy(() => import("./Component/intro/IntroPage"));
const Error404 = React.lazy(() => import("./Component/error/Error404"));
const HeaderLog = React.lazy(() => import("./Component/Header/HeaderLog"));
const AboutUs = React.lazy(() => import("./Component/aboutUs/AboutUs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={Error404} />
        <Suspense fallback={<Loading />}>
          <Header />
          
          {sessionStorage.getItem("token") ? (
            <div>
              <Routes>
              <Route path="*" element={<Error404 />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Slider" element={<Slider />} />
                <Route path="/ReceivePayment" element={<ReceivePayment />} />
                <Route path="/MoneyAdd" element={<MoneyAdd />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/IntroPage" element={<IntroPage />} />
              </Routes>
             
            </div>
          ) : (
            <div>
              <Routes>
               <Route path="/Home" element={<Home />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<IntroPage />} />
                <Route path="/IntroPage" element={<IntroPage />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Error" element={<Error404 />} />
                <Route path="/Aboutus" element={<AboutUs />} />
              </Routes>
            </div>
          )}
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
