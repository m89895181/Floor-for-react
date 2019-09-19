import React from 'react'
import './dl-item.scss'

function DlItem(props){
    let {url,title,id} = props;
    return <dl className="dl-item">
        <dt>
            <img src={url} alt=""/>
        </dt>
        <dd>
            {title}
        </dd>
    </dl>
}

export default DlItem