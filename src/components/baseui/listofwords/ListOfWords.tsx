import React from 'react'
import Button from '../button/Button'

interface ListProps {
 words: string[]
}

class ListOfWords extends React.PureComponent<ListProps> {
 render() {
   return <div>{this.props.words.join(',')}</div>;
 }
}

class WordAdder extends React.Component<ListProps> {
 constructor(props: ListProps) {
   super(props);
   this.state = {
     words: ['marklar']
   };
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   // This section is bad style and causes a bug
   const words = this.state.words;
   words.push('marklar');
   this.setState({words: words});
 }

 render() {
   return (
     <div>
       <Button onClick={this.handleClick} ></Button>
       <ListOfWords words={this.state.words} />
     </div>
   );
 }
}

export default ListOfWords;