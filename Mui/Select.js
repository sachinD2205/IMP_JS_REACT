// const [names, setNames] = useState([]);
<FormControl variant='standard' error={!!errors?.name} sx={{ marginTop: 2 }}>
  <InputLabel
    shrink={watch("name") == null ? false : true}
    id='demo-simple-select-standard-label'>
    {language == "en" ? "NameinEnglish" : "NameInMarathi"}
  </InputLabel>
  <Controller
    render={({ field }) => (
      <Select
        disabled={false}
        value={field?.value}
        onChange={(value) => field?.onChange(value)}
        label={language == "en" ? "NameinEnglish" : "NameInMarathi"}>
        {names &&
          names?.map((name, index) => (
            <MenuItem key={index} value={name?.id}>
              {language == "en" ? name?.nameEn : name?.nameMr}
            </MenuItem>
          ))}
      </Select>
    )}
    name='name'
    control={control}
    defaultValue={null}
  />
  <FormHelperText>{errors?.name ? errors?.name?.message : null}</FormHelperText>
</FormControl>;
