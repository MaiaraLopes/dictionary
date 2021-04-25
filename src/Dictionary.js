import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    }
    
    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f9170000100000151abdcc9e90a43e3aa9ff7407ae9d0b5";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <h1>Mai Dictionary</h1>
            <form className="search-word" onSubmit={search}>
                <input type="search" placeholder="Search your word here" autoFocus={true} onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
}