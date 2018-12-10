import React, { Component } from 'react';
import './App.css';

class UploadImage extends Component {
  logoFormData = new FormData()
  uploadRequest = new XMLHttpRequest();

  handleSubmit = (event) => {
    event.preventDefault();
    this.uploadRequest.open('POST', 'INSERT HERE', true);
    this.uploadRequest.setRequestHeader('authorization', 'INSERT HERE');
    this.uploadRequest.send(this.logoFormData);
  }

  handleChange = (event) => {
    const files = (event && event.target && event.target.files) || {};
    const file = files.length === 1 ? files[0] : null;

    if (!file) {
      return;
    }

    this.logoFormData = new FormData()
    this.logoFormData.append('image', file);
    this.logoFormData.append('maxSize', 480);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="file"
        />
        <button>
          Upload
        </button>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UploadImage/>
        </header>
      </div>
    );
  }
}

export default App;
