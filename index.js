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

function App(){
    return (
        <React.Fragment>
            <h1>Vote no jogo seu favorito</h1>
            <Contador titulo="Rainbow Six Siege"/>
            <Contador titulo="Apex Legends"/>
            <Contador titulo="Overwatch"/>
        </React.Fragment>
    );
}

ReactDOM.render(
    React.createElement(App, null, null), container
);