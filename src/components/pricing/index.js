import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {

    state = {
        prices: [100,250,450],
        positions: ['Sec 520 Row Q', 'Sec 135 Row F', 'Suites'],
        desc: [
            'Quo labore noluisse ne, omnis aliquid postulant vix ea, qui veri simul ex. At mel aeque explicari.',
            'Quo labore noluisse ne, omnis aliquid postulant vix ea, qui veri simul ex. At mel aeque explicari.',
            'Quo labore noluisse ne, omnis aliquid postulant vix ea, qui veri simul ex. At mel aeque explicari.'
        ],
        linkto:['http://sales/balcony','http://sales/floor','http://sales/stage'],
        delay:[500,0,500]

    }

    showBoxes = () => (
       this.state.prices.map((box,i)=>(

        <Zoom delay={this.state.delay[i]} key={i}>
<div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                    <span>${this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                       <MyButton
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}
                       />
                    </div>
                </div>
            </div>
        </Zoom>
            

       ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Ticket Prices</h2>
                    <div className="pricing_wrapper">
                       {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;