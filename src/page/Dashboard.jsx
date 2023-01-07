import React from "react";
import KanbanGroup from "../components/Kanban/KanbanGroup";

const kanBanColor = [
  ["bg-cardPrimary", "border-borderPrimary"],
  ["bg-cardSecondary", "border-borderSecondary"],
  ["bg-cardDanger", "border-borderDanger"],
  ["bg-cardSuccess", "border-borderSuccess"],
];

const totalKanbanGroup = Array(4).fill(0);

const generateKanbanGroup = (kanbanColor) => {
  return totalKanbanGroup.map((_, index) => {
    return (
      <KanbanGroup
        kanbanColor={kanbanColor[index % kanbanColor.length]}
        key={index}
      />
    );
  });
};

const Dashboard = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex flex-nowrap overflow-x-auto mx-6 space-x-4">
        {generateKanbanGroup(kanBanColor)}
      </div>
    </div>
  );
};

export default Dashboard;
