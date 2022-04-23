import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./MyMap";

const MyTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Zuhause</Tab>
          <Tab>Schule</Tab>
          <Tab>Urlaub</Tab>
          <Tab>Stadt</Tab>
        </TabList>
        <TabPanel>
          <h2>Mein Zuhause</h2>
          <MyMap lat={52.028458387206676} lng={8.900880007418227} />
        </TabPanel>
        <TabPanel>
          <h2>Uni Bielefeld</h2>
          <MyMap lat={52.03754216697302} lng={8.493674899995893} />
        </TabPanel>
        <TabPanel>
          <h2>Urlaub in Guatemala</h2>
          <MyMap lat={16.93029434090523} lng={-89.89117685011331} />
        </TabPanel>
        <TabPanel>
          <h2>Singhapur - Stadt in Südostasien</h2>
          <MyMap lat={1.3213836948833217} lng={103.8878579436948} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyTabs;

