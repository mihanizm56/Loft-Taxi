import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getAllRoutesState,
	getOfferDoneState,
	fetchAllAddressesAction,
	makeNewOfferAction,
	fetchCoordsAction,
	getChoosenCoords,
} from "../../../redux/modules/Adresses";

class WrappedContainer extends Component {
	static defaultProps = {
		fetchAllAddresses: () => console.log("default fetchAllAddresses"),
	};

	componentDidMount() {
		console.log("check AuthStoreProvider props");
		console.log(this.props);
		this.props.fetchAllAddresses();
	}

	chooseTripRoute = ({ from, to }) => {
		console.log("chooseTripRoute", from, to);
		this.props.chooseRoute(from, to);
	};

	createNewOffer = () => {
		console.log("createNewOffer");
		this.props.createNewOffer();
	};

	render() {
		const { children, fetchAllAddresses, createNewOffer, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				chooseTripRoute: this.chooseTripRoute,
				createNewOffer: this.createNewOffer,
				...restProps,
			})
		);
	}
}

const mapStateToProps = store => {
	return {
		allRoutes: getAllRoutesState(store),
		offerDoneStatus: getOfferDoneState(store),
		arrayOfCoords: getChoosenCoords(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchAllAddresses() {
			dispatch(fetchAllAddressesAction());
		},
		chooseRoute(from, to) {
			dispatch(fetchCoordsAction(from, to));
		},
		createNewOffer() {
			dispatch(makeNewOfferAction());
		},
	};
};

export const AddressesStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
