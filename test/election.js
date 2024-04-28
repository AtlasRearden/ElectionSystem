var Election = artifacts.require("./Election.sol");

// Simulate tests with java script for the client side console.
contract("Election", function (accounts) {

    var electionInstance;

    // Test if there are two candidates.
    // Description.
    it("Initializes contract with two candidates", function() {
        // Fetch instance of contract.
        return Election.deployed().then(function(instance) {
            // Callback function to fetch instance and candidateCount.
            return instance.candidatesCount();
            // Promise chain for async function.
        }).then(function(count) {
            // Inject the value to test.
            assert.equal(count,2);
        });
    });

    // Test to check the initialization of candidates with correct values.
    it("Initializes candidates with the correct values." , function () {
        // Copy of the depolyed contract.
        return Election.deployed().then(function(instance) {
            // Var assigned to access it in the test.
            electionInstance = instance;
            // Call candidate function from mapping.
            return electionInstance.candidates(1);
            // In the promise section, access each element by index.
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains correct id");
            assert.equal(candidate[1], "Balen Shah", "contains correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function (candidate) {
            assert.equal(candidate[0],2,"contains correct id");
            assert.equal(candidate[1], "Prachanda Something", "contains correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });
});