import React from 'react'
import DlItem from '../dl-item/dl-item'
import './classify-item.scss'

function ClassifyItem(props){
    let {banner,title,list} = props;
    return <div>
        <img src={props.banner} className="wf" onLoad={props.sRefresh}/>
        <div>---{title}----</div>
        <div className="list">
            {list.map(item => <DlItem {...item}></DlItem>)}
        </div>
    </div>
}

export default ClassifyItem
