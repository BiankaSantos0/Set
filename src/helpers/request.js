const request = require('supertest');

const baseURL = 'https://fakestoreapi.com';
const api = request(baseURL);
async function getRequest(path) {
    try {
const response = await request(baseURL)
        .get(path)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200);
        
        return response.body;

    }catch(error){
        console.error('Error in getRequest:, error');
            throw error;
         
}

module.exports = {


    getRequest

};