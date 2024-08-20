import * as React from "react";
import {
  GanttComponent,
  DayMarkers,
  Inject,
  Edit,
  Selection,
  Toolbar,
  ColumnsDirective,
  ColumnDirective,
  EventMarkersDirective,
  EventMarkerDirective,
  HolidaysDirective,
  HolidayDirective,
  ColumnMenu,
  Filter,
  Sort,
  Resize,
  RowDD,
  EditDialogFieldDirective,
  EditDialogFieldsDirective,
} from "@syncfusion/ej2-react-gantt";
import { overviewData } from "@/data/overviewData";
import { editingResources } from "@/data/resourcesData";
import { DropDownList } from "@syncfusion/ej2-react-dropdowns";
import { registerLicense } from "@syncfusion/ej2-base";

import { useEffect } from "react";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVJ+WmFZfVpgdVdMZF9bR3dPMyBoS35RckVrWHZecHBWRWJfUUZ0"
);

const Overview = () => {
  let CurrentTheme = true;
  let statusStyleColor;
  let priorityStyle;
  let priorityContentStyle;
  let statusContentstyleColor;
  let display;
  let padding;
  let gap;
  let width;
  let height;
  let background;
  let borderRadius;
  let color;
  let fontStyle;
  let fontWeight;
  let fontSize;
  let lineHeight;
  let textAlign;
  let backgroundColor;
  let backgroundPri;
  let pad;

  const dataList = [
    { ID: "Default", Text: "Default" },
    { ID: "Grid", Text: "Grid" },
    { ID: "Chart", Text: "Chart" },
  ];

  const taskFields = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "TimeLog",
    progress: "Progress",
    dependency: "Predecessor",
    parentID: "ParentId",
    resourceInfo: "Assignee",
  };

  const resourceFields = {
    id: "resourceId",
    name: "resourceName",
  };

  const splitterSettings = {
    position: "57%",
  };

  const projectStartDate = new Date("12/17/2023");
  const projectEndDate = new Date("10/26/2024");
  const gridLines = "Vertical";

  const change = (args) => {
    let gantt = document.getElementsByClassName("e-gantt")[0].ej2_instances[0];
    if (args.value == "Grid") {
      gantt.setSplitterPosition("100%", "position");
    } else if (args.value == "Chart") {
      gantt.setSplitterPosition("0%", "position");
    } else {
      gantt.setSplitterPosition("57%", "position");
    }
  };

  const timelineSettings = {
    showTooltip: true,
    topTier: {
      unit: "Month",
      format: "MMM yyyy",
    },
    bottomTier: {
      unit: "Day",
    //   count: 4,
      format: "dd",
    },
  };

  const labelSettings = {
    taskLabel: "${Progress}%",
    rightLabel: "Assignee",
  };

  const eventMarkerDay1 = new Date("04/04/2024");

  const statustemplate = (props) => {
    let sts = Status(props.taskData.Status);
    let stsCon = StatusContent(props.taskData.Status);
    if (props.taskData.Status) {
      return (
        <div className="columnTemplate">
          <div
            style={{
              display: `${sts.display}`,
              padding: `${sts.padding}`,
              gap: `${sts.gap}`,
              width: `${sts.width}`,
              height: `${sts.height}`,
              background: `${sts.background}`,
              borderRadius: `${sts.borderRadius}`,
            }}
          >
            <span
              style={{
                width: `${stsCon.width}`,
                height: `${stsCon.height}`,
                fontStyle: `${stsCon.fontStyle}`,
                fontWeight: `${stsCon.fontWeight}`,
                fontSize: `${stsCon.fontSize}`,
                lineHeight: `${stsCon.lineHeight}`,
                borderRadius: `${stsCon.borderRadius}`,
                color: `${stsCon.color}`,
                padding: `${stsCon.pad}`,
              }}
            >
              {props.taskData.Status}
            </span>
          </div>
        </div>
      );
    }
  };

  const prioritytemplate = (props) => {
    let pri = Priority(props.taskData.Priority);
    let priCon = PriorityContent(props.taskData.Priority);
    if (props.taskData.Priority) {
      return (
        <div className="columnTemplate1">
          <div
            style={{
              display: `${pri.display}`,
              padding: `${pri.padding}`,
              gap: `${pri.gap}`,
              width: `${pri.width}`,
              height: `${pri.height}`,
              background: `${pri.backgroundPri}`,
              borderRadius: `${pri.borderRadius}`,
            }}
          >
            <span
              style={{
                width: `${priCon.width}`,
                height: `${priCon.height}`,
                fontStyle: `${priCon.fontStyle}`,
                fontWeight: `${priCon.fontWeight}`,
                fontSize: `${priCon.fontSize}`,
                lineHeight: `${priCon.lineHeight}`,
                color: `${priCon.color}`,
              }}
            >
              {props.taskData.Priority}
            </span>
          </div>
        </div>
      );
    }
  };

  const columnTemplate = (props) => {
    var src =
      "https://ej2.syncfusion.com/react/demos/https://ej2.syncfusion.com/react/demos/src/gantt/images/" +
      props.ganttProperties.resourceNames +
      ".png";
    if (props.ganttProperties.resourceNames) {
      let gantt =
        document.getElementsByClassName("e-gantt")[0].ej2_instances[0];
      if (gantt.enableRtl) {
        return (
          <div className="columnTemplate">
            <img src={src} height="25px" width="25px" />
            <div
              style={{
                display: "inline-block",
                width: "100%",
                position: "relative",
                right: "8px",
                bottom: "5px",
              }}
            >
              {props.ganttProperties.resourceNames}
            </div>
          </div>
        );
      } else {
        return (
          <div className="columnTemplate">
            <img src={src} height="25px" width="25px" />
            <div
              style={{
                display: "inline-block",
                width: "100%",
                position: "relative",
                left: "8px",
              }}
            >
              {props.ganttProperties.resourceNames}
            </div>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  };

  const Status = (status) => {
    switch (status) {
      case "In Progress":
        statusStyleColor = CurrentTheme ? "#DFECFF" : "#2D3E57";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "96px";
        height = "24px";
        borderRadius = "24px";
        background = statusStyleColor;
        break;
      case "Open":
        background = "red";
        color = "white";
        borderRadius = "15px";
        padding = "6px";
        break;
      case "On Hold":
        statusStyleColor = CurrentTheme ? "#E4E4E7" : "#3C3B43";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "78px";
        height = "24px";
        borderRadius = "24px";
        background = statusStyleColor;
        break;
      case "Completed":
        statusStyleColor = CurrentTheme ? "#DFFFE2" : "#16501C";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "98px";
        height = "24px";
        borderRadius = "24px";
        background = statusStyleColor;
        break;
      case "High":
        statusStyleColor = CurrentTheme ? "#FFEBE9" : "#48211D";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "55px";
        height = "24px";
        borderRadius = "24px";
        background = statusStyleColor;
        break;
    }

    return {
      display: display,
      padding: padding,
      gap: gap,
      width: width,
      height: height,
      borderRadius: borderRadius,
      background: background,
      color: color,
    };
  };

  const StatusContent = (status) => {
    switch (status) {
      case "In Progress":
        statusContentstyleColor = CurrentTheme ? "#006AA6" : "#34B6FF";
        width = "72px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = statusContentstyleColor;
        break;
      case "Open":
        backgroundColor = "red";
        color = "white";
        borderRadius = "15px";
        pad = "6px";
        break;
      case "On Hold":
        statusContentstyleColor = CurrentTheme ? "#766B7C" : "#CDCBD7";
        width = "54px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = statusContentstyleColor;
        break;
      case "Completed":
        statusContentstyleColor = CurrentTheme ? "#00A653" : "#92FFC8";
        width = "74px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = statusContentstyleColor;
        break;
      case "High":
        statusContentstyleColor = CurrentTheme ? "#FF3740" : "#FFB5B8";
        width = "31px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = statusContentstyleColor;
        break;
    }

    return {
      width: width,
      height: height,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight,
      textAlign: textAlign,
      color: color,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      pad: pad,
    };
  };

  const Priority = (priority = 'Normal') => {
    switch (priority) {
      case "Low":
        priorityStyle = CurrentTheme ? "#FFF6D1" : "#473F1E";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "52px";
        height = "24px";
        borderRadius = "24px";
        backgroundPri = priorityStyle;
        break;
      case "Normal":
        priorityStyle = CurrentTheme ? "#F5DFFF" : "#4D2F5A";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "73px";
        height = "24px";
        borderRadius = "24px";
        backgroundPri = priorityStyle;
        break;
      case "Critical":
        priorityStyle = CurrentTheme ? "#FFEBE9" : "#48211D";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "72px";
        height = "24px";
        borderRadius = "24px";
        backgroundPri = priorityStyle;
        break;
      case "High":
        priorityStyle = CurrentTheme ? "#FFEBE9" : "#48211D";
        display = "flex";
        padding = "1px 12px";
        gap = "10px";
        width = "55px";
        height = "24px";
        borderRadius = "24px";
        backgroundPri = priorityStyle;
        break;
    }

    return {
      display: display,
      padding: padding,
      gap: gap,
      width: width,
      height: height,
      borderRadius: borderRadius,
      backgroundPri: backgroundPri,
    };
  };

  const PriorityContent = (priority = 'Normal') => {
    switch (priority) {
      case "Low":
        priorityContentStyle = CurrentTheme ? "#70722B" : "#FDFF88";
        width = "28px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = priorityContentStyle;
        break;
      case "Normal":
        priorityContentStyle = CurrentTheme ? "#7100A6" : "#E3A9FF";
        width = "49px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = priorityContentStyle;
        break;
      case "Critical":
        priorityContentStyle = CurrentTheme ? "#FF3740" : "#FFB5B8";
        width = "48px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = priorityContentStyle;
        break;
      case "High":
        priorityContentStyle = CurrentTheme ? "#FF3740" : "#FFB5B8";
        width = "31px";
        height = "22px";
        fontStyle = "normal";
        fontWeight = "500";
        fontSize = "14px";
        lineHeight = "20px";
        textAlign = "center";
        color = priorityContentStyle;
        break;
    }
    return {
      width: width,
      height: height,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight,
      textAlign: textAlign,
      color: color,
    };
  };

  const load = () => {};

  const template = columnTemplate.bind(this);
  const statusTemplate = statustemplate.bind(this);
  const priorityTemplate = prioritytemplate.bind(this);

  const toolbarOptions = [
    // "ExpandAll",
    // "CollapseAll",
    {
      type: "Input",
      align: "Right",
      tooltipText: "Change View",
      template: new DropDownList({
        dataSource: dataList,
        width: "100px",
        placeholder: "View",
        change: change,
        fields: { text: "Text", value: "ID" },
      }),
    },
  ];

  const editSettings: any = {
    allowAdding: false,
    allowEditing: false,
    allowDeleting: false,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: false,
  };

  const rowSelected = ({data} = props): void => {
    console.log(data);
  };

  const taskbarEditing = ({data} = props): void => {
    console.log(data);
  };

  return (
    <div className="control-pane">
      <div className="control-section">
        <GanttComponent
          id="Overview"
          dataSource={overviewData}
          treeColumnIndex={1}
          allowSelection={true}
          editSettings={editSettings}
          highlightWeekends={true}
          projectStartDate={projectStartDate}
          projectEndDate={projectEndDate}
          load={load.bind(this)}
          taskFields={taskFields}
          timelineSettings={timelineSettings}
          labelSettings={labelSettings}
          splitterSettings={splitterSettings}
          height="500px"
          gridLines={gridLines}
          allowFiltering={false}
          showColumnMenu={true}
          allowSorting={false}
          allowResizing={false}
          toolbar={toolbarOptions}
          resourceFields={resourceFields}
          resources={editingResources}
          allowRowDragAndDrop={false}
          rowSelected={rowSelected.bind(this)}
          taskbarEditing={taskbarEditing.bind(this)}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="TaskId"
              headerText="Task Id"
              width="180"
              visible={false}
            ></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Product Release"
              width="250"
            ></ColumnDirective>
            <ColumnDirective
              field="resources"
              headerText="Assignee"
              allowSorting={false}
              width="140"
              template={template}
            ></ColumnDirective>
            <ColumnDirective
              field="Status"
              headerText="Status"
              minWidth="100"
              width="120"
              template={statusTemplate}
            ></ColumnDirective>
            <ColumnDirective
              field="Priority"
              headerText="Priority"
              minWidth="80"
              width="100"
              template={priorityTemplate}
            ></ColumnDirective>

            <ColumnDirective
              field="TimeLog"
              headerText="Work Log"
              width="120"
            ></ColumnDirective>
          </ColumnsDirective>
          <EventMarkersDirective>
            <EventMarkerDirective
              day={eventMarkerDay1}
              label="Q-1 Release"
            ></EventMarkerDirective>
          </EventMarkersDirective>
          {/* <HolidaysDirective>
            <HolidayDirective
              from="01/01/2024"
              to="01/01/2024"
              label="New year Holiday"
            ></HolidayDirective>
            <HolidayDirective
              from="12/25/2023"
              to="12/26/2023"
              label="Christmas Holidays"
            ></HolidayDirective>
          </HolidaysDirective> */}
          <Inject
            services={[
              Edit,
              Selection,
              Toolbar,
              DayMarkers,
              ColumnMenu,
              Filter,
              Sort,
              Resize,
              RowDD,
            ]}
          />
        </GanttComponent>
      </div>
    </div>
  );
};
export default Overview;
