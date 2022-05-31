
export default function Image({ src, alt=null}) {

    return (
        <img src={src} style={{ width: "100%", height: "auto" }} alt={alt}/>
    );
}