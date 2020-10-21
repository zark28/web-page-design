import React from "react";
import "./App.css";
import Header from "./components/Header";
// components
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
