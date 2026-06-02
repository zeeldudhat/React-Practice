import React, { useEffect, useState } from "react";

  function Increment(count, setcount) {
    console.log(count);
    setcount(count + 1);
  }

export default Increment ;