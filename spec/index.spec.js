var exists = require('../index.js'),
      path = require('path');

describe("Works perfectly", function(){
    it('should exists', function(done){
        exists(path.resolve(__dirname, './a.txt'))
        .then(function(){
            expect(true).toBe(true);
            done();
        }, function(){
            expect('should exists').toBe(false);
            done();
        });
    });

    it('should not exists', function(done){
        exists(path.resolve(__dirname, './b.txt'))
        .then(function(){
            expect('should not exists').toBe(false);
            done();
        }, function(){
            expect(true).toBe(true);
            done();
        });
    });
});
