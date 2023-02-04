import React, {Component} from 'react';
import './ItemDetails.css';

// Приём с рендер-функцией. На уровнеродителя контролируем, что будет отображаться в компоненте
// field, label приходят пропсами из characterPage, а item приходит из API
// item вставляется уже в рендере с помощью React.Children.map и React.cloneElement
const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {
    
    state = {
        item: null
    }

    // 1. Начало работы компонента.    
    componentDidMount() {
        this.updateItem();
    }
    
    // 3. Проверка на совпадение с предыдущими пропсами
    // При получении новых пропсов запускается componentDidUpdate
    // Айди в старых пропсах сравнивается с айди в новых пропсах, и если они равны - ничего ен произойдёт
    // Здесь то нужно для того, чтобы при получении новых пропсов не запускался снова п.2
    // иначе получится бесконечный цикл.
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    // 2. Получает идшник персонажа, асинхронно получает инфу по этому айди
    // персонаж записывается в стейт
    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select item in the list</span>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}