import React, { Component } from 'react';
import axios from 'axios';
import Categories from "./Categories.js"

export class SearchInput extends Component {
constructor(props){
    super(props);
this.state={
        query:'',
        results: {},     
};
this.cancel = '';
}
handleSubmit = e => {
        e.preventDefault();
    }
fetchSearchResults = (updatedPage = '', query ) => {
        const pageNum = updatedPage ? `&page=${updatedPage}` : '';
    const searchUrl = `https://pixabay.com/api/?key=17367042-6a0dd41e2f0b54dfaefc1d64c&q=${query}${pageNum}`;
    if(this.cancel){
        this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
	axios
		.get(searchUrl, {
            cancelToken: this.cancel.token,
        })
		.then((res) => {
           
            this.setState({
                results: res.data.hits.slice(0,8)
            })
			// console.warn(res)	
        })
        .catch(err => {
            if(axios.isCancel(err) || err){
                this.setState({

                })
            }
        })
		
};

handlechange = (event) => {
    const query = event.target.value;
   
        this.setState({ query}, () => {
            this.fetchSearchResults(1, query);
        });
        
    }
    renderSearchResults = () => {
        const {results} = this.state;
        if(Object.keys(results).length && results.length){
            return (
                <div className="results-container">
                    {results.map(result => {
                        return (
                            <a key={result.id} href={result.previewURL} className="result-item">
                                <h6 className="image-username">{result.username}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={`${result.username}`}/>
                                </div>
                            </a>    
                        )
                    })}
                  
                </div>
            )
        }
    }
    render() {
        const { query } = this.state;
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div className="SearchInput">
                    <input type="text" id="search-input" placeholder="Search..." style={inputStyle} value={query} onChange={this.handlechange}/>
                    <button id="search-button"  style={buttonStyle}><img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQACkb66OsWQGfGxZ93tEdM_xzsTiUb-ySS_10mp_WKMEkw2zMU&usqp=CAU" alt="Search" /></button>
                    </div>
                   
                
            </form>
            {query ? this.renderSearchResults() : null}
            {!query ? <Categories /> : null} 
            </div>
        )
    }
}
const inputStyle ={
    height: '35px',
    width: '400px',
    borderColor:'black'
}
const imgStyle={
    height: '30px',
    width: '20px',
    backgroundColor:'black'   
}
const buttonStyle={
    borderColor:'black',
    backgroundColor:'black',
    
}
export default SearchInput
