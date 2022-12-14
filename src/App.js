import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./css/Main.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
// import Footer from "./components/Footer";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page02 from "./pages/Page02";
import Page01 from "./pages/Page01";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";
import Open from "./pages/Open";
import Today from "./pages/Today";
import Window from "./pages/Window";
import New from "./pages/New";
import WideAngle from "./pages/WideAngle";
import Gonglo from "./pages/Gonglo";
import Actor from "./pages/Actor";
import WinnerList from "./pages/WinnerList";
import Asia from "./pages/Asia";
import Detail from "./pages/Detail";
import { movies } from "./data";

const App = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(movies);
  }, []);

  console.log(movies);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main item={item} />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />}>
          <Route path="" element={<Asia />} />
          <Route path="gonlo" element={<Gonglo />} />
          <Route path="actor" element={<Actor />} />
          <Route path="winnerList" element={<WinnerList />} />
        </Route>
        <Route path="/page03" element={<Page03 />}>
          <Route path="" element={<Open />} />
          <Route path="today" element={<Today />} />
          <Route path="window" element={<Window />} />
          <Route path="new" element={<New />} />
          <Route path="wideAngle" element={<WideAngle />} />
        </Route>
        <Route path="/page04" element={<Page04 />} />
        <Route path="/page05" element={<Page05 />} />
        <Route path="/page06" element={<Page06 />} />
        <Route path="/detail/:id" element={<Detail item={item} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
