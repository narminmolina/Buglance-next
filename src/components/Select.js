import Select from 'react-select';
//  Global Components
import Label from 'components/Label';
//  SVG
import { SelectChevron, SelectClear } from 'svg';

const ReactSelect = ({ id, label, onChange, ...props }) => (
  <div className="custom-react-select">
    {label && <Label id={id} label={label} />}
    <Select
      id={id}
      classNamePrefix="react-select"
      className="custom-react-multi-select"
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <SelectChevron />,
        ClearIndicator: ({ innerProps: { ref, ...restInnerProps } }) => <SelectClear {...restInnerProps} ref={ref} />,
      }}
      {...props}
    />
  </div>
);

export default ReactSelect;
