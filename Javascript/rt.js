import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import FormattedLabel from "../../../../containers/reuseableComponents/FormattedLabel";
import ReportLayout from "../../../../containers/reuseableComponents/NewReportLayout";
import CategoryWiseChartCSS from "./CategoryWiseChart.module.css";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import axios from "axios";
import urls from "../../../../URLS/urls";
// chart
import dynamic from "next/dynamic";
import { red } from "@mui/material/colors";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DataGrid } from "@mui/x-data-grid";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// newChart
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LabelList,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div
        style={{
          background: "white",
          padding: "5px",
          border: "1px solid #ccc",
        }}>
        <p>{dataPoint.departmentName}</p>
        <p>Value: {dataPoint.percentage}</p>
        {/* <p>{dataPoint.departmentName}</p> */}
      </div>
    );
  }

  return null;
};

// !  Sachin Durge
// CategoryWiseChart
const CategoryWiseChart = () => {
  const {
    control,
    register,
    getValues,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const language = useSelector((state) => state?.labels.language);
  const user = useSelector((state) => state?.user?.user);
  const router = useRouter();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [CategoryWiseChartHeadersEn, setCateogyWiseChatHeadersEn] = useState(
    [],
  );
  const [CateogyWiseChatHeadersMr, setCateogyWiseChatHeadersMr] = useState([]);
  const [CategoryWiseChartRows, setCateogyWiseChartRows] = useState([]);
  const [CategoryWiseChartTableData, setCateogyWiseChartTable] = useState([]);
  const [departments, setDepartments] = useState([]);
  const dataFromBackend = [
    { name: "A", value: 10, label: "Category A" },
    { name: "B", value: 15, label: "Category B" },
    // { name: "C", value: 5, label: "Category C" },
    // { name: "A", value: 10, label: "Category A" },
    // { name: "B", value: 15, label: "Category B" },
    // { name: "C", value: 5, label: "Category C" },
    // { name: "A", value: 10, label: "Category A" },
    // { name: "B", value: 15, label: "Category B" },
    // { name: "C", value: 5, label: "Category C" },
    // { name: "A", value: 10, label: "Category A" },
    // { name: "B", value: 15, label: "Category B" },
    // { name: "C", value: 5, label: "Category C" },
    // { name: "C", value: 5, label: "Category C" },
    // { name: "A", value: 10, label: "Category A" },
    // { name: "B", value: 15, label: "Category B" },
    // { name: "C", value: 5, label: "Category C" },

    // Add more data entries as needed
  ];
  // Define an array of colors to be used for each bar
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#b0e57c",
    "#cd5c5c",
    "#f08080",
    "#9370db",
    "#90ee90",
    "#ff69b4",
    "#1e90ff",
    "#d3d3d3",
    "#ff1493",
    "#00ced1",
    "#e9967a",
  ];

  const dataWithColors = CategoryWiseChartTableData.map((entry, index) => ({
    ...entry,
    color: colors[index % colors.length], // Use modulo to loop through colors if there are more bars than colors
  }));

  const numRecords = CategoryWiseChartTableData.length;
  const desiredBarWidth = numRecords > 6 ? 60 : numRecords > 4 ? 200 : 150; // Adjust the values as per your preference
  const yAxisDomain = [
    0,
    Math.max(...CategoryWiseChartTableData.map((entry) => entry.percentage)),
  ]; // Calculate the max value from data

  // cancellButton
  const cancellButton = () => {
    setValue("CategoryWiseChartData", null);
  };

  // Department
  const getDepartment = () => {
    axios
      .get(`${urls.CFCURL}/master/department/getAll`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        if (res?.status == 200 || res?.status == 201) {
          setDepartments(
            res?.data?.department?.map((row) => ({
              id: row?.id,
              departmentEn: row?.department,
              departmentMr: row?.departmentMr,
            })),
          );
        } else {
        }
      })
      .catch(() => {});
  };

  // DepartmentWiseChartColumns
  const DepartmentWiseChartColumns = [
    {
      field: "srNo",
      headerName: <FormattedLabel id='srNo' />,
      description: <FormattedLabel id='srNo' />,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: language == "en" ? "departmentName" : "departmentNameMr",
      headerName: language == "en" ? "Department" : "विभाग",
      description: language == "en" ? "Department" : "विभाग",
      // width: 270,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "totalGrievance",
      headerAlign: "center",
      align: "center",
      headerName: language == "en" ? "Received" : "प्राप्त",
      description: language == "en" ? "Received" : "प्राप्त",
      // width: 120,
      flex: 1,
    },
    {
      field: "totalCloseGriv",
      headerAlign: "center",
      align: "center",
      headerName: language == "en" ? "Settled" : "निकाली",
      description: language == "en" ? "Settled" : "निकाली",
      // width: 200,
      flex: 1,
    },
    {
      field: "totalOpenGriv",
      align: "center",
      headerName: language == "en" ? "Pending" : "प्रलंबित",
      description: language == "en" ? "Pending" : "प्रलंबित",
      headerAlign: "center",
      // width: 250,
      flex: 1,
    },
    {
      field: "percentage",
      align: "center",
      headerName:
        language == "en" ? "Completion Percentage" : "पुर्तता टक्केवारी",
      description:
        language == "en" ? "Completion Percentage" : "पुर्तता टक्केवारी",
      headerAlign: "center",
      // width: 250,
      flex: 1,
    },
  ];

  // useEffect ==============>

  useEffect(() => {
    getDepartment();
  }, []);

  useEffect(() => {
    console.log("CategoryWiseChartData", watch("CategoryWiseChartData"));
    let chartData = watch("CategoryWiseChartData");

    // chartHeaders - English
    let chartHeadersEn = chartData?.map((data) => data?.departmentName);
    setCateogyWiseChatHeadersEn(chartHeadersEn);

    // chartHeaders - Marathi
    let chartHeadersMr = chartData?.map((data) => data?.departmentNameMr);
    setCateogyWiseChatHeadersMr(chartHeadersMr);

    // percentage
    let chartHeaderPercentage = chartData?.map(
      (data) => data?.percentage.split(".")[0],
    );
    setCateogyWiseChartRows(chartHeaderPercentage);

    // tableData
    let srNoWithChartData = chartData?.map((data, index) => {
      return {
        srNo: index + 1,
        ...data,
      };
    });
    console.log("srNoWithChartData", srNoWithChartData);
    setCateogyWiseChartTable(srNoWithChartData);

    console.log("chartHeaders32423423", CategoryWiseChartTableData);
  }, [watch("CategoryWiseChartData")]);

  useEffect(() => {}, [
    console.log("chartFilteredData"),
    CategoryWiseChartRows,
    CateogyWiseChatHeadersMr,
    setCateogyWiseChatHeadersEn,
  ]);

  useEffect(() => {
    console.log("CategoryWiseChartTableData", CategoryWiseChartTableData);
  }, [CategoryWiseChartTableData]);
  //   {
  //     "srNo": 1,
  //     "departmentName": "A ZONE OFFICE BSUP(NAGARVASTI)",
  //     "departmentNameMr": "अ क्षेञीय कार्यालय बीएसयूपी (नगरवस्ती)",
  //     "totalGrievance": 13,
  //     "totalOpenGriv": 5,
  //     "totalCloseGriv": 8,
  //     "percentage": "61.54"
  // }

  // View
  return (
    <>
      {/** Horizontal Line */}
      <hr className={CategoryWiseChartCSS.DayWiseHeaderName}></hr>
      {/** Buttons Start */}
      <Stack
        spacing={5}
        direction='row'
        style={{
          display: "flex",
          justifyContent: "right",
          marginRight: "50px",
          marginTop: "25px",
          marginBottom: "20px",
        }}>
        {/** 
          <Button
          variant='contained'
          color='primary'
          style={{ float: "right" }}
          onClick={handlePrint}>
          <FormattedLabel id='print' />
        </Button>
         */}

        <Button
          variant='contained'
          color='primary'
          onClick={() => cancellButton()}>
          <FormattedLabel id='back' />
        </Button>
      </Stack>
      {/** Buttons End */}

      {/** Header Name */}
      <div
        style={{
          backgroundColor: "#0084ff",
          color: "white",
          fontSize: 19,
          marginTop: 30,
          marginBottom: 30,
          padding: 8,
          paddingLeft: 30,
          marginLeft: "40px",
          marginRight: "65px",
          borderRadius: 100,
        }}>
        <strong className={CategoryWiseChartCSS.SearchHeader}>
          {language == "en"
            ? "Department Performance Chart"
            : "विभाग कामगिरी चार्ट"}
        </strong>
      </div>

      {/** Other Fields */}

      <Grid
        container
        className={CategoryWiseChartCSS.categoryWiseFormDateToDate}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}>
          <FormControl style={{ marginTop: 0 }} error={!!errors?.fromDate}>
            <Controller
              name='fromDate'
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    disabled
                    inputFormat='DD/MM/YYYY'
                    label={
                      <span style={{ fontSize: 16 }}>
                        <FormattedLabel id='fromDate' />
                      </span>
                    }
                    value={field.value}
                    onChange={(date) =>
                      field.onChange(moment(date).format("YYYY-MM-DD"))
                    }
                    selected={field.value}
                    center
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size='small'
                        fullWidth
                        InputLabelProps={{
                          style: {
                            fontSize: 12,
                            marginTop: 3,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
            />
            <FormHelperText>
              {errors?.fromDate ? errors?.fromDate?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}>
          <FormControl style={{ marginTop: 0 }} error={!!errors?.toDate}>
            <Controller
              control={control}
              name='toDate'
              defaultValue={null}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    disabled
                    inputFormat='DD/MM/YYYY'
                    label={
                      <span style={{ fontSize: 16 }}>
                        <FormattedLabel id='toDate' />
                      </span>
                    }
                    value={field.value}
                    onChange={(date) =>
                      field.onChange(moment(date).format("YYYY-MM-DD"))
                    }
                    selected={field.value}
                    center
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size='small'
                        fullWidth
                        InputLabelProps={{
                          style: {
                            fontSize: 12,
                            marginTop: 3,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
            />
            <FormHelperText>
              {errors?.toDate ? errors?.toDate?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={CategoryWiseChartCSS.GridItem}>
          <FormControl
            variant='standard'
            error={!!errors?.selectedDepartmentForChart}>
            <InputLabel id='demo-simple-select-standard-label'>
              <FormattedLabel id='departmentName' />
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  disabled={!watch("searchButtonInputState")}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label=<FormattedLabel id='departmentName' />>
                  {departments &&
                    departments.map((department, index) => (
                      <MenuItem key={index} value={department?.id}>
                        {language == "en"
                          ? department?.departmentEn
                          : department?.departmentMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='selectedDepartmentForChart'
              control={control}
              defaultValue={null}
            />
            <FormHelperText>
              {errors?.selectedDepartmentForChart
                ? errors?.selectedDepartmentForChart?.message
                : null}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      {/** Chart  */}
      <div className={CategoryWiseChartCSS.ChartMainDiv}>
        {/** ResponsiveContainer */}
        {/* <ResponsiveContainer
          data={CategoryWiseChartTableData}
          width={800}
          height={400}></ResponsiveContainer> */}
        <BarChart
          width={desiredBarWidth * numRecords}
          height={400}
          data={dataWithColors}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <XAxis />
          <YAxis domain={yAxisDomain} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey='percentage' width={desiredBarWidth}>
            {dataWithColors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          flexWrap: "wrap",
        }}>
        {dataWithColors.map((entry, index) => (
          <div
            key={`legend-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
              marginBottom: "10px",
            }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: entry.color,
                marginRight: "5px",
              }}></div>
            <span>{entry.departmentName}</span>
          </div>
        ))}
      </div>
      {/** Table  */}
      <div>
        <DataGrid
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 100 },
              printOptions: { disableToolbarButton: true },
              disableExport: false,
              disableToolbarButton: false,
              csvOptions: { disableToolbarButton: true },
            },
          }}
          sx={{
            backgroundColor: "white",
            m: 2,
            overflowY: "scroll",
            "& .MuiDataGrid-columnHeadersInner": {
              backgroundColor: "#0084ff",
              color: "white",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
          density='density'
          getRowId={(row) => row.srNo}
          autoHeight
          rows={
            CategoryWiseChartTableData != undefined &&
            CategoryWiseChartTableData != null
              ? CategoryWiseChartTableData
              : []
          }
          columns={DepartmentWiseChartColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={
            {
              // Toolbar: GridToolbar,
              // content: renderTableHeader,
              // header: {
              //   content: renderTableHeader,
              // },
            }
          }
          title='Goshwara'
          // onCellClick={handleCellClickPralabit}
          // title={(language = "en" ? "Goshwara" : "घोषवारा")}
          // components={{ Toolbar: GridToolbar }}
        />
      </div>
    </>
  );
};

export default CategoryWiseChart;
