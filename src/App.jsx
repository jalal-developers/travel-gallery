export default function App() {
    const barcelonaImage = <img src="https://i.imgur.com/qaQNzqi.png" alt="Barcelona" />;
    const tokyoImage = <img src="https://i.imgur.com/OAx1wzO.png" alt="Tokyo" />;
    const ohioImage = <img src="https://i.imgur.com/CxJjltu.png" alt="Ohio" />;

    return (
        <div>
            <h1>My Travel Gallery</h1>
            <p>Check out these awesome destinations I visited!</p>

            <ul>
                <li>{barcelonaImage}</li>
                <li>{tokyoImage}</li>
                <li>{ohioImage}</li>
            </ul>
        </div>
    );
}