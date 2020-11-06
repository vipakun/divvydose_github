
import { css } from 'emotion'
import { Text } from 'rebass'

const Label = ({label}) => {
  return (
    <Text 
      key={label.id}
      mb={2}
      className={css`
        color: blue;
      `}
    >
      {label.name}
    </Text>
  );
}

export default Label; 