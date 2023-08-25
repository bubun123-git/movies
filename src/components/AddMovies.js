import React from 'react';
import './AddMovies.css';

function AddMovies() {
    return (
        <form className="form">
            <div className='input[type="text"]'>
                <label className='label'>Title</label>
                <input type="text" placeholder="Enter Title" />
            </div>
            <div className='input[type="text"]'>
                <label className='label'>Opening Text</label>
                <input type="text" placeholder="Brief Movie" />
            </div>
            <div className='input[type="text"]'>
                <label className='label'>Release Date</label>
                <input type="text" placeholder="Enter Release Date" />
            </div>
        </form>
    );
}

export default AddMovies;
