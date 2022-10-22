import React from "react";
import Masonry from "react-masonry-css";

import Bin from "./Bin";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  900: 2,
  500: 1,
}

const MasonryLayout = ({ bins }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {bins?.map((bin) => <Bin key={bin._id} bin={bin} className="w-max" />)}
    </Masonry>
  )
};

export default MasonryLayout;
