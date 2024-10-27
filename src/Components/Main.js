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