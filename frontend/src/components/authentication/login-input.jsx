import React from "react";

export function LoginInput(props) {
	return (
		<input
			className="my-1 px-3 py-2 rounded-3 w-75"
			type={props.type}
			placeholder={props.placeholder}
			{...props.bindValue}
			style={{
				backgroundColor: "#c4c4c4",
				border: "1px solid #ccc",
				fontWeight: "bold",
			}}
		/>
	);
}