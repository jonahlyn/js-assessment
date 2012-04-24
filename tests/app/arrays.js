define([ 'use!underscore' ], function(_) {
  describe("arrays", function() {
    var a, b, fn;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
      b = {
        foo : 'bar',
        baz : 'bim'
      };

      fn = function() { };
    });

    it("you should be able to determine the location of an item in an array", function() {
    	
      fn = function(a, l) { 
        return a.indexOf(l);
      };

      // define a function for fn so that the following will pass
      expect(fn(a, 3)).to.be(2);
    });

    it("you should be able to add the values of an array", function() {
      
      fn = function(a) { 
        var result = 0, i = 0;
        for (i; i < a.length; i += 1){
           result += a[i];
        }
        return result;
      };
      
      // define a function for fn so that the following will pass
      expect(fn(a)).to.be(10);
    });

    it("you should be able to remove an item from an array", function() {
      
      // a = array, e = element *value* to remove
      fn = function(a, e) {
        a.forEach( function(v, i) {
          if(v === e){
            a.splice(i,1);
          }
        });
        
        return a;
      };
      
      // define a function for fn so that the following will pass
      var result = fn(a, 2);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    it("you should be able to add an item to the end of an array", function() {
      
      fn = function(a, i) { 
        a.push(i);
        return a;
      };
      
      // define a function for fn so that the following will pass
      var result = fn(a, 10);
      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    it("you should be able to create an array from two arrays", function() {
      
      fn = function(a, c) { 
        return a.concat(c);
      };
      
      // define a function for fn so that the following will pass
      var c = [ 'a', 'b', 'c' ],
          result = fn(a, c);

      expect(result).to.have.length(7);
      expect(result.join(' ')).to.be('1 2 3 4 a b c');
    });

    it("you should be able to add an item anywhere in an array", function() {
      
      fn = function(a, e, i) { 
        a.splice(i, 0, e); // 2nd param = 0, no elements removed
        return a;
      };
      
      // define a function for fn so that the following will pass
      var result = fn(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.be('1 2 z 3 4');
    });
  });
});
