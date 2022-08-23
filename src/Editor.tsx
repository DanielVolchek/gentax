import React, { ChangeEvent, FormEventHandler, SyntheticEvent } from "react";

type Props = {
	onInput: (event: React.FormEvent<HTMLTextAreaElement>) => void;
};

export default function EditorBlock({ onInput }: Props) {
	return (
		<textarea
			onInput={onInput}
			className="h-full w-full resize-none overflow-auto bg-white"></textarea>
	);
}
