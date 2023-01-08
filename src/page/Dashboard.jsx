import React, { useEffect } from "react";
import KanbanGroup from "../components/Kanban/KanbanGroup";
import { useDispatch, useSelector } from "react-redux";
import { selectKanban, getTodosApi } from "../slices/kanbanSlice";

const kanBanColor = [
  ["bg-cardPrimary", "border-borderPrimary", "text-primary"],
  ["bg-cardSecondary", "border-borderSecondary", "text-secondary"],
  ["bg-cardDanger", "border-borderDanger", "text-danger"],
  ["bg-cardSuccess", "border-borderSuccess", "text-success"],
];

const generateKanbanGroup = (kanbanTodos, kanbanColor) => {
  return kanbanTodos.map((item, index) => {
    return (
      <KanbanGroup
        kanbanColor={kanbanColor[index % kanbanColor.length]}
        key={index}
        {...item}
      />
    );
  });
};

const Dashboard = () => {
  const kanban = useSelector(selectKanban);
  const dispatch = useDispatch();

  console.log(kanban);

  useEffect(() => {
    dispatch(getTodosApi());
  }, [dispatch]);

  return (
    <div className=" flex flex-col w-full h-full overflow-x-auto">
      <div className="flex h-full w-full mx-6 space-x-4">
        {generateKanbanGroup(kanban.todos, kanBanColor)}
      </div>
    </div>
  );
};

export default Dashboard;
