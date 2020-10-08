import stlyes from './search_header.module.css';

import React from 'react';
import { useRef } from 'react';

const SearcHeader = ({onSearch}) => {
    const inputRef =useRef();

    const handleSearch = () => {
        const value =inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    return(
        <header className={stlyes.header}>
            <div className={stlyes.logo}>
                <img src="http://localhost:3000/react-Youtube/images/logo.png" alt="logo" className={stlyes.img} />
                {/* {process.env.PUBLIC_URL+'/images/logo.png'} */}
                <h1 className={stlyes.title}>Youtube</h1>
            </div>
            <input ref={inputRef}  className={stlyes.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
            <button  className={stlyes.button} type="submit" onClick={onClick}>
                <img src="http://localhost:3000/react-Youtube/images/search.png" alt="search" className={stlyes.buttonImg} />
                {/* {process.env.PUBLIC_URL+'/images/search.png'} */}
            </button>
        </header>
    )
}


export default SearcHeader;