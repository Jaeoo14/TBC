import React, { Component } from 'react';
import Pas from '../ProjectApiService';

class DisplayImage extends Component {
	state = {
		file: {},
	};

	componentDidMount = () => {
		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
		if (prevProps.pId === this.props.pId) return;

		Pas.getFileOfProject(this.props.pId)
			.then(res => this.setState({ file: res.data }, () => console.log(this.state.file)))
			.catch(err => console.log(err));
	}

	render() {
    return (<img src={`data:image/png;base64,${this.state.file.data}`} alt='' width={this.props.width} />);
	}
}

export default DisplayImage;
