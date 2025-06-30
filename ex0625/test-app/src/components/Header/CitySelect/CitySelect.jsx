import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { cityOptions } from '../data'
import { SelectWrapper } from '../style';
import { useNavigate } from 'react-router-dom';

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (newValue, actionmeta) => {
    navigate(`/${newValue.value}`)
  }

  const handleCreate = (inputValue) => {
    console.log("New Option Created:", inputValue);
  }

  return (
    <SelectWrapper>
      <CreatableSelect
        options={cityOptions}
        onChange={handleChange}
        defaultInputValue={handleCreate}
        value={null}
        className='react-select-container'
        classNamePrefix='react-select'
      />
    </SelectWrapper>
  )
}

export default CitySelect