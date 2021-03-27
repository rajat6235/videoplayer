import React from 'react';
class SearchBar extends React.Component{
    state={ text:''};
    onInputChange=(event)=>{
       
        this.setState({text: event.target.value});
    };
    /* this can be avoided if we use in linefunction
    onChange={e=> this.setState({text:e.target.value})}
    */
    onFormSubmit=event=>{
        event.preventDefault();
      this.props.onFormSubmit(this.state.text);  // calling that prop(onformsubmit)with text so that our parent component knows what the current search term is anytime user submits the form 
    }
    render(){
        return (
            <div className="search-bar ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
<div className="field">
    <label> Video Search</label>
    <input 
    type="text" 
     value={this.state.text}
         onChange={this.onInputChange} 
     />
</div>
            </form>
            </div>
    
        );}
}
export default SearchBar;