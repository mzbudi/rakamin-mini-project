import React from "react";
import KanbanGroup from "../components/Kanban/KanbanGroup";

const kanBanColor = [
  ["bg-cardPrimary", "border-borderPrimary", "text-primary"],
  ["bg-cardSecondary", "border-borderSecondary", "text-secondary"],
  ["bg-cardDanger", "border-borderDanger", "text-danger"],
  ["bg-cardSuccess", "border-borderSuccess", "text-success"],
];

const totalKanbanGroup = Array(6).fill(0);

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
    <div className=" flex flex-col w-full h-full overflow-x-auto">
      <div className="flex h-full w-full mx-6 space-x-4">
        {generateKanbanGroup(kanBanColor)}
      </div>
    </div>
  );
};

export default Dashboard;
