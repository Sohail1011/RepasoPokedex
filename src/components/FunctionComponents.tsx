export const FunctionComponents = () => {

    function sum(a: number, b: number): string {
        return `${a + b}`;
    }

    return (
        <>
            <p>La Suma: {sum(10, 4)}</p>
        </>
    )
}