import Input from './Input'
import {useState} from 'react'

const CancelSubscriptionReasons = ({ cancelSubscriptionReasons }) => {
  const [isselected, setIsselected] = useState(false)
  return (
    <div>
      <div  className="divOneStrong">
        <strong >Why have you decided to cancel your subscription?</strong>
      </div>
      <ul className="cancelSubscriptionReasons">
        {cancelSubscriptionReasons.map((reason, index) => (
          <li 
          key={index}
          style={{backgroundColor: isselected && 'red'}}
          onClick={(e) => {setIsselected(true)
          console.log('e',e.target)}
          }
          >
            {reason}
          </li>
        ))}
      </ul>
      <Input placeholder="Other"/>
    </div>
  );
};

export default CancelSubscriptionReasons;
