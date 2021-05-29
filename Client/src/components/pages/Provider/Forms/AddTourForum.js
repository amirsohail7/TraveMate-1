import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";


const AddTourForum = () => {
    const [Name, setName] = useState(' ');
    const [Destination, setDestination] = useState(' ');  
    const [Departure, setDeparture] = useState(' ');  
    const [Price, setPrice] = useState(' ');  
    const [tourProvider, setProvider] = useState(' '); 
    const [tourStatus, setStatus] = useState(' ');    
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const tour = { Name, Destination ,Departure ,Price , tourProvider ,tourStatus};

        axios.post('http://localhost:3040/tours/create_tour',tour)
        .then(() => {
           // history.push('/')
           console.log('data is posted');
        })
    }

    return (
        <div className={formCSS.tourbg}>

            <div className={formCSS.container}>

                <h2 className={formCSS.form__title}>Add Tour Form</h2>
                

                <form className={formCSS.form} onSubmit={handleSubmit}>
                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Tour Title : </label>
                        <input
                            className={formCSS.form__input}
                            type='text'
                            required
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Destination : </label>
                        <input
                            className={formCSS.form__input}
                            type='text'
                            required
                            value={Destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Departure : </label>
                        <input
                            className={formCSS.form__input}
                            type='Date'
                            required
                            value={Departure}
                            onChange={(e) => setDeparture(e.target.value)}
                        />
                    </div>

                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Tour Cost : </label>
                        <input
                            className={formCSS.form__input}
                            type='text'
                            required
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Tour Provider : </label>
                        <input
                            className={formCSS.form__input}
                            type='text'
                            required
                            value={tourProvider}
                            onChange={(e) => setProvider(e.target.value)}
                        />
                    </div>

                    <div className={formCSS.form__item}>
                        <label className={formCSS.form__label}>Tour Status : </label>
                        <input
                            className={formCSS.form__input}
                            type='text'
                            required
                            value={tourStatus}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>

                    <button className={formCSS.btn} >Submit</button>

                </form>

            </div>

        </div>
    );

}
export default AddTourForum;
