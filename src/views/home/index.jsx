import React, { Component } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import {getBanner} from '@/api/index'
import 'swiper/dist/css/swiper.min.css'

import Swiper from 'swiper'
class Home extends Component {
    state = {
        banner:[]
    }
    render() {
        let {banner} = this.state;
        return (
            <div className="wrap">
                <Header></Header>
                <div className="con">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {banner.map(item => 
                                <div className="swiper-slide" key={item.url}>
                                    <img src={item.url} alt="" className="wf"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }

    componentDidMount(){
        getBanner().then(res => {
            if(res.data.code === 1){
                this.setState({
                    banner:res.data.data
                },() => {
                    new Swiper(".swiper-container")
                })
            }
        })
    }
}
export default Home