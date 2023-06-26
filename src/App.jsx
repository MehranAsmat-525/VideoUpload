import { useState } from "react";

const App = () => {
    const [vid, setvid] = useState(null);

    const handleChange = (e) => {
        setvid(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <>
            <input type="file" onChange={handleChange} />
            <iframe src={vid}></iframe>
        </>
    );
};

export default App;
