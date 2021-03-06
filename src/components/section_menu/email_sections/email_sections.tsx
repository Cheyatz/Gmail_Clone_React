import SectionList from "../../Global/section_list/section_list";

const EmailSections: React.FC = () => {
	return (
		<div className="section-menu-email-sections">
			<SectionList
				selection={true}
				margin={0.4}
				reducer="emailSectionListReducer"
			/>
		</div>
	);
};

export default EmailSections;
