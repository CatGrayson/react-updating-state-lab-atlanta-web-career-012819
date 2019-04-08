// Code YouTubeDebugger Component Here
import React from 'react'

// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
class YouTubeDebugger extends React.Component {
    constructor() {
        super()

        // This component has several state properties. The initial state shape looks like this:
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }

    }
    // Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    // Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrate}>
                    Change bitrate
                </button>
                <button className="resolution" onClick{this.handleChangeResolution}>
                    Change resolution
                </button>
            </div>
        )
    }
}
export default YouTubeDebugger