import React, { Component } from 'react';


const lists = {
  from: {
    name: 'from',
    hint: 'from:@member',
  },
  in: {
    name: 'in',
    hint: 'in:@channel',
  },
};

const Hint = ({ description, onMouseDown }) => <div onMouseDown={onMouseDown}>{description}</div>;

export default class AdavancedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleHintClick = this.handleHintClick.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleHintClick(e) {
    debugger;
    this.setState({ value: 'from' });
    this.input.focus();
  }

  renderHints() {
    const { value } = this.state;
    if (this.state.hasFocus) {
      return Object.keys(lists)
        .filter(key => key.indexOf(value) > -1)
        .map((key, i) => <Hint
          description={lists[key].hint}
          onMouseDown={() => this.input.focus()}
          key={i} />);
    }

    return null;
  }

  render() {
    return (
      <div>
        <input
          ref={elm => (this.input = elm)}
          placeholder="search..."
          onFocus={() => this.setState({ hasFocus: true })}
          onBlur={() => this.setState({ hasFocus: false })}
          value={this.state.value}
          onInput={this.handleChange}
        />
        <div>
          {this.renderHints()}
        </div>
      </div>
    );
  }
}
