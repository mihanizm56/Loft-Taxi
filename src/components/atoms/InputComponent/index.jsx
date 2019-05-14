//
import React, { PureComponent } from "react";

type InputComponentProps = {
	text: string,
	className: string,
};

export class InputComponent extends PureComponent<InputComponentProps> {
	static defaultProps = {
		type: "text",
		placeholder: "default placeholder",
	};

	constructor() {
		super();

		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.props.getRef(this.inputRef);
	}

	render() {
		const {
			type,
			className,
			placeholder,
			customFontSize,
			backgroundColor,
			input: inputFormListeners,
			autocompleteOff,
			handleChange,
			value,
		} = this.props;
		const dragOff = type === "password" ? true : false;
		return (
			<input
				{...inputFormListeners}
				ref={this.inputRef}
				type={type}
				onChange={({ target: { value } }) => (handleChange ? handleChange(value) : inputFormListeners.onChange(value))}
				className={className}
				placeholder={placeholder}
				autoComplete={autocompleteOff && "off"}
				onDrop={dragOff ? event => event.preventDefault() : null}
				value={value}
				style={
					customFontSize
						? { fontSize: customFontSize }
						: null || backgroundColor
						? { backgroundColor: backgroundColor }
						: null
				}
			/>
		);
	}
}
