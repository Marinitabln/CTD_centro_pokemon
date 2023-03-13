export const getType = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/type/').then((res) =>
        res.json()
    );

    return data;
};