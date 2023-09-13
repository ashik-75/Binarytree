import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import style from "./ColorPicker.module.scss";
import { Card, Form, Space } from "antd";
import { ColorPicker as CP } from "@mantine/core";
import { INITIAL_COLOR, INITIAL_FORMAT } from "./utils/constants";
import ColorFormatTags from "./components/ColorFormatTags";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import DisplayColors from "./components/DisplayColors";
import { FormatType } from "./utils/types";
import { calculateColors, determineFormat } from "./utils/helper";
import CopyInput from "components/Layouts/CopyInput";

import useUrlParams from "lib/utils/hooks/useUrlParams";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";

const ColorPicker: React.FC = () => {
	const [params, updateUrlParam, searchParams] = useUrlParams({
		color: INITIAL_COLOR,
	});

	const [color, setColor] = useState(
		searchParams.get("color") || (params.color as string)
	);
	const [format, setFormat] = useState<FormatType>(
		determineFormat(color) || INITIAL_FORMAT
	);

	const colors = useMemo(() => calculateColors(color), [color]);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value.trim();
		setColor(input);
		setFormat(determineFormat(input));
	};

	useEffect(() => {
		updateUrlParam("color", color);
	}, [color]);

	return (
		<Form layout="vertical">
			<div className={style.cp}>
				<Card bordered={false}>
					<Space direction="vertical" wrap>
						<CopyInput>
							<ResponsiveInputWithLabel
								label="Color code"
								value={color}
								onChange={onInputChange}
								type="text"
							/>
							<Clipboard
								text={color}
								clipboardComponent={ClipboardButton}
							/>
						</CopyInput>
						<Form.Item label="Color format">
							<ColorFormatTags
								currentFormat={format}
								onSelect={setFormat}
							/>
						</Form.Item>

						<CP
							format={format}
							value={color}
							onChange={setColor}
							size="xl"
						/>
					</Space>
				</Card>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="colors"
					title="Colors"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="variables"
					title="CSS variables"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="use-variables"
					title="Use CSS variables"
				/>
			</div>
		</Form>
	);
};

export default ColorPicker;
