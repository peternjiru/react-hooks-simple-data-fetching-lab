import React, { useState, useEffect } from "react";

function App() {

    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then((data) => {

                setImage(data.message)
                setIsLoaded(true)
            })

    }, [])

    //if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>;


    return (
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App;