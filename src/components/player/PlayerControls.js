import React, {Component} from 'react';

class PlayerControls extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, status: 2 };
        this.timeoutId;
    }

    render() {
        let showClass = this.state.show ? 'in' : '';
        return (
            <div className={'PlayerControls custom-player-controls-wrapper' + showClass}
                onMouseMove={this._handleMouseMove.bind(this)}>

                <div className="video-close">
	                <a href='#' onClick={this._handleClose.bind(this)}>
	                	&times;
	                </a>
                </div>

                <div className='video-next'>
                    <a href='#'  onClick={this._handleSkip.bind(this)}>
                        NEXT VIDEO <i className='fa fa-step-forward'></i>
                    </a>
                </div>

                <div className="video-playback-controls">
	                <div className="video-play-pause">
	                    <a href='#' onClick={this._handlePlayPause.bind(this)}>
	                        { this.state.status == 1 ?
	                            <i className='fa fa-play'></i> :
	                            <i className='fa fa-pause'></i>
	                        }
	                    </a>
	                </div>

                    <div className='video-backward'>
                        <a href='#' onClick={this._handleRewind10.bind(this)}>
                            <i className='fa fa-backward'></i>
                        </a>
                    </div>

                    <div className='video-forward'>
                        <a href='#' onClick={this._handleForward10.bind(this)}>
                            <i className='fa fa-forward'></i>
                        </a>
                    </div>
                </div>

                <div className='upper-options-panel'>
                    <div className='video-title'>{this.props.videoTitle}</div>
                    <div className='show-list-trigger'></div>
                </div>
            </div>
        );
    }

    _handleRewind10(event) {
        event.preventDefault();
        this.props.onRewind(this);
    }

    _handlePlayPause(event) {
        event.preventDefault();
        this.props.onPlayPause(this);
    }

    _handleForward10(event) {
        event.preventDefault();
        this.props.onForward(this);
    }

    _handleSkip(event) {
        event.preventDefault();
        this.props.onSkip(this);
    }

    _handleClose(event) {
        event.preventDefault();
        this.props.onClose(this);
    }

    _handleMouseMove(event) {
        event.preventDefault();
        if (this.state.show) {
            clearTimeout(this.timeoutId);
        }
        this.setState(Object.assign(this.state, { show: true }));
        this.timeoutId = setTimeout(()=> {
            this.setState(Object.assign(this.state, { show: false }));
        }, 2500);
    }

    setStatus(statusCode) {
        this.setState(Object.assign(this.state, { status: statusCode}));
    }
}

PlayerControls.defaultProps = {
    videoTitle: '',
    onClose: ()=> {},
    onPlayPause: ()=> {},
    onRewind: ()=> {},
    onForward: ()=> {},
    onSkip: ()=> {}
};

export default PlayerControls;