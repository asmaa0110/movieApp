import React, {
    Component
} from 'react'
import './HOC.css'

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHoc extends Component {
        constructor (props) {
            super (props) 
            this.state={
                neurone:false
            }
        
         setTimeout (()=> {this.setState({neurone:true})},3000);
        }
        render() {
            if (this.state.neurone===false) { 
        return <div className="loader"></div>

        }
    else {
        return <WrappedComponent/>
    }
}
    }
}
export default LoaderHOC;