import React, { useState, useEffect } from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { useAuth0 } from '@auth0/auth0-react';
import API from "../../utils/API";

function Discussion() {
    const [savedComments, setSavedComments] = useState();
    const [comments, setComments] = useState()
    const { user } = useAuth0();

    useEffect(() => {
        loadComments()
    }, [comments]);

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { value } = event.target;
        setComments(value)
    };


    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload comments
    function handleFormSubmit(event) {
        event.preventDefault();

        API.saveComment({
            user: user.name,
            comment: comments, 
        })
            .then(res => loadComments())
            .catch(err => console.log(err));

    };

    function loadComments() {
        API.getSavedComments()
            .then(res => setSavedComments(res.data))
            .then(console.log(savedComments))
            .catch(err => console.log(err));
    }


    return (
        <>
            <TextArea
                onChange={handleInputChange}
                name="comment"
                placeholder="What do you think about this article?"
            />
            <FormBtn
                onClick={handleFormSubmit}
            >
                Save Comment
            </FormBtn>
        </>
    )

}

export default Discussion;