import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [itemlist, setItemList] = useState([]);
    let [newItemName, setNewItemName] = useState('')
    let [newItemQuantity, setNewItemQuantity] = useState(0)
    let [newItemUnit, setNewItemUnit] = useState('')

    useEffect(() => {
        getItemList();
    }, [])

    const getItemList = () => {
        // console.log(`in getItemList`);

        // TODO: Confirm route
        axios.get('/itemList').then(response => {
            console.log(`response: `, response.data);
            setItemList(response.data)
        })
    }


    // ToDo: Confirm route; variables
    const addItem = (newItem) => {
        console.log(`newItem:`, newItem);

        axios.post('/itemList', newItem)
            .then((response) => {
                getItemList();
            })
            .catch(err => {
                alert('Error in post route - addItem')
                console.log(`Error:`, err);
            })
    }

    const resetList = () => {
        console.log(`Resetting List...`);
        axios.post('/itemList/reset')
        .then((response) => {
            console.log(`list reset`);
            getItemList();
        })
        .catch(err => {
            alert('Error resetting list')
            console.log(`Error:`, err);
        })
    }

    const clearList = () => {
        console.log(`Clearing List...`);
        axios.post('/itemList/clear')
            .then((response) => {
                console.log(`list cleared`);
                getItemList();
            })
            .catch(err => {
                alert('Error clearing list')
                console.log(`Error:`, err);
            })
    }

    // ToDO Confirm variables, route
    const deleteItem = (deleteItemID) => {
        console.log(`In deleteItem working on ID#:`, deleteItemID);

        axios.delete('/itemList/:id').then(response => {
            console.log(`Item with ID:`, deleteItemID, `deleted.`);
        })
            .catch(err => {
                alert('error deleting item with ID:', deleteItemID);
                console.log(`Delete Item ID err:`, err);
            })
    }

    const buyItem = (buyItemID) => {
        console.log(`In buyItem working on ID#:`, buyItemID);

        axios.put('/itemList/:id').then(response => {
            console.log(`Item ID:`, buyItemID, 'marked as purchased');
        })
            .catch(err => {
                alert('error in PUT Route in buyItem');
                console.log(`error:`, err);
            })
    }

    // TBD where this goes, inside something that happens on button click
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`In handleSubmit`);
        newItem = {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit,
            purchased: false
        }
        addItem(newItem)
    }

    return (

        <div className="App">
            <Header />
            <h1>Add an Item</h1>
            <form onSubmit={handleSubmit}>
                Item Name: <input onChange={(event) => setNewItemName(event.target.value)} value = {newItemName}></input>
                Quantity: <input onChange={(event) => setNewItemQuantity(event.target.value)} value = {newItemQuantity}></input>
                Unit: <input onChange={(event) => setNewItemUnit(event.target.value)} value = {newItemUnit}></input>
                <button type="submit">Add Item</button>
            </form>
            <main>
                <button onClick={resetList}>Reset All Items</button>
                <button onClick={clearList}>Delete All Items</button>
                <p>Under Construction...</p>
                <p>List Render Area:</p>
                <table>
                    <tbody>
                        {itemlist.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.qty} {item.unit}</td>
                                <button>Buy</button>
                                <button>Remove</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default App;
