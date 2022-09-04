import React, { Component } from 'react'
import loading from './96x96.gif'

export class spinner extends Component {
    render() {
        return (
            <div className='text-center '>
                <img className='img-responsive center-block' src={loading} alt="loading" />
            </div>
        )
    }
}

export default spinner