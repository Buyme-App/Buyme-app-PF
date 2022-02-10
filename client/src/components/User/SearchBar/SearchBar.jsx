import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

//   function handleInputChange(e){
//       e.preventDefault();
//       setName(e.target.value); // EL VALUE DEL STATE VA A TOMAR EL VALUE DEL INPUT
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!name) {
//       return alert('Please enter a name to start the search');
//     } else {
//       dispatch(getNamePokemons(name));  
//       setName('');
//     }
//   }

  return (
    <div className={styles.search}>
      <input
      type='text'
      // value={name}
      className={styles.input}
      placeholder='Search by product name...'
      // onChange={(e) => handleInputChange(e)}
      />
      {/* <button className={styles.go} type='submit' onClick={(e) => handleSubmit(e)}>GO!</button> */}
      <button className={styles.go} type='submit'><BsSearch /></button>
    </div>
  )
}
