import React from 'react'
import CreatableSelect from 'react-select/creatable';
import {cityOptions} from '../data'
import { SelectWrapper } from '../style';

const CitySelect = () => {
  return (
    <SelectWrapper>
      <CreatableSelect
        isClearable options={cityOptions}
        // onChange={}
        defaultInputValue={null}
        className='react-select-container'
        classNamePrefix='react-select'
      />
    </SelectWrapper>
  )
}

export default CitySelect