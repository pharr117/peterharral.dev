import { useState } from "react";

export default function Image({ src, alt=null, onError}) {

    const [error, setError] = useState(false)

    function handleImageError(evt){
        setError(true);
    }

    if (error){
        return (<div>Sorry ):</div>)
    }
    return (
        <img src={src} style={{ width: "100%", height: "auto" }} alt={alt} onError={onError || handleImageError}/>
    );
}