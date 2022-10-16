import React from 'react'
import StyledScore from './Score.styled'

import {
        RadialBarChart,
        RadialBar, 
        ResponsiveContainer,
        PolarAngleAxis 
    } from 'recharts';

import PropTypes from 'prop-types'

const Score = ({data}) => {

  const dataTest = [{
        uv: 12,
        fill: '#E60000'
        }]

  return (
    <StyledScore className='score'>
        <ResponsiveContainer    width="100%"
                                aspect={1}
                            >
          <RadialBarChart   cx="50%" 
                            cy="50%" 
                            style={{backgroundColor: "#FBFBFB"}} 
                            width="100%" 
                            height="100%" 
                            margin={{
                                top: 30,
                                right: 30,
                                bottom: 30,
                                left: 30
                            }}
                            innerRadius={70} 
                            barSize={10}
                            data={dataTest}
                            startAngle={80}
                            endAngle={450}
                        >
            <circle cx="50%"
                    cy="50%"
                    fill="white"
                    r="70"
                />
            <PolarAngleAxis type='number'
                            domain={[0, 100]}
                            angleAxisId={1}
                            tick={false}
                        />
            <RadialBar  background dataKey="uv"
                        angleAxisId={1}
                        fill="#E60000"
                        cornerRadius="10"
                        data={[{
                            uv: 12,
                            fill: '#E60000'
                            }]}
                    />
            <text   className='score'
                    fontWeight="700"
                    fill='#282D30'
                    x="50%"
                    y="45%"
                    textAnchor='middle'
                >
                    {`${dataTest[0]['uv']}%`}
            </text>
            <text   className='text'
                    fontWeight="500"
                    fill='#74798C'
                    x="50%"
                    y="55%"
                    textAnchor='middle'
                >
                    de votre
            </text>
            <text   className='text'
                    fontWeight="500" 
                    fill='#74798C'
                    x="50%"
                    y="65%"
                    textAnchor='middle'
                >
                    objectif
            </text>
            <text   className='title'
                    x="12%"
                    y="15%"
                    width={147}
                    height={48}
                    textAnchor="start"
                    dominantBaseline="middle" 
                    fill="#20253A"
                    style={{ fontWeight:500}}
                >
                    Score
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
    </StyledScore>
  )
}

export default Score


// Score.propTypes = {
//   data: PropTypes.number.isRequired
// }