import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Teams.module.css";
// import Trenure from './Trenure.js'
import President from "./President.js";
import SSCOM from "./SSCOM.js";
import SeniorCoordinators from "./SeniorCoordinators.js";
import Governors from "./Governor.js";
import ExecutiveHeads from "./ExecutiveHead.js";
import MediaPublicityHead from "./MediaPublicityHead.js";
import FinanceHead from "./FinanceHead.js";
import StudentsWelfareHead from "./StudentsWelfareHead.js";
import EventsHead from "./EventsHead.js";
import LogisticsHead from "./LogisticsHead.js";
import WebHead from "./WebHead.js";
import SEM from "./SEM.js";
import JEM from "./JEM.js";

import { getYearData } from "./Team.js";

const Teams = () => {
  const [searchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState(
    searchParams.get("year") || "2025-26",
  );

  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const year = searchParams.get("year") || "2025-26";
    setSelectedYear(year);
    // Fetch team data for the selected year
    fetchTeamData(year);
  }, [searchParams]);

  const fetchTeamData = (year) => {
    //API call or data fetching logic here
    // Get data for the selected year
    const data = getYearData(year);
    setTeamData(data);
    console.log("Fetching data for year:", year);
  };

  if (!teamData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.teams}>
      <div className={styles.title}>
        <h2>Tenure {selectedYear}</h2>
      </div>
      {/* <div className={styles.trenure}>
                <Trenure/>
            </div> */}
      <President data={teamData} />
      <SSCOM data={teamData}/>
      <SeniorCoordinators data={teamData} />
      <Governors data={teamData} />
      <ExecutiveHeads data={teamData} />
      <MediaPublicityHead data={teamData} />
      <FinanceHead data={teamData} />
      <StudentsWelfareHead data={teamData} />
      <EventsHead data={teamData} />
      <LogisticsHead data={teamData} />
      <WebHead data={teamData} />
      <SEM data={teamData} />
      <JEM data={teamData} />
    </div>
  );
};

export default Teams;
