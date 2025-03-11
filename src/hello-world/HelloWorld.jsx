export default function HelloWorld(){
    const props = {
        y: "waduh apaan tu"
    }
    return (
        <div>
            <HeaderHelloworld/>
            <IsiHelloworld {...props}/>
            <ParagrafHelloworld/>
            
        </div>
    )
}

function HeaderHelloworld(){
    const text = "Anjaay"
    return (
        <h1 style={{
            color: "red",
            backgroundColor: "aqua"
        }}>{text.toUpperCase()}</h1>
    )
}

function IsiHelloworld({y = "apaya"}){
    return (
        <h1 style={{
            color: "green",
            backgroundColor: "white"
        }}>{y.toUpperCase()}</h1>
    )
}

function ParagrafHelloworld(){
    const style = {
        color:"blue",
    };
    return (
        <p style={style}>belajar gess</p>
    )
}