import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

`;

const ImageUpload = ({ setImageData }) => {
    const onFileChange = (event) => {
        const { target: { files }, } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setImageData(result);
        };
        reader.readAsDataURL(theFile);
    }
    return (
        <Input type="file" accept="image/*" onChange={onFileChange} />
    );
};

export default ImageUpload;