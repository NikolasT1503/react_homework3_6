import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import ServiceComp from "./components/ServiceComp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const data = [
    {
      service: "Зубы",
      clinic: "Клиника №1",
    },
    {
      service: "Глаза",
      clinic: "Клиника №2",
    },
    {
      service: "Сосуды",
      clinic: "Клиника №3",
    },
    {
      service: "Амбулаторное лечение",
      clinic: "Клиника №4",
    },
  ];
  const classes = useStyles();
  const [service, setService] = React.useState("");
  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <div className="App">
      <FormControl className={classes.formControl}>
        <InputLabel id="mySelectLabel">Выберите услугу</InputLabel>
        <Select
          labelId="mySelectLabel"
          id="mySelect"
          value={service}
          onChange={handleChange}
        >
          {data.map((item) => {
            //console.log(item);
            return <MenuItem value={item.clinic}>{item.service}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <p>Вы выбрали клинику {service}</p>
    </div>
  );
}

export default App;
