import React, { Component } from 'react'

export class Images extends Component {
    render() {
        return (
            <div>
                <h1>Mountain Pictures</h1>
                <div className="image-row">
                <div className="image-click zoomin" >
                    <img src="https://farm66.staticflickr.com/65535/49972569466_98346593d3_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49971811878_131fc17fa8_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49972548336_cb4ea49230_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49971875918_59ded140e0_m.jpg" alt="Mountains"/>
                </div><br/>
                <div className="image-click zoomin" >
                    <img src="https://farm66.staticflickr.com/65535/49972010243_7e28ec4983_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49971881253_aa223c19e3_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49972320176_41f248def1_m.jpg" alt="Mountains"/>
                    <img src="https://farm66.staticflickr.com/65535/49972431567_0f5418d6a0_m.jpg" alt="Mountains"/>
                </div>
                </div>
            </div>
        )
    }
}

export default Images
