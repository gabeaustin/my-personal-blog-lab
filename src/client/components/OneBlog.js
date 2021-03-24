import React, { useState, useEffect } from "react";
import "../App.css"

export default function CreatePost() {

    // creating STATEs
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // this makes request to the backend
    const submitPost = () => {

    }

    return (
            <div className="CreatePost">
                <div className="uploadPost border m-5 p-3">
                    <div class="mb-3">
                        <label class="form-label">Author</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Who Wrote It Best" 
                            onChange={(e) => { setUserName(e.target.value); 
                        }}/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Your Title" 
                            onChange={(e) => { setTitle(e.target.value);
                        }}/>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Blog Text</label>
                        <textarea 
                            class="form-control" 
                            placeholder="What do you want to blog about?" 
                            onChange={(e) => { setText(e.target.value)
                        }}/>
                    </div>

                    <button className="btn btn-primary" onClick={submitPost}>Submit Post</button>
                </div>
            </div>
    )
}

