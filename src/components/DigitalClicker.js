// Code DigitalClicker Component Here
import React from 'react'

// In the components/DigitalClicker.js file, create a DigitalClicker React component.
class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            // This component has an initial state property called timesClicked, which is initially defined as 0.
            timesClicked: 0,
        }
    }
    // Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker
