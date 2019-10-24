import React from 'react'
import "./css/Search.css";

class Search extends React.Component {

  
    render() {
        return(
          // <!-- Search form -->
          <div className="container">
            <div className="row col-md-8 form-search">
          <input className="form-control col rounded-0" type="text" placeholder="Search" aria-label="Search"/>
          {/* <div className="col"> */}
            <button type="button" className="btn btn-outline-info rounded-0">Search</button>
            {/* </div> */}
          </div>
          </div>


      //  <div className="col-md-2" onClick = {() => { this.props.handleIncrement(this.props.id); 
      //   this.props.shuffle(this.props.id)
      //   ; }} >
      //   <img  src={this.props.thisLink} alt="image of cartoon"/>
      // </div>
        )
    }
  }
  
  export default Search