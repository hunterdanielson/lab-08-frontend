import request from 'superagent';

const URL = 'https://localhost:3000';

export const getWeapons = async () => {

    const data = await request.get(`${URL}/weapons`);
    return data.body;
}

export const addWeapon = async (weapon) => {
    const data = await request.post(`${URL}/weapons/`, weapon)

    return data.body;
}