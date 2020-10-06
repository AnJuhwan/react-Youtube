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
                <img  className={stlyes.img} src="/images/logo.png" alt="logo"/>
                <h1  className={stlyes.title}>Youtube</h1>
            </div>
            <input ref={inputRef}  className={stlyes.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
            <button  className={stlyes.button} type="submit" onClick={onClick}>
                <img className={stlyes.buttonImg} src="/images/search.png" alt="search"/>
            </button>
        </header>
    )
}


export default SearcHeader;