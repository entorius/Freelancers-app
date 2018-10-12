import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import  './NewJob.css';
import axios from 'axios';
import Input from '../../../components/Input/Input';

const url = process.env.URL;

class NewJob extends Component {
    state = {
        orderForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Job title'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            salary: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Salary'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            level: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Freelancer level'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'mobileDevelopment', displayValue: 'Mobile Development'},
                        {value: 'mashineLearning', displayValue: 'Mashine Learning'},
                        {value: 'creativeWriting', displayValue: 'Creative Writing'},
                        {value: 'graphicDesigners', displayValue: 'Graphic Designers'},
                        {value: 'blogWriter', displayValue: 'Blog Writer'},
                        {value: 'architecture', displayValue: 'Architecture'},
                    ]
                },
                value: 'mobileDevelopment',
                validation: {},
                valid: true
            },
        },
        formIsValid: false
    }

    checkIfValid(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }


    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            jobPost: formData,
        }

        const name = 'name';
        axios.post( url, order );
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkIfValid(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log(formIsValid)
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});

        
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button onClick={this.orderHandler}>Post</Button>
            </form>
        );

        return (
            <div className="Post">
                <h4>Post a Job</h4>
                {form}
            </div>
        );
    }
}

export default NewJob;
