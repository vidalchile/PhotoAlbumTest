const { map } = require('./mapOperations');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('test map', () => {
    const operation = sinon.spy();

    it('calls operation', () => {
        map([{ name: 'foo', role: 'author'}, { name: 'bar', role: 'owner'}], operation);
        expect(operation.called);
    });
});