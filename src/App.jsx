import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
    return (
        <main>
            <div id='game-container'>
                <h1>Tic Tac Toe</h1>
                <ol id='players'>
                    <Player initialName='Player 1' symbol='X' />
                    <Player initialName='Player 2' symbol='O' />
                </ol>
                <GameBoard />
            </div>
            LOG
        </main>
    );
}

export default App;
