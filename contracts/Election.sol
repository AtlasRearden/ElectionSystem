//SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Election {
    // Model candidate through struct.
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Store candidates and fetch.
    // The candidate id maps to the structure of candidate.
    // This will be interacting with the data layer of the blockchain.
    mapping(uint256 => Candidate) public candidates;

    // Store candidate count.
    uint256 public candidatesCount;

    constructor() {
        addCandidate("Balen Shah");
        addCandidate("Prachanda Something");
    }

    // Function to add candidates.
    function addCandidate(string memory _name) private {
        // Candidates count represents the id of the candidates.
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}
