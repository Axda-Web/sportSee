import PropTypes from 'prop-types'
import StyledPerformance from './Performance.styled'

import {
        Radar,
        RadarChart,
        PolarGrid,
        PolarAngleAxis,
        PolarRadiusAxis,
        ResponsiveContainer
    } from 'recharts';



/**
 * Display a radar chart 
 * @component
 * @param {Object[]} data - User performance data
 * @returns {JSX.Element} - Performance component
 */
const Performance = ({data}) => {
    
    return (
        <StyledPerformance className='performance'>
            <ResponsiveContainer    width="100%"
                                    height='100%'
                                >
                <RadarChart margin={{
                                top: 30,
                                right: 30,
                                bottom: 30,
                                left: 30
                            }} 
                            style={{ backgroundColor: "#282D30" }}
                            data={data}
                        >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind"
                                tickLine={false}
                                axisLine={false}
                                dy={5}
                                stroke="#FFF"
                                tick={{
                                    fill:"#FFFFFF",
                                    fontSize:10
                                }}
                            />
                <PolarRadiusAxis    tick={false}
                                    tickCount={6}
                                    axisLine={false}
                                />
                <Radar  dataKey="value"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </StyledPerformance>
    );
};

export default Performance;


Performance.propTypes = {
    data: PropTypes.array.isRequired
}