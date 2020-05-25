import React from 'react'
import Button from '../button/Button'

interface ListProps {
 words: string[]
}

interface ListStates {
  words: string[]
}

interface ColorMap {
  right: string
}

class ListOfWords extends React.PureComponent<ListProps> {
 render() {
   return <div>{this.props.words.join(',')}</div>;
 }
}

class WordAdder extends React.Component<ListProps, ListStates> {
 constructor(props: ListProps) {
   super(props);
   this.state = {
     words: props.words
   };
   this.handleClick = this.handleClick.bind(this);
 }

 updateColorMap(colormap: ColorMap) {
  //  To write this without mutating the original object
  // return Object.assign({}, colormap, {right: 'blue'});
  return {...colormap, right: 'blue'};
  }

 handleClick() {
  //  This section is bad style and causes a bug
  //  const words: string[] = this.state.words;
  //  words.push('das');  
  //  this.setState({words: words});

  //  the handleClick method above could be rewritten using concat as
  // this.setState(state => ({
  //   words: state.words.concat(['marklar'])
  // }));

  // es6
  this.setState(state => ({
    words: [...state.words, 'marklar'],
  }));
 }

 render() {
   return (
     <div>
       <button onClick={this.handleClick} ></button>
       <ListOfWords words={this.state.words} />
     </div>
   );
 }
}

export default WordAdder;