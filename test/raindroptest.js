const rainDrop = require('../src/numbertostring.js')
const assert = require("chai").assert;

describe("test correct output",()=>{
  it("rainDrop(3)",()=>{
    assert(rainDrop(3), "Pling")
  });
  it("rainDrop(15)",=>(){
    assert(rainDrop(15), "PlingPlang")
  });
  it("rainDrop()",=>(){
    assert(rainDrop(), "invalid input")
  });
  it("rainDrop(-15)",=>(){
    assert(rainDrop(-15), "invalid output")
  });
  it("rainDrop(21)",=>(){
    assert(rainDrop(21), "PlingPlong")
  });
  it("rainDrop(105)",=>(){
    assert(rainDrop(105), "PlingPlangPlong")
  });
  it("rainDrop(105)",=>(5){
    assert(rainDrop(5), "Plang")
  });
  it("rainDrop(7)",=>(){
    assert(rainDrop(7), "Plong")
  });
  it("rainDrop(21)",=>(){
    assert(rainDrop(), "PlingPlong")
  });
  it("rainDrop(8)",=>(){
    assert(rainDrop(8), "PlingPlangPlong")
  });

})
