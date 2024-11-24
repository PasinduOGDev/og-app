function Main({name,city,position}) {

    return(
        <div>This is the Main Component
            <ul>
                <li>{name}</li>
                <li>{position}</li>
                <li>{city}</li>
            </ul>
        </div>
    );
}

export default Main;