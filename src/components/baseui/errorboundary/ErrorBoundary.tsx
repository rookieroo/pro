import React from 'react'

interface stateType {
 hasError: boolean
}

class ErrorBoundary extends React.Component {
 constructor(props: any) {
   super(props);
 }

 state: stateType = { hasError: false };

 static getDerivedStateFromError(error: any) {
   // Update state so the next render will show the fallback UI.
   return { hasError: true };
 }

 componentDidCatch(error: any, errorInfo: any) {
   // You can also log the error to an error reporting service
   // logErrorToMyService(error, errorInfo);
 }

 render() {
   if (this.state.hasError) {
     // You can render any custom fallback UI
     return <h1>Something went wrong.</h1>;
   }

   return this.props.children; 
 }
}