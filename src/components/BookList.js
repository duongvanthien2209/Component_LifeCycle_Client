import React, { Component } from 'react';
import axios from 'axios';

import './BookList.css';

export default class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3004/books').then(res => {
            this.setState({
                books: res.data
            });
        })
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <h1>Books</h1>

                <div className="books">
                    {
                        this.state.books.map(item => {
                            return (
                                <div className="book-item">
                                    <img src={item.image} />
                                    <div className="book-item__content">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <button>Thêm</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}