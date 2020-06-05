import React from 'react';
import CustomButton from '../button/Button';

function WarningButton() {
  // 没有显式使用react，也得导入react  
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}


const MyComponents = {
 DatePicker: function DatePicker(props: any) {
   return <div>Imagine a {props.color} datepicker here.</div>;
 }
}

function BlueDatePicker() {
 return <MyComponents.DatePicker color="blue" />;
}