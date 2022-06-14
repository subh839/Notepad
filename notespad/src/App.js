import {useEffect,useState} from 'react';
import {nanoid} from 'nanoid';
import NotetakingList from './components/NotetakingList';
import Search from './components/Search';
import Header from './components/Header';

const App=()=>{
  const [notes,setNotes]=useState([
    {
      id: nanoid(),
      text: 'Taking Notes!',
      date: '14/06/2022',
    },
    {
      id: nanoid(),
      text: 'Everything is noted!',
      date: '15/06/2022',
    },
    {
      id: nanoid(),
      text: 'Everything is noted!!',
      date: '16/06/2022',
    },
    {
      id: nanoid(),
      text: 'Everything is noted!!',
      date: '16/06/2022',
    },
    {
      id: nanoid(),
      text: 'Everything is noted!!',
      date: '16/06/2022',
    },
  ]);

  const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);
// toggleing the modes

useEffect(()=>{
const savedNotes= JSON.parse(
localStorage.getItem('react-notes-app-data')
);
if(savedNotes){
  setNotes(savedNotes);
}
},[]);

useEffect(()=>{
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
},[notes]);

//delting from notes
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
};


const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};


return (
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotetakingList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  </div>
);
// return 

};

export default App;