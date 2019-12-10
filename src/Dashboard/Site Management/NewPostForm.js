import React, { useState } from 'react';

const projectTypes = [
    { key: 1, value: "", name: "" },
    { key: 2, value: "", name: "" },
    { key: 3, value: "", name: "" },
    { key: 4, value: "", name: "" },
]


const NewPostForm = (props) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div id="new-post-form-container">
            <form id="new-post-form" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
                <select id="new-post-form-select" value={type} onChange={event => setType(event.target.value)}>
                    {projectTypes.map(type => {
                        return <option value={type.value}>{type.name}</option>
                    })}
                </select>
                <textarea value={description} onChange={event => setDescription(event.target.value)} />
                <input type="submit" value="Post Project" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default NewPostForm;