import React, { useState } from "react";
import Skill from "./Skill";

export default function AboutMe() {
  const [showInformation, setShowInformation] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);
  const [detail, setDetail] = useState([
    {
      id: 1,
      topic: "Know about Me",
      explain:
        "I'm Pook, now I'm 26 years old. I'm one of who is coding passionate and I'm'willing to learn everthing to achivev my personal goal to become a software developer.",
    },
    {
      id: 2,
      topic: "My Education",
      explain: (
        <>
          <div className="mb-5">
            <p className="font-bold">
              Bachelor of Arts program in Chinese Language and Culture - Mae Fah
              Luang University
            </p>
            <p>Period: Aug 2016- May 2022</p>
          </div>
          <div>
            <p className="font-bold">
              Junoir Software Developer - Generation Thailand (JSD8)
            </p>
            <p>Period: Sep 2024 - Dec 2024</p>
          </div>
        </>
      ),
    },
    {
      id: 3,
      topic: "Working Experience",
      explain: (
        <>
          <div className="mb-5">
            <p className="font-bold">
              Quality Engineer (Electronic team) : SAIC Motor – CP Co., Ltd.
            </p>
            <p className="font-bold">Period : May 2021 - March 2023</p>
            <ul className="list-disc list-inside">
              <li>
                Take respond Electrical product which were supplied from
                supplier such as HVAC , Headlamp , BCM . Cluster , Car module.{" "}
              </li>
              <li>Control supplier product quality to within standard</li>
              <li>
                Audit supplier , review supplier process and supplier
                performance of each quarter.
              </li>
              <li>Solving problem at 0KM or after market complaint</li>
              <li>
                Cooperate with SQE China team to find solution about car problem
                and new project support.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">
              Project Procurement (AIS team) : Huawei Technologies Co., Ltd.
            </p>
            <p className="font-bold">Period : Dec 2023 - Sep 2024</p>
            <ul className="list-disc list-inside">
              <li>
                Do subcontract selection within Huawei regulation (subcontract
                bidding process).
              </li>
              <li>
                Cooperate with subcontract to provide the Huawei working process
                such as acceptance , target plan form customer and others.
              </li>
              <li>
                finding new installation team and subcontract to increase more
                resource.
              </li>
              <li>
                Organize subcontract training process , manage the training plan
                to let them get training and all certificate within onboard
                date. certificates include Huawei training and third party
                training.
              </li>
              <li>
                Cooperate with project team to follow up the installation
                progression.
              </li>
              <li>
                Respond PO approving process for project team/subcontract.
              </li>
              <li>Cost analysis for new working scope</li>
            </ul>
          </div>
        </>
      ),
    },
  ]);

  const handleAboutMe = () => {
    setCurrentDetail(detail[0]);
    setShowInformation(true);
  };

  const handleEducation = () => {
    setCurrentDetail(detail[1]);
    setShowInformation(true);
  };

  const handleWorkingExperience = () => {
    setCurrentDetail(detail[2]);
    setShowInformation(true);
  };

  return (
    <>
      <div className="bg-[#6e07f4] text-white pb-48 font-kode-mono">
        <div>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-2xl text-center mt-5 text-white">
              {currentDetail ? currentDetail.topic : detail[0].topic}
            </h1>
            <div className="h-80 w-full overflow-auto">
              <p className="ml-20 text-lg">
                {currentDetail ? currentDetail.explain : detail[0].explain}
              </p>
            </div>
          </div>
          <div className="text-center mb-15 mt-10">
            <button
              onClick={handleAboutMe}
              className="h-7 w-7  bg-white rounded-full inline-block hover:border border-pink-500 hover:scale-150 duration-150"
            ></button>
            <button
              onClick={handleEducation}
              className="h-7 w-7 ml-4 bg-white rounded-full inline-block hover:border border-pink-500 hover:scale-150 duration-150"
            ></button>
            <button
              onClick={handleWorkingExperience}
              className="h-7 w-7 ml-4 bg-white rounded-full inline-block hover:border border-pink-500 hover:scale-150 duration-150"
            ></button>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
}
