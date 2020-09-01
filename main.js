import {createElement, render, Component} from './toy-react'

class MyComponent extends Component{
    render() {
        return <div>
            <h1>Hello Toy React</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="pop">
    <p>
       <span>d1d1d1d1d1d</span> 
    </p>
</MyComponent>, document.body)