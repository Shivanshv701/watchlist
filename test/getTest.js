const chai = require('chai');
const chaiHTTP = require('chai-http')
const express = require('express');
const server = require('../server');
const assert = chai.assert;
chai.use(chaiHTTP);

describe("Test about server file", () => {
    describe("Tests return type", () => {
        it("Tests return type of app created", () => {
            let result = express();
            assert.typeOf(result, 'function');
        }) 
    })
})  

describe("Return Weather and Forecast", () => {
    it("Return weather of given city", () => {
        chai.request(server).get('/weather/getCity')
        .end((err, res) => {
            chai.expect(res.status).to.equal(404);
        })
    });
    
    it("Return forecast of given city", () => {
        chai.request(server).get('/forecast/getcity')
        .end((err, res) => {
            chai.expect(res.status).to.equal(404);
        })
    });

    it("Return daily forecast of given city", () => {
        chai.request(server).get('/forecast/daily')
        .end((err, res) => {
            chai.expect(res.status).to.equal(404);
        })
    });
});