import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      type={props.type}
      InputLabelProps={{
        style: { color: "blue"},
      }}
      
      margin="normal"
      inputProps={{
        style: {
          width: "400px",
          borderRadius: 20,
          fontSize: 20,

        },
      }}
    ></TextField>
  );
};

export default CustomizedInput;
