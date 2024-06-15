import React,{useState} from 'react'

const Customedropdown = ({ options, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
    };
  
    return (
      <div className="relative inline-block w-full">
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-2 bg-white border rounded shadow focus:outline-none"
        >
          {selectedOption ? selectedOption.label : placeholder}
        </button>
        {isOpen && (
          <ul className="absolute z-10 w-full mt-2 bg-white border rounded shadow">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  

export default Customedropdown
