
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const CircularProgressChart = ({ percentage }) => {
    return (
        <div className="circularProgressChart" style={{ width: 150, height: 150 }}>
            {percentage < 100 ?
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth='7'

                    styles={buildStyles({
                        rotation: 0,
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,83,0.8664508039543942) 50%)',
                        textColor: '#b8b8b8',
                        trailColor: '#b8b8b8'
                    })}
                />
                : <CircularProgressbar
                    value="100"
                    text='100%'
                    strokeWidth='7'

                    styles={buildStyles({
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,83,0.8664508039543942) 50%)',
                        textColor: '#f00',
                        trailColor: '#b8b8b8',
                    })}
                />
            }
        </div>
    )
}


export default CircularProgressChart