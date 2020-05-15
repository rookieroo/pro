import React, { Component } from 'react';
import Button from './Button'; // 从其他文件导入一个组件

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;