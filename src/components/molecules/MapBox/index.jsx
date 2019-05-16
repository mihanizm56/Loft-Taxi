import React, { Component, createRef } from "react";
import ReactMapGL from "react-map-gl";
import "./MapBox.css";

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coords: props.arrayOfCoords || [DEFAULT_CONSTANTS],
			viewport: {
				width: "100%",
				height: "100%",
				latitude: DEFAULT_CONSTANTS[0],
				longitude: DEFAULT_CONSTANTS[1],
				zoom: 8,
			},
		};

		this.map = null;
		this.mapContainer = createRef();
	}

	// componentDidMount() {
	// 	const { coords } = this.state;
	// 	const { map, mapContainer } = this;

	// 	mapboxgl.accessToken = appConfig["map-token"];
	// 	map = new mapboxgl.Map({
	// 		container: mapContainer.current,
	// 		style: "mapbox://styles/mapbox/streets-v9",
	// 		center: coords,
	// 		zoom: 15,
	// 	});
	// }

	mapContainer = createRef();

	map = null;

	componentWillUnmount() {
		this.map.remove();
	}

	render() {
		const { coords } = this.state;
		return (
			<div ref={this.mapContainer} className="map-container">
				<ReactMapGL {...this.state.viewport} onViewportChange={viewport => this.setState({ viewport })} />
			</div>
		);
	}
}
