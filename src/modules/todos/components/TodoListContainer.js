import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import TodoList from "./TodoList";

export class TodoListContainer extends Component {
  render() {
    return <TodoList todos={this.props.todos} />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
