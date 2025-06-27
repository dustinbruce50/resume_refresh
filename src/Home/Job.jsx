import React from 'react'

const Job = ({company, timeframe, title, description, learned}) => {
  return (
    <div id='jobexp' >
        <div className="company">
            {company}
            {" " + timeframe}
        </div>
        <div className="title">
            {title}
        </div>
        <div className="description">
            {description}
        </div>
        <div className="learned">
            {learned}
        </div>
    </div>
  )
}

export default Job