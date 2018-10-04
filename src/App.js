// @flow

import React, { Component } from "react";
import { connect } from "react-redux"

import "mini.css/dist/mini-default.css"
import './App.css';

import { Header } from "./Header";
import { Editor } from "./components/Editor";

type Props = {}

export class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Header />
        <Editor />
      </div>
    );
  }
}

export const ConnectedApp = connect()(App)
