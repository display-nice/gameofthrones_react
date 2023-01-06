import React, {Component} from 'react';
import './randomChar.css';
import GoTService from '@services/GoTService';
import Spinner from '../spinner/spinner';

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
        this.updateChar();
    }
    goTService = new GoTService();

    state = {
        char: {},
        isLoading: true,
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            isLoading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*140 + 11);
        this.goTService.getCharacter(id)
            .then(this.onCharLoaded )
    }

    render() {
        const {char, isLoading} = this.state;
        const content = isLoading ? <Spinner/> : <View char={char}/> ;
        
        return (
            <div className="random-block rounded">
                {content}
                {/* <View char={char}/> */}
                {/* <Spinner/> */}
            </div>
        );
    }
}

