export let overviewData = [
  {
    TaskId: "1",
    TaskName: "Campaign A",
    Priority: "High",
    StartDate: new Date("2023/12/20"),
    EndDate: new Date("2024/04/04"),
    TimeLog: 2,
    Progress: 80,
    Status: "In Progress",
  },
  {
    TaskId: "2",
    TaskName: "Content Writter",
    Priority: "Critical",
    Assignee: [1],
    TimeLog: 12,
    Work: 45,
    Progress: 100,
    Status: "Completed",
    ParentId: 1,
    Predecessor: "8FS",
    Component: "Grid"
  },
  {
    TaskId: "3",
    TaskName: "Design Generator",
    Priority: "Normal",
    Component: "Grid",
    ParentId: 1,
  },
  {
    TaskId: "4",
    TaskName: "Marketing Channel",
    Priority: "Low",
    ParentId: 1,
  },
  {
    TaskId: "5",
    TaskName: "Landing Page",
    ParentId: 4,
  },
  {
    TaskId: "6",
    TaskName: "Email",
    ParentId: 4,
  },
  {
    TaskId: "7",
    TaskName: "Social Media",
    ParentId: 4,
  },
  {
    TaskId: "8",
    TaskName: "Advertising",
    ParentId: 4,
  },
  //   {
  //     TaskId: "4",
  //     TaskName: "Grid",
  //     StartDate: new Date("2023/12/20"),
  //     EndDate: new Date("2024/02/20"),
  //     TimeLog: 44,
  //     Progress: 70,
  //     ParentId: 3,
  //   },
  //   {
  //     TaskId: "5",
  //     TaskName: "Batch Editing",
  //     StartDate: new Date("2023/12/24"),
  //     EndDate: new Date("2024/02/21"),
  //     Assignee: [1],
  //     TimeLog: 42,
  //     Progress: 100,
  //     Status: "Completed",
  //     ParentId: 4,
  //     Priority: "High",
  //     Component: "Grid",
  //   },
  //   {
  //     TaskId: "6",
  //     TaskName: "PDF Export",
  //     StartDate: new Date("2023/12/28"),
  //     EndDate: new Date("2024/02/25"),
  //     Assignee: [2],
  //     TimeLog: 42,
  //     Progress: 10,
  //     Status: "On Hold",
  //     ParentId: 4,
  //     Priority: "Normal",
  //     Component: "Grid",
  //   },
  //   {
  //     TaskId: "7",
  //     TaskName: "Tree Grid",
  //     StartDate: new Date("2024/01/02"),
  //     EndDate: new Date("2024/02/20"),
  //     TimeLog: 33,
  //     Progress: 80,
  //     ParentId: 3,
  //   },
  //   {
  //     TaskId: "8",
  //     TaskName: "Drag Multi-selection",
  //     StartDate: new Date("2024/01/02"),
  //     EndDate: new Date("2024/02/20"),
  //     Assignee: [4],
  //     TimeLog: 33,
  //     Progress: 100,
  //     Status: "Completed",
  //     ParentId: 7,
  //     Priority: "Critical",
  //     Component: "Tree Grid",
  //   },
  //   {
  //     TaskId: "9",
  //     TaskName: "Gantt Chart",
  //     StartDate: new Date("2024/02/20"),
  //     EndDate: new Date("2024/04/28"),
  //     TimeLog: 2,
  //     Progress: 100,
  //     ParentId: 3,
  //   },
  //   {
  //     TaskId: "10",
  //     TaskName: "Initial loading performance",
  //     StartDate: new Date("2024/02/24"),
  //     EndDate: new Date("2024/03/14"),
  //     Assignee: [1],
  //     TimeLog: 13,
  //     Progress: 35,
  //     Status: "In Progress",
  //     ParentId: 9,
  //     Priority: "Low",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "11",
  //     TaskName: "Drag Multi-selection",
  //     StartDate: new Date("2024/02/22"),
  //     EndDate: new Date("2024/03/14"),
  //     Assignee: [8],
  //     TimeLog: 13,
  //     Progress: 100,
  //     Predecessor: "8FS",
  //     Status: "Completed",
  //     ParentId: 9,
  //     Priority: "Normal",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "12",
  //     TaskName: "ScrollToViewAsync Method",
  //     StartDate: new Date("2024/02/20"),
  //     EndDate: new Date("2024/03/10"),
  //     Assignee: [1],
  //     TimeLog: 13,
  //     Progress: 100,
  //     Status: "Completed",
  //     ParentId: 9,
  //     Priority: "High",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "13",
  //     TaskName: "ScrollToTimelineAsync Method",
  //     StartDate: new Date("2024/02/20"),
  //     EndDate: new Date("2024/03/10"),
  //     Assignee: [4],
  //     TimeLog: 13,
  //     Progress: 40,
  //     Status: "On Hold",
  //     ParentId: 9,
  //     Priority: "Normal",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "14",
  //     TaskName: "ScrollToTaskbarAsync Method",
  //     StartDate: new Date("2024/03/10"),
  //     EndDate: new Date("2024/03/25"),
  //     Assignee: [1],
  //     TimeLog: 11,
  //     Progress: 100,
  //     Status: "Completed",
  //     ParentId: 9,
  //     Priority: "Critical",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "15",
  //     TaskName: "Web Accessibility",
  //     StartDate: new Date("2024/03/10"),
  //     EndDate: new Date("2024/03/25"),
  //     Assignee: [4],
  //     TimeLog: 11,
  //     Progress: 35,
  //     Status: "On Hold",
  //     ParentId: 9,
  //     Priority: "Normal",
  //     Component: "Gantt Chart",
  //   },
  //   {
  //     TaskId: "16",
  //     TaskName: "Testing",
  //     ParentId: 3,
  //   },
  //   {
  //     TaskId: "17",
  //     TaskName: "Phase-1",
  //     StartDate: new Date("2024/03/20"),
  //     EndDate: new Date("2024/03/24"),
  //     Progress: 0,
  //     ParentId: 16,
  //   },
  //   {
  //     TaskId: "18",
  //     TaskName: "Phase-2",
  //     StartDate: new Date("2024/03/22"),
  //     EndDate: new Date("2024/03/26"),
  //     Progress: 0,
  //     Predecessor: "17FS",
  //     ParentId: 16,
  //   },
  //   {
  //     TaskId: "19",
  //     TaskName: "Testing Completion",
  //     StartDate: new Date("2024/03/27"),
  //     TimeLog: 0,
  //     ParentId: 3,
  //   },
  //   {
  //     TaskId: "20",
  //     TaskName: "Release Roll-out",
  //     StartDate: new Date("2024/04/04"),
  //     TimeLog: 0,
  //     ParentId: 2,
  //   },
];
