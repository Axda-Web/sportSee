import PropTypes from 'prop-types'
import StyledDuration from './Duration.styled';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Rectangle
} from "recharts";



/**
 * Display a custom tooltip
 * @param {Boolean}  [Props.active='true']
 * @param {Array}   [Props.payload=[]]
 * @returns {JSX.element} - CustomTooltip component
 */
const CustomTooltip=({active, payload})=>{
    if (active) {
        return (
            <div className="customTooltip">
                <p className="tooltipData">{`${payload[0].value} `}min</p>
            </div>
        );
}
return null;
}


/**
 * Display a custom cursor
 * @param {Array} points - Coordonates of the rectangle
 * @returns {JSX.element} - CustomCursor component
 */
const CustomCursor = ({points}) => {
    return <Rectangle   fill="#000000"
                        opacity={0.2}
                        x={points[1].x}
                        width={1000}
                        height={300}
                    />;
};


/**
 * Display a line chart 
 * @component
 * @param {Object[]} data - User average sessions data
 * @returns {JSX.Element} - Duration component
 */
const Duration = ({data}) => {

	const mockedData = [
            {
                "day": 'L',
                "sessionLength": 30
            },
            {
                "day": 'M',
                "sessionLength": 23
            },
            {
                "day": 'M',
                "sessionLength": 45
            },
            {
                "day": 'J',
                "sessionLength": 50
            },
            {
                "day": 'V',
                "sessionLength": 0
            },
            {
                "day": 'S',
                "sessionLength": 0
            },
            {
                "day": 'D',
                "sessionLength": 60
            }
        ]
        
    
  return (
    <StyledDuration className='duration'>
        <ResponsiveContainer width='100%' aspect={1}>
                <LineChart  style={{backgroundColor: "#FF0000"}}
                            width={258}
                            height={263}
                            data={data}
                            margin={{
                                top: 50,
                                right: -2,
                                left: -60,
                                bottom: 10
                            }}
                        >    
                    
                    <CartesianGrid  vertical={false} 
                                    horizontal={false}
                                />
                    <XAxis  dataKey="day"
                            tickLine={false}
                            fillOpacity={0.5} 
                            style={{
                                transform: 'scale(0.9)',
                                transformOrigin: 'bottom'
                            }}
                            tick={{
                                fill:"#FFFFFF",
                                fontWeight:500,
                                fontSize:12
                            }} 
                            tickMargin={10} 
                            axisLine={false} 
                            interval="preserveStartEnd"
                        />
                    <YAxis  axisLine={false}
                            tickLine={false} 
                            tick={false}
                            domain={['dataMin - 5', 'dataMax + 5']}
                        />
                    <Tooltip    content={<CustomTooltip/>}
                                cursor={<CustomCursor/>}
                            />
                    <Line   type="natural"
                            dataKey="sessionLength" 
                            stroke="#FFFFFF"
                            dot={false}
                            opacity={0.8}
                            strokeWidth={2}
                        />
                    <text   className='title'
                            x="12%"
                            y="15%"
                            width={147}
                            height={48}
                            textAnchor="start" 
                            dominantBaseline="middle"
                            fill="#FFFFFF"
                            style={{
                                fontWeight:500,
                                opacity:0.5
                            }}
                        >
                        Durée moyenne des
                    </text>
                    <text   className='title'
                            x="12%"
                            y="25%"
                            width={147}
                            height={48}
                            textAnchor="start"
                            dominantBaseline="middle" 
                            fill="#FFFFFF"
                            style={{
                                fontWeight:500,
                                opacity:0.5
                            }}
                        >
                        sessions
                    </text>
                </LineChart>
            </ResponsiveContainer>
	</StyledDuration>
  )
}

export default Duration

Duration.propTypes = {
    data: PropTypes.array.isRequired
  }