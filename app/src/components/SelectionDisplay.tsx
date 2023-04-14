import React from "react";
import {Section} from "../scripts/soc";
import SectionDisplay from "./SectionDisplay";
// @ts-ignore
import {Droppable} from "react-drag-and-drop";
import {Selection} from "../scripts/generator";
import {GrClose} from "react-icons/gr"

interface Props {
    ind: number,
    selection: Selection,
    handleDrop: (ind: number, sectionNum: number) => Promise<void>,
    handleRemove: (sectionToRemove: Section) => void,
    handleDeleteSelection: (ind: number) => void,
}

export default function SelectionDisplay(props: Props) {
    // TODO: figure out type
    const doDrop = (data: any) => {
        const section: Section = JSON.parse(data['section']);
        // TODO: use unique identifier
        props.handleDrop(props.ind, section.number)
            .then();
    };

    const sectionDisplays = props.selection.map((section: Section) =>
        <SectionDisplay section={section} handleRemove={props.handleRemove}/>
    );

    return (
        <div>
            <Droppable types={['section']} onDrop={doDrop}>
                <div className="p-2 mx-1 mb-2 rounded-lg shadow-sm shadow-slate-400">
                    <div className={"flex justify-between"}>
                        <u>Course {props.ind + 1}</u>
                        <button className={"mx-1"}
                                onClick={() => props.handleDeleteSelection(props.ind)}
                        >
                            <GrClose/>
                        </button>
                    </div>

                    <div>
                        {sectionDisplays}
                    </div>
                </div>
            </Droppable>
        </div>
    );
}

