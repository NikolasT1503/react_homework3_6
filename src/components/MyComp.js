import React from 'react';
import NewComp from './NewComp';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class MyComp extends React.Component {
    

    constructor(props){
        super(props);
        this.state = {
            visibleInput: false,
            parText: "some text"
        };
        this.onChangeParText = this.onChangeParText.bind(this);
        this.onChangeVisibility = this.onChangeVisibility.bind(this);
    }

    onChangeVisibility(event){
        this.setState({visibleInput: event.target.checked})
    }

    onChangeParText(event){
        this.setState({parText: event.target.value})
    }

    render(){
        const classes = useStyles();
        const [service, setService] = React.useState("");
        const handleChange = (event) => {
          setService(event.target.value);
        };
        
        let h = "Hello";
        let w = "World";
        let texts = ["My name is Nikolas", "Hello Nikolas", "Hello Vika", "Hello Arina"];
        return (
            <div>
                <label>Visible Input</label>
                <input type="checkbox" onChange={this.onChangeVisibility} />
                {this.state.visibleInput ? 
                    <input type="text" onChange={this.onChangeParText} ref="myInput" value={this.state.parText}/>
                    :
                    <span> Here must be a Checkbox</span>
                }
                <p>{this.state.parText}</p>
                <div ref="MyDiv" className={h}> {w} </div>
                {texts.map((itemText)=><NewComp key={itemText} text={itemText} />)}
            </div>
        )
    }
}

export default MyComp;