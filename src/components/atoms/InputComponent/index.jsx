import React, { PureComponent } from "react";

export class InputComponent extends PureComponent<InputComponentProps> {
	static defaultProps = {
		type: "text",
		placeholder: "default placeholder",
	};

	render() {
		// console.log("check InputComponent props", this.props);
		const {
			type,
			placeholder,
			input: inputFormListeners,
			meta: { touched, error },
			...restProps
		} = this.props;
		return (
			<>
				<input {...inputFormListeners} type={type} placeholder={placeholder} {...restProps} />
				{touched && (error && <div>{error}</div>)}
			</>
		);
	}
}
