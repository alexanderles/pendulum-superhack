// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {OwnableUpgradeable} from "../lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol";
import {UUPSUpgradeable} from "../lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/UUPSUpgradeable.sol";
import {ClonesUpgradeable} from "../lib/openzeppelin-contracts-upgradeable/contracts/proxy/ClonesUpgradeable.sol";
import "./Pendulum.sol";
import "./interfaces/IOwnershipTransferrable.sol";
import {CreateProxy} from "./CreateProxy.sol";

contract PendulumFactory is OwnableUpgradeable, UUPSUpgradeable {
    uint256 private constant _VERSION = 1;

    // Mapping for all pendulums created from this factory
    mapping(uint256 => address) public pendulums;

    // Number of pendulums created from this factory
    uint256 public pendulumCount;

    // Mapping of version numbers to base pendulum contract implementations
    mapping(uint256 versionNumber => address implementation) public versions;

    event Creation(
        string indexed name,
        uint256 count,
        address indexed pendulumAddr
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function createPendulum(
        string memory name,
        string memory symbol,
        string memory tokenURI,
        uint256 _auctionStartingPrice,
        uint256 _auctionMinBidStep,
        uint256 _auctionMinDuration,
        uint256 _auctionBidExtension,
        address _beneficiary
    ) external virtual {
        bytes memory initializeCalldata = abi.encodeWithSelector(
            Pendulum.initialize.selector,
            name,
            symbol,
            tokenURI,
            _auctionStartingPrice,
            _auctionMinBidStep,
            _auctionMinDuration,
            _auctionBidExtension,
            _beneficiary
        );
        CreateProxy proxy = new CreateProxy(
            versions[1], // May be issue with erc1967 upgradable
            initializeCalldata
        );
        pendulums[pendulumCount] = address(proxy);
        // IOwnershipTransferrable(pendulums[0]).transferOwnership(msg.sender);

        emit Creation(name, pendulumCount, address(proxy));

        pendulumCount++;
    }

    function registerVersion(
        uint256 version_,
        address implementation_
    ) external virtual onlyOwner {
        versions[version_] = implementation_;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    /** Getter Methods */

    function getVersion(uint256 key) public view returns(address) {
        return versions[key];
    }
}
