import React from "react";
import JoinCard from "./JoinCard";
import joinIcon from "../../assets/joinIcon.png";
import socialWorker from "../../assets/socialWorker.png";
import student from "../../assets/student.png";
import professor from "../../assets/professor.png";

const WhoCanJoin = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-500 mb-6">Who can join us?</h2>
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      <div className="flex justify-center mb-12">
        <img src={joinIcon} alt="Join Icon" className="h-60 w-60" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <JoinCard
          img={socialWorker}
          title="Social Worker"
          text="We always believe that building a forest is much better than building a tree, and so the social workers."
        />
        <JoinCard
          img={student}
          title="College Student"
          text="College Students like Ram, who instead of blaming governments want..."
        />
        <JoinCard
          img={professor}
          title="College Professor"
          text="If you are a College Professor who thinks that your students should get opportunity..."
        />
      </div>
    </div>
  );
};

export default WhoCanJoin;
