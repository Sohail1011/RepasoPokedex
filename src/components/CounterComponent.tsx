import { useState } from "react"

export const CounterComponent = () => {

    const [count, setCount] = useState<number>(0);

    const increment = (value: number) => {
        return setCount(value + 1);
    }

    return (
        <>
            <h3>Contador actual: {count}</h3>
            <button onClick={() => increment(count)}>+1</button>
        </>
    )
}