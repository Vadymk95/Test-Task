import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import './MySelect.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <FormControl className="form-control" fullWidth>
      <InputLabel className="label" id="demo-simple-select-label">Sorting by...</InputLabel>
      <Select
        label="Sorting by..."
        id="demo-simple-select"
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem className="option" key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
