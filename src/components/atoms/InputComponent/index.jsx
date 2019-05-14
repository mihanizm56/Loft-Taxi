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
			handleChange,
			value,
			meta: { touched, error },
		} = this.props;
		return (
			<>
				<input
					{...inputFormListeners}
					type={type}
					onChange={({ target: { value } }) =>
						handleChange ? handleChange(value) : inputFormListeners.onChange(value)
					}
					placeholder={placeholder}
					value={value}
				/>
				{touched && (error && <div>{error}</div>)}
			</>
		);
	}
}
