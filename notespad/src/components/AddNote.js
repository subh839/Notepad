import { useState } from "react";

const AddNote=({handleAddNote})=>{
    const [noteText,setNoteText]=useState('');
    const characterLimit= 300;
    const handleChange=(event)=>{
        if(characterLimit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    };


    const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

    return (
		<div className='note new'>
			<textarea
				rows='10'
				cols='12'
				placeholder='Type to add your note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} 
                    Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save the Note
				</button>
			</div>
		</div>
	);

};

export default AddNote;