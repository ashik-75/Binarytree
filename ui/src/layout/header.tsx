import { Layout, Switch } from "antd";
import { Moon, Sun } from "lucide-react";
import style from "./layout.module.scss";

const { Header } = Layout;

interface HeaderProps {
	isDarkMode: boolean;
	colorBgContainer: string;
	handleThemeChange: (checked: boolean) => void;
}

function TopHeader({
	isDarkMode,
	colorBgContainer,
	handleThemeChange,
}: HeaderProps) {
	return (
		<Header
			style={{
				backgroundColor: isDarkMode ? "#292828" : "#f6f4f4",
			}}
			className={style.headerSp}
		>
			<div className={style.toggler}>
				<Switch
					className="switch"
					checkedChildren={
						<Moon size={16} style={{ marginTop: "2px" }} />
					}
					unCheckedChildren={<Sun size={16} />}
					onChange={handleThemeChange}
				/>
			</div>
		</Header>
	);
}

export default TopHeader;
