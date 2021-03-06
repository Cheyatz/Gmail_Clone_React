import TopControls from "./top_controls/top_controls";
import CheckBox from "../Global/checkbox/checkbox";

import "./css/body.css";

export interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
	return (
		<div className="body-section">
			<TopControls />
		</div>
	);
};

export default Body;
