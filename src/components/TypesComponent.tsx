export function TypesComponent() {

    const name: string = "Sohail"
    const isAprobed: boolean = true;
    const languages: string[] = ["Java", "Python", "JavaScript", "C#"];

    return (
        <>
            <h1>{name}</h1>
            <p>{isAprobed ? "Aprobado" : "Despabroda"}</p>
            <ul>
                {languages}
            </ul>
        </>
    )
}
