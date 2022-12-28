import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {

    const news = (heading, subtitle) => {
        return <div className="widget_article">
            <div className="article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

  return (
    <div className='widget'>
        <div className="widget_head">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {news('REACT Programming', 'Creating the clone version')}
    </div>
  )
}

export default Widget