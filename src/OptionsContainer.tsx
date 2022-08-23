import React from "react";

type Props = {};

export default function OptionsContainer({}: Props) {
	return (
		<div className="box-border flex justify-between self-stretch border-b-2 border-solid border-black bg-white">
			<div className="flex justify-evenly gap-2">
				<LanguageSelector />
				<ThemeSelector />
			</div>
			<div className="flex justify-evenly"></div>
		</div>
	);
}

const LanguageSelector = () => {
	return (
		<>
			<select className="text-center" name="lang">
				<option disabled selected>
					---Select Language---
				</option>
				<option value="javascript">Javascript</option>
				<option value="css">CSS</option>
			</select>
		</>
	);
};
const ThemeSelector = () => {
	return (
		<select className="text-center">
			<option disabled selected>
				---Select Theme---
			</option>
			<option value="theme1">theme1</option>
			<option value="theme2">theme2</option>
			<option value="theme3">theme3</option>
			<option value="theme4">theme4</option>
			<option value="theme5">theme5</option>
		</select>
	);
};
