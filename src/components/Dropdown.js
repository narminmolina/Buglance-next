import ReactDropdown from 'react-dropdown';
//   SVG
import { ChevronUp, ChevronDown } from 'svg';

const Dropdown = ({ data, selected, onChange, ...props }) => {
  return (
    <ReactDropdown
      //
      {...props}
      options={data}
      value={selected}
      placeholder="Other"
      arrowOpen={<ChevronUp />}
      arrowClosed={<ChevronDown />}
      onChange={(value) => onChange(value)}
    />
  );
};

export default Dropdown;
