import request from 'superagent';

// for using deployed url use this below url
const URL = 'https://serene-scrubland-75154.herokuapp.com';
// for local development use below url
// const URL = 'https://localhost:3001';

export const getWeapon = async (weaponId) => {

    const data = await request.get(`${URL}/weapons/${weaponId}`);
    return data.body;
}

export const getWeapons = async () => {

    const data = await request.get(`${URL}/weapons`);
    return data.body;
}

export const addWeapon = async (weapon) => {

    const data = await request.post(`${URL}/weapons/`, weapon)
    return data.body;
}