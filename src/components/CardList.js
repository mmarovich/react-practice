import React, {Component} from 'react';

import Card from './Card';

let data = {
    profiles: [
        {
            name: "Maxwell Marovich",
            hobbies: ["tennis", "Settlers of Catan"],
            number: 1
        },
        {
            name: "Jose Huizar",
            hobbies: ["programming", "drawing"],
            number: 2
        }
    ]
}

class CardList extends Component {
    render() {
        const dataManipulated = data.profiles.map((item, index) => {
            return <Card data={item} key={index} />;
        })
        return(
            <div className="card-list-container">
                {dataManipulated}
            </div>
        )
    }
}




export default CardList;