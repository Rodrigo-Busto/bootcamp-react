var container = document.getElementById("app");

function Contador(props){
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero+1)
        console.log("Somado, número = "+numero)
    }

    function subtrair(){
        setNumero(numero-1)
        console.log("Subtraido, número = "+numero)
    }
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );  
}