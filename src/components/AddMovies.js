import React, { useRef } from 'react';
import './AddMovies.css';

function AddMovies(props) {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

    // Clear the input fields after submitting
    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className='input[type="text"]'>
        <label className='label'>Title</label>
        <input type="text" ref={titleRef} placeholder="Enter Title" />
      </div>
      <div className='input[type="text"]'>
        <label className='label'>Opening Text</label>
        <input type="text" ref={openingTextRef} placeholder="Brief Movie" />
      </div>
      <div className='input[type="text"]'>
        <label className='label'>Release Date</label>
        <input type="text" ref={releaseDateRef} placeholder="Enter Release Date" />
      </div>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Add Movies</button>
    </form>
  );
}

export default AddMovies;
