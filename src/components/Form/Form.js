import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    age: 'kid',
    license: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label htmlFor="">
          Tag
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>
        <p>Kids age</p>
        <label>
          <input
            type="radio"
            name="age"
            value="newborn"
            onChange={this.handleChange}
            checked={this.state.age === 'newborn'}
          ></input>
          newborn
        </label>
        <label>
          <input
            type="radio"
            name="age"
            value="toddler"
            onChange={this.handleChange}
            checked={this.state.age === 'toddler'}
          ></input>
          toddler
        </label>
        <label>
          <input
            type="radio"
            name="age"
            value="kid"
            onChange={this.handleChange}
            checked={this.state.age === 'kid'}
          ></input>
          kid
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          ></input>
          license
        </label>
        <button type="submit" disabled={!this.state.license}>
          SUBMIT
        </button>
      </form>
    );
  }
}

export default Form;
