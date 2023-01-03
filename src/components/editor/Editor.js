import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = ({ setProductContent, setImageCode }) => {
    let arr = [];
    const API = `http://192.168.0.100/shop-backend/backend/goods/ins_goods`;
    const uploadAdapter = (loader) => {
        const code = Math.floor((Math.random() * (99999 - 10000) + 10000));
        arr.push(code);
        setImageCode(arr);
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("uploadImg", file);
                        axios.post(`${API}?imageCode=${code}`, body).then((res) => {
                            resolve({ default: `${res.data.result.goods_img + '?code=' + code}` });
                        }).catch((error) => {
                            reject(error);
                        })
                    })
                })
            }
        }
    }

    function uploadPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        }
    }
    return (
        <Div>
            <CKEditor
                config={{
                    extraPlugins: [uploadPlugin]
                }}
                editor={ClassicEditor}
                data=""
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    // console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setProductContent(data);
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
        </Div>
    );
};

const Div = styled.div`
    .ck.ck-reset.ck-editor.ck-rounded-corners{
        width: 700px;
    }
    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
        min-height: 300px;
        max-height: 300px;
        overflow-y: scroll;
        margin-bottom: 20px;
    }
`;

export default TextEditor;