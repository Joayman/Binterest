import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Feed, BinDetail, CreateBin, Search } from "../components";

const Bins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/bin-detail/:binId" element={<BinDetail user={user && user} />} />
          <Route path="/create-bin" element={<CreateBin user={user && user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Bins;
