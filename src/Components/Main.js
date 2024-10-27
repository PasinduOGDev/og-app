// const name = 'Pasindu Madhuwantha'
// const position = 'Web Developer'

// const myObj = {
//     name: `${name}`,
//     position: `${position}`,
//     city: `Kalutara`
// };

function Main({children,name,city,position}) {

    return(
        <div>This is the Main Component
            <ul>
                <li>{name}</li>
                <li>{position}</li>
                <li>{city}</li>
            </ul>
            {children}
        </div>
    );
}

export default Main;