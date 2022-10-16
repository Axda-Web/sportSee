import React from 'react'
import StyledPerformance from './Performance.styled'
import {
        Radar,
        RadarChart,
        PolarGrid,
        PolarAngleAxis,
        PolarRadiusAxis,
        ResponsiveContainer
    } from 'recharts';

import PropTypes from 'prop-types'


const Performance = ({data}) => {

    const dataTest = [
        {
            "value": 80,
            "kind": "Cardio"
        },
        {
            "value": 120,
            "kind": "Energie"
        },
        {
            "value": 140,
            "kind": "Endurance"
        },
        {
            "value": 50,
            "kind": "Force"
        },
        {
            "value": 200,
            "kind": "Vitesse"
        },
        {
            "value": 90,
            "kind": "Intensité"
        }
    ]
    return (
        <StyledPerformance className='performance'>
            <ResponsiveContainer    width="100%"
                                    aspect={1}
                                >
                <RadarChart margin={{
                                top: 30,
                                right: 30,
                                bottom: 30,
                                left: 30
                            }} 
                            style={{ backgroundColor: "#282D30" }}
                            data={dataTest}
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


// Performance.propTypes = {
//     data: PropTypes.array.isRequired
// }