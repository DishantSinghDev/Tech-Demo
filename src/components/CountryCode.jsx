import React, { useState, useRef, useEffect } from 'react';
import countriesData from '../constants/json/countriesData.json';

const CustomDropdown = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleDropdownBlur = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDropdownBlur);
    return () => {
      document.removeEventListener('mousedown', handleDropdownBlur);
    };
  }, []);

  return (
    <div className="absolute inline-block" ref={dropdownRef}>
      <div
        className="flex items-center bg-white px-3 py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={options.find((option) => option.value === value)?.flag}
          alt=""
          className="h-auto max-w-none w-4 mr-2"
        />
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="7px" height="7px">    <path d="M15,23c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.286-0.286-0.372-0.716-0.217-1.09C4.23,11.243,4.596,11,5,11h20 c0.404,0,0.77,0.243,0.924,0.617c0.155,0.374,0.069,0.804-0.217,1.09l-10,10C15.512,22.902,15.256,23,15,23z"/></svg>
      </div>
      {isOpen && (
        <ul className="absolute pb-6 left-0 mt-1 w-[300px] max-h-[200px] bg-white rounded-md shadow-md border border-gray-300 overflow-y-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option.value)}
            >
              <img src={option.flag} alt="" className="w-4 border-solid h-auto mr-2" />
              <span className='1'>
                {option.label} 
              </span>
              <span>
              {option.callingCode}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const CountrySelector = ({countryName, onChange}) => {
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [callingCode, setCallingCode] = useState('+91 ');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setCallingCode(countriesData[countryCode].callingCode + ' ');
    countryName(countriesData[countryCode].name)
  };
  

  const options = [
    ...Object.keys(countriesData).map((countryCode) => ({
      value: countryCode,
      label: countriesData[countryCode].name,
      callingCode: countriesData[countryCode].callingCode,
      flag: `https://flagcdn.com/h40/${countryCode.toLowerCase()}.webp`,
    })),
  ];

  return (
    <div className="flex ">
      <CustomDropdown
        value={selectedCountry}
        options={options}
        onChange={handleCountryChange}
      />
      <input
        value={callingCode !== '' ? callingCode : ''}
        onChange={(event) => {
          const input = event.target.value.replace(/[^0-9]/g,""); // Remove non-numeric characters
          setCallingCode(input);
          onChange(input)
        }}
        onFocus={() => {
          setIsInputFocused(true); // Set the input focus flag
        }}
        onBlur={() => {
          setIsInputFocused(false);
           // Reset the input focus flag
        }}
        style={{
          paddingLeft: "55px",
          width: "100%"
        }}
        className={`focus:outline-none py-2 w-full ${isInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200 ' : 'border-b-2 transition-colors duration-200'} `}
        type="tel"
        required
        name="Usermobile"
      />
    </div>
  );
};

export default CountrySelector;
