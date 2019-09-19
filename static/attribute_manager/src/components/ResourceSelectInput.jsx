import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: "80%",
    margin: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 100,
    flexGrow: 1,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    flexBasis: 150,
  },
  formControl: {
    flexGrow: 3,
    margin: "5px",
  },
  outputFormControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  progress: {
    margin: '5px',
  },
  title:{
    margin: '8px',
    color: '#616161',
  },
}));

export default (props) => {
  const classes = useStyles();
  const {
    selectedResource,
    resourceSelectDialogOpen,
    attributes,
    errors,
    loading,
  } = props
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1"className={classes.title}>1. Select Layer</Typography>
      <TextField
        error={errors && errors.inLayerName}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Input Layer Name"
        value={selectedResource && selectedResource.title || ''}
        InputProps={{
          startAdornment: <InputAdornment position="start"> </InputAdornment>,
          onClick: resourceSelectDialogOpen,
          placeholder: 'Input Layer Name'
        }}
        helperText={'Please Select Layer'}
      />
    </div>
  );
}
