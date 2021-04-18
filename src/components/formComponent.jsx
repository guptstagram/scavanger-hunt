import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
  txtfield: {
    width: "100%",
  },
}));

const FormComponent = (props) => {
  const classes = useStyles();

  const [formFeilds, setFormFields] = React.useState({
    phone: "",
    pincode: "",
  });

  const handleFormChange = (e) => {
    setFormFields({
      ...formFeilds,
      [e.target.id]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.handleHunterDetails(formFeilds.pincode);
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextField
              type="number"
              className={classes.txtfield}
              id="phone"
              label="Contact number"
              variant="outlined"
              size="small"
              required
              value={formFeilds.phone}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              type="number"
              className={classes.txtfield}
              id="pincode"
              label="Pincode"
              variant="outlined"
              size="small"
              required
              value={formFeilds.pincode}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button type="submit" variant="contained" color="primary">
              Search Hunter
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FormComponent;
