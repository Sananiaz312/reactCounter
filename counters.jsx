import React, { Component } from "react";
import Counter from "./counter";
import { throwStatement } from "@babel/types";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(x => (
          <Counter
            key={x.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            x={x}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
