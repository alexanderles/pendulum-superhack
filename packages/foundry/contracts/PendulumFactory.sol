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
    address public registry;
    // Number of pendulums created from this factory
    uint256 public pendulumCount;

    // Mapping of version numbers to base pendulum contract implementations
    mapping(uint256 versionNumber => address implementation) public versions;

    event Creation(
        string name,
        uint256 count,
        address pendulumAddr
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address _registry) public initializer {
        registry = _registry;
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
        address _beneficiary,
        uint _validUntil,
        uint256 _questionFrequency,
        uint256 _tax,
        uint256 _saleRoyalty
    ) external virtual {
        bytes memory initializeCalldata = abi.encodeWithSelector(
            Pendulum.initialize.selector,
            name,
            symbol,
            tokenURI,
            _auctionStartingPrice,
            _auctionMinBidStep,
            _auctionMinDuration,
            _beneficiary,
            _validUntil,
            _questionFrequency,
            _tax,
            _saleRoyalty
        );

        Pendulum pendulum = new Pendulum();
        CreateProxy proxy = new CreateProxy(
            address(pendulum),
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

    function getVersion(uint256 key) public view returns (address) {
        return versions[key];
    }
}