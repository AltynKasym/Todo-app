import React from "react";
import { Tabs, Box, Tab, TabList } from "@mui/material";
import { TabPanel } from "@mui/lab";
// import {  } from "@mui/material/tab";

function Main() {
  return (
    <div>
      Main
      <Tabs
        // value={value}
        // onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Monday" wrapped />
        <Tab value="two" label="Tuesday" />
        <Tab value="three" label="Thursday" />
      </Tabs>
      <TabPanel value={"one"} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={"two"} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={"three"} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default Main;
