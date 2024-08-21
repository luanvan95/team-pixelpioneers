export const overviewData = [
  {
    TaskId: 1,
    TaskName: "Campaign A",
    StartDate: new Date(),
    Progress: 0,
    Priority: "High",
    Assignee: [],
    SubTasks: [
      {
        TaskId: "cw",
        TaskName: "Content Write",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 2,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Progress: 0,
        SubTasks: [
          {
            TaskId: "cw_1",
        AIGenerator: true,
        TaskName: "Preparation",
            Assignee: [],
            Duration: 2,
            Progress: 0,
            Predecessor: "",
            Editable: true,
          },
          {
            TaskId: "cw_2",
            TaskName: "Review Content",
            Duration: 0,
            Progress: 0,
            Predecessor: "cw_1",
            Editable: false,
          },
        ],
      },
      {
        TaskId: "dc",
        TaskName: "Design Creation",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 2,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Assignee: [],
        Progress: 0,
        Predecessor: "cw_2",
        SubTasks: [
          {
            TaskId: "dc_1",
            TaskName: "Preparation",
            Duration: 6,
            Progress: 0,
            Predecessor: "dc",
          },
          {
            TaskId: "dc_2",
            TaskName: "Review Content",
            Duration: 0,
            Progress: 0,
            Predecessor: "dc_1",
          },
        ],
      },
      {
        TaskId: "mc",
        TaskName: "Marketing Channel",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 2,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Assignee: [],
        Progress: 0,
        Predecessor: "dc_2",
        SubTasks: [
          {
            TaskId: "mc_landing",
            TaskName: "Landing Page",
            Duration: 5,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Email",
            Duration: 5,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Social Media",
            Duration: 5,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Advertising",
            Duration: 5,
            Progress: 0,
            Predecessor: "",
          },
        ],
      },
    ],
  },
];

export let overviewAIData = [
  {
    TaskId: 1,
    TaskName: "Campaign B",
    StartDate: new Date(),
    Progress: 0,
    Priority: "High",
    Assignee: [0],
    SubTasks: [
      {
        TaskId: "cw",
        TaskName: "Content Write",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 1,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Progress: 0,
        SubTasks: [
          {
            TaskId: "cw_1",
            TaskName: "Preparation",
            Assignee: [],
            Duration: 1,
            Progress: 0,
            Predecessor: "",
            Editable: true,
          },
          {
            TaskId: "cw_2",
            TaskName: "Review Content",
            Duration: 0,
            Progress: 0,
            Predecessor: "cw_1",
            Editable: false,
          },
        ],
      },
      {
        TaskId: "dc",
        TaskName: "Design Creation",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 1,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Assignee: [],
        Progress: 0,
        // Predecessor: "cw_2",
        SubTasks: [
          {
            TaskId: "dc_1",
            TaskName: "Preparation",
            Duration: 1,
            Progress: 0,
            Predecessor: "dc",
          },
          {
            TaskId: "dc_2",
            TaskName: "Review Content",
            Duration: 0,
            Progress: 0,
            Predecessor: "dc_1",
          },
        ],
      },
      {
        TaskId: "mc",
        TaskName: "Marketing Channel",
        AIGenerator: true,
        Duration: 0,
        TimeLog: 1,
        Progress: 0,
        Status: "In Progress",
        Priority: "High",
        Assignee: [],
        Progress: 0,
        Predecessor: "cw_2,dc_2",
        SubTasks: [
          {
            TaskId: "mc_landing",
            TaskName: "Landing Page",
            Duration: 1,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Email",
            Duration: 1,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Social Media",
            Duration: 1,
            Progress: 0,
            Predecessor: "",
          },
          {
            TaskId: "mc_landing",
            TaskName: "Advertising",
            Duration: 1,
            Progress: 0,
            Predecessor: "",
          },
        ],
      },
    ],
  },
];
