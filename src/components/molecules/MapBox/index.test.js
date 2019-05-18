// import React from "react";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl";
// import { shallow } from "enzyme";
// import { MapBox } from "./index";
// // import mapboxgl from "mapbox-gl";
// import jsdom from "jsdom";

// jest.mock("mapbox-gl");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><div id="myMap"></div>`);
// let mapDiv = dom.window.document.querySelector("div");
// let map = new mapboxgl.Map({ container: mapDiv });

// const { window } = new jsdom.JSDOM("", {
// 	url: "http://localhost",
// 	// Send jsdom console output to the node console object.
// 	virtualConsole: new jsdom.VirtualConsole().sendTo(console),
// });

// describe.x("MapBox", () => {
// 	describe("render", () => {
// 		it("should render correctly", () => {
// 			const testCoords = [[0, 1], [1, 2], [2, 3]];

// 			const component = shallow(<MapBox arrayOfCoords={testCoords} />);

// 			expect(component).toMatchSnapshot();
// 		});
// 	});

// 	describe("props", () => {
// 		it("should render correctly with some coords", () => {
// 			const testCoords = [[0, 1], [10, 20], [20, 30]];
// 			const component = shallow(<MapBox arrayOfCoords={testCoords} />);

// 			expect(component).toMatchSnapshot();
// 		});
// 		it("should render correctly without any coords", () => {
// 			const component = shallow(<MapBox arrayOfCoords={[]} />);

// 			expect(component).toMatchSnapshot();
// 		});
// 	});

// 	describe("functionality", () => {
// 		it("map is initialized", () => {
// 			const component = shallow(<MapBox />);
// 			const initializeMock = component.instance().initializeMap;

// 			expect(initializeMock).toBeCalled();
// 		});
// 	});
// });
