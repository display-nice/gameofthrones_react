import React, {Component} from 'react';
import './randomChar.css';
import GoTService from '@services/GoTService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default class RandomChar extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    goTService = new GoTService();
    state = {
        char: {},
        isLoading: true,
        error: false,
    }

    componentDidMount() {
        // console.log('RandomChar mounted');
        this.updateChar();
        // Включение таймера
        // this.timerId = setInterval(this.updateChar, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            isLoading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            isLoading: false,
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 11);
        // const id = 15000;
        this.goTService.getCharacter(id)
            .then(this.onCharLoaded )
            .catch(this.onError);
    }

    render() {
        const {char, isLoading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null ;
        const spinner = isLoading ? <Spinner/> : null ;
        const content = !(isLoading || error) ? <View char={char}/> : null;
        
        return (
            <div className="random-block rounded">
                <h4 style={{color: "gray"}}>randomChar.jsx</h4>
                {errorMessage}
                {spinner}
                {content}
                {/* <View char={char}/> */}
                {/* <Spinner/> */}
            </div>
        );
    }
}

