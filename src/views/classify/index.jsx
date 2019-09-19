import React, { Component } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import ClassifyItem from '@/components/classify-item/classify-item'
import {getClassify} from '@/api/index'
import './classify.scss'
import BetterScroll from 'better-scroll'

class Classify extends Component {
    state = {
        classifyData:[],
        choose:0,
        topArr:[]
    }
    render() {
        let {classifyData,choose} = this.state;
        return (
            <div className="wrap">
                <Header title="分类"></Header>
                <div className="con">
                    <div className="left">
                        <ul>
                            {classifyData.map((item,ind) => <li onClick={() => {this.choose(ind)}} className={choose===ind ? 'high':''}  key={ind}>{item.title}</li>)}
                        </ul>
                    </div>
                    <div className="right">
                        <div ref="scroll-wrap">
                            {classifyData.map((item,ind) => <ClassifyItem sRefresh={this.sRefresh} {...item}></ClassifyItem>)}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }

    componentDidMount(){
        getClassify().then(res => {
            if(res.data.code === 1){
                this.setState({
                    classifyData:res.data.data
                },() => {
                   this.scroll = new BetterScroll('.right',{click:true,probeType:3});
                   this.scroll.on('scroll',(pos) => {
                        let top = Math.abs(pos.y);
                        let {topArr} = this.state;
                        topArr.forEach((item,ind) => {
                            if(top>item && top<topArr[ind+1]){
                                this.setState({
                                    choose:ind
                                })
                            }
                        })
                    })
                })
            }
        })
    }

    sRefresh = () => {
        this.scroll.refresh();
        let divList = Array.from(this.refs['scroll-wrap'].children);
        let topArr = divList.map(item => {
            return item.offsetTop-44
        })
        let lastInd = topArr.length - 1;
        let last = topArr[lastInd] + divList[lastInd].offsetHeight;

        topArr.push(last)
        // 最后一个的滚动的高度  + 最后一个元素的高度
        this.setState({
            topArr
        })

        console.log(topArr)
    }

    choose = (ind) => {
        //1.高亮
        //2.滚动
        this.setState({
            choose:ind
        })

        let target = this.refs['scroll-wrap'].children[ind];

        this.scroll.scrollToElement(target)
    }
}
export default Classify