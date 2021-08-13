import React from 'react';
import axios from "axios";
import DropZone from "react-dropzone";

//드롭존을 통해 이미지를 첨부하면 당도를 측정해주는 컴포넌트

class Com_1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            path: "",
            isimg: false,
            gettedbrix: ""
        }
    }

    sendImage = async (propsimg) => {
        this.setState({ gettedbrix: "측정 중..."})
        const config = {
            headers: { "content-type": "multipart/form-data" }
        };

        if (this.state.isimg) {
            const formData = new FormData();
            formData.append("image", propsimg);
            formData.append("id", "admin");
            try {
                const data = await axios.post(
                    "/sugarcontent",
                    formData, config
                );

                this.setState({ gettedbrix: data.data.report.brix });
            } catch (e) {
                console.log("error");
            }
        } else alert("set image");
    }

    render() {
        return (
            <div className="components">
                {
                    this.props.is_logined ?
                        <div id="com1_div">
                            <DropZone
                                onDrop={acceptedFiles => {
                                    this.setState({ path: acceptedFiles.map(file => file.path) })
                                    this.setState({ isimg: true })
                                    this.sendImage(acceptedFiles[0]);
                                }}
                                accept="image/*"
                            >{({
                                getRootProps,
                                getInputProps,
                            }) => {
                                return (
                                    <div>
                                        <div {...getRootProps({
                                            id: "dropzone"
                                        })}>
                                            <input {...getInputProps()} />
                                            <h2>당도를 측정하려는 사과 이미지를 입력하세요.</h2>
                                        </div>

                                        <div id="com1_output">
                                            <h3><strong>파일명: {this.state.path}</strong></h3>
                                            <h3><strong>당도: {this.state.gettedbrix}</strong></h3>
                                        </div>
                                        {this.state.isimg ? <img src={this.state.path} alt={this.state.path} id="image"></img> : <h4>   </h4>}
                                    </div>
                                );
                            }}
                            </DropZone></div> : <div className="nologinpage"><h1>로그인 해주세요</h1></div>
                }
            </div>

        );
    }

}

export default Com_1;