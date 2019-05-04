const expect = require('chai').expect;
const server = require('../index');

describe('test', () => {
    it('Should return string', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});