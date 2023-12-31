import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import FormattedLabel from "../../../containers/reuseableComponents/FormattedLabel";
import urls from "../../../URLS/urls";

/** Authore - Sachin Durge */
// BasicApplicationDetails
const BasicApplicationDetails = () => {
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
  const [areaNames, setAreaName] = useState([]);
  const [hawkingZoneNames, setHawkingZoneName] = useState([]);
  const [zoneNames, setZoneNames] = useState([]);
  const [wardNames, setWardNames] = useState([]);
  const [serviceNames, setServiceNames] = useState([]);

  // areas
  const getAreaName = () => {
    axios
      .get(`${urls.CFCURL}/master/area/getAll`)
      .then((r) => {
        if (
          r?.status == 200 ||
          res?.status == 201 ||
          res?.status == "SUCCESS"
        ) {
          setAreaName(
            r.data.area.map((row) => ({
              id: row.id,
              areaName: row.areaName,
              areaNameMr: row.areaNameMr,
            })),
          );
        } else {
        }
      })
      .catch((errors) => {});
  };

  // hawkingZones
  const getHawkingZoneName = () => {
    axios
      .get(`${urls.HMSURL}/hawingZone/getAll`)
      .then((r) => {
        if (
          r?.status == 200 ||
          res?.status == 201 ||
          res?.status == "SUCCESS"
        ) {
          setHawkingZoneName(
            r.data.hawkingZone.map((row) => ({
              id: row.id,
              hawkingZoneName: row.hawkingZoneName,
              hawkingZoneNameMr: row.hawkingZoneNameMr,
            })),
          );
        } else {
        }
      })
      .catch((errors) => {});
  };

  // serviceNames
  const getserviceNames = () => {
    axios
      .get(`${urls.CFCURL}/master/service/getAll`)
      .then((r) => {
        if (
          r?.status == 200 ||
          res?.status == 201 ||
          res?.status == "SUCCESS"
        ) {
          setServiceNames(
            r.data.service.map((row) => ({
              id: row.id,
              serviceName: row.serviceName,
              serviceNameMr: row.serviceNameMr,
            })),
          );
        } else {
        }
      })
      .catch((errors) => {});
  };

  // zones
  const getZoneName = () => {
    axios
      .get(`${urls.CFCURL}/master/zone/getAll`)
      .then((r) => {
        if (
          r?.status == 200 ||
          res?.status == 201 ||
          res?.status == "SUCCESS"
        ) {
          setZoneNames(
            r?.data?.zone?.map((row) => ({
              id: row?.id,
              zoneName: row?.zoneName,
              zoneNameMr: row?.zoneNameMr,
            })),
          );
        } else {
        }
      })
      .catch((errors) => {});
  };

  // wards
  const getWardName = () => {
    // const url =  `${urls.CFCURL}/master/zoneAndWardLevelMapping/getWardByDepartmentId?departmentId=${2}&zoneId=${watch("zoneName")}`
    axios
      .get(`${urls.CFCURL}/master/ward/getAll`)
      .then((r) => {
        if (
          r?.status == 200 ||
          res?.status == 201 ||
          res?.status == "SUCCESS"
        ) {
          setWardNames(
            r?.data?.ward?.map((row) => ({
              id: row?.id,
              wardName: row?.wardName,
              wardNameMr: row?.wardNameMr,
            })),
          );
        } else {
        }
      })
      .catch((errors) => {});
  };

  // useEffect
  useEffect(() => {
    getHawkingZoneName();
    getAreaName();
    getZoneName();
    getWardName();
    // getserviceNames();
  }, []);

  // view
  return (
    <>
      <div
        style={{
          padding: "1vh 1vw",
          margin: "1vh 10vw",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          borderRadius: 100,
          backgroundColor: "#0084ff",
        }}>
        <strong>{<FormattedLabel id='basicApplicationDetails' />}</strong>
      </div>
      <Grid
        container
        sx={{
          marginTop: 1,
          marginBottom: 5,
          paddingLeft: "60px",
          display: "flex",
          justifyContent: "center",
          align: "center",
        }}>
        {/** 
        <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
          <FormControl error={!!errors.serviceName} sx={{ marginTop: 2 }}>
            <InputLabel id='demo-simple-select-standard-label'>
              {<FormattedLabel id='serviceName' />}
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  sx={{ width: "50vh" }}
                  disabled={watch("disabledFieldInputState")}
                  autoFocus
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label='Service Name *'
                  id='demo-simple-select-standard'
                  labelId="id='demo-simple-select-standard-label'"
                >
                  {serviceNames &&
                    serviceNames.map((serviceName, index) => (
                      <MenuItem key={index} value={serviceName.id}>
                        {language == "en"
                          ? serviceName?.serviceName
                          : serviceName?.serviceNameMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='serviceName'
              control={control}
              defaultValue=''
            />
            <FormHelperText>
              {errors?.serviceName ? errors.serviceName.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        */}
        {/** 
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id='standard-basic'
            label={<FormattedLabel id='applicationNumber' />}
            disabled
            defaultValue='23848494848'
            {...register("applicationNumber")}
            error={!!errors.applicationNumber}
            helperText={
              errors?.applicationNumber
                ? errors.applicationNumber.message
                : null
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl
            error={!!errors.applicationDate}
            sx={{ marginTop: 0 }}
            // sx={{ border: "solid 1px yellow" }}
          >
            <Controller
              control={control}
              name='applicationDate'
              defaultValue={Date.now()}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    disabled
                    inputFormat='DD/MM/YYYY'
                    label={
                      <span style={{ fontSize: 16 }}>
                        {<FormattedLabel id='applicationDate' />}
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
              {errors?.applicationDate ? errors.applicationDate.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        */}
        {/** Zone Name */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl
            variant='standard'
            error={!!errors?.zoneKey}
            sx={{ marginTop: 2 }}>
            <InputLabel id='demo-simple-select-standard-label'>
              {<FormattedLabel id='zoneName' />}
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  disabled={watch("disabledFieldInputState")}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label=<FormattedLabel id='zoneName' />>
                  {zoneNames &&
                    zoneNames.map((zoneName, index) => (
                      <MenuItem key={index} value={zoneName?.id}>
                        {language == "en"
                          ? zoneName?.zoneName
                          : zoneName?.zoneNameMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='zoneKey'
              control={control}
              defaultValue=''
            />
            <FormHelperText>
              {errors?.zoneKey ? errors?.zoneKey?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        {/** ward Name */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl
            variant='standard'
            error={!!errors?.wardName}
            sx={{ marginTop: 2 }}>
            <InputLabel id='demo-simple-select-standard-label'>
              {<FormattedLabel id='wardName' />}
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  disabled={watch("disabledFieldInputState")}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label=<FormattedLabel id='wardName' />>
                  {wardNames &&
                    wardNames?.map((wardName, index) => (
                      <MenuItem key={index} value={wardName?.id}>
                        {language == "en"
                          ? wardName?.wardName
                          : wardName?.wardNameMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='wardName'
              control={control}
              defaultValue=''
            />
            <FormHelperText>
              {errors?.wardName ? errors?.wardName?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label={<FormattedLabel id='citySurveyNo' />}
            disabled={watch("disabledFieldInputState")}
            {...register("citySurveyNo")}
            error={!!errors?.citySurveyNo}
            helperText={
              errors?.citySurveyNo ? errors?.citySurveyNo?.message : null
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl
            variant='standard'
            error={!!errors?.hawkingZoneName}
            sx={{ marginTop: 2 }}>
            <InputLabel id='demo-simple-select-standard-label'>
              {<FormattedLabel id='hawkingZoneName' />}
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  disabled={watch("disabledFieldInputState")}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label='hawkingZoneName *'>
                  {hawkingZoneNames &&
                    hawkingZoneNames.map((hawkingZoneName, index) => (
                      <MenuItem key={index} value={hawkingZoneName.id}>
                        {language == "en"
                          ? hawkingZoneName?.hawkingZoneName
                          : hawkingZoneName?.hawkingZoneNameMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='hawkingZoneName'
              control={control}
              defaultValue=''
            />
            <FormHelperText>
              {errors?.hawkingZoneName
                ? errors?.hawkingZoneName?.message
                : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl sx={{ marginTop: 2 }} error={!!errors?.areaName}>
            <InputLabel id='demo-simple-select-standard-label'>
              {<FormattedLabel id='areaName' />}
            </InputLabel>
            <Controller
              render={({ field }) => (
                <Select
                  disabled={watch("disabledFieldInputState")}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  label={<FormattedLabel id='areaName' />}>
                  {areaNames &&
                    areaNames.map((areaName, index) => (
                      <MenuItem key={index} value={areaName.id}>
                        {language == "en"
                          ? areaName?.areaName
                          : areaName?.areaNameMr}
                      </MenuItem>
                    ))}
                </Select>
              )}
              name='areaName'
              control={control}
              defaultValue=''
            />
            <FormHelperText>
              {errors?.areaName ? errors?.areaName?.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>
    </>
  );
};

export default BasicApplicationDetails;
