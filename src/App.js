import React,{Component} from 'react';

import './App.css';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Vadapav", votes: 0},
				{name: "Dabeli", votes: 0},
				{name: "Puff", votes: 0},
				{name: "Samosa", votes: 0}
      ]    
      
		}
  }

  vote (i) {
    let newLanguages = [...this.state.languages];
     
    newLanguages[i].votes++;
    
		this.setState({languages: newLanguages});
		
  }
  
  render(){
    
    return(
      <React.Fragment>
				<h1>Let's Order Something! Please Vote!!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Vote</button>
							</div>
						)
					}
				</div>
		</React.Fragment>
		);
	}
}
export default App;
