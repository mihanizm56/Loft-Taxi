import React, { Component, createRef } from "react";
import { isEqual, uniqueId } from "lodash";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { EMPTY_ARRAY } from "../../../constants";
import "./MapBox.css";

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.arrayOfCoords && nextProps.arrayOfCoords.length
			? { ...prevState, coords: nextProps.arrayOfCoords }
			: { ...prevState, coords: EMPTY_ARRAY };

		return { ...prevState };
	}

	constructor() {
		super();

		this.state = {
			coords: [],
		};

		this.map = null;
		this.mapContainer = createRef();
	}

	componentDidMount() {
		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

		this.initializeMap(DEFAULT_CONSTANTS);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !isEqual(nextState, this.state) ? true : false;
	}

	componentDidUpdate(prevState) {
		if (!isEqual(prevState, this.state)) {
			this.addTheLine(this.state.coords);
			this.flyToPoint(this.state.coords[0]);
		}

		if (!this.state.coords.length) {
			console.log("REMOVING THE LAYER");
			this.removeLayer();
		}
	}

	componentWillUnmount() {
		this.map.remove();
	}

	initializeMap = centerCoords => {
		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: centerCoords,
			zoom: 15,
		});
	};

	addTheLine = arrayOfCoords => {
		this.map.addLayer({
			id: "route",
			type: "line",
			source: {
				type: "geojson",
				data: {
					type: "Feature",
					properties: {},
					geometry: {
						type: "LineString",
						coordinates: arrayOfCoords,
					},
				},
			},
			layout: {
				"line-join": "round",
				"line-cap": "round",
			},
			paint: {
				"line-color": "#888",
				"line-width": 8,
			},
		});
	};

	removeLayer = () => {
		this.map.removeLayer("route");
		this.map.removeSource("route");

		if (this.map.getSource("route")) this.map.removeSource("route");
	};

	flyToPoint = coords => {
		this.map.flyTo({
			center: coords,
		});
	};

	render() {
		return <div ref={this.mapContainer} className="map-container" onClick={this.test} />;
	}
}
