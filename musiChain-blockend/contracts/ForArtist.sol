// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract Lock {

    struct artist{
        string artistName;
        uint totalMusicCount;
    }

    constructor() {

    }

    function creat_acount() private {

    }

    function releaseNewAlbum() private {

    }

    function getStatistic() public view returns (string memory, uint) {
        return (artist.artistName, artist.totalMusicCount);
    }


    function getMoney() private {

    }

    function deleteAlbum() private {

    }

}