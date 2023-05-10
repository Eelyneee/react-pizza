import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty = value => value.trim() === '';
    const isFiveChars = value => value.trim().length === 5;

    const confirmHandler = (event) => {
        event.preventDefault();
        const entertedName = nameInputRef.current.value;
        const entertedStreet = streetInputRef.current.value;
        const entertedPostal = postalInputRef.current.value;
        const entertedCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(entertedName);
        const enteredStreetIsValid = !isEmpty(entertedStreet);
        const enteredCityIsValid = !isEmpty(entertedCity);
        const enteredPostalIsValid = isFiveChars(entertedPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        });

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: entertedName,
            street: entertedStreet,
            postal: entertedPostal,
            city: entertedCity,

        });

    };

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const postalControlClasses = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`
    const cityControlcClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.group}>
                <div className={nameControlClasses}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' ref={nameInputRef} />
                    {!formInputValidity.name && <p>Please enter a valid name!</p>}
                </div>
                <div className={streetControlClasses}>
                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' ref={streetInputRef} />
                    {!formInputValidity.street && <p>Please enter a valid street!</p>}
                </div>
            </div>
            <div className={classes.group}>
                <div className={postalControlClasses}>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' ref={postalInputRef} />
                    {!formInputValidity.postal && <p>Please enter a valid postal code (5 characters long)!</p>}
                </div>
                <div className={cityControlcClasses}>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' ref={cityInputRef} />
                    {!formInputValidity.city && <p>Please enter a valid city!</p>}
                </div>
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;