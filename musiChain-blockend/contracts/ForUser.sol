// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MusicAppUser is ERC721, ERC721Enumerable {
    IERC20 private token;
    uint256 private tokenAmount = 4000;

    struct ListeningData {
        uint256 musicId;
        uint256 duration;
    }

    mapping(address => ListeningData[]) public userListeningData;

    constructor(address _tokenAddress) ERC721("MusicAppUser", "MAU") {
        token = IERC20(_tokenAddress);
    }

    function walletOfOwner(address _owner) external view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function subscribe() external {
        require(token.balanceOf(msg.sender) >= tokenAmount, "Not enough tokens for subscription");
        token.transferFrom(msg.sender, address(this), tokenAmount);
    }

    function storeListeningData(uint256 _musicId, uint256 _duration) external {
        ListeningData memory newData = ListeningData(_musicId, _duration);
        userListeningData[msg.sender].push(newData);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}