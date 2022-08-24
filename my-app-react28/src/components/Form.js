import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import classes from './Form.module.css';
import Selection from './Selection';

const Button = styled.button`
    background: red;
    border: 2px solid black;
    border-radius: 5px;
    width: 150px;
    height: 50px;
    color: white;
    cursor: pointer;
`

const Form = () => {
    const [textPublication, setTextPublication] = useState('')
    const [imagePublication, setImagePublication] = useState('')
    const [valueDropdown, setValueDropdown] = useState('')
    const posts = useSelector(state => state.dropDownReducer)
    const dispatch = useDispatch()
    function getValueDropDown(e) {
        setValueDropdown(e.value)
    }
    function getValueText(e) {
        setTextPublication(e.target.value)
    }
    function getValueImage(e) {
        setImagePublication(e.target.value)
    }
    function getUserImage(param) {
        let imgUser = '';
        posts.forEach((el) => {
            if(el.key === param) {
                imgUser = el.image.src
            }
           
        })
        return imgUser
    }
    function addPost() {
        if(valueDropdown && textPublication && imagePublication) {
            const post = {
                key: Math.random(),
                name: valueDropdown,
                nickName: '@' + valueDropdown,
                avatar: getUserImage(valueDropdown),
                date: new Date().toLocaleDateString(),
                textPublication: textPublication,
                imagePublication: imagePublication,
                likes: 100,
                valueLike: false,
                repost: 100,
                valueRepost: false,
                comments: 100,
                valueComments: false
            }
            dispatch({type: 'ADD_USER', payload: post})
        }else {
            alert('Не всі поля заповнені')
        }
    }
    return (
        <div className={classes.inputForm}>
            <label>Введіть текст </label>
            <input type="text"
                    placeholder="Введіть текст публікації"
                    onChange={getValueText}
                    value={textPublication}
            
            />
            <label>Введіть посилання на зображення:</label>
            <input 
                placeholder="Введіть посилання на зображення публікації:"
                onChange={getValueImage}
                value={imagePublication}
            />

                <Selection
                    onChange={getValueDropDown} 
                />

                <Button onClick={addPost}>Добавити публікацію</Button>
        </div>
    )

}

export default Form