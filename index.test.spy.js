const expect = require('chai').expect;
const request = require('request');
const sinon = require('sinon');
const getPhotosByAlbumId = require('./index');

describe('with Spy: getPhotosByAlbumId', () => {
    let requestSpy;
    before(() => {
        requestSpy = sinon.spy(request, 'get');
    });

    after(() => {
        request.get.restore();
    });

    it('should getPhotosByAlbumId', (done) => {
        getPhotosByAlbumId(2).then((photos) => {
            expect(requestSpy.calledOnce);
            expect(requestSpy.args[0][0]).to.equal("https://jsonplaceholder.typicode.com/albums/2/photos?_limit=3");
            photos.forEach(photo => {
                expect(photo).to.have.property('id');
                expect(photo).to.have.property('title');
                expect(photo).to.have.property('url');
            });
            done();
        });
    });
});