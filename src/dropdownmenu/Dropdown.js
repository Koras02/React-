import React, {useState} from 'react'
import {Main,DropdownContainer,DropdownHeader,DropDownListContainer,DropDownList,ListItem} from './DropdownElements';


const options = ["Mangoes", "Apples", "Oranges"];

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <Main>
           <h1>Custom Select/drop</h1>
        <DropdownContainer>
            <DropdownHeader onClick={toggling} onSelect={onOptionClicked}>Mangoes</DropdownHeader>
         {isOpen && (
        <DropDownListContainer>
        <DropDownList>
            
            {options.map(option => (

                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                </ListItem>
            ))}
        </DropDownList>
        </DropDownListContainer>
        )}
        </DropdownContainer>
        </Main>
    )
}

