import { ReactComponent as FacebookIcon } from './facebook-blue.svg';
import CloseIcon from '@mui/icons-material/Close';

import './IconTypes.css';

const iconTypes = {
  "check": (color) => <FacebookIcon 
  className="Icon Icon-svg" fill={color} />,
  "delete": (color) => <CloseIcon 
  className="Icon Icon-svg" fill={color} />,
};

function IconTypes({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container 
      Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { IconTypes };