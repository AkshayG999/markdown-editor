import React, { Component } from 'react';
import marked from 'marked';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const DEFAULT_STATE = {
  input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
};
class MarkdownRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.handleChanges = this.handleChanges.bind(this);
  }
  componentDidMount() {
    this.updateMarkdownPreview();
  }
  handleChanges() {
    this.setState({input: event.target.value },this.updateMarkdownPreview);
  }
  updateMarkdownPreview() {
    
    document.getElementById("preview").innerHTML = marked(this.state.input);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6 no-left-right-padding">
          <textarea 
            id="editor" className="w-100 h-100"
            value={this.state.input}
            onChange={this.handleChanges}
          />
        </div>
        <div className="col-6 h-100" id="preview" />
      </div>
    );
  }
}

render(<MarkdownRenderer />, document.getElementById("app"));
