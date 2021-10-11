const expect = require('chai').expect;
const getPhotosByAlbumId = require('./index');

describe('withoutStub: getPhotosByAlbumId', () => {
    
    it('should getPhotosByAlbumId -> Validate length', (done) => {
        getPhotosByAlbumId(1).then((photos) => {
            expect(photos.length).to.equal(3);
            done();
        });
    });
    
    it('should getPhotosByAlbumId -> -> Validate property', (done) => {
        getPhotosByAlbumId(1).then((photos) => {
            photos.forEach(photo => {
                expect(photo).to.have.property('id');
                expect(photo).to.have.property('title');
                expect(photo).to.have.property('url');
            });
            done();
        });
    });
    
});