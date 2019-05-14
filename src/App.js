import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      celebrities: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Movie Celebrities</h1>
        {!this.state.celebrities && <div>Loading...</div>}
        {this.state.celebrities && <table>
          <thead>
          </thead>
          <tbody>            
            {this.state.celebrities.map(celebrity => <tr key={celebrity.id}>
              <td><img src={"https://image.tmdb.org/t/p/w185"+celebrity.profile_path} alt=""/></td>
              {celebrity.name}
            </tr>)}
          </tbody> 
        </table>}
      </div>
    );
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/person/popular?page=1&api_key=edd6d22f532f0ca3a08f5e0c57ed3274')
    .then(response => {
      console.log(response.data.results)
      this.setState({
        celebrities: response.data.results
      })
    })
  }
}

export default App;
