import { Col, Row } from "antd";
import React from "react";
import { InputGridProps } from "./utils/types";

const InputGrid: React.FC<InputGridProps> = ({ children, className }) => {
	const [children1, children2] = React.Children.toArray(children);

	return (
		<Row gutter={[16, 0]} className={className}>
			<Col xs={24} sm={24} md={24} lg={12}>
				{children1}
			</Col>
			<Col xs={24} sm={24} md={24} lg={12}>
				{children2}
			</Col>
		</Row>
	);
};

export default InputGrid;
