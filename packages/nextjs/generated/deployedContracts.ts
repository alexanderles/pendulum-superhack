const contracts = {
  31337: [
    {
      name: "Anvil",
      chainId: "31337",
      contracts: {
        PendulumFactory: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "pendulumAddr",
                  type: "address",
                },
              ],
              name: "Creation",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_auctionStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinDuration",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_validUntil",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_questionFrequency",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tax",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_saleRoyalty",
                  type: "uint256",
                },
              ],
              name: "createPendulum",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "key",
                  type: "uint256",
                },
              ],
              name: "getVersion",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendulumCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "pendulums",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "version_",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "implementation_",
                  type: "address",
                },
              ],
              name: "registerVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "versionNumber",
                  type: "uint256",
                },
              ],
              name: "versions",
              outputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        CreateProxy: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_logic",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        Pendulum: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [],
              name: "ApprovalToCurrentOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "AuctionNotRunning",
              type: "error",
            },
            {
              inputs: [],
              name: "AuctionRunning",
              type: "error",
            },
            {
              inputs: [],
              name: "ContractDoesNotHoldPendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "ContractHoldsPendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "ExpertDoesNotHavePendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "FanInsolvent",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InsufficientBid",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InsufficientFunds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidAuctionDuration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidDuration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidNewPrice",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTokenId",
              type: "error",
            },
            {
              inputs: [],
              name: "NotCollectible",
              type: "error",
            },
            {
              inputs: [],
              name: "NotExpert",
              type: "error",
            },
            {
              inputs: [],
              name: "NotFan",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPermitted",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPermittedForLeadingBidder",
              type: "error",
            },
            {
              inputs: [],
              name: "ReceiverDoesNotImplement721Specs",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newStartingPrice",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newMinBidStep",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newMinDuration",
                  type: "uint256",
                },
              ],
              name: "AuctionParametersChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "auctionStartTime",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "auctionEndTime",
                  type: "uint256",
                },
              ],
              name: "AuctionStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "bidder",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "bid",
                  type: "uint256",
                },
              ],
              name: "Bid",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "newFan",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "winningBid",
                  type: "uint256",
                },
              ],
              name: "FinalizeAuction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fan",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Settlement",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionEndTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionMinBidStep",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionMinDuration",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionStartingPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "beneficiary",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newPendulumPrice",
                  type: "uint256",
                },
              ],
              name: "bid",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "deposit",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "factory",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fan",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fanReceiveTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fanSolvent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finalizeAuction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "fundsOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getImplementation",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "tokenURI_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_auctionStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinDuration",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_validUntil",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_questionFrequency",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tax",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_saleRoyalty",
                  type: "uint256",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lastInvocationTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lastSettlementTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "leadingBid",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "leadingBidder",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "minimumBid",
              outputs: [
                {
                  internalType: "uint256",
                  name: "auctionMinBid",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "price",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "questionFrequency",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "questionTextLength",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "ratingPeriod",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "responsePeriod",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "saleRoyalty",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newMinDuration",
                  type: "uint256",
                },
              ],
              name: "setAuctionParameters",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newPrice",
                  type: "uint256",
                },
              ],
              name: "setPrice",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "startAuction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "tax",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "validUntil",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      name: "Sepolia",
      chainId: "11155111",
      contracts: {
        PendulumFactory: {
          address: "0x7452FcCA0805d58feB2F7d8eF56d90558900c1E4",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "pendulumAddr",
                  type: "address",
                },
              ],
              name: "Creation",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_auctionStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinDuration",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_validUntil",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_questionFrequency",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tax",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_saleRoyalty",
                  type: "uint256",
                },
              ],
              name: "createPendulum",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "key",
                  type: "uint256",
                },
              ],
              name: "getVersion",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendulumCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "pendulums",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "version_",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "implementation_",
                  type: "address",
                },
              ],
              name: "registerVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "versionNumber",
                  type: "uint256",
                },
              ],
              name: "versions",
              outputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        CreateProxy: {
          address: "0xAF73aaaD192A1B925eD014fC4CcdA013923DC66A",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_logic",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        Pendulum: {
          address: "0x2b1d2F5F38b6fb32c0bFA8D78ec4AE96c24f0520",
          abi: [
            {
              inputs: [],
              name: "ApprovalToCurrentOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "AuctionNotRunning",
              type: "error",
            },
            {
              inputs: [],
              name: "AuctionRunning",
              type: "error",
            },
            {
              inputs: [],
              name: "ContractDoesNotHoldPendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "ContractHoldsPendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "ExpertDoesNotHavePendulum",
              type: "error",
            },
            {
              inputs: [],
              name: "FanInsolvent",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InsufficientBid",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InsufficientFunds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidAuctionDuration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidDuration",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "InvalidNewPrice",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTokenId",
              type: "error",
            },
            {
              inputs: [],
              name: "NotCollectible",
              type: "error",
            },
            {
              inputs: [],
              name: "NotExpert",
              type: "error",
            },
            {
              inputs: [],
              name: "NotFan",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPermitted",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPermittedForLeadingBidder",
              type: "error",
            },
            {
              inputs: [],
              name: "ReceiverDoesNotImplement721Specs",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newStartingPrice",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newMinBidStep",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "newMinDuration",
                  type: "uint256",
                },
              ],
              name: "AuctionParametersChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "auctionStartTime",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "auctionEndTime",
                  type: "uint256",
                },
              ],
              name: "AuctionStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "bidder",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "bid",
                  type: "uint256",
                },
              ],
              name: "Bid",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "newFan",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "winningBid",
                  type: "uint256",
                },
              ],
              name: "FinalizeAuction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fan",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "beneficiary",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Settlement",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionEndTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionMinBidStep",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionMinDuration",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "auctionStartingPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "beneficiary",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newPendulumPrice",
                  type: "uint256",
                },
              ],
              name: "bid",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "deposit",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "factory",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fan",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fanReceiveTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "fanSolvent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finalizeAuction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "fundsOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getImplementation",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "tokenURI_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_auctionStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_auctionMinDuration",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_beneficiary",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_validUntil",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_questionFrequency",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_tax",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_saleRoyalty",
                  type: "uint256",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lastInvocationTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lastSettlementTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "leadingBid",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "leadingBidder",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "minimumBid",
              outputs: [
                {
                  internalType: "uint256",
                  name: "auctionMinBid",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "price",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "questionFrequency",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "questionTextLength",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "ratingPeriod",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "responsePeriod",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "saleRoyalty",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newStartingPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newMinBidStep",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "newMinDuration",
                  type: "uint256",
                },
              ],
              name: "setAuctionParameters",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newPrice",
                  type: "uint256",
                },
              ],
              name: "setPrice",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "startAuction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "tax",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "validUntil",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        EAS: {
          address: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyRevoked",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyRevokedOffchain",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyTimestamped",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidAttestation",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidAttestations",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidExpirationTime",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidLength",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidOffset",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRegistry",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRevocation",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRevocations",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSchema",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSignature",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidVerifier",
              type: "error",
            },
            {
              inputs: [],
              name: "Irrevocable",
              type: "error",
            },
            {
              inputs: [],
              name: "NotFound",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              inputs: [],
              name: "WrongSchema",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "schema",
                  type: "bytes32",
                },
              ],
              name: "Attested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "schema",
                  type: "bytes32",
                },
              ],
              name: "Revoked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "revoker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "timestamp",
                  type: "uint64",
                },
              ],
              name: "RevokedOffchain",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "timestamp",
                  type: "uint64",
                },
              ],
              name: "Timestamped",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct AttestationRequest",
                  name: "request",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature",
                      name: "signature",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                  ],
                  internalType: "struct DelegatedAttestationRequest",
                  name: "delegatedRequest",
                  type: "tuple",
                },
              ],
              name: "attestByDelegation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAttestTypeHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "getAttestation",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDomainSeparator",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "revoker",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "getRevokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getRevokeTypeHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getSchemaRegistry",
              outputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "isAttestationValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct MultiAttestationRequest[]",
                  name: "multiRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature[]",
                      name: "signatures",
                      type: "tuple[]",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                  ],
                  internalType: "struct MultiDelegatedAttestationRequest[]",
                  name: "multiDelegatedRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiAttestByDelegation",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct MultiRevocationRequest[]",
                  name: "multiRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiRevoke",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature[]",
                      name: "signatures",
                      type: "tuple[]",
                    },
                    {
                      internalType: "address",
                      name: "revoker",
                      type: "address",
                    },
                  ],
                  internalType: "struct MultiDelegatedRevocationRequest[]",
                  name: "multiDelegatedRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiRevokeByDelegation",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "data",
                  type: "bytes32[]",
                },
              ],
              name: "multiRevokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "data",
                  type: "bytes32[]",
                },
              ],
              name: "multiTimestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct RevocationRequest",
                  name: "request",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature",
                      name: "signature",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "revoker",
                      type: "address",
                    },
                  ],
                  internalType: "struct DelegatedRevocationRequest",
                  name: "delegatedRequest",
                  type: "tuple",
                },
              ],
              name: "revokeByDelegation",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "revokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "timestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          transactionHash: "0x3bf3cf413a67070229f435645c00e0902b1be926157500d8d474ff8e96c5dffc",
          receipt: {
            to: null,
            from: "0x01a93612f26100B6E18a2e3dd57df5c3ccaFeca1",
            contractAddress: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
            transactionIndex: 1,
            gasUsed: "4349707",
            logsBloom:
              "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            blockHash: "0x5fbc93dc9669ff02da9a9b31344259accb5180d93e7927bdd23baa991ada5be5",
            transactionHash: "0x3bf3cf413a67070229f435645c00e0902b1be926157500d8d474ff8e96c5dffc",
            logs: [],
            blockNumber: 2958571,
            cumulativeGasUsed: "7608274",
            status: 1,
            byzantium: true,
          },
          args: ["0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"],
          numDeployments: 1,
          solcInputHash: "a71fe784ec2ddd03c0373182f6192f42",
          metadata:
            '{"compiler":{"version":"0.8.18+commit.87f61d96"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract ISchemaRegistry","name":"registry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AccessDenied","type":"error"},{"inputs":[],"name":"AlreadyRevoked","type":"error"},{"inputs":[],"name":"AlreadyRevokedOffchain","type":"error"},{"inputs":[],"name":"AlreadyTimestamped","type":"error"},{"inputs":[],"name":"InsufficientValue","type":"error"},{"inputs":[],"name":"InvalidAttestation","type":"error"},{"inputs":[],"name":"InvalidAttestations","type":"error"},{"inputs":[],"name":"InvalidExpirationTime","type":"error"},{"inputs":[],"name":"InvalidLength","type":"error"},{"inputs":[],"name":"InvalidOffset","type":"error"},{"inputs":[],"name":"InvalidRegistry","type":"error"},{"inputs":[],"name":"InvalidRevocation","type":"error"},{"inputs":[],"name":"InvalidRevocations","type":"error"},{"inputs":[],"name":"InvalidSchema","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidVerifier","type":"error"},{"inputs":[],"name":"Irrevocable","type":"error"},{"inputs":[],"name":"NotFound","type":"error"},{"inputs":[],"name":"NotPayable","type":"error"},{"inputs":[],"name":"WrongSchema","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":true,"internalType":"address","name":"attester","type":"address"},{"indexed":false,"internalType":"bytes32","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"schema","type":"bytes32"}],"name":"Attested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":true,"internalType":"address","name":"attester","type":"address"},{"indexed":false,"internalType":"bytes32","name":"uid","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"schema","type":"bytes32"}],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"revoker","type":"address"},{"indexed":true,"internalType":"bytes32","name":"data","type":"bytes32"},{"indexed":true,"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"RevokedOffchain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"data","type":"bytes32"},{"indexed":true,"internalType":"uint64","name":"timestamp","type":"uint64"}],"name":"Timestamped","type":"event"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData","name":"data","type":"tuple"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"}],"name":"attest","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData","name":"data","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct EIP712Signature","name":"signature","type":"tuple"},{"internalType":"address","name":"attester","type":"address"}],"internalType":"struct DelegatedAttestationRequest","name":"delegatedRequest","type":"tuple"}],"name":"attestByDelegation","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAttestTypeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"uid","type":"bytes32"}],"name":"getAttestation","outputs":[{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"bytes32","name":"schema","type":"bytes32"},{"internalType":"uint64","name":"time","type":"uint64"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"uint64","name":"revocationTime","type":"uint64"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Attestation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDomainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"revoker","type":"address"},{"internalType":"bytes32","name":"data","type":"bytes32"}],"name":"getRevokeOffchain","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRevokeTypeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getSchemaRegistry","outputs":[{"internalType":"contract ISchemaRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"data","type":"bytes32"}],"name":"getTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"uid","type":"bytes32"}],"name":"isAttestationValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData[]","name":"data","type":"tuple[]"}],"internalType":"struct MultiAttestationRequest[]","name":"multiRequests","type":"tuple[]"}],"name":"multiAttest","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData[]","name":"data","type":"tuple[]"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct EIP712Signature[]","name":"signatures","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"}],"internalType":"struct MultiDelegatedAttestationRequest[]","name":"multiDelegatedRequests","type":"tuple[]"}],"name":"multiAttestByDelegation","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData[]","name":"data","type":"tuple[]"}],"internalType":"struct MultiRevocationRequest[]","name":"multiRequests","type":"tuple[]"}],"name":"multiRevoke","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData[]","name":"data","type":"tuple[]"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct EIP712Signature[]","name":"signatures","type":"tuple[]"},{"internalType":"address","name":"revoker","type":"address"}],"internalType":"struct MultiDelegatedRevocationRequest[]","name":"multiDelegatedRequests","type":"tuple[]"}],"name":"multiRevokeByDelegation","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"multiRevokeOffchain","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"multiTimestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData","name":"data","type":"tuple"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"}],"name":"revoke","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData","name":"data","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct EIP712Signature","name":"signature","type":"tuple"},{"internalType":"address","name":"revoker","type":"address"}],"internalType":"struct DelegatedRevocationRequest","name":"delegatedRequest","type":"tuple"}],"name":"revokeByDelegation","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"data","type":"bytes32"}],"name":"revokeOffchain","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"data","type":"bytes32"}],"name":"timestamp","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"events":{"Attested(address,address,bytes32,bytes32)":{"details":"Emitted when an attestation has been made.","params":{"attester":"The attesting account.","recipient":"The recipient of the attestation.","schema":"The UID of the schema.","uid":"The UID the revoked attestation."}},"Revoked(address,address,bytes32,bytes32)":{"details":"Emitted when an attestation has been revoked.","params":{"attester":"The attesting account.","recipient":"The recipient of the attestation.","schema":"The UID of the schema.","uid":"The UID the revoked attestation."}},"RevokedOffchain(address,bytes32,uint64)":{"details":"Emitted when a data has been revoked.","params":{"data":"The data.","revoker":"The address of the revoker.","timestamp":"The timestamp."}},"Timestamped(bytes32,uint64)":{"details":"Emitted when a data has been timestamped.","params":{"data":"The data.","timestamp":"The timestamp."}}},"kind":"dev","methods":{"attest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)))":{"details":"Attests to a specific schema.","params":{"request":"The arguments of the attestation request. Example: attest({     schema: \\"0facc36681cbe2456019c1b0d1e7bedd6d1d40f6f324bf3dd3a4cef2999200a0\\",     data: {         recipient: \\"0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\\",         expirationTime: 0,         revocable: true,         refUID: \\"0x0000000000000000000000000000000000000000000000000000000000000000\\",         data: \\"0xF00D\\",         value: 0     } })"},"returns":{"_0":"The UID of the new attestation."}},"attestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256),(uint8,bytes32,bytes32),address))":{"details":"Attests to a specific schema via the provided EIP712 signature.","params":{"delegatedRequest":"The arguments of the delegated attestation request. Example: attestByDelegation({     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: {         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',         expirationTime: 1673891048,         revocable: true,         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',         data: \'0x1234\',         value: 0     },     signature: {         v: 28,         r: \'0x148c...b25b\',         s: \'0x5a72...be22\'     },     attester: \'0xc5E8740aD971409492b1A63Db8d83025e0Fc427e\' })"},"returns":{"_0":"The UID of the new attestation."}},"constructor":{"details":"Creates a new EAS instance.","params":{"registry":"The address of the global schema registry."}},"getAttestation(bytes32)":{"details":"Returns an existing attestation by UID.","params":{"uid":"The UID of the attestation to retrieve."},"returns":{"_0":"The attestation data members."}},"getDomainSeparator()":{"details":"Returns the domain separator used in the encoding of the signatures for attest, and revoke."},"getNonce(address)":{"details":"Returns the current nonce per-account.","params":{"account":"The requested account."},"returns":{"_0":"The current nonce."}},"getRevokeOffchain(address,bytes32)":{"details":"Returns the timestamp that the specified data was timestamped with.","params":{"data":"The data to query."},"returns":{"_0":"The timestamp the data was timestamped with."}},"getSchemaRegistry()":{"details":"Returns the address of the global schema registry.","returns":{"_0":"The address of the global schema registry."}},"getTimestamp(bytes32)":{"details":"Returns the timestamp that the specified data was timestamped with.","params":{"data":"The data to query."},"returns":{"_0":"The timestamp the data was timestamped with."}},"isAttestationValid(bytes32)":{"details":"Checks whether an attestation exists.","params":{"uid":"The UID of the attestation to retrieve."},"returns":{"_0":"Whether an attestation exists."}},"multiAttest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[])[])":{"details":"Attests to multiple schemas.","params":{"multiRequests":"The arguments of the multi attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiAttest([{     schema: \'0x33e9094830a5cba5554d1954310e4fbed2ef5f859ec1404619adea4207f391fd\',     data: [{         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',         expirationTime: 1673891048,         revocable: true,         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',         data: \'0x1234\',         value: 1000     },     {         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',         expirationTime: 0,         revocable: false,         refUID: \'0x480df4a039efc31b11bfdf491b383ca138b6bde160988222a2a3509c02cee174\',         data: \'0x00\',         value: 0     }], }, {     schema: \'0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425\',     data: [{         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',         expirationTime: 0,         revocable: true,         refUID: \'0x75bf2ed8dca25a8190c50c52db136664de25b2449535839008ccfdab469b214f\',         data: \'0x12345678\',         value: 0     }, }])"},"returns":{"_0":"The UIDs of the new attestations."}},"multiAttestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[],(uint8,bytes32,bytes32)[],address)[])":{"details":"Attests to multiple schemas using via provided EIP712 signatures.","params":{"multiDelegatedRequests":"The arguments of the delegated multi attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiAttestByDelegation([{     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: [{         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',         expirationTime: 1673891048,         revocable: true,         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',         data: \'0x1234\',         value: 0     },     {         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',         expirationTime: 0,         revocable: false,         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',         data: \'0x00\',         value: 0     }],     signatures: [{         v: 28,         r: \'0x148c...b25b\',         s: \'0x5a72...be22\'     },     {         v: 28,         r: \'0x487s...67bb\',         s: \'0x12ad...2366\'     }],     attester: \'0x1D86495b2A7B524D747d2839b3C645Bed32e8CF4\' }])"},"returns":{"_0":"The UIDs of the new attestations."}},"multiRevoke((bytes32,(bytes32,uint256)[])[])":{"details":"Revokes existing attestations to multiple schemas.","params":{"multiRequests":"The arguments of the multi revocation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiRevoke([{     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: [{         uid: \'0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25\',         value: 1000     },     {         uid: \'0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade\',         value: 0     }], }, {     schema: \'0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425\',     data: [{         uid: \'0x053d42abce1fd7c8fcddfae21845ad34dae287b2c326220b03ba241bc5a8f019\',         value: 0     }, }])"}},"multiRevokeByDelegation((bytes32,(bytes32,uint256)[],(uint8,bytes32,bytes32)[],address)[])":{"details":"Revokes existing attestations to multiple schemas via provided EIP712 signatures.","params":{"multiDelegatedRequests":"The arguments of the delegated multi revocation attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiRevokeByDelegation([{     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: [{         uid: \'0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25\',         value: 1000     },     {         uid: \'0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade\',         value: 0     }],     signatures: [{         v: 28,         r: \'0x148c...b25b\',         s: \'0x5a72...be22\'     },     {         v: 28,         r: \'0x487s...67bb\',         s: \'0x12ad...2366\'     }],     revoker: \'0x244934dd3e31bE2c81f84ECf0b3E6329F5381992\' }])"}},"multiRevokeOffchain(bytes32[])":{"details":"Revokes the specified multiple bytes32 data.","params":{"data":"The data to timestamp."},"returns":{"_0":"The timestamp the data was revoked with."}},"multiTimestamp(bytes32[])":{"details":"Timestamps the specified multiple bytes32 data.","params":{"data":"The data to timestamp."},"returns":{"_0":"The timestamp the data was timestamped with."}},"revoke((bytes32,(bytes32,uint256)))":{"details":"Revokes an existing attestation to a specific schema. Example: revoke({     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: {         uid: \'0x101032e487642ee04ee17049f99a70590c735b8614079fc9275f9dd57c00966d\',         value: 0     } })","params":{"request":"The arguments of the revocation request."}},"revokeByDelegation((bytes32,(bytes32,uint256),(uint8,bytes32,bytes32),address))":{"details":"Revokes an existing attestation to a specific schema via the provided EIP712 signature. Example: revokeByDelegation({     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',     data: {         uid: \'0xcbbc12102578c642a0f7b34fe7111e41afa25683b6cd7b5a14caf90fa14d24ba\',         value: 0     },     signature: {         v: 27,         r: \'0xb593...7142\',         s: \'0x0f5b...2cce\'     },     revoker: \'0x244934dd3e31bE2c81f84ECf0b3E6329F5381992\' })","params":{"delegatedRequest":"The arguments of the delegated revocation request."}},"revokeOffchain(bytes32)":{"details":"Revokes the specified bytes32 data.","params":{"data":"The data to timestamp."},"returns":{"_0":"The timestamp the data was revoked with."}},"timestamp(bytes32)":{"details":"Timestamps the specified bytes32 data.","params":{"data":"The data to timestamp."},"returns":{"_0":"The timestamp the data was timestamped with."}}},"title":"EAS - Ethereum Attestation Service","version":1},"userdoc":{"kind":"user","methods":{"getAttestTypeHash()":{"notice":"Returns the EIP712 type hash for the attest function."},"getRevokeTypeHash()":{"notice":"Returns the EIP712 type hash for the revoke function."}},"version":1}},"settings":{"compilationTarget":{"contracts/EAS.sol":"EAS"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"none","useLiteralContent":true},"optimizer":{"enabled":true,"runs":1000000},"remappings":[],"viaIR":true},"sources":{"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\"Address: call to non-contract\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n","keccak256":"0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1","license":"MIT"},"@openzeppelin/contracts/utils/Strings.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./math/Math.sol\\";\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _SYMBOLS = \\"0123456789abcdef\\";\\n    uint8 private constant _ADDRESS_LENGTH = 20;\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            uint256 length = Math.log10(value) + 1;\\n            string memory buffer = new string(length);\\n            uint256 ptr;\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                ptr := add(buffer, add(32, length))\\n            }\\n            while (true) {\\n                ptr--;\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    mstore8(ptr, byte(mod(value, 10), _SYMBOLS))\\n                }\\n                value /= 10;\\n                if (value == 0) break;\\n            }\\n            return buffer;\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            return toHexString(value, Math.log256(value) + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\"0\\";\\n        buffer[1] = \\"x\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\"Strings: hex length insufficient\\");\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(address addr) internal pure returns (string memory) {\\n        return toHexString(uint256(uint160(addr)), _ADDRESS_LENGTH);\\n    }\\n}\\n","keccak256":"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a","license":"MIT"},"@openzeppelin/contracts/utils/cryptography/ECDSA.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/cryptography/ECDSA.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../Strings.sol\\";\\n\\n/**\\n * @dev Elliptic Curve Digital Signature Algorithm (ECDSA) operations.\\n *\\n * These functions can be used to verify that a message was signed by the holder\\n * of the private keys of a given address.\\n */\\nlibrary ECDSA {\\n    enum RecoverError {\\n        NoError,\\n        InvalidSignature,\\n        InvalidSignatureLength,\\n        InvalidSignatureS,\\n        InvalidSignatureV // Deprecated in v4.8\\n    }\\n\\n    function _throwError(RecoverError error) private pure {\\n        if (error == RecoverError.NoError) {\\n            return; // no error: do nothing\\n        } else if (error == RecoverError.InvalidSignature) {\\n            revert(\\"ECDSA: invalid signature\\");\\n        } else if (error == RecoverError.InvalidSignatureLength) {\\n            revert(\\"ECDSA: invalid signature length\\");\\n        } else if (error == RecoverError.InvalidSignatureS) {\\n            revert(\\"ECDSA: invalid signature \'s\' value\\");\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the address that signed a hashed message (`hash`) with\\n     * `signature` or error string. This address can then be used for verification purposes.\\n     *\\n     * The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:\\n     * this function rejects them by requiring the `s` value to be in the lower\\n     * half order, and the `v` value to be either 27 or 28.\\n     *\\n     * IMPORTANT: `hash` _must_ be the result of a hash operation for the\\n     * verification to be secure: it is possible to craft signatures that\\n     * recover to arbitrary addresses for non-hashed data. A safe way to ensure\\n     * this is by receiving a hash of the original message (which may otherwise\\n     * be too long), and then calling {toEthSignedMessageHash} on it.\\n     *\\n     * Documentation for signature generation:\\n     * - with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]\\n     * - with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]\\n     *\\n     * _Available since v4.3._\\n     */\\n    function tryRecover(bytes32 hash, bytes memory signature) internal pure returns (address, RecoverError) {\\n        if (signature.length == 65) {\\n            bytes32 r;\\n            bytes32 s;\\n            uint8 v;\\n            // ecrecover takes the signature parameters, and the only way to get them\\n            // currently is to use assembly.\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                r := mload(add(signature, 0x20))\\n                s := mload(add(signature, 0x40))\\n                v := byte(0, mload(add(signature, 0x60)))\\n            }\\n            return tryRecover(hash, v, r, s);\\n        } else {\\n            return (address(0), RecoverError.InvalidSignatureLength);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the address that signed a hashed message (`hash`) with\\n     * `signature`. This address can then be used for verification purposes.\\n     *\\n     * The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:\\n     * this function rejects them by requiring the `s` value to be in the lower\\n     * half order, and the `v` value to be either 27 or 28.\\n     *\\n     * IMPORTANT: `hash` _must_ be the result of a hash operation for the\\n     * verification to be secure: it is possible to craft signatures that\\n     * recover to arbitrary addresses for non-hashed data. A safe way to ensure\\n     * this is by receiving a hash of the original message (which may otherwise\\n     * be too long), and then calling {toEthSignedMessageHash} on it.\\n     */\\n    function recover(bytes32 hash, bytes memory signature) internal pure returns (address) {\\n        (address recovered, RecoverError error) = tryRecover(hash, signature);\\n        _throwError(error);\\n        return recovered;\\n    }\\n\\n    /**\\n     * @dev Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.\\n     *\\n     * See https://eips.ethereum.org/EIPS/eip-2098[EIP-2098 short signatures]\\n     *\\n     * _Available since v4.3._\\n     */\\n    function tryRecover(\\n        bytes32 hash,\\n        bytes32 r,\\n        bytes32 vs\\n    ) internal pure returns (address, RecoverError) {\\n        bytes32 s = vs & bytes32(0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);\\n        uint8 v = uint8((uint256(vs) >> 255) + 27);\\n        return tryRecover(hash, v, r, s);\\n    }\\n\\n    /**\\n     * @dev Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately.\\n     *\\n     * _Available since v4.2._\\n     */\\n    function recover(\\n        bytes32 hash,\\n        bytes32 r,\\n        bytes32 vs\\n    ) internal pure returns (address) {\\n        (address recovered, RecoverError error) = tryRecover(hash, r, vs);\\n        _throwError(error);\\n        return recovered;\\n    }\\n\\n    /**\\n     * @dev Overload of {ECDSA-tryRecover} that receives the `v`,\\n     * `r` and `s` signature fields separately.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function tryRecover(\\n        bytes32 hash,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) internal pure returns (address, RecoverError) {\\n        // EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature\\n        // unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines\\n        // the valid range for s in (301): 0 < s < secp256k1n \\u00f7 2 + 1, and for v in (302): v \\u2208 {27, 28}. Most\\n        // signatures from current libraries generate a unique signature with an s-value in the lower half order.\\n        //\\n        // If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value\\n        // with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or\\n        // vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept\\n        // these malleable signatures as well.\\n        if (uint256(s) > 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0) {\\n            return (address(0), RecoverError.InvalidSignatureS);\\n        }\\n\\n        // If the signature is valid (and not malleable), return the signer address\\n        address signer = ecrecover(hash, v, r, s);\\n        if (signer == address(0)) {\\n            return (address(0), RecoverError.InvalidSignature);\\n        }\\n\\n        return (signer, RecoverError.NoError);\\n    }\\n\\n    /**\\n     * @dev Overload of {ECDSA-recover} that receives the `v`,\\n     * `r` and `s` signature fields separately.\\n     */\\n    function recover(\\n        bytes32 hash,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) internal pure returns (address) {\\n        (address recovered, RecoverError error) = tryRecover(hash, v, r, s);\\n        _throwError(error);\\n        return recovered;\\n    }\\n\\n    /**\\n     * @dev Returns an Ethereum Signed Message, created from a `hash`. This\\n     * produces hash corresponding to the one signed with the\\n     * https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]\\n     * JSON-RPC method as part of EIP-191.\\n     *\\n     * See {recover}.\\n     */\\n    function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32) {\\n        // 32 is the length in bytes of hash,\\n        // enforced by the type signature above\\n        return keccak256(abi.encodePacked(\\"\\\\x19Ethereum Signed Message:\\\\n32\\", hash));\\n    }\\n\\n    /**\\n     * @dev Returns an Ethereum Signed Message, created from `s`. This\\n     * produces hash corresponding to the one signed with the\\n     * https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]\\n     * JSON-RPC method as part of EIP-191.\\n     *\\n     * See {recover}.\\n     */\\n    function toEthSignedMessageHash(bytes memory s) internal pure returns (bytes32) {\\n        return keccak256(abi.encodePacked(\\"\\\\x19Ethereum Signed Message:\\\\n\\", Strings.toString(s.length), s));\\n    }\\n\\n    /**\\n     * @dev Returns an Ethereum Signed Typed Data, created from a\\n     * `domainSeparator` and a `structHash`. This produces hash corresponding\\n     * to the one signed with the\\n     * https://eips.ethereum.org/EIPS/eip-712[`eth_signTypedData`]\\n     * JSON-RPC method as part of EIP-712.\\n     *\\n     * See {recover}.\\n     */\\n    function toTypedDataHash(bytes32 domainSeparator, bytes32 structHash) internal pure returns (bytes32) {\\n        return keccak256(abi.encodePacked(\\"\\\\x19\\\\x01\\", domainSeparator, structHash));\\n    }\\n}\\n","keccak256":"0xda898fa084aa1ddfdb346e6a40459e00a59d87071cce7c315a46d648dd71d0ba","license":"MIT"},"@openzeppelin/contracts/utils/cryptography/EIP712.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/cryptography/EIP712.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./ECDSA.sol\\";\\n\\n/**\\n * @dev https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data.\\n *\\n * The encoding specified in the EIP is very generic, and such a generic implementation in Solidity is not feasible,\\n * thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding\\n * they need in their contracts using a combination of `abi.encode` and `keccak256`.\\n *\\n * This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding\\n * scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA\\n * ({_hashTypedDataV4}).\\n *\\n * The implementation of the domain separator was designed to be as efficient as possible while still properly updating\\n * the chain id to protect against replay attacks on an eventual fork of the chain.\\n *\\n * NOTE: This contract implements the version of the encoding known as \\"v4\\", as implemented by the JSON RPC method\\n * https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].\\n *\\n * _Available since v3.4._\\n */\\nabstract contract EIP712 {\\n    /* solhint-disable var-name-mixedcase */\\n    // Cache the domain separator as an immutable value, but also store the chain id that it corresponds to, in order to\\n    // invalidate the cached domain separator if the chain id changes.\\n    bytes32 private immutable _CACHED_DOMAIN_SEPARATOR;\\n    uint256 private immutable _CACHED_CHAIN_ID;\\n    address private immutable _CACHED_THIS;\\n\\n    bytes32 private immutable _HASHED_NAME;\\n    bytes32 private immutable _HASHED_VERSION;\\n    bytes32 private immutable _TYPE_HASH;\\n\\n    /* solhint-enable var-name-mixedcase */\\n\\n    /**\\n     * @dev Initializes the domain separator and parameter caches.\\n     *\\n     * The meaning of `name` and `version` is specified in\\n     * https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]:\\n     *\\n     * - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.\\n     * - `version`: the current major version of the signing domain.\\n     *\\n     * NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart\\n     * contract upgrade].\\n     */\\n    constructor(string memory name, string memory version) {\\n        bytes32 hashedName = keccak256(bytes(name));\\n        bytes32 hashedVersion = keccak256(bytes(version));\\n        bytes32 typeHash = keccak256(\\n            \\"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\\"\\n        );\\n        _HASHED_NAME = hashedName;\\n        _HASHED_VERSION = hashedVersion;\\n        _CACHED_CHAIN_ID = block.chainid;\\n        _CACHED_DOMAIN_SEPARATOR = _buildDomainSeparator(typeHash, hashedName, hashedVersion);\\n        _CACHED_THIS = address(this);\\n        _TYPE_HASH = typeHash;\\n    }\\n\\n    /**\\n     * @dev Returns the domain separator for the current chain.\\n     */\\n    function _domainSeparatorV4() internal view returns (bytes32) {\\n        if (address(this) == _CACHED_THIS && block.chainid == _CACHED_CHAIN_ID) {\\n            return _CACHED_DOMAIN_SEPARATOR;\\n        } else {\\n            return _buildDomainSeparator(_TYPE_HASH, _HASHED_NAME, _HASHED_VERSION);\\n        }\\n    }\\n\\n    function _buildDomainSeparator(\\n        bytes32 typeHash,\\n        bytes32 nameHash,\\n        bytes32 versionHash\\n    ) private view returns (bytes32) {\\n        return keccak256(abi.encode(typeHash, nameHash, versionHash, block.chainid, address(this)));\\n    }\\n\\n    /**\\n     * @dev Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this\\n     * function returns the hash of the fully encoded EIP712 message for this domain.\\n     *\\n     * This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:\\n     *\\n     * ```solidity\\n     * bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\\n     *     keccak256(\\"Mail(address to,string contents)\\"),\\n     *     mailTo,\\n     *     keccak256(bytes(mailContents))\\n     * )));\\n     * address signer = ECDSA.recover(digest, signature);\\n     * ```\\n     */\\n    function _hashTypedDataV4(bytes32 structHash) internal view virtual returns (bytes32) {\\n        return ECDSA.toTypedDataHash(_domainSeparatorV4(), structHash);\\n    }\\n}\\n","keccak256":"0x948d8b2d18f38141ec78c5229d770d950ebc781ed3f44cc9e3ccbb9fded5846a","license":"MIT"},"@openzeppelin/contracts/utils/math/Math.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/Math.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard math utilities missing in the Solidity language.\\n */\\nlibrary Math {\\n    enum Rounding {\\n        Down, // Toward negative infinity\\n        Up, // Toward infinity\\n        Zero // Toward zero\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two numbers.\\n     */\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two numbers.\\n     */\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two numbers. The result is rounded towards\\n     * zero.\\n     */\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b) / 2 can overflow.\\n        return (a & b) + (a ^ b) / 2;\\n    }\\n\\n    /**\\n     * @dev Returns the ceiling of the division of two numbers.\\n     *\\n     * This differs from standard division with `/` in that it rounds up instead\\n     * of rounding down.\\n     */\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b - 1) / b can overflow on addition, so we distribute.\\n        return a == 0 ? 0 : (a - 1) / b + 1;\\n    }\\n\\n    /**\\n     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\\n     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\\n     * with further edits by Uniswap Labs also under MIT license.\\n     */\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator\\n    ) internal pure returns (uint256 result) {\\n        unchecked {\\n            // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n            // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n            // variables such that product = prod1 * 2^256 + prod0.\\n            uint256 prod0; // Least significant 256 bits of the product\\n            uint256 prod1; // Most significant 256 bits of the product\\n            assembly {\\n                let mm := mulmod(x, y, not(0))\\n                prod0 := mul(x, y)\\n                prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n            }\\n\\n            // Handle non-overflow cases, 256 by 256 division.\\n            if (prod1 == 0) {\\n                return prod0 / denominator;\\n            }\\n\\n            // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n            require(denominator > prod1);\\n\\n            ///////////////////////////////////////////////\\n            // 512 by 256 division.\\n            ///////////////////////////////////////////////\\n\\n            // Make division exact by subtracting the remainder from [prod1 prod0].\\n            uint256 remainder;\\n            assembly {\\n                // Compute remainder using mulmod.\\n                remainder := mulmod(x, y, denominator)\\n\\n                // Subtract 256 bit number from 512 bit number.\\n                prod1 := sub(prod1, gt(remainder, prod0))\\n                prod0 := sub(prod0, remainder)\\n            }\\n\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n            // See https://cs.stackexchange.com/q/138556/92363.\\n\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 twos = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by twos.\\n                denominator := div(denominator, twos)\\n\\n                // Divide [prod1 prod0] by twos.\\n                prod0 := div(prod0, twos)\\n\\n                // Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.\\n                twos := add(div(sub(0, twos), twos), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * twos;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel\'s lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don\'t need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.\\n     */\\n    function mulDiv(\\n        uint256 x,\\n        uint256 y,\\n        uint256 denominator,\\n        Rounding rounding\\n    ) internal pure returns (uint256) {\\n        uint256 result = mulDiv(x, y, denominator);\\n        if (rounding == Rounding.Up && mulmod(x, y, denominator) > 0) {\\n            result += 1;\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\\n     *\\n     * Inspired by Henry S. Warren, Jr.\'s \\"Hacker\'s Delight\\" (Chapter 11).\\n     */\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\n        if (a == 0) {\\n            return 0;\\n        }\\n\\n        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.\\n        //\\n        // We know that the \\"msb\\" (most significant bit) of our target number `a` is a power of 2 such that we have\\n        // `msb(a) <= a < 2*msb(a)`. This value can be written `msb(a)=2**k` with `k=log2(a)`.\\n        //\\n        // This can be rewritten `2**log2(a) <= a < 2**(log2(a) + 1)`\\n        // \\u2192 `sqrt(2**k) <= sqrt(a) < sqrt(2**(k+1))`\\n        // \\u2192 `2**(k/2) <= sqrt(a) < 2**((k+1)/2) <= 2**(k/2 + 1)`\\n        //\\n        // Consequently, `2**(log2(a) / 2)` is a good first approximation of `sqrt(a)` with at least 1 correct bit.\\n        uint256 result = 1 << (log2(a) >> 1);\\n\\n        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,\\n        // since it is the square root of a uint256. Newton\'s method converges quadratically (precision doubles at\\n        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision\\n        // into the expected uint128 result.\\n        unchecked {\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            return min(result, a / result);\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates sqrt(a), following the selected rounding direction.\\n     */\\n    function sqrt(uint256 a, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = sqrt(a);\\n            return result + (rounding == Rounding.Up && result * result < a ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 128;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 64;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 32;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 16;\\n            }\\n            if (value >> 8 > 0) {\\n                value >>= 8;\\n                result += 8;\\n            }\\n            if (value >> 4 > 0) {\\n                value >>= 4;\\n                result += 4;\\n            }\\n            if (value >> 2 > 0) {\\n                value >>= 2;\\n                result += 2;\\n            }\\n            if (value >> 1 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log2(value);\\n            return result + (rounding == Rounding.Up && 1 << result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >= 10**64) {\\n                value /= 10**64;\\n                result += 64;\\n            }\\n            if (value >= 10**32) {\\n                value /= 10**32;\\n                result += 32;\\n            }\\n            if (value >= 10**16) {\\n                value /= 10**16;\\n                result += 16;\\n            }\\n            if (value >= 10**8) {\\n                value /= 10**8;\\n                result += 8;\\n            }\\n            if (value >= 10**4) {\\n                value /= 10**4;\\n                result += 4;\\n            }\\n            if (value >= 10**2) {\\n                value /= 10**2;\\n                result += 2;\\n            }\\n            if (value >= 10**1) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log10(value);\\n            return result + (rounding == Rounding.Up && 10**result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     *\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\n     */\\n    function log256(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 16;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 8;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 4;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 2;\\n            }\\n            if (value >> 8 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log256(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log256(value);\\n            return result + (rounding == Rounding.Up && 1 << (result * 8) < value ? 1 : 0);\\n        }\\n    }\\n}\\n","keccak256":"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6","license":"MIT"},"contracts/EAS.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\nimport { Address } from \\"@openzeppelin/contracts/utils/Address.sol\\";\\n\\nimport { EMPTY_UID, EIP712Signature } from \\"./Types.sol\\";\\n\\n// prettier-ignore\\nimport {\\n    Attestation,\\n    AttestationRequest,\\n    AttestationRequestData,\\n    DelegatedAttestationRequest,\\n    DelegatedRevocationRequest,\\n    IEAS,\\n    MultiAttestationRequest,\\n    MultiDelegatedAttestationRequest,\\n    MultiDelegatedRevocationRequest,\\n    MultiRevocationRequest,\\n    RevocationRequest,\\n    RevocationRequestData\\n} from \\"./IEAS.sol\\";\\nimport { ISchemaRegistry, SchemaRecord } from \\"./ISchemaRegistry.sol\\";\\nimport { EIP712Verifier } from \\"./EIP712Verifier.sol\\";\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\nstruct AttestationsResult {\\n    uint256 usedValue; // Total ETH amount that was sent to resolvers.\\n    bytes32[] uids; // UIDs of the new attestations.\\n}\\n\\n/**\\n * @title EAS - Ethereum Attestation Service\\n */\\ncontract EAS is IEAS, EIP712Verifier {\\n    using Address for address payable;\\n\\n    error AccessDenied();\\n    error AlreadyRevoked();\\n    error AlreadyRevokedOffchain();\\n    error AlreadyTimestamped();\\n    error InsufficientValue();\\n    error InvalidAttestation();\\n    error InvalidAttestations();\\n    error InvalidExpirationTime();\\n    error InvalidLength();\\n    error InvalidOffset();\\n    error InvalidRegistry();\\n    error InvalidRevocation();\\n    error InvalidRevocations();\\n    error InvalidSchema();\\n    error InvalidVerifier();\\n    error Irrevocable();\\n    error NotFound();\\n    error NotPayable();\\n    error WrongSchema();\\n\\n    // The version of the contract.\\n    string public constant VERSION = \\"0.26\\";\\n\\n    // A zero expiration represents an non-expiring attestation.\\n    uint64 private constant NO_EXPIRATION_TIME = 0;\\n\\n    // The global schema registry.\\n    ISchemaRegistry private immutable _schemaRegistry;\\n\\n    // The global mapping between attestations and their UIDs.\\n    mapping(bytes32 uid => Attestation attestation) private _db;\\n\\n    // The global mapping between data and their timestamps.\\n    mapping(bytes32 data => uint64 timestamp) private _timestamps;\\n\\n    // The global mapping between data and their revocation timestamps.\\n    mapping(address revoker => mapping(bytes32 data => uint64 timestamp)) private _revocationsOffchain;\\n\\n    /**\\n     * @dev Creates a new EAS instance.\\n     *\\n     * @param registry The address of the global schema registry.\\n     */\\n    constructor(ISchemaRegistry registry) EIP712Verifier(VERSION) {\\n        if (address(registry) == address(0)) {\\n            revert InvalidRegistry();\\n        }\\n\\n        _schemaRegistry = registry;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function getSchemaRegistry() external view returns (ISchemaRegistry) {\\n        return _schemaRegistry;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function attest(AttestationRequest calldata request) public payable virtual returns (bytes32) {\\n        AttestationRequestData[] memory requests = new AttestationRequestData[](1);\\n        requests[0] = request.data;\\n\\n        return _attest(request.schema, requests, msg.sender, msg.value, true).uids[0];\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function attestByDelegation(\\n        DelegatedAttestationRequest calldata delegatedRequest\\n    ) public payable virtual returns (bytes32) {\\n        _verifyAttest(delegatedRequest);\\n\\n        AttestationRequestData[] memory data = new AttestationRequestData[](1);\\n        data[0] = delegatedRequest.data;\\n\\n        return _attest(delegatedRequest.schema, data, delegatedRequest.attester, msg.value, true).uids[0];\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiAttest(MultiAttestationRequest[] calldata multiRequests) external payable returns (bytes32[] memory) {\\n        // Since a multi-attest call is going to make multiple attestations for multiple schemas, we\'d need to collect\\n        // all the returned UIDs into a single list.\\n        bytes32[][] memory totalUids = new bytes32[][](multiRequests.length);\\n        uint256 totalUidsCount = 0;\\n\\n        // We are keeping track of the total available ETH amount that can be sent to resolvers and will keep deducting\\n        // from it to verify that there isn\'t any attempt to send too much ETH to resolvers. Please note that unless\\n        // some ETH was stuck in the contract by accident (which shouldn\'t happen in normal conditions), it won\'t be\\n        // possible to send too much ETH anyway.\\n        uint availableValue = msg.value;\\n\\n        for (uint256 i = 0; i < multiRequests.length; ) {\\n            // The last batch is handled slightly differently: if the total available ETH wasn\'t spent in full and there\\n            // is a remainder - it will be refunded back to the attester (something that we can only verify during the\\n            // last and final batch).\\n            bool last;\\n            unchecked {\\n                last = i == multiRequests.length - 1;\\n            }\\n\\n            // Process the current batch of attestations.\\n            MultiAttestationRequest calldata multiRequest = multiRequests[i];\\n            AttestationsResult memory res = _attest(\\n                multiRequest.schema,\\n                multiRequest.data,\\n                msg.sender,\\n                availableValue,\\n                last\\n            );\\n\\n            // Ensure to deduct the ETH that was forwarded to the resolver during the processing of this batch.\\n            availableValue -= res.usedValue;\\n\\n            // Collect UIDs (and merge them later).\\n            totalUids[i] = res.uids;\\n            unchecked {\\n                totalUidsCount += res.uids.length;\\n            }\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        // Merge all the collected UIDs and return them as a flatten array.\\n        return _mergeUIDs(totalUids, totalUidsCount);\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiAttestByDelegation(\\n        MultiDelegatedAttestationRequest[] calldata multiDelegatedRequests\\n    ) external payable returns (bytes32[] memory) {\\n        // Since a multi-attest call is going to make multiple attestations for multiple schemas, we\'d need to collect\\n        // all the returned UIDs into a single list.\\n        bytes32[][] memory totalUids = new bytes32[][](multiDelegatedRequests.length);\\n        uint256 totalUidsCount = 0;\\n\\n        // We are keeping track of the total available ETH amount that can be sent to resolvers and will keep deducting\\n        // from it to verify that there isn\'t any attempt to send too much ETH to resolvers. Please note that unless\\n        // some ETH was stuck in the contract by accident (which shouldn\'t happen in normal conditions), it won\'t be\\n        // possible to send too much ETH anyway.\\n        uint availableValue = msg.value;\\n\\n        for (uint256 i = 0; i < multiDelegatedRequests.length; ) {\\n            // The last batch is handled slightly differently: if the total available ETH wasn\'t spent in full and there\\n            // is a remainder - it will be refunded back to the attester (something that we can only verify during the\\n            // last and final batch).\\n            bool last;\\n            unchecked {\\n                last = i == multiDelegatedRequests.length - 1;\\n            }\\n\\n            MultiDelegatedAttestationRequest calldata multiDelegatedRequest = multiDelegatedRequests[i];\\n            AttestationRequestData[] calldata data = multiDelegatedRequest.data;\\n\\n            // Ensure that no inputs are missing.\\n            if (data.length == 0 || data.length != multiDelegatedRequest.signatures.length) {\\n                revert InvalidLength();\\n            }\\n\\n            // Verify EIP712 signatures. Please note that the signatures are assumed to be signed with increasing nonces.\\n            for (uint256 j = 0; j < data.length; ) {\\n                _verifyAttest(\\n                    DelegatedAttestationRequest({\\n                        schema: multiDelegatedRequest.schema,\\n                        data: data[j],\\n                        signature: multiDelegatedRequest.signatures[j],\\n                        attester: multiDelegatedRequest.attester\\n                    })\\n                );\\n\\n                unchecked {\\n                    ++j;\\n                }\\n            }\\n\\n            // Process the current batch of attestations.\\n            AttestationsResult memory res = _attest(\\n                multiDelegatedRequest.schema,\\n                data,\\n                multiDelegatedRequest.attester,\\n                availableValue,\\n                last\\n            );\\n\\n            // Ensure to deduct the ETH that was forwarded to the resolver during the processing of this batch.\\n            availableValue -= res.usedValue;\\n\\n            // Collect UIDs (and merge them later).\\n            totalUids[i] = res.uids;\\n            unchecked {\\n                totalUidsCount += res.uids.length;\\n            }\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        // Merge all the collected UIDs and return them as a flatten array.\\n        return _mergeUIDs(totalUids, totalUidsCount);\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function revoke(RevocationRequest calldata request) public payable virtual {\\n        RevocationRequestData[] memory requests = new RevocationRequestData[](1);\\n        requests[0] = request.data;\\n\\n        _revoke(request.schema, requests, msg.sender, msg.value, true);\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function revokeByDelegation(DelegatedRevocationRequest calldata delegatedRequest) public payable virtual {\\n        _verifyRevoke(delegatedRequest);\\n\\n        RevocationRequestData[] memory data = new RevocationRequestData[](1);\\n        data[0] = delegatedRequest.data;\\n\\n        _revoke(delegatedRequest.schema, data, delegatedRequest.revoker, msg.value, true);\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiRevoke(MultiRevocationRequest[] calldata multiRequests) external payable {\\n        // We are keeping track of the total available ETH amount that can be sent to resolvers and will keep deducting\\n        // from it to verify that there isn\'t any attempt to send too much ETH to resolvers. Please note that unless\\n        // some ETH was stuck in the contract by accident (which shouldn\'t happen in normal conditions), it won\'t be\\n        // possible to send too much ETH anyway.\\n        uint availableValue = msg.value;\\n\\n        for (uint256 i = 0; i < multiRequests.length; ) {\\n            // The last batch is handled slightly differently: if the total available ETH wasn\'t spent in full and there\\n            // is a remainder - it will be refunded back to the attester (something that we can only verify during the\\n            // last and final batch).\\n            bool last;\\n            unchecked {\\n                last = i == multiRequests.length - 1;\\n            }\\n\\n            MultiRevocationRequest calldata multiRequest = multiRequests[i];\\n\\n            // Ensure to deduct the ETH that was forwarded to the resolver during the processing of this batch.\\n            availableValue -= _revoke(multiRequest.schema, multiRequest.data, msg.sender, availableValue, last);\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiRevokeByDelegation(\\n        MultiDelegatedRevocationRequest[] calldata multiDelegatedRequests\\n    ) external payable {\\n        // We are keeping track of the total available ETH amount that can be sent to resolvers and will keep deducting\\n        // from it to verify that there isn\'t any attempt to send too much ETH to resolvers. Please note that unless\\n        // some ETH was stuck in the contract by accident (which shouldn\'t happen in normal conditions), it won\'t be\\n        // possible to send too much ETH anyway.\\n        uint availableValue = msg.value;\\n\\n        for (uint256 i = 0; i < multiDelegatedRequests.length; ) {\\n            // The last batch is handled slightly differently: if the total available ETH wasn\'t spent in full and there\\n            // is a remainder - it will be refunded back to the attester (something that we can only verify during the\\n            // last and final batch).\\n            bool last;\\n            unchecked {\\n                last = i == multiDelegatedRequests.length - 1;\\n            }\\n\\n            MultiDelegatedRevocationRequest memory multiDelegatedRequest = multiDelegatedRequests[i];\\n            RevocationRequestData[] memory data = multiDelegatedRequest.data;\\n\\n            // Ensure that no inputs are missing.\\n            if (data.length == 0 || data.length != multiDelegatedRequest.signatures.length) {\\n                revert InvalidLength();\\n            }\\n\\n            // Verify EIP712 signatures. Please note that the signatures are assumed to be signed with increasing nonces.\\n            for (uint256 j = 0; j < data.length; ) {\\n                _verifyRevoke(\\n                    DelegatedRevocationRequest({\\n                        schema: multiDelegatedRequest.schema,\\n                        data: data[j],\\n                        signature: multiDelegatedRequest.signatures[j],\\n                        revoker: multiDelegatedRequest.revoker\\n                    })\\n                );\\n\\n                unchecked {\\n                    ++j;\\n                }\\n            }\\n\\n            // Ensure to deduct the ETH that was forwarded to the resolver during the processing of this batch.\\n            availableValue -= _revoke(\\n                multiDelegatedRequest.schema,\\n                data,\\n                multiDelegatedRequest.revoker,\\n                availableValue,\\n                last\\n            );\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function timestamp(bytes32 data) external returns (uint64) {\\n        uint64 time = _time();\\n\\n        _timestamp(data, time);\\n\\n        return time;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function revokeOffchain(bytes32 data) external returns (uint64) {\\n        uint64 time = _time();\\n\\n        _revokeOffchain(msg.sender, data, time);\\n\\n        return time;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiRevokeOffchain(bytes32[] calldata data) external returns (uint64) {\\n        uint64 time = _time();\\n\\n        uint256 length = data.length;\\n        for (uint256 i = 0; i < length; ) {\\n            _revokeOffchain(msg.sender, data[i], time);\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        return time;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function multiTimestamp(bytes32[] calldata data) external returns (uint64) {\\n        uint64 time = _time();\\n\\n        uint256 length = data.length;\\n        for (uint256 i = 0; i < length; ) {\\n            _timestamp(data[i], time);\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        return time;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function getAttestation(bytes32 uid) external view returns (Attestation memory) {\\n        return _db[uid];\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function isAttestationValid(bytes32 uid) public view returns (bool) {\\n        return _db[uid].uid != 0;\\n    }\\n\\n    /**\\n     * @inheritdoc IEAS\\n     */\\n    function getTimestamp(bytes32 data) external view returns (uint64) {\\n        return _timestamps[data];\\n    }\\n\\n    /**\\n      * @inheritdoc IEAS\\n      */\\n    function getRevokeOffchain(address revoker, bytes32 data) external view returns (uint64) {\\n        return _revocationsOffchain[revoker][data];\\n    }\\n\\n    /**\\n     * @dev Attests to a specific schema.\\n     *\\n     * @param schema // the unique identifier of the schema to attest to.\\n     * @param data The arguments of the attestation requests.\\n     * @param attester The attesting account.\\n     * @param availableValue The total available ETH amount that can be sent to the resolver.\\n     * @param last Whether this is the last attestations/revocations set.\\n     *\\n     * @return The UID of the new attestations and the total sent ETH amount.\\n     */\\n    function _attest(\\n        bytes32 schema,\\n        AttestationRequestData[] memory data,\\n        address attester,\\n        uint256 availableValue,\\n        bool last\\n    ) private returns (AttestationsResult memory) {\\n        uint256 length = data.length;\\n\\n        AttestationsResult memory res;\\n        res.uids = new bytes32[](length);\\n\\n        // Ensure that we aren\'t attempting to attest to a non-existing schema.\\n        SchemaRecord memory schemaRecord = _schemaRegistry.getSchema(schema);\\n        if (schemaRecord.uid == EMPTY_UID) {\\n            revert InvalidSchema();\\n        }\\n\\n        Attestation[] memory attestations = new Attestation[](length);\\n        uint256[] memory values = new uint256[](length);\\n\\n        for (uint256 i = 0; i < length; ) {\\n            AttestationRequestData memory request = data[i];\\n\\n            // Ensure that either no expiration time was set or that it was set in the future.\\n            if (request.expirationTime != NO_EXPIRATION_TIME && request.expirationTime <= _time()) {\\n                revert InvalidExpirationTime();\\n            }\\n\\n            // Ensure that we aren\'t trying to make a revocable attestation for a non-revocable schema.\\n            if (!schemaRecord.revocable && request.revocable) {\\n                revert Irrevocable();\\n            }\\n\\n            Attestation memory attestation = Attestation({\\n                uid: EMPTY_UID,\\n                schema: schema,\\n                refUID: request.refUID,\\n                time: _time(),\\n                expirationTime: request.expirationTime,\\n                revocationTime: 0,\\n                recipient: request.recipient,\\n                attester: attester,\\n                revocable: request.revocable,\\n                data: request.data\\n            });\\n\\n            // Look for the first non-existing UID (and use a bump seed/nonce in the rare case of a conflict).\\n            bytes32 uid;\\n            uint32 bump = 0;\\n            while (true) {\\n                uid = _getUID(attestation, bump);\\n                if (_db[uid].uid == EMPTY_UID) {\\n                    break;\\n                }\\n\\n                unchecked {\\n                    ++bump;\\n                }\\n            }\\n            attestation.uid = uid;\\n\\n            _db[uid] = attestation;\\n\\n            if (request.refUID != 0) {\\n                // Ensure that we aren\'t trying to attest to a non-existing referenced UID.\\n                if (!isAttestationValid(request.refUID)) {\\n                    revert NotFound();\\n                }\\n            }\\n\\n            attestations[i] = attestation;\\n            values[i] = request.value;\\n\\n            res.uids[i] = uid;\\n\\n            emit Attested(request.recipient, attester, uid, schema);\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        res.usedValue = _resolveAttestations(schemaRecord, attestations, values, false, availableValue, last);\\n\\n        return res;\\n    }\\n\\n    /**\\n     * @dev Revokes an existing attestation to a specific schema.\\n     *\\n     * @param schema The unique identifier of the schema to attest to.\\n     * @param data The arguments of the revocation requests.\\n     * @param revoker The revoking account.\\n     * @param availableValue The total available ETH amount that can be sent to the resolver.\\n     * @param last Whether this is the last attestations/revocations set.\\n     *\\n     * @return Returns the total sent ETH amount.\\n     */\\n    function _revoke(\\n        bytes32 schema,\\n        RevocationRequestData[] memory data,\\n        address revoker,\\n        uint256 availableValue,\\n        bool last\\n    ) private returns (uint256) {\\n        // Ensure that a non-existing schema ID wasn\'t passed by accident.\\n        SchemaRecord memory schemaRecord = _schemaRegistry.getSchema(schema);\\n        if (schemaRecord.uid == EMPTY_UID) {\\n            revert InvalidSchema();\\n        }\\n\\n        uint256 length = data.length;\\n        Attestation[] memory attestations = new Attestation[](length);\\n        uint256[] memory values = new uint256[](length);\\n\\n        for (uint256 i = 0; i < length; ) {\\n            RevocationRequestData memory request = data[i];\\n\\n            Attestation storage attestation = _db[request.uid];\\n\\n            // Ensure that we aren\'t attempting to revoke a non-existing attestation.\\n            if (attestation.uid == EMPTY_UID) {\\n                revert NotFound();\\n            }\\n\\n            // Ensure that a wrong schema ID wasn\'t passed by accident.\\n            if (attestation.schema != schema) {\\n                revert InvalidSchema();\\n            }\\n\\n            // Allow only original attesters to revoke their attestations.\\n            if (attestation.attester != revoker) {\\n                revert AccessDenied();\\n            }\\n\\n            // Please note that also checking of the schema itself is revocable is unnecessary, since it\'s not possible to\\n            // make revocable attestations to an irrevocable schema.\\n            if (!attestation.revocable) {\\n                revert Irrevocable();\\n            }\\n\\n            // Ensure that we aren\'t trying to revoke the same attestation twice.\\n            if (attestation.revocationTime != 0) {\\n                revert AlreadyRevoked();\\n            }\\n            attestation.revocationTime = _time();\\n\\n            attestations[i] = attestation;\\n            values[i] = request.value;\\n\\n            emit Revoked(attestation.recipient, revoker, request.uid, attestation.schema);\\n\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        return _resolveAttestations(schemaRecord, attestations, values, true, availableValue, last);\\n    }\\n\\n    /**\\n     * @dev Resolves a new attestation or a revocation of an existing attestation.\\n     *\\n     * @param schemaRecord The schema of the attestation.\\n     * @param attestation The data of the attestation to make/revoke.\\n     * @param value An explicit ETH amount to send to the resolver.\\n     * @param isRevocation Whether to resolve an attestation or its revocation.\\n     * @param availableValue The total available ETH amount that can be sent to the resolver.\\n     * @param last Whether this is the last attestations/revocations set.\\n     *\\n     * @return Returns the total sent ETH amount.\\n     */\\n    function _resolveAttestation(\\n        SchemaRecord memory schemaRecord,\\n        Attestation memory attestation,\\n        uint256 value,\\n        bool isRevocation,\\n        uint256 availableValue,\\n        bool last\\n    ) private returns (uint256) {\\n        ISchemaResolver resolver = schemaRecord.resolver;\\n        if (address(resolver) == address(0)) {\\n            // Ensure that we don\'t accept payments if there is no resolver.\\n            if (value != 0) {\\n                revert NotPayable();\\n            }\\n\\n            return 0;\\n        }\\n\\n        // Ensure that we don\'t accept payments which can\'t be forwarded to the resolver.\\n        if (value != 0 && !resolver.isPayable()) {\\n            revert NotPayable();\\n        }\\n\\n        // Ensure that the attester/revoker doesn\'t try to spend more than available.\\n        if (value > availableValue) {\\n            revert InsufficientValue();\\n        }\\n\\n        // Ensure to deduct the sent value explicitly.\\n        unchecked {\\n            availableValue -= value;\\n        }\\n\\n        if (isRevocation) {\\n            if (!resolver.revoke{ value: value }(attestation)) {\\n                revert InvalidRevocation();\\n            }\\n        } else if (!resolver.attest{ value: value }(attestation)) {\\n            revert InvalidAttestation();\\n        }\\n\\n        if (last) {\\n            _refund(availableValue);\\n        }\\n\\n        return value;\\n    }\\n\\n    /**\\n     * @dev Resolves multiple attestations or revocations of existing attestations.\\n     *\\n     * @param schemaRecord The schema of the attestation.\\n     * @param attestations The data of the attestations to make/revoke.\\n     * @param values Explicit ETH amounts to send to the resolver.\\n     * @param isRevocation Whether to resolve an attestation or its revocation.\\n     * @param availableValue The total available ETH amount that can be sent to the resolver.\\n     * @param last Whether this is the last attestations/revocations set.\\n     *\\n     * @return Returns the total sent ETH amount.\\n     */\\n    function _resolveAttestations(\\n        SchemaRecord memory schemaRecord,\\n        Attestation[] memory attestations,\\n        uint256[] memory values,\\n        bool isRevocation,\\n        uint256 availableValue,\\n        bool last\\n    ) private returns (uint256) {\\n        uint256 length = attestations.length;\\n        if (length == 1) {\\n            return _resolveAttestation(schemaRecord, attestations[0], values[0], isRevocation, availableValue, last);\\n        }\\n\\n        ISchemaResolver resolver = schemaRecord.resolver;\\n        if (address(resolver) == address(0)) {\\n            // Ensure that we don\'t accept payments if there is no resolver.\\n            for (uint256 i = 0; i < length; ) {\\n                if (values[i] != 0) {\\n                    revert NotPayable();\\n                }\\n\\n                unchecked {\\n                    ++i;\\n                }\\n            }\\n\\n            return 0;\\n        }\\n\\n        uint256 totalUsedValue = 0;\\n\\n        for (uint256 i = 0; i < length; ) {\\n            uint256 value = values[i];\\n\\n            // Ensure that we don\'t accept payments which can\'t be forwarded to the resolver.\\n            if (value != 0 && !resolver.isPayable()) {\\n                revert NotPayable();\\n            }\\n\\n            // Ensure that the attester/revoker doesn\'t try to spend more than available.\\n            if (value > availableValue) {\\n                revert InsufficientValue();\\n            }\\n\\n            // Ensure to deduct the sent value explicitly and add it to the total used value by the batch.\\n            unchecked {\\n                availableValue -= value;\\n                totalUsedValue += value;\\n\\n                ++i;\\n            }\\n        }\\n\\n        if (isRevocation) {\\n            if (!resolver.multiRevoke{ value: totalUsedValue }(attestations, values)) {\\n                revert InvalidRevocations();\\n            }\\n        } else if (!resolver.multiAttest{ value: totalUsedValue }(attestations, values)) {\\n            revert InvalidAttestations();\\n        }\\n\\n        if (last) {\\n            _refund(availableValue);\\n        }\\n\\n        return totalUsedValue;\\n    }\\n\\n    /**\\n     * @dev Calculates a UID for a given attestation.\\n     *\\n     * @param attestation The input attestation.\\n     * @param bump A bump value to use in case of a UID conflict.\\n     *\\n     * @return Attestation UID.\\n     */\\n    function _getUID(Attestation memory attestation, uint32 bump) private pure returns (bytes32) {\\n        return\\n            keccak256(\\n                abi.encodePacked(\\n                    attestation.schema,\\n                    attestation.recipient,\\n                    attestation.attester,\\n                    attestation.time,\\n                    attestation.expirationTime,\\n                    attestation.revocable,\\n                    attestation.refUID,\\n                    attestation.data,\\n                    bump\\n                )\\n            );\\n    }\\n\\n    /**\\n     * @dev Refunds remaining ETH amount to the attester.\\n     *\\n     * @param remainingValue The remaining ETH amount that was not sent to the resolver.\\n     */\\n    function _refund(uint256 remainingValue) private {\\n        if (remainingValue > 0) {\\n            // Using a regular transfer here might revert, for some non-EOA attesters, due to exceeding of the 2300\\n            // gas limit which is why we\'re using call instead (via sendValue), which the 2300 gas limit does not\\n            // apply for.\\n            payable(msg.sender).sendValue(remainingValue);\\n        }\\n    }\\n\\n    /**\\n     * @dev Merges lists of UIDs.\\n     *\\n     * @param uidLists The provided lists of UIDs.\\n     * @param uidsCount Total UIDs count.\\n     *\\n     * @return A merged and flatten list of all the UIDs.\\n     */\\n    function _mergeUIDs(bytes32[][] memory uidLists, uint256 uidsCount) private pure returns (bytes32[] memory) {\\n        bytes32[] memory uids = new bytes32[](uidsCount);\\n\\n        uint256 currentIndex = 0;\\n        for (uint256 i = 0; i < uidLists.length; ) {\\n            bytes32[] memory currentUids = uidLists[i];\\n            for (uint256 j = 0; j < currentUids.length; ) {\\n                uids[currentIndex] = currentUids[j];\\n\\n                unchecked {\\n                    ++j;\\n                    ++currentIndex;\\n                }\\n            }\\n            unchecked {\\n                ++i;\\n            }\\n        }\\n\\n        return uids;\\n    }\\n\\n    /**\\n     * @dev Timestamps the specified bytes32 data.\\n     *\\n     * @param data The data to timestamp.\\n     * @param time The timestamp.\\n     */\\n    function _timestamp(bytes32 data, uint64 time) private {\\n        if (_timestamps[data] != 0) {\\n            revert AlreadyTimestamped();\\n        }\\n\\n        _timestamps[data] = time;\\n\\n        emit Timestamped(data, time);\\n    }\\n\\n    /**\\n         * @dev Timestamps the specified bytes32 data.\\n         *\\n         * @param data The data to timestamp.\\n         * @param time The timestamp.\\n         */\\n    function _revokeOffchain(address revoker, bytes32 data, uint64 time) private {\\n        mapping(bytes32 data => uint64 timestamp) storage revocations = _revocationsOffchain[revoker];\\n\\n\\n        if (revocations[data] != 0) {\\n            revert AlreadyRevokedOffchain();\\n        }\\n\\n        revocations[data] = time;\\n\\n        emit RevokedOffchain(revoker, data, time);\\n    }\\n\\n    /**\\n     * @dev Returns the current\'s block timestamp. This method is overridden during tests and used to simulate the\\n     * current block time.\\n     */\\n    function _time() internal view virtual returns (uint64) {\\n        return uint64(block.timestamp);\\n    }\\n}\\n","keccak256":"0x8b7233cc7377d5d90ccffcd67c93287fda47bcdc92ca0df0b10c22bf35a3f231","license":"MIT"},"contracts/EIP712Verifier.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\nimport { EIP712 } from \\"@openzeppelin/contracts/utils/cryptography/EIP712.sol\\";\\nimport { ECDSA } from \\"@openzeppelin/contracts/utils/cryptography/ECDSA.sol\\";\\n\\n// prettier-ignore\\nimport {\\n    AttestationRequest,\\n    AttestationRequestData,\\n    DelegatedAttestationRequest,\\n    DelegatedRevocationRequest,\\n    RevocationRequest,\\n    RevocationRequestData\\n} from \\"./IEAS.sol\\";\\n\\nimport { EIP712Signature } from \\"./Types.sol\\";\\n\\n/**\\n * @title EIP712 typed signatures verifier for EAS delegated attestations.\\n */\\nabstract contract EIP712Verifier is EIP712 {\\n    error InvalidSignature();\\n\\n    // The hash of the data type used to relay calls to the attest function. It\'s the value of\\n    // keccak256(\\"Attest(bytes32 schema,address recipient,uint64 expirationTime,bool revocable,bytes32 refUID,bytes data,uint256 nonce)\\").\\n    bytes32 private constant ATTEST_TYPEHASH = 0xdbfdf8dc2b135c26253e00d5b6cbe6f20457e003fd526d97cea183883570de61;\\n\\n    // The hash of the data type used to relay calls to the revoke function. It\'s the value of\\n    // keccak256(\\"Revoke(bytes32 schema,bytes32 uid,uint256 nonce)\\").\\n    bytes32 private constant REVOKE_TYPEHASH = 0xa98d02348410c9c76735e0d0bb1396f4015ac2bb9615f9c2611d19d7a8a99650;\\n\\n    // Replay protection nonces.\\n    mapping(address => uint256) private _nonces;\\n\\n    /**\\n     * @dev Creates a new EIP712Verifier instance.\\n     *\\n     * @param version The current major version of the signing domain\\n     */\\n    constructor(string memory version) EIP712(\\"EAS\\", version) {}\\n\\n    /**\\n     * @dev Returns the domain separator used in the encoding of the signatures for attest, and revoke.\\n     */\\n    function getDomainSeparator() external view returns (bytes32) {\\n        return _domainSeparatorV4();\\n    }\\n\\n    /**\\n     * @dev Returns the current nonce per-account.\\n     *\\n     * @param account The requested account.\\n     *\\n     * @return The current nonce.\\n     */\\n    function getNonce(address account) external view returns (uint256) {\\n        return _nonces[account];\\n    }\\n\\n    /**\\n     * Returns the EIP712 type hash for the attest function.\\n     */\\n    function getAttestTypeHash() external pure returns (bytes32) {\\n        return ATTEST_TYPEHASH;\\n    }\\n\\n    /**\\n     * Returns the EIP712 type hash for the revoke function.\\n     */\\n    function getRevokeTypeHash() external pure returns (bytes32) {\\n        return REVOKE_TYPEHASH;\\n    }\\n\\n    /**\\n     * @dev Verifies delegated attestation request.\\n     *\\n     * @param request The arguments of the delegated attestation request.\\n     */\\n    function _verifyAttest(DelegatedAttestationRequest memory request) internal {\\n        AttestationRequestData memory data = request.data;\\n        EIP712Signature memory signature = request.signature;\\n\\n        uint256 nonce;\\n        unchecked {\\n            nonce = _nonces[request.attester]++;\\n        }\\n\\n        bytes32 digest = _hashTypedDataV4(\\n            keccak256(\\n                abi.encode(\\n                    ATTEST_TYPEHASH,\\n                    request.schema,\\n                    data.recipient,\\n                    data.expirationTime,\\n                    data.revocable,\\n                    data.refUID,\\n                    keccak256(data.data),\\n                    nonce\\n                )\\n            )\\n        );\\n\\n        if (ECDSA.recover(digest, signature.v, signature.r, signature.s) != request.attester) {\\n            revert InvalidSignature();\\n        }\\n    }\\n\\n    /**\\n     * @dev Verifies delegated revocation request.\\n     *\\n     * @param request The arguments of the delegated revocation request.\\n     */\\n    function _verifyRevoke(DelegatedRevocationRequest memory request) internal {\\n        RevocationRequestData memory data = request.data;\\n        EIP712Signature memory signature = request.signature;\\n\\n        uint256 nonce;\\n        unchecked {\\n            nonce = _nonces[request.revoker]++;\\n        }\\n\\n        bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(REVOKE_TYPEHASH, request.schema, data.uid, nonce)));\\n\\n        if (ECDSA.recover(digest, signature.v, signature.r, signature.s) != request.revoker) {\\n            revert InvalidSignature();\\n        }\\n    }\\n}\\n","keccak256":"0x373763eb3fa3bd3a8b7e839bfdc3319fbcd259d1029f227b88121c5450bdfae4","license":"MIT"},"contracts/IEAS.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { ISchemaRegistry } from \\"./ISchemaRegistry.sol\\";\\nimport { Attestation, EIP712Signature } from \\"./Types.sol\\";\\n\\n/**\\n * @dev A struct representing the arguments of the attestation request.\\n */\\nstruct AttestationRequestData {\\n    address recipient; // The recipient of the attestation.\\n    uint64 expirationTime; // The time when the attestation expires (Unix timestamp).\\n    bool revocable; // Whether the attestation is revocable.\\n    bytes32 refUID; // The UID of the related attestation.\\n    bytes data; // Custom attestation data.\\n    uint256 value; // An explicit ETH amount to send to the resolver. This is important to prevent accidental user errors.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the attestation request.\\n */\\nstruct AttestationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    AttestationRequestData data; // The arguments of the attestation request.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the full delegated attestation request.\\n */\\nstruct DelegatedAttestationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    AttestationRequestData data; // The arguments of the attestation request.\\n    EIP712Signature signature; // The EIP712 signature data.\\n    address attester; // The attesting account.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the multi attestation request.\\n */\\nstruct MultiAttestationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    AttestationRequestData[] data; // The arguments of the attestation request.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the delegated multi attestation request.\\n */\\nstruct MultiDelegatedAttestationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    AttestationRequestData[] data; // The arguments of the attestation requests.\\n    EIP712Signature[] signatures; // The EIP712 signatures data. Please note that the signatures are assumed to be signed with increasing nonces.\\n    address attester; // The attesting account.\\n}\\n\\n/**\\n * @dev A struct representing the arguments of the revocation request.\\n */\\nstruct RevocationRequestData {\\n    bytes32 uid; // The UID of the attestation to revoke.\\n    uint256 value; // An explicit ETH amount to send to the resolver. This is important to prevent accidental user errors.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the revocation request.\\n */\\nstruct RevocationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    RevocationRequestData data; // The arguments of the revocation request.\\n}\\n\\n/**\\n * @dev A struct representing the arguments of the full delegated revocation request.\\n */\\nstruct DelegatedRevocationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    RevocationRequestData data; // The arguments of the revocation request.\\n    EIP712Signature signature; // The EIP712 signature data.\\n    address revoker; // The revoking account.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the multi revocation request.\\n */\\nstruct MultiRevocationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    RevocationRequestData[] data; // The arguments of the revocation request.\\n}\\n\\n/**\\n * @dev A struct representing the full arguments of the delegated multi revocation request.\\n */\\nstruct MultiDelegatedRevocationRequest {\\n    bytes32 schema; // The unique identifier of the schema.\\n    RevocationRequestData[] data; // The arguments of the revocation requests.\\n    EIP712Signature[] signatures; // The EIP712 signatures data. Please note that the signatures are assumed to be signed with increasing nonces.\\n    address revoker; // The revoking account.\\n}\\n\\n/**\\n * @title EAS - Ethereum Attestation Service interface.\\n */\\ninterface IEAS {\\n    /**\\n     * @dev Emitted when an attestation has been made.\\n     *\\n     * @param recipient The recipient of the attestation.\\n     * @param attester The attesting account.\\n     * @param uid The UID the revoked attestation.\\n     * @param schema The UID of the schema.\\n     */\\n    event Attested(address indexed recipient, address indexed attester, bytes32 uid, bytes32 indexed schema);\\n\\n    /**\\n     * @dev Emitted when an attestation has been revoked.\\n     *\\n     * @param recipient The recipient of the attestation.\\n     * @param attester The attesting account.\\n     * @param schema The UID of the schema.\\n     * @param uid The UID the revoked attestation.\\n     */\\n    event Revoked(address indexed recipient, address indexed attester, bytes32 uid, bytes32 indexed schema);\\n\\n    /**\\n     * @dev Emitted when a data has been timestamped.\\n     *\\n     * @param data The data.\\n     * @param timestamp The timestamp.\\n     */\\n    event Timestamped(bytes32 indexed data, uint64 indexed timestamp);\\n\\n    /**\\n     * @dev Emitted when a data has been revoked.\\n     *\\n     * @param revoker The address of the revoker.\\n     * @param data The data.\\n     * @param timestamp The timestamp.\\n     */\\n    event RevokedOffchain(address indexed revoker, bytes32 indexed data, uint64 indexed timestamp);\\n\\n    /**\\n     * @dev Returns the address of the global schema registry.\\n     *\\n     * @return The address of the global schema registry.\\n     */\\n    function getSchemaRegistry() external view returns (ISchemaRegistry);\\n\\n    /**\\n     * @dev Attests to a specific schema.\\n     *\\n     * @param request The arguments of the attestation request.\\n     *\\n     * Example:\\n     *\\n     * attest({\\n     *     schema: \\"0facc36681cbe2456019c1b0d1e7bedd6d1d40f6f324bf3dd3a4cef2999200a0\\",\\n     *     data: {\\n     *         recipient: \\"0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\\",\\n     *         expirationTime: 0,\\n     *         revocable: true,\\n     *         refUID: \\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\n     *         data: \\"0xF00D\\",\\n     *         value: 0\\n     *     }\\n     * })\\n     *\\n     * @return The UID of the new attestation.\\n     */\\n    function attest(AttestationRequest calldata request) external payable returns (bytes32);\\n\\n    /**\\n     * @dev Attests to a specific schema via the provided EIP712 signature.\\n     *\\n     * @param delegatedRequest The arguments of the delegated attestation request.\\n     *\\n     * Example:\\n     *\\n     * attestByDelegation({\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: {\\n     *         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',\\n     *         expirationTime: 1673891048,\\n     *         revocable: true,\\n     *         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',\\n     *         data: \'0x1234\',\\n     *         value: 0\\n     *     },\\n     *     signature: {\\n     *         v: 28,\\n     *         r: \'0x148c...b25b\',\\n     *         s: \'0x5a72...be22\'\\n     *     },\\n     *     attester: \'0xc5E8740aD971409492b1A63Db8d83025e0Fc427e\'\\n     * })\\n     *\\n     * @return The UID of the new attestation.\\n     */\\n    function attestByDelegation(\\n        DelegatedAttestationRequest calldata delegatedRequest\\n    ) external payable returns (bytes32);\\n\\n    /**\\n     * @dev Attests to multiple schemas.\\n     *\\n     * @param multiRequests The arguments of the multi attestation requests. The requests should be grouped by distinct\\n     * schema ids to benefit from the best batching optimization.\\n     *\\n     * Example:\\n     *\\n     * multiAttest([{\\n     *     schema: \'0x33e9094830a5cba5554d1954310e4fbed2ef5f859ec1404619adea4207f391fd\',\\n     *     data: [{\\n     *         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',\\n     *         expirationTime: 1673891048,\\n     *         revocable: true,\\n     *         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',\\n     *         data: \'0x1234\',\\n     *         value: 1000\\n     *     },\\n     *     {\\n     *         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',\\n     *         expirationTime: 0,\\n     *         revocable: false,\\n     *         refUID: \'0x480df4a039efc31b11bfdf491b383ca138b6bde160988222a2a3509c02cee174\',\\n     *         data: \'0x00\',\\n     *         value: 0\\n     *     }],\\n     * },\\n     * {\\n     *     schema: \'0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425\',\\n     *     data: [{\\n     *         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',\\n     *         expirationTime: 0,\\n     *         revocable: true,\\n     *         refUID: \'0x75bf2ed8dca25a8190c50c52db136664de25b2449535839008ccfdab469b214f\',\\n     *         data: \'0x12345678\',\\n     *         value: 0\\n     *     },\\n     * }])\\n     *\\n     * @return The UIDs of the new attestations.\\n     */\\n    function multiAttest(MultiAttestationRequest[] calldata multiRequests) external payable returns (bytes32[] memory);\\n\\n    /**\\n     * @dev Attests to multiple schemas using via provided EIP712 signatures.\\n     *\\n     * @param multiDelegatedRequests The arguments of the delegated multi attestation requests. The requests should be\\n     * grouped by distinct schema ids to benefit from the best batching optimization.\\n     *\\n     * Example:\\n     *\\n     * multiAttestByDelegation([{\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: [{\\n     *         recipient: \'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\',\\n     *         expirationTime: 1673891048,\\n     *         revocable: true,\\n     *         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',\\n     *         data: \'0x1234\',\\n     *         value: 0\\n     *     },\\n     *     {\\n     *         recipient: \'0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf\',\\n     *         expirationTime: 0,\\n     *         revocable: false,\\n     *         refUID: \'0x0000000000000000000000000000000000000000000000000000000000000000\',\\n     *         data: \'0x00\',\\n     *         value: 0\\n     *     }],\\n     *     signatures: [{\\n     *         v: 28,\\n     *         r: \'0x148c...b25b\',\\n     *         s: \'0x5a72...be22\'\\n     *     },\\n     *     {\\n     *         v: 28,\\n     *         r: \'0x487s...67bb\',\\n     *         s: \'0x12ad...2366\'\\n     *     }],\\n     *     attester: \'0x1D86495b2A7B524D747d2839b3C645Bed32e8CF4\'\\n     * }])\\n     *\\n     * @return The UIDs of the new attestations.\\n     */\\n    function multiAttestByDelegation(\\n        MultiDelegatedAttestationRequest[] calldata multiDelegatedRequests\\n    ) external payable returns (bytes32[] memory);\\n\\n    /**\\n     * @dev Revokes an existing attestation to a specific schema.\\n     *\\n     * Example:\\n     *\\n     * revoke({\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: {\\n     *         uid: \'0x101032e487642ee04ee17049f99a70590c735b8614079fc9275f9dd57c00966d\',\\n     *         value: 0\\n     *     }\\n     * })\\n     *\\n     * @param request The arguments of the revocation request.\\n     */\\n    function revoke(RevocationRequest calldata request) external payable;\\n\\n    /**\\n     * @dev Revokes an existing attestation to a specific schema via the provided EIP712 signature.\\n     *\\n     * Example:\\n     *\\n     * revokeByDelegation({\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: {\\n     *         uid: \'0xcbbc12102578c642a0f7b34fe7111e41afa25683b6cd7b5a14caf90fa14d24ba\',\\n     *         value: 0\\n     *     },\\n     *     signature: {\\n     *         v: 27,\\n     *         r: \'0xb593...7142\',\\n     *         s: \'0x0f5b...2cce\'\\n     *     },\\n     *     revoker: \'0x244934dd3e31bE2c81f84ECf0b3E6329F5381992\'\\n     * })\\n     *\\n     * @param delegatedRequest The arguments of the delegated revocation request.\\n     */\\n    function revokeByDelegation(DelegatedRevocationRequest calldata delegatedRequest) external payable;\\n\\n    /**\\n     * @dev Revokes existing attestations to multiple schemas.\\n     *\\n     * @param multiRequests The arguments of the multi revocation requests. The requests should be grouped by distinct\\n     * schema ids to benefit from the best batching optimization.\\n     *\\n     * Example:\\n     *\\n     * multiRevoke([{\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: [{\\n     *         uid: \'0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25\',\\n     *         value: 1000\\n     *     },\\n     *     {\\n     *         uid: \'0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade\',\\n     *         value: 0\\n     *     }],\\n     * },\\n     * {\\n     *     schema: \'0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425\',\\n     *     data: [{\\n     *         uid: \'0x053d42abce1fd7c8fcddfae21845ad34dae287b2c326220b03ba241bc5a8f019\',\\n     *         value: 0\\n     *     },\\n     * }])\\n     */\\n    function multiRevoke(MultiRevocationRequest[] calldata multiRequests) external payable;\\n\\n    /**\\n     * @dev Revokes existing attestations to multiple schemas via provided EIP712 signatures.\\n     *\\n     * @param multiDelegatedRequests The arguments of the delegated multi revocation attestation requests. The requests should be\\n     * grouped by distinct schema ids to benefit from the best batching optimization.\\n     *\\n     * Example:\\n     *\\n     * multiRevokeByDelegation([{\\n     *     schema: \'0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc\',\\n     *     data: [{\\n     *         uid: \'0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25\',\\n     *         value: 1000\\n     *     },\\n     *     {\\n     *         uid: \'0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade\',\\n     *         value: 0\\n     *     }],\\n     *     signatures: [{\\n     *         v: 28,\\n     *         r: \'0x148c...b25b\',\\n     *         s: \'0x5a72...be22\'\\n     *     },\\n     *     {\\n     *         v: 28,\\n     *         r: \'0x487s...67bb\',\\n     *         s: \'0x12ad...2366\'\\n     *     }],\\n     *     revoker: \'0x244934dd3e31bE2c81f84ECf0b3E6329F5381992\'\\n     * }])\\n     *\\n     */\\n    function multiRevokeByDelegation(\\n        MultiDelegatedRevocationRequest[] calldata multiDelegatedRequests\\n    ) external payable;\\n\\n    /**\\n     * @dev Timestamps the specified bytes32 data.\\n     *\\n     * @param data The data to timestamp.\\n     *\\n     * @return The timestamp the data was timestamped with.\\n     */\\n    function timestamp(bytes32 data) external returns (uint64);\\n\\n    /**\\n     * @dev Timestamps the specified multiple bytes32 data.\\n     *\\n     * @param data The data to timestamp.\\n     *\\n     * @return The timestamp the data was timestamped with.\\n     */\\n    function multiTimestamp(bytes32[] calldata data) external returns (uint64);\\n\\n    /**\\n     * @dev Revokes the specified bytes32 data.\\n     *\\n     * @param data The data to timestamp.\\n     *\\n     * @return The timestamp the data was revoked with.\\n     */\\n    function revokeOffchain(bytes32 data) external returns (uint64);\\n\\n    /**\\n     * @dev Revokes the specified multiple bytes32 data.\\n     *\\n     * @param data The data to timestamp.\\n     *\\n     * @return The timestamp the data was revoked with.\\n     */\\n    function multiRevokeOffchain(bytes32[] calldata data) external returns (uint64);\\n\\n    /**\\n     * @dev Returns an existing attestation by UID.\\n     *\\n     * @param uid The UID of the attestation to retrieve.\\n     *\\n     * @return The attestation data members.\\n     */\\n    function getAttestation(bytes32 uid) external view returns (Attestation memory);\\n\\n    /**\\n     * @dev Checks whether an attestation exists.\\n     *\\n     * @param uid The UID of the attestation to retrieve.\\n     *\\n     * @return Whether an attestation exists.\\n     */\\n    function isAttestationValid(bytes32 uid) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the timestamp that the specified data was timestamped with.\\n     *\\n     * @param data The data to query.\\n     *\\n     * @return The timestamp the data was timestamped with.\\n     */\\n    function getTimestamp(bytes32 data) external view returns (uint64);\\n\\n    /**\\n     * @dev Returns the timestamp that the specified data was timestamped with.\\n     *\\n     * @param data The data to query.\\n     *\\n     * @return The timestamp the data was timestamped with.\\n     */\\n    function getRevokeOffchain(address revoker, bytes32 data) external view returns (uint64);\\n}\\n","keccak256":"0x77037a2caac190938c12fc150159abc4b59069fa4cb71a7b75f0c3d08a55a419","license":"MIT"},"contracts/ISchemaRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\n/**\\n * @title A struct representing a record for a submitted schema.\\n */\\nstruct SchemaRecord {\\n    bytes32 uid; // The unique identifier of the schema.\\n    ISchemaResolver resolver; // Optional schema resolver.\\n    bool revocable; // Whether the schema allows revocations explicitly.\\n    string schema; // Custom specification of the schema (e.g., an ABI).\\n}\\n\\n/**\\n * @title The global schema registry interface.\\n */\\ninterface ISchemaRegistry {\\n    /**\\n     * @dev Emitted when a new schema has been registered\\n     *\\n     * @param uid The schema UID.\\n     * @param registerer The address of the account used to register the schema.\\n     */\\n    event Registered(bytes32 indexed uid, address registerer);\\n\\n    /**\\n     * @dev Submits and reserves a new schema\\n     *\\n     * @param schema The schema data schema.\\n     * @param resolver An optional schema resolver.\\n     * @param revocable Whether the schema allows revocations explicitly.\\n     *\\n     * @return The UID of the new schema.\\n     */\\n    function register(string calldata schema, ISchemaResolver resolver, bool revocable) external returns (bytes32);\\n\\n    /**\\n     * @dev Returns an existing schema by UID\\n     *\\n     * @param uid The UID of the schema to retrieve.\\n     *\\n     * @return The schema data members.\\n     */\\n    function getSchema(bytes32 uid) external view returns (SchemaRecord memory);\\n}\\n","keccak256":"0xef47e449dd02bd034e26b1dea505ce533906f8462fc674c938ed0e872a68d640","license":"MIT"},"contracts/Types.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\n// A representation of an empty/uninitialized UID.\\nbytes32 constant EMPTY_UID = 0;\\n\\n/**\\n * @dev A struct representing EIP712 signature data.\\n */\\nstruct EIP712Signature {\\n    uint8 v; // The recovery ID.\\n    bytes32 r; // The x-coordinate of the nonce R.\\n    bytes32 s; // The signature data.\\n}\\n\\n/**\\n * @dev A struct representing a single attestation.\\n */\\nstruct Attestation {\\n    bytes32 uid; // A unique identifier of the attestation.\\n    bytes32 schema; // The unique identifier of the schema.\\n    uint64 time; // The time when the attestation was created (Unix timestamp).\\n    uint64 expirationTime; // The time when the attestation expires (Unix timestamp).\\n    uint64 revocationTime; // The time when the attestation was revoked (Unix timestamp).\\n    bytes32 refUID; // The UID of the related attestation.\\n    address recipient; // The recipient of the attestation.\\n    address attester; // The attester/sender of the attestation.\\n    bool revocable; // Whether the attestation is revocable.\\n    bytes data; // Custom attestation data.\\n}\\n","keccak256":"0x547096b5cb7bfad9591bdc520705f8110534cd040ed0f7a0ba8d83ea4a565b45","license":"MIT"},"contracts/resolver/ISchemaResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { Attestation } from \\"../Types.sol\\";\\n\\n/**\\n * @title The interface of an optional schema resolver.\\n */\\ninterface ISchemaResolver {\\n    /**\\n     * @dev Returns whether the resolver supports ETH transfers.\\n     */\\n    function isPayable() external pure returns (bool);\\n\\n    /**\\n     * @dev Processes an attestation and verifies whether it\'s valid.\\n     *\\n     * @param attestation The new attestation.\\n     *\\n     * @return Whether the attestation is valid.\\n     */\\n    function attest(Attestation calldata attestation) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes multiple attestations and verifies whether they are valid.\\n     *\\n     * @param attestations The new attestations.\\n     * @param values Explicit ETH amounts which were sent with each attestation.\\n     *\\n     * @return Whether all the attestations are valid.\\n     */\\n    function multiAttest(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes an attestation revocation and verifies if it can be revoked.\\n     *\\n     * @param attestation The existing attestation to be revoked.\\n     *\\n     * @return Whether the attestation can be revoked.\\n     */\\n    function revoke(Attestation calldata attestation) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes revocation of multiple attestation and verifies they can be revoked.\\n     *\\n     * @param attestations The existing attestations to be revoked.\\n     * @param values Explicit ETH amounts which were sent with each revocation.\\n     *\\n     * @return Whether the attestations can be revoked.\\n     */\\n    function multiRevoke(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n}\\n","keccak256":"0x0f3a75c28cdb91fa9227a6eef183379ecea2b6bf38db52795b5c4e6af79299e8","license":"MIT"}},"version":1}',
          bytecode:
            "0x61016034620001b657601f62004fdb38819003918201601f19168301926001600160401b0392909183851183861017620001a0578160209284926040978852833981010312620001b657516001600160a01b03811692838203620001b6578051926200006b84620001bb565b6004845260208401631817191b60e11b81526003602084516200008e81620001bb565b828152016245415360e81b81522094519020948460e052610100958087524660a052835160208101917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f978884528683015260608201524660808201523060a082015260a0815260c081019381851090851117620001a0578385525190206080523060c052610120948552156200019157506101409182525191614e039384620001d8853960805184614892015260a0518461494d015260c05184614863015260e051846148e101525183614907015251826148be01525181818161028601528181610ab4015281816110b801528181612b5e0152818161324c01526134ca0152f35b6311a1e69760e01b8152600490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620001a05760405256fe61010080604052600436101561001457600080fd5b60003560e01c90816312b11a1714611eec5750806313893f6114611e645780632d0335ab14611dff57806344adc90e14611cfc5780634692626714611c9e5780634cb7e9e514611b9c5780634d00307014611b54578063831e05a11461192e578063a3112a64146118c7578063b469318d1461184a578063b83010d3146117f1578063cf190f34146117a8578063d45c443514611754578063e13458fc14610f5c578063e30bb56314610f08578063e45d03f914610ca4578063e57a6b1b14610ba0578063e71ff36514610b19578063ed24911d14610ad8578063f10b5cc814610a69578063f17325e7146101975763ffa1ad741461011257600080fd5b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925761018e60405161015081612149565b600481527f302e3236000000000000000000000000000000000000000000000000000000006020820152604051918291602083526020830190612016565b0390f35b600080fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc602081360112610192576004359067ffffffffffffffff821161019257604082600401918336030112610192576102046101f0612215565b926101ff60243692018461227d565b6122d1565b61020d836122b0565b52610217826122b0565b50610220612942565b5081519161022c612942565b916102368461295c565b6020840152604051937fa2ea7c6e0000000000000000000000000000000000000000000000000000000085528135600486015260008560248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa948515610a5d57600095610a38575b50845115610a0e57916102c983612a7f565b916102d38461295c565b936000925b8184106103045760206102fb81896102f2348b8b8f61376d565b815201516122b0565b51604051908152f35b610316848299949698939597996122bd565b519267ffffffffffffffff60208501511680151590816109f9575b506109cf57604081015115806109c2575b6109985760608401519467ffffffffffffffff6020860151169573ffffffffffffffffffffffffffffffffffffffff86511660408701511515906080880151926040519961038f8b612165565b60008b528b3560208c015267ffffffffffffffff421660408c015260608b0152600060808b015260a08a015260c08901523360e089015261010088015261012087015260005b602087015160c08801516104de609d60e08b015160408c01518c60608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b8201907fffffffff000000000000000000000000000000000000000000000000000000008860e01b169082015203607d810184520182612182565b51902080600052600160205260406000205415610504575060010163ffffffff166103d5565b919690509997919998969492939881815281600052600160205260406000209080518255602081015160018301556105e36002830167ffffffffffffffff6040840151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff0000000000000000606087015160401b1692161717815567ffffffffffffffff6080840151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a081015160038301556004820173ffffffffffffffffffffffffffffffffffffffff60c0830151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005820173ffffffffffffffffffffffffffffffffffffffff60e0830151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff0000000000000000000000000000000000000000610100860151151560a01b1692161717905561012081015180519167ffffffffffffffff831161096957838c938c938f9660066106ca91015461278f565b601f81116108f5575b50602090601f831160011461081857600692916000918361080d575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b6060870151806107b8575b5085602073ffffffffffffffffffffffffffffffffffffffff9560019995610765848761077d9761075f838e9b6122bd565b526122bd565b506107758460a0890151926122bd565b5201516122bd565b525116906040519081528535917f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b3560203393a40192906102d8565b915092506107d491506000526001602052604060002054151590565b156107e35788888b928e61072d565b60046040517fc5723b51000000000000000000000000000000000000000000000000000000008152fd5b0151905038806106ef565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0851681106108ca5750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06006971610610893575b505050811b01910155610722565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080610885565b9497509295509396506020600181928685015181550194019201928f9693928f9693928f9693610829565b9295509295509250600684016000526020600020601f840160051c810160208510610962575b928f9693928f9693928f96935b601f830160051c8201811061093e5750506106d3565b60019396995080929598506000919497505501928f9693928f9693928f9693610928565b508061091b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60046040517f157bd4c3000000000000000000000000000000000000000000000000000000008152fd5b5060408401511515610342565b60046040517f08e8b937000000000000000000000000000000000000000000000000000000008152fd5b905067ffffffffffffffff421610158a610331565b60046040517fbf37b20e000000000000000000000000000000000000000000000000000000008152fd5b610a569195503d806000833e610a4e8183612182565b8101906129b8565b93856102b7565b6040513d6000823e3d90fd5b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576020610b1161484c565b604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257610b69903690600401611f43565b9142169160005b818110610b8257602084604051908152f35b80610b9a85610b946001948688612734565b356146e1565b01610b70565b60e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257604051610bd6816120f5565b600435808252610be53661267c565b602083015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c36011261019257604051610c208161212d565b60643560ff81168103610192578152608435602082015260a4356040820152604083015260c43573ffffffffffffffffffffffffffffffffffffffff8116810361019257610c7683826060610ca2960152614d30565b610c7e61262d565b610c873661267c565b610c90826122b0565b52610c9a816122b0565b5034926131ff565b005b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257610cf183913690600401611f43565b909234926000915b838310610d0257005b610d0d838588612599565b946080863603126101925760405195610d25876120f5565b803587528381013583811161019257810194601f9536878201121561019257610d5490369087813591016126c2565b9285890193845260408301358581116101925783019636908801121561019257863594610d80866121fd565b97610d8e604051998a612182565b868952878901886060809902830101913683116101925789808a9201925b848410610ef05750509050610dca915060408c01958a875201611f97565b94868b01958652519788518015918215610ee4575b5050610eba5760005b8851811015610e5057600190610e4a8c51610e03838d6122bd565b51610e0f848a516122bd565b5173ffffffffffffffffffffffffffffffffffffffff8b51169160405193610e36856120f5565b84528d84015260408301528a820152614d30565b01610de8565b50986001955081935090610eaa929a97610eb09592519073ffffffffffffffffffffffffffffffffffffffff8d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8d01149451169161347c565b9061255d565b9501919493610cf9565b60046040517f947d5a84000000000000000000000000000000000000000000000000000000008152fd5b51141590508c80610ddf565b610efa3685612393565b815201910190898991610dac565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576020610f526004356000526001602052604060002054151590565b6040519015158152f35b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126101925760043567ffffffffffffffff81116101925760c0816004019282360301126101925760405190610fb6826120f5565b82358252602481019182359167ffffffffffffffff83116101925760a461101691610fea61104695600436918401016122d1565b6020850152610ffc3660448301612393565b6040850152019161100c83611f97565b6060820152614973565b61102d611021612215565b936101ff36918761227d565b611036846122b0565b52611040836122b0565b506123d1565b9061104f612942565b5080519061105b612942565b60e0526110678261295c565b602060e05101526040517fa2ea7c6e0000000000000000000000000000000000000000000000000000000081528435600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa8015610a5d576000608052611737575b506080515115610a0e5790916110ff83612a7f565b60a05261110b8361295c565b60c0526000915b83831061113f5761112b3460c05160a05160805161376d565b60e0515260206102fb8160e05101516122b0565b61114983826122bd565b519067ffffffffffffffff6020830151168015159081611722575b506109cf57604060805101511580611715575b6109985760608201519467ffffffffffffffff6020840151169573ffffffffffffffffffffffffffffffffffffffff8451166040850151151590608086015192604051996111c48b612165565b60008b528b3560208c015267ffffffffffffffff421660408c015260608b0152600060808b015260a08a015260c089015273ffffffffffffffffffffffffffffffffffffffff861660e089015261010088015261012087015260005b602087015160c08801516112ee609d60e08b015160408c01518c60608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b51902080600052600160205260406000205415611314575060010163ffffffff16611220565b91959294969050818152816000526001602052604060002081518155602082015160018201556113eb6002820167ffffffffffffffff6040850151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff0000000000000000606088015160401b1692161717815567ffffffffffffffff6080850151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a082015160038201556004810173ffffffffffffffffffffffffffffffffffffffff60c0840151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005810173ffffffffffffffffffffffffffffffffffffffff60e0840151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff0000000000000000000000000000000000000000610100870151151560a01b1692161717905561012082015180519067ffffffffffffffff8211610969576114cb600684015461278f565b601f81116116ce575b50602090601f83116001146116045760069291600091836115f9575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b6060840151806115d7575b5060019373ffffffffffffffffffffffffffffffffffffffff916115548560a0516122bd565b526115618460a0516122bd565b5060a08101516115738560c0516122bd565b528261158585602060e05101516122bd565b525116906040519081528735917f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b35602073ffffffffffffffffffffffffffffffffffffffff8a1693a401919290611112565b6115ee906000526001602052604060002054151590565b156107e3578861152e565b015190508c806114f0565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0851681106116b65750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0600697161061167f575b505050811b01910155611523565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558c8080611671565b91926020600181928685015181550194019201611615565b600684016000526020600020601f840160051c81016020851061170e575b601f830160051c820181106117025750506114d4565b600081556001016116ec565b50806116ec565b5060408201511515611177565b905067ffffffffffffffff4216101587611164565b61174b903d806000833e610a4e8183612182565b608052846110ea565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576004356000526002602052602067ffffffffffffffff60406000205416604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602067ffffffffffffffff4216610b118160043533614787565b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760206040517fa98d02348410c9c76735e0d0bb1396f4015ac2bb9615f9c2611d19d7a8a996508152f35b346101925760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925773ffffffffffffffffffffffffffffffffffffffff611896611f74565b1660005260036020526040600020602435600052602052602067ffffffffffffffff60406000205416604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576118fe612744565b50600435600052600160205261018e61191a60406000206127e2565b604051918291602083526020830190612059565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760043567ffffffffffffffff811161019257611978903690600401611f43565b90611982826123f2565b9160009134906000925b8084106119ac5761018e6119a08688614674565b60405191829182611fb8565b909192936119bb858385612599565b6119c86020820182612499565b9081158015611b3c575b610eba57908691600090898760608701968035945b868110611a6f57505093611a3f93611a396001999894611a31602099957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a489a0114966123d1565b9336916124ed565b90612aec565b9687519061255d565b95018051611a56888a6122bd565b52611a6187896122bd565b50515101940192919061198c565b9250929394955050611a868160051b84018461227d565b90611a9460408401846125d9565b821015611b0d5760019273ffffffffffffffffffffffffffffffffffffffff611aff92611aef611ac38c6123d1565b91611ade60405195611ad4876120f5565b8c875236906122d1565b602086015236906060880201612393565b6040840152166060820152614973565b01878a959493928c926119e7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b50611b4a60408401846125d9565b90508214156119d2565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602067ffffffffffffffff4216610b11816004356146e1565b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff9060043582811161019257611be9903690600401611f43565b929091600090345b858310611bfa57005b611c05838787612459565b828101357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18236030181121561019257810191823592868411610192578401928060061b360384136101925760019382610eaa92611c9695611c8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8e018b1494339336916126c2565b903561347c565b920191611bf1565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257610ca2611cd361262d565b611cdc3661267c565b611ce5826122b0565b52611cef816122b0565b50349033906004356131ff565b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760043567ffffffffffffffff811161019257611d47903690600401611f43565b611d53819392936123f2565b92600092346000937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101905b808610611d945761018e6119a0888a614674565b90919293949560019085611dd6611a3f8a8888611db2838a8f612459565b611dcf611dc188830183612499565b9390951494339336916124ed565b9035612aec565b95018051611de48a8c6122bd565b52611def898b6122bd565b5051510196019493929190611d80565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925773ffffffffffffffffffffffffffffffffffffffff611e4b611f74565b1660005260006020526020604060002054604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257611eb4903690600401611f43565b9142169160005b818110611ecd57602084604051908152f35b80611ee685611edf6001948688612734565b3533614787565b01611ebb565b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257807fdbfdf8dc2b135c26253e00d5b6cbe6f20457e003fd526d97cea183883570de6160209252f35b9181601f840112156101925782359167ffffffffffffffff8311610192576020808501948460051b01011161019257565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361019257565b359073ffffffffffffffffffffffffffffffffffffffff8216820361019257565b6020908160408183019282815285518094520193019160005b828110611fdf575050505090565b835185529381019392810192600101611fd1565b60005b8381106120065750506000910152565b8181015183820152602001611ff6565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209361205281518092818752878088019101611ff3565b0116010190565b906120f291805182526020810151602083015267ffffffffffffffff806040830151166040840152806060830151166060840152608082015116608083015260a081015160a083015273ffffffffffffffffffffffffffffffffffffffff8060c08301511660c084015260e08201511660e083015261010080820151151590830152610120809101519161014080928201520190612016565b90565b6080810190811067ffffffffffffffff82111761096957604052565b60c0810190811067ffffffffffffffff82111761096957604052565b6060810190811067ffffffffffffffff82111761096957604052565b6040810190811067ffffffffffffffff82111761096957604052565b610140810190811067ffffffffffffffff82111761096957604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761096957604052565b67ffffffffffffffff811161096957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b67ffffffffffffffff81116109695760051b60200190565b60409081519161222483612149565b60018352829160005b6020808210156122755783516020929161224682612111565b6000825260008183015260008683015260606000818401526080830152600060a083015282880101520161222d565b505091925050565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4181360301821215610192570190565b805115611b0d5760200190565b8051821015611b0d5760209160051b010190565b91909160c08184031261019257604051906122eb82612111565b81936122f682611f97565b835260209167ffffffffffffffff8184013581811681036101925784860152604082013580151581036101925760408601526060820135606086015260808201359081116101925781019180601f8401121561019257823592612358846121c3565b916123666040519384612182565b84835285858301011161019257848460a09695879660009401838601378301015260808501520135910152565b9190826060910312610192576040516123ab8161212d565b8092803560ff811681036101925760409182918452602081013560208501520135910152565b3573ffffffffffffffffffffffffffffffffffffffff811681036101925790565b906123fc826121fd565b6124096040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061243782946121fd565b019060005b82811061244857505050565b80606060208093850101520161243c565b9190811015611b0d5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc181360301821215610192570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610192570180359067ffffffffffffffff821161019257602001918160051b3603831361019257565b929190926124fa846121fd565b916125086040519384612182565b829480845260208094019060051b8301928284116101925780915b84831061253257505050505050565b823567ffffffffffffffff811161019257869161255286849386016122d1565b815201920191612523565b9190820391821161256a57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9190811015611b0d5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181360301821215610192570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610192570180359067ffffffffffffffff82116101925760200191606082023603831361019257565b60409081519161263c83612149565b600183528291600091825b6020808210156126735782516020929161266082612149565b8682528681830152828901015201612647565b50505091925050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc604091011261019257604051906126b382612149565b60243582526044356020830152565b9291926126ce826121fd565b6040926126dd84519283612182565b819581835260208093019160061b84019381851161019257915b84831061270657505050505050565b858383031261019257838691825161271d81612149565b8535815282860135838201528152019201916126f7565b9190811015611b0d5760051b0190565b6040519061275182612165565b606061012083600080825280602083015280604083015280848301528060808301528060a08301528060c08301528060e08301526101008201520152565b90600182811c921680156127d8575b60208310146127a957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f169161279e565b90604051916127f083612165565b828154815260016006818401549360209485850152600281015467ffffffffffffffff908181166040870152818160401c16606087015260801c166080850152600381015460a085015260ff73ffffffffffffffffffffffffffffffffffffffff8060048401541660c0870152600583015490811660e087015260a01c161515610100850152019060405193849260009281549161288d8361278f565b8087529282811690811561290257506001146128bc575b5050505061012092916128b8910384612182565b0152565b60009081528381209695945091905b8183106128ea575093945091925090820101816128b8610120386128a4565b865488840185015295860195879450918301916128cb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685880152505050151560051b8301019050816128b8610120386128a4565b6040519061294f82612149565b6060602083600081520152565b90612966826121fd565b6129736040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06129a182946121fd565b0190602036910137565b5190811515820361019257565b906020808383031261019257825167ffffffffffffffff9384821161019257019260808484031261019257604051936129f0856120f5565b805185528281015173ffffffffffffffffffffffffffffffffffffffff811681036101925783860152612a25604082016129ab565b60408601526060810151918211610192570182601f8201121561019257805190612a4e826121c3565b93612a5c6040519586612182565b8285528383830101116101925782612a779385019101611ff3565b606082015290565b90612a89826121fd565b612a966040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0612ac482946121fd565b019060005b828110612ad557505050565b602090612ae0612744565b82828501015201612ac9565b9290949391612af9612942565b50855193612b05612942565b94612b0f8161295c565b6020870152604051907fa2ea7c6e00000000000000000000000000000000000000000000000000000000825282600483015260008260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215610a5d576000926131e2575b50815115610a0e5792979091612ba484612a7f565b98612bae8561295c565b946000935b818510612bd057505050505095612bcb9495966139d4565b815290565b91959398949699909297612be48a846122bd565b519a67ffffffffffffffff60208d01511680151590816131cd575b506109cf57604089015115806131c0575b61099857899860608d01518d602081015167ffffffffffffffff1691815173ffffffffffffffffffffffffffffffffffffffff1690604083015115159260800151936040519e8f90612c6182612165565b6000825260208201524267ffffffffffffffff166040820152606001528d608081016000905260a0015260c08d015273ffffffffffffffffffffffffffffffffffffffff8b1660e08d01526101008c01526101208b015260005b60208b01518b612d8c609d60c08301519260e08101519060408101519060608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b51902080600052600160205260406000205415612db2575060010163ffffffff16612cbb565b90509d979b9199929a949d9c909698939c8084528060005260016020526040600020918451835560208501516001840155612e946002840167ffffffffffffffff6040880151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff000000000000000060608b015160401b1692161717815567ffffffffffffffff6080880151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a085015160038401556004830173ffffffffffffffffffffffffffffffffffffffff60c0870151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005830173ffffffffffffffffffffffffffffffffffffffff60e0870151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff00000000000000000000000000000000000000006101008a0151151560a01b1692161717905561012085015192835167ffffffffffffffff8111610969578894612f76600684015461278f565b601f8111613165575b50602090601f831160011461309857600692916000918361308d575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b8d8b8b606084015180613060575b5086602073ffffffffffffffffffffffffffffffffffffffff95948794610765848660019e61075f8361300e9a6122bd565b5251166040519182527f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b35602073ffffffffffffffffffffffffffffffffffffffff881693a4019290919293949a612bb3565b9250505061307d9193506000526001602052604060002054151590565b156107e35785918d8b8b38612fdc565b015190503880612f9b565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08516811061314a5750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06006971610613113575b505050811b01910155612fce565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080613105565b8183015184558c9850600190930192602092830192016130a9565b90919293949550600684016000526020600020601f840160051c8101602085106131b9575b908b979695949392915b601f830160051c820181106131aa575050612f7f565b600081558c9850600101613194565b508061318a565b5060408c01511515612c10565b905067ffffffffffffffff4216101538612bff565b6131f89192503d806000833e610a4e8183612182565b9038612b8f565b939291936040517fa2ea7c6e00000000000000000000000000000000000000000000000000000000815281600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a5d57600091613461575b50805115610a0e57825161329081612a7f565b9261329a8261295c565b9460005b8381106132b457505050506120f2949550613bb5565b6132be81836122bd565b5190815160005260016020526040600020918254156107e35784600184015403610a0e57600583015473ffffffffffffffffffffffffffffffffffffffff8d1673ffffffffffffffffffffffffffffffffffffffff8216036134375760a01c60ff16156109985767ffffffffffffffff600284015460801c1661340d576002830180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff164260801b77ffffffffffffffff00000000000000000000000000000000161790556001928c91613392826127e2565b61339c858c6122bd565b526133a7848b6122bd565b5060208101516133b7858d6122bd565b527ff930a6e2523c9cc298691873087a740550b8fc85a0680830414c148ed927f615602073ffffffffffffffffffffffffffffffffffffffff87816004870154169451950154956040519586521693a40161329e565b60046040517f905e7107000000000000000000000000000000000000000000000000000000008152fd5b60046040517f4ca88867000000000000000000000000000000000000000000000000000000008152fd5b61347691503d806000833e610a4e8183612182565b3861327d565b90949392916040517fa2ea7c6e00000000000000000000000000000000000000000000000000000000815282600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a5d5760009161369e575b50805115610a0e57865161350e81612a7f565b926135188261295c565b9460005b83811061353257505050506120f2959650613db4565b61353c818c6122bd565b5190815160005260016020526040600020918254156107e35783600184015403610a0e57600583015473ffffffffffffffffffffffffffffffffffffffff861673ffffffffffffffffffffffffffffffffffffffff8216036134375760a01c60ff16156109985767ffffffffffffffff600284015460801c1661340d576002830180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff164260801b77ffffffffffffffff000000000000000000000000000000001617905560019261360e816127e2565b613618848b6122bd565b52613623838a6122bd565b506020820151613633848c6122bd565b528373ffffffffffffffffffffffffffffffffffffffff6004830154169251910154916040519182527ff930a6e2523c9cc298691873087a740550b8fc85a0680830414c148ed927f615602073ffffffffffffffffffffffffffffffffffffffff891693a40161351c565b6136b391503d806000833e610a4e8183612182565b386134fb565b60408101906040815282518092526060810160608360051b830101926020809501916000905b82821061372257505050508281830391015281808451928381520193019160005b82811061370e575050505090565b835185529381019392810192600101613700565b9091929594858061375d837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa089600196030186528a51612059565b97980194939190910191016136df565b9092918351936001908186146139b35773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613983579560009687915b80831061387557505050918392916137f09492876040518097819582947f91db0b7e000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d5760009161383e575b50905015613814576120f290614545565b60046040517fe8bee839000000000000000000000000000000000000000000000000000000008152fd5b82813d831161386e575b6138528183612182565b8101031261386b5750613864906129ab565b8038613803565b80fd5b503d613848565b9091979661388389876122bd565b51801515806138fd575b6138d3578181116138a9578084920398019801909190916137a7565b60046040517f11011294000000000000000000000000000000000000000000000000000000008152fd5b60046040517f1574f9f3000000000000000000000000000000000000000000000000000000008152fd5b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613944575b501561388d565b908982813d8311613972575b61395a8183612182565b8101031261386b575061396c906129ab565b3861393d565b503d613950565b513d6000823e3d90fd5b9594505050905060005b82811061399d5750505050600090565b6139a781836122bd565b516138d357830161398d565b6120f295506139cd91506139c6906122b0565b51916122b0565b5191613f8c565b909391845194600190818714613b985773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613b67579660009788915b808310613ab75750505091839291613a579492886040518097819582947f91db0b7e000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613a83575b5090501561381457613a7a575090565b6120f290614545565b82813d8311613ab0575b613a978183612182565b8101031261386b5750613aa9906129ab565b8038613a6a565b503d613a8d565b90919897613ac58a876122bd565b5180151580613aeb575b6138d3578181116138a957808492039901990190919091613a0e565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613b32575b5015613acf565b908982813d8311613b60575b613b488183612182565b8101031261386b5750613b5a906129ab565b38613b2b565b503d613b3e565b969550505091505060005b828110613b825750505050600090565b613b8c81836122bd565b516138d3578301613b72565b6120f29650613bae91506139c6909594956122b0565b5191614113565b909291835193600190818614613d9a5773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613d6a579560009687915b808310613cba5750505091839291613c389492876040518097819582947f88e5b2d9000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613c86575b50905015613c5c576120f290614545565b60046040517fbf2f3a8b000000000000000000000000000000000000000000000000000000008152fd5b82813d8311613cb3575b613c9a8183612182565b8101031261386b5750613cac906129ab565b8038613c4b565b503d613c90565b90919796613cc889876122bd565b5180151580613cee575b6138d3578181116138a957808492039801980190919091613bef565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613d35575b5015613cd2565b908982813d8311613d63575b613d4b8183612182565b8101031261386b5750613d5d906129ab565b38613d2e565b503d613d41565b9594505050905060005b828110613d845750505050600090565b613d8e81836122bd565b516138d3578301613d74565b6120f29550613dad91506139c6906122b0565b519161427b565b909391845194600190818714613f6f5773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613f3e579660009788915b808310613e8e5750505091839291613e379492886040518097819582947f88e5b2d9000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613e5a575b50905015613c5c57613a7a575090565b82813d8311613e87575b613e6e8183612182565b8101031261386b5750613e80906129ab565b8038613e4a565b503d613e64565b90919897613e9c8a876122bd565b5180151580613ec2575b6138d3578181116138a957808492039901990190919091613dee565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613f09575b5015613ea6565b908982813d8311613f37575b613f1f8183612182565b8101031261386b5750613f31906129ab565b38613f02565b503d613f15565b969550505091505060005b828110613f595750505050600090565b613f6381836122bd565b516138d3578301613f49565b6120f29650613f8591506139c6909594956122b0565b51916143f5565b92919273ffffffffffffffffffffffffffffffffffffffff602080920151168015614106578415158061408c575b6138d3578385116138a957614008829186946040519586809481937fe60c35050000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614058575b5090501561402e57816120f29103614545565b60046040517fbd8ba84d000000000000000000000000000000000000000000000000000000008152fd5b82813d8311614085575b61406c8183612182565b8101031261386b575061407e906129ab565b803861401b565b503d614062565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d576000916140d1575b5015613fba565b908382813d83116140ff575b6140e78183612182565b8101031261386b57506140f9906129ab565b386140ca565b503d6140dd565b505050506138d357600090565b93919373ffffffffffffffffffffffffffffffffffffffff60208092015116801561426d57851515806141f3575b6138d3578486116138a95761418f829187946040519586809481937fe60c35050000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d576000916141bf575b5090501561402e5782906141b557505090565b6120f29103614545565b82813d83116141ec575b6141d38183612182565b8101031261386b57506141e5906129ab565b80386141a2565b503d6141c9565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d57600091614238575b5015614141565b908382813d8311614266575b61424e8183612182565b8101031261386b5750614260906129ab565b38614231565b503d614244565b50505050506138d357600090565b92919273ffffffffffffffffffffffffffffffffffffffff602080920151168015614106578415158061437b575b6138d3578385116138a9576142f7829186946040519586809481937fe49617e10000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614347575b5090501561431d57816120f29103614545565b60046040517fccf3bb27000000000000000000000000000000000000000000000000000000008152fd5b82813d8311614374575b61435b8183612182565b8101031261386b575061436d906129ab565b803861430a565b503d614351565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d576000916143c0575b50156142a9565b908382813d83116143ee575b6143d68183612182565b8101031261386b57506143e8906129ab565b386143b9565b503d6143cc565b93919373ffffffffffffffffffffffffffffffffffffffff60208092015116801561426d57851515806144cb575b6138d3578486116138a957614471829187946040519586809481937fe49617e10000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614497575b5090501561431d5782906141b557505090565b82813d83116144c4575b6144ab8183612182565b8101031261386b57506144bd906129ab565b8038614484565b503d6144a1565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d57600091614510575b5015614423565b908382813d831161453e575b6145268183612182565b8101031261386b5750614538906129ab565b38614509565b503d61451c565b8061454d5750565b80471061461657600080808093335af13d15614611573d61456d816121c3565b9061457b6040519283612182565b8152600060203d92013e5b1561458d57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152fd5b614586565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152fd5b9061467e9061295c565b60009283925b80518410156146d9579361469884866122bd565b519160005b83518110156146c8576146b081856122bd565b516146bb84876122bd565b526001928301920161469d565b509094600190940193909150614684565b509250905090565b6000818152600260205267ffffffffffffffff908160408220541661475d577f5aafceeb1c7ad58e4a84898bdee37c02c0fc46e7d24e6b60e8209449f183459f91838252600260205260408220941693847fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000082541617905580a3565b60046040517f2e267946000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff166000818152600360205260408120908381528160205267ffffffffffffffff80604083205416614822577f92a1f7a41a7c585a8b09e25b195e225b1d43248daca46b0faf9e0792777a22299285835260205260408220951694857fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000082541617905580a4565b60046040517fec9d6eeb000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630148061494a575b156148b4577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261494481612111565b51902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461488b565b6020908181015190604080938183015192606081019173ffffffffffffffffffffffffffffffffffffffff948584511660005260008252846000209283549360018501905551928688511667ffffffffffffffff988985820151168882015115159060806060840151930151878151910120938a5198888a019b7fdbfdf8dc2b135c26253e00d5b6cbe6f20457e003fd526d97cea183883570de618d528a01526060890152608088015260a087015260c086015260e0850152610100908185015283526101208301968388109088111761096957614a5e8695614a7294614a7a998b52519020614ce4565b918860ff8351169183015192015192614c48565b949094614aaf565b5116911603614a865750565b600490517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b6005811015614c195780614ac05750565b60018103614b265760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152fd5b60028103614b8c5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152fd5b600314614b9557565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311614cd85791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15614ccb57815173ffffffffffffffffffffffffffffffffffffffff811615614cc5579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b614cec61484c565b906040519060208201927f190100000000000000000000000000000000000000000000000000000000000084526022830152604282015260428152614944816120f5565b602081015160409182810151916060820173ffffffffffffffffffffffffffffffffffffffff9283825116600052600060205285600020908154916001830190555192519086519160208301947fa98d02348410c9c76735e0d0bb1396f4015ac2bb9615f9c2611d19d7a8a99650865288840152606083015260808201526080815260a081019481861067ffffffffffffffff87111761096957614de18594614a7293614a7a988a52519020614ce4565b9060ff81511688602083015192015192614c4856fea164736f6c6343000812000a",
          deployedBytecode:
            "0x61010080604052600436101561001457600080fd5b60003560e01c90816312b11a1714611eec5750806313893f6114611e645780632d0335ab14611dff57806344adc90e14611cfc5780634692626714611c9e5780634cb7e9e514611b9c5780634d00307014611b54578063831e05a11461192e578063a3112a64146118c7578063b469318d1461184a578063b83010d3146117f1578063cf190f34146117a8578063d45c443514611754578063e13458fc14610f5c578063e30bb56314610f08578063e45d03f914610ca4578063e57a6b1b14610ba0578063e71ff36514610b19578063ed24911d14610ad8578063f10b5cc814610a69578063f17325e7146101975763ffa1ad741461011257600080fd5b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925761018e60405161015081612149565b600481527f302e3236000000000000000000000000000000000000000000000000000000006020820152604051918291602083526020830190612016565b0390f35b600080fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc602081360112610192576004359067ffffffffffffffff821161019257604082600401918336030112610192576102046101f0612215565b926101ff60243692018461227d565b6122d1565b61020d836122b0565b52610217826122b0565b50610220612942565b5081519161022c612942565b916102368461295c565b6020840152604051937fa2ea7c6e0000000000000000000000000000000000000000000000000000000085528135600486015260008560248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa948515610a5d57600095610a38575b50845115610a0e57916102c983612a7f565b916102d38461295c565b936000925b8184106103045760206102fb81896102f2348b8b8f61376d565b815201516122b0565b51604051908152f35b610316848299949698939597996122bd565b519267ffffffffffffffff60208501511680151590816109f9575b506109cf57604081015115806109c2575b6109985760608401519467ffffffffffffffff6020860151169573ffffffffffffffffffffffffffffffffffffffff86511660408701511515906080880151926040519961038f8b612165565b60008b528b3560208c015267ffffffffffffffff421660408c015260608b0152600060808b015260a08a015260c08901523360e089015261010088015261012087015260005b602087015160c08801516104de609d60e08b015160408c01518c60608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b8201907fffffffff000000000000000000000000000000000000000000000000000000008860e01b169082015203607d810184520182612182565b51902080600052600160205260406000205415610504575060010163ffffffff166103d5565b919690509997919998969492939881815281600052600160205260406000209080518255602081015160018301556105e36002830167ffffffffffffffff6040840151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff0000000000000000606087015160401b1692161717815567ffffffffffffffff6080840151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a081015160038301556004820173ffffffffffffffffffffffffffffffffffffffff60c0830151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005820173ffffffffffffffffffffffffffffffffffffffff60e0830151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff0000000000000000000000000000000000000000610100860151151560a01b1692161717905561012081015180519167ffffffffffffffff831161096957838c938c938f9660066106ca91015461278f565b601f81116108f5575b50602090601f831160011461081857600692916000918361080d575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b6060870151806107b8575b5085602073ffffffffffffffffffffffffffffffffffffffff9560019995610765848761077d9761075f838e9b6122bd565b526122bd565b506107758460a0890151926122bd565b5201516122bd565b525116906040519081528535917f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b3560203393a40192906102d8565b915092506107d491506000526001602052604060002054151590565b156107e35788888b928e61072d565b60046040517fc5723b51000000000000000000000000000000000000000000000000000000008152fd5b0151905038806106ef565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0851681106108ca5750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06006971610610893575b505050811b01910155610722565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080610885565b9497509295509396506020600181928685015181550194019201928f9693928f9693928f9693610829565b9295509295509250600684016000526020600020601f840160051c810160208510610962575b928f9693928f9693928f96935b601f830160051c8201811061093e5750506106d3565b60019396995080929598506000919497505501928f9693928f9693928f9693610928565b508061091b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60046040517f157bd4c3000000000000000000000000000000000000000000000000000000008152fd5b5060408401511515610342565b60046040517f08e8b937000000000000000000000000000000000000000000000000000000008152fd5b905067ffffffffffffffff421610158a610331565b60046040517fbf37b20e000000000000000000000000000000000000000000000000000000008152fd5b610a569195503d806000833e610a4e8183612182565b8101906129b8565b93856102b7565b6040513d6000823e3d90fd5b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576020610b1161484c565b604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257610b69903690600401611f43565b9142169160005b818110610b8257602084604051908152f35b80610b9a85610b946001948688612734565b356146e1565b01610b70565b60e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257604051610bd6816120f5565b600435808252610be53661267c565b602083015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9c36011261019257604051610c208161212d565b60643560ff81168103610192578152608435602082015260a4356040820152604083015260c43573ffffffffffffffffffffffffffffffffffffffff8116810361019257610c7683826060610ca2960152614d30565b610c7e61262d565b610c873661267c565b610c90826122b0565b52610c9a816122b0565b5034926131ff565b005b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257610cf183913690600401611f43565b909234926000915b838310610d0257005b610d0d838588612599565b946080863603126101925760405195610d25876120f5565b803587528381013583811161019257810194601f9536878201121561019257610d5490369087813591016126c2565b9285890193845260408301358581116101925783019636908801121561019257863594610d80866121fd565b97610d8e604051998a612182565b868952878901886060809902830101913683116101925789808a9201925b848410610ef05750509050610dca915060408c01958a875201611f97565b94868b01958652519788518015918215610ee4575b5050610eba5760005b8851811015610e5057600190610e4a8c51610e03838d6122bd565b51610e0f848a516122bd565b5173ffffffffffffffffffffffffffffffffffffffff8b51169160405193610e36856120f5565b84528d84015260408301528a820152614d30565b01610de8565b50986001955081935090610eaa929a97610eb09592519073ffffffffffffffffffffffffffffffffffffffff8d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8d01149451169161347c565b9061255d565b9501919493610cf9565b60046040517f947d5a84000000000000000000000000000000000000000000000000000000008152fd5b51141590508c80610ddf565b610efa3685612393565b815201910190898991610dac565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576020610f526004356000526001602052604060002054151590565b6040519015158152f35b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126101925760043567ffffffffffffffff81116101925760c0816004019282360301126101925760405190610fb6826120f5565b82358252602481019182359167ffffffffffffffff83116101925760a461101691610fea61104695600436918401016122d1565b6020850152610ffc3660448301612393565b6040850152019161100c83611f97565b6060820152614973565b61102d611021612215565b936101ff36918761227d565b611036846122b0565b52611040836122b0565b506123d1565b9061104f612942565b5080519061105b612942565b60e0526110678261295c565b602060e05101526040517fa2ea7c6e0000000000000000000000000000000000000000000000000000000081528435600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa8015610a5d576000608052611737575b506080515115610a0e5790916110ff83612a7f565b60a05261110b8361295c565b60c0526000915b83831061113f5761112b3460c05160a05160805161376d565b60e0515260206102fb8160e05101516122b0565b61114983826122bd565b519067ffffffffffffffff6020830151168015159081611722575b506109cf57604060805101511580611715575b6109985760608201519467ffffffffffffffff6020840151169573ffffffffffffffffffffffffffffffffffffffff8451166040850151151590608086015192604051996111c48b612165565b60008b528b3560208c015267ffffffffffffffff421660408c015260608b0152600060808b015260a08a015260c089015273ffffffffffffffffffffffffffffffffffffffff861660e089015261010088015261012087015260005b602087015160c08801516112ee609d60e08b015160408c01518c60608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b51902080600052600160205260406000205415611314575060010163ffffffff16611220565b91959294969050818152816000526001602052604060002081518155602082015160018201556113eb6002820167ffffffffffffffff6040850151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff0000000000000000606088015160401b1692161717815567ffffffffffffffff6080850151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a082015160038201556004810173ffffffffffffffffffffffffffffffffffffffff60c0840151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005810173ffffffffffffffffffffffffffffffffffffffff60e0840151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff0000000000000000000000000000000000000000610100870151151560a01b1692161717905561012082015180519067ffffffffffffffff8211610969576114cb600684015461278f565b601f81116116ce575b50602090601f83116001146116045760069291600091836115f9575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b6060840151806115d7575b5060019373ffffffffffffffffffffffffffffffffffffffff916115548560a0516122bd565b526115618460a0516122bd565b5060a08101516115738560c0516122bd565b528261158585602060e05101516122bd565b525116906040519081528735917f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b35602073ffffffffffffffffffffffffffffffffffffffff8a1693a401919290611112565b6115ee906000526001602052604060002054151590565b156107e3578861152e565b015190508c806114f0565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0851681106116b65750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0600697161061167f575b505050811b01910155611523565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558c8080611671565b91926020600181928685015181550194019201611615565b600684016000526020600020601f840160051c81016020851061170e575b601f830160051c820181106117025750506114d4565b600081556001016116ec565b50806116ec565b5060408201511515611177565b905067ffffffffffffffff4216101587611164565b61174b903d806000833e610a4e8183612182565b608052846110ea565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576004356000526002602052602067ffffffffffffffff60406000205416604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602067ffffffffffffffff4216610b118160043533614787565b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760206040517fa98d02348410c9c76735e0d0bb1396f4015ac2bb9615f9c2611d19d7a8a996508152f35b346101925760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925773ffffffffffffffffffffffffffffffffffffffff611896611f74565b1660005260036020526040600020602435600052602052602067ffffffffffffffff60406000205416604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610192576118fe612744565b50600435600052600160205261018e61191a60406000206127e2565b604051918291602083526020830190612059565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760043567ffffffffffffffff811161019257611978903690600401611f43565b90611982826123f2565b9160009134906000925b8084106119ac5761018e6119a08688614674565b60405191829182611fb8565b909192936119bb858385612599565b6119c86020820182612499565b9081158015611b3c575b610eba57908691600090898760608701968035945b868110611a6f57505093611a3f93611a396001999894611a31602099957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a489a0114966123d1565b9336916124ed565b90612aec565b9687519061255d565b95018051611a56888a6122bd565b52611a6187896122bd565b50515101940192919061198c565b9250929394955050611a868160051b84018461227d565b90611a9460408401846125d9565b821015611b0d5760019273ffffffffffffffffffffffffffffffffffffffff611aff92611aef611ac38c6123d1565b91611ade60405195611ad4876120f5565b8c875236906122d1565b602086015236906060880201612393565b6040840152166060820152614973565b01878a959493928c926119e7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b50611b4a60408401846125d9565b90508214156119d2565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257602067ffffffffffffffff4216610b11816004356146e1565b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff9060043582811161019257611be9903690600401611f43565b929091600090345b858310611bfa57005b611c05838787612459565b828101357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18236030181121561019257810191823592868411610192578401928060061b360384136101925760019382610eaa92611c9695611c8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8e018b1494339336916126c2565b903561347c565b920191611bf1565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257610ca2611cd361262d565b611cdc3661267c565b611ce5826122b0565b52611cef816122b0565b50349033906004356131ff565b6020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925760043567ffffffffffffffff811161019257611d47903690600401611f43565b611d53819392936123f2565b92600092346000937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101905b808610611d945761018e6119a0888a614674565b90919293949560019085611dd6611a3f8a8888611db2838a8f612459565b611dcf611dc188830183612499565b9390951494339336916124ed565b9035612aec565b95018051611de48a8c6122bd565b52611def898b6122bd565b5051510196019493929190611d80565b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925773ffffffffffffffffffffffffffffffffffffffff611e4b611f74565b1660005260006020526020604060002054604051908152f35b346101925760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101925767ffffffffffffffff60043581811161019257611eb4903690600401611f43565b9142169160005b818110611ecd57602084604051908152f35b80611ee685611edf6001948688612734565b3533614787565b01611ebb565b346101925760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019257807fdbfdf8dc2b135c26253e00d5b6cbe6f20457e003fd526d97cea183883570de6160209252f35b9181601f840112156101925782359167ffffffffffffffff8311610192576020808501948460051b01011161019257565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361019257565b359073ffffffffffffffffffffffffffffffffffffffff8216820361019257565b6020908160408183019282815285518094520193019160005b828110611fdf575050505090565b835185529381019392810192600101611fd1565b60005b8381106120065750506000910152565b8181015183820152602001611ff6565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209361205281518092818752878088019101611ff3565b0116010190565b906120f291805182526020810151602083015267ffffffffffffffff806040830151166040840152806060830151166060840152608082015116608083015260a081015160a083015273ffffffffffffffffffffffffffffffffffffffff8060c08301511660c084015260e08201511660e083015261010080820151151590830152610120809101519161014080928201520190612016565b90565b6080810190811067ffffffffffffffff82111761096957604052565b60c0810190811067ffffffffffffffff82111761096957604052565b6060810190811067ffffffffffffffff82111761096957604052565b6040810190811067ffffffffffffffff82111761096957604052565b610140810190811067ffffffffffffffff82111761096957604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761096957604052565b67ffffffffffffffff811161096957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b67ffffffffffffffff81116109695760051b60200190565b60409081519161222483612149565b60018352829160005b6020808210156122755783516020929161224682612111565b6000825260008183015260008683015260606000818401526080830152600060a083015282880101520161222d565b505091925050565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4181360301821215610192570190565b805115611b0d5760200190565b8051821015611b0d5760209160051b010190565b91909160c08184031261019257604051906122eb82612111565b81936122f682611f97565b835260209167ffffffffffffffff8184013581811681036101925784860152604082013580151581036101925760408601526060820135606086015260808201359081116101925781019180601f8401121561019257823592612358846121c3565b916123666040519384612182565b84835285858301011161019257848460a09695879660009401838601378301015260808501520135910152565b9190826060910312610192576040516123ab8161212d565b8092803560ff811681036101925760409182918452602081013560208501520135910152565b3573ffffffffffffffffffffffffffffffffffffffff811681036101925790565b906123fc826121fd565b6124096040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061243782946121fd565b019060005b82811061244857505050565b80606060208093850101520161243c565b9190811015611b0d5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc181360301821215610192570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610192570180359067ffffffffffffffff821161019257602001918160051b3603831361019257565b929190926124fa846121fd565b916125086040519384612182565b829480845260208094019060051b8301928284116101925780915b84831061253257505050505050565b823567ffffffffffffffff811161019257869161255286849386016122d1565b815201920191612523565b9190820391821161256a57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9190811015611b0d5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181360301821215610192570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610192570180359067ffffffffffffffff82116101925760200191606082023603831361019257565b60409081519161263c83612149565b600183528291600091825b6020808210156126735782516020929161266082612149565b8682528681830152828901015201612647565b50505091925050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc604091011261019257604051906126b382612149565b60243582526044356020830152565b9291926126ce826121fd565b6040926126dd84519283612182565b819581835260208093019160061b84019381851161019257915b84831061270657505050505050565b858383031261019257838691825161271d81612149565b8535815282860135838201528152019201916126f7565b9190811015611b0d5760051b0190565b6040519061275182612165565b606061012083600080825280602083015280604083015280848301528060808301528060a08301528060c08301528060e08301526101008201520152565b90600182811c921680156127d8575b60208310146127a957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f169161279e565b90604051916127f083612165565b828154815260016006818401549360209485850152600281015467ffffffffffffffff908181166040870152818160401c16606087015260801c166080850152600381015460a085015260ff73ffffffffffffffffffffffffffffffffffffffff8060048401541660c0870152600583015490811660e087015260a01c161515610100850152019060405193849260009281549161288d8361278f565b8087529282811690811561290257506001146128bc575b5050505061012092916128b8910384612182565b0152565b60009081528381209695945091905b8183106128ea575093945091925090820101816128b8610120386128a4565b865488840185015295860195879450918301916128cb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685880152505050151560051b8301019050816128b8610120386128a4565b6040519061294f82612149565b6060602083600081520152565b90612966826121fd565b6129736040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06129a182946121fd565b0190602036910137565b5190811515820361019257565b906020808383031261019257825167ffffffffffffffff9384821161019257019260808484031261019257604051936129f0856120f5565b805185528281015173ffffffffffffffffffffffffffffffffffffffff811681036101925783860152612a25604082016129ab565b60408601526060810151918211610192570182601f8201121561019257805190612a4e826121c3565b93612a5c6040519586612182565b8285528383830101116101925782612a779385019101611ff3565b606082015290565b90612a89826121fd565b612a966040519182612182565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0612ac482946121fd565b019060005b828110612ad557505050565b602090612ae0612744565b82828501015201612ac9565b9290949391612af9612942565b50855193612b05612942565b94612b0f8161295c565b6020870152604051907fa2ea7c6e00000000000000000000000000000000000000000000000000000000825282600483015260008260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215610a5d576000926131e2575b50815115610a0e5792979091612ba484612a7f565b98612bae8561295c565b946000935b818510612bd057505050505095612bcb9495966139d4565b815290565b91959398949699909297612be48a846122bd565b519a67ffffffffffffffff60208d01511680151590816131cd575b506109cf57604089015115806131c0575b61099857899860608d01518d602081015167ffffffffffffffff1691815173ffffffffffffffffffffffffffffffffffffffff1690604083015115159260800151936040519e8f90612c6182612165565b6000825260208201524267ffffffffffffffff166040820152606001528d608081016000905260a0015260c08d015273ffffffffffffffffffffffffffffffffffffffff8b1660e08d01526101008c01526101208b015260005b60208b01518b612d8c609d60c08301519260e08101519060408101519060608101519161010082015115159061012060a084015193015193604051988996602088019b8c527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16604089015260601b1660548701527fffffffffffffffff000000000000000000000000000000000000000000000000809260c01b16606887015260c01b16607085015260f81b6078840152607983015280516104a38160999360208587019101611ff3565b51902080600052600160205260406000205415612db2575060010163ffffffff16612cbb565b90509d979b9199929a949d9c909698939c8084528060005260016020526040600020918451835560208501516001840155612e946002840167ffffffffffffffff6040880151168154907fffffffffffffffffffffffffffffffff000000000000000000000000000000006fffffffffffffffff000000000000000060608b015160401b1692161717815567ffffffffffffffff6080880151167fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff77ffffffffffffffff0000000000000000000000000000000083549260801b169116179055565b60a085015160038401556004830173ffffffffffffffffffffffffffffffffffffffff60c0870151167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556005830173ffffffffffffffffffffffffffffffffffffffff60e0870151168154907fffffffffffffffffffffff00000000000000000000000000000000000000000074ff00000000000000000000000000000000000000006101008a0151151560a01b1692161717905561012085015192835167ffffffffffffffff8111610969578894612f76600684015461278f565b601f8111613165575b50602090601f831160011461309857600692916000918361308d575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179101555b8d8b8b606084015180613060575b5086602073ffffffffffffffffffffffffffffffffffffffff95948794610765848660019e61075f8361300e9a6122bd565b5251166040519182527f8bf46bf4cfd674fa735a3d63ec1c9ad4153f033c290341f3a588b75685141b35602073ffffffffffffffffffffffffffffffffffffffff881693a4019290919293949a612bb3565b9250505061307d9193506000526001602052604060002054151590565b156107e35785918d8b8b38612fdc565b015190503880612f9b565b906006840160005260206000209160005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08516811061314a5750918391600193837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06006971610613113575b505050811b01910155612fce565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080613105565b8183015184558c9850600190930192602092830192016130a9565b90919293949550600684016000526020600020601f840160051c8101602085106131b9575b908b979695949392915b601f830160051c820181106131aa575050612f7f565b600081558c9850600101613194565b508061318a565b5060408c01511515612c10565b905067ffffffffffffffff4216101538612bff565b6131f89192503d806000833e610a4e8183612182565b9038612b8f565b939291936040517fa2ea7c6e00000000000000000000000000000000000000000000000000000000815281600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a5d57600091613461575b50805115610a0e57825161329081612a7f565b9261329a8261295c565b9460005b8381106132b457505050506120f2949550613bb5565b6132be81836122bd565b5190815160005260016020526040600020918254156107e35784600184015403610a0e57600583015473ffffffffffffffffffffffffffffffffffffffff8d1673ffffffffffffffffffffffffffffffffffffffff8216036134375760a01c60ff16156109985767ffffffffffffffff600284015460801c1661340d576002830180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff164260801b77ffffffffffffffff00000000000000000000000000000000161790556001928c91613392826127e2565b61339c858c6122bd565b526133a7848b6122bd565b5060208101516133b7858d6122bd565b527ff930a6e2523c9cc298691873087a740550b8fc85a0680830414c148ed927f615602073ffffffffffffffffffffffffffffffffffffffff87816004870154169451950154956040519586521693a40161329e565b60046040517f905e7107000000000000000000000000000000000000000000000000000000008152fd5b60046040517f4ca88867000000000000000000000000000000000000000000000000000000008152fd5b61347691503d806000833e610a4e8183612182565b3861327d565b90949392916040517fa2ea7c6e00000000000000000000000000000000000000000000000000000000815282600482015260008160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a5d5760009161369e575b50805115610a0e57865161350e81612a7f565b926135188261295c565b9460005b83811061353257505050506120f2959650613db4565b61353c818c6122bd565b5190815160005260016020526040600020918254156107e35783600184015403610a0e57600583015473ffffffffffffffffffffffffffffffffffffffff861673ffffffffffffffffffffffffffffffffffffffff8216036134375760a01c60ff16156109985767ffffffffffffffff600284015460801c1661340d576002830180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff164260801b77ffffffffffffffff000000000000000000000000000000001617905560019261360e816127e2565b613618848b6122bd565b52613623838a6122bd565b506020820151613633848c6122bd565b528373ffffffffffffffffffffffffffffffffffffffff6004830154169251910154916040519182527ff930a6e2523c9cc298691873087a740550b8fc85a0680830414c148ed927f615602073ffffffffffffffffffffffffffffffffffffffff891693a40161351c565b6136b391503d806000833e610a4e8183612182565b386134fb565b60408101906040815282518092526060810160608360051b830101926020809501916000905b82821061372257505050508281830391015281808451928381520193019160005b82811061370e575050505090565b835185529381019392810192600101613700565b9091929594858061375d837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa089600196030186528a51612059565b97980194939190910191016136df565b9092918351936001908186146139b35773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613983579560009687915b80831061387557505050918392916137f09492876040518097819582947f91db0b7e000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d5760009161383e575b50905015613814576120f290614545565b60046040517fe8bee839000000000000000000000000000000000000000000000000000000008152fd5b82813d831161386e575b6138528183612182565b8101031261386b5750613864906129ab565b8038613803565b80fd5b503d613848565b9091979661388389876122bd565b51801515806138fd575b6138d3578181116138a9578084920398019801909190916137a7565b60046040517f11011294000000000000000000000000000000000000000000000000000000008152fd5b60046040517f1574f9f3000000000000000000000000000000000000000000000000000000008152fd5b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613944575b501561388d565b908982813d8311613972575b61395a8183612182565b8101031261386b575061396c906129ab565b3861393d565b503d613950565b513d6000823e3d90fd5b9594505050905060005b82811061399d5750505050600090565b6139a781836122bd565b516138d357830161398d565b6120f295506139cd91506139c6906122b0565b51916122b0565b5191613f8c565b909391845194600190818714613b985773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613b67579660009788915b808310613ab75750505091839291613a579492886040518097819582947f91db0b7e000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613a83575b5090501561381457613a7a575090565b6120f290614545565b82813d8311613ab0575b613a978183612182565b8101031261386b5750613aa9906129ab565b8038613a6a565b503d613a8d565b90919897613ac58a876122bd565b5180151580613aeb575b6138d3578181116138a957808492039901990190919091613a0e565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613b32575b5015613acf565b908982813d8311613b60575b613b488183612182565b8101031261386b5750613b5a906129ab565b38613b2b565b503d613b3e565b969550505091505060005b828110613b825750505050600090565b613b8c81836122bd565b516138d3578301613b72565b6120f29650613bae91506139c6909594956122b0565b5191614113565b909291835193600190818614613d9a5773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613d6a579560009687915b808310613cba5750505091839291613c389492876040518097819582947f88e5b2d9000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613c86575b50905015613c5c576120f290614545565b60046040517fbf2f3a8b000000000000000000000000000000000000000000000000000000008152fd5b82813d8311613cb3575b613c9a8183612182565b8101031261386b5750613cac906129ab565b8038613c4b565b503d613c90565b90919796613cc889876122bd565b5180151580613cee575b6138d3578181116138a957808492039801980190919091613bef565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613d35575b5015613cd2565b908982813d8311613d63575b613d4b8183612182565b8101031261386b5750613d5d906129ab565b38613d2e565b503d613d41565b9594505050905060005b828110613d845750505050600090565b613d8e81836122bd565b516138d3578301613d74565b6120f29550613dad91506139c6906122b0565b519161427b565b909391845194600190818714613f6f5773ffffffffffffffffffffffffffffffffffffffff60208095015116918215613f3e579660009788915b808310613e8e5750505091839291613e379492886040518097819582947f88e5b2d9000000000000000000000000000000000000000000000000000000008452600484016136b9565b03925af1908115610a5d57600091613e5a575b50905015613c5c57613a7a575090565b82813d8311613e87575b613e6e8183612182565b8101031261386b5750613e80906129ab565b8038613e4a565b503d613e64565b90919897613e9c8a876122bd565b5180151580613ec2575b6138d3578181116138a957808492039901990190919091613dee565b50604080517fce46e04600000000000000000000000000000000000000000000000000000000815289816004818b5afa9182156139795750600091613f09575b5015613ea6565b908982813d8311613f37575b613f1f8183612182565b8101031261386b5750613f31906129ab565b38613f02565b503d613f15565b969550505091505060005b828110613f595750505050600090565b613f6381836122bd565b516138d3578301613f49565b6120f29650613f8591506139c6909594956122b0565b51916143f5565b92919273ffffffffffffffffffffffffffffffffffffffff602080920151168015614106578415158061408c575b6138d3578385116138a957614008829186946040519586809481937fe60c35050000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614058575b5090501561402e57816120f29103614545565b60046040517fbd8ba84d000000000000000000000000000000000000000000000000000000008152fd5b82813d8311614085575b61406c8183612182565b8101031261386b575061407e906129ab565b803861401b565b503d614062565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d576000916140d1575b5015613fba565b908382813d83116140ff575b6140e78183612182565b8101031261386b57506140f9906129ab565b386140ca565b503d6140dd565b505050506138d357600090565b93919373ffffffffffffffffffffffffffffffffffffffff60208092015116801561426d57851515806141f3575b6138d3578486116138a95761418f829187946040519586809481937fe60c35050000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d576000916141bf575b5090501561402e5782906141b557505090565b6120f29103614545565b82813d83116141ec575b6141d38183612182565b8101031261386b57506141e5906129ab565b80386141a2565b503d6141c9565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d57600091614238575b5015614141565b908382813d8311614266575b61424e8183612182565b8101031261386b5750614260906129ab565b38614231565b503d614244565b50505050506138d357600090565b92919273ffffffffffffffffffffffffffffffffffffffff602080920151168015614106578415158061437b575b6138d3578385116138a9576142f7829186946040519586809481937fe49617e10000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614347575b5090501561431d57816120f29103614545565b60046040517fccf3bb27000000000000000000000000000000000000000000000000000000008152fd5b82813d8311614374575b61435b8183612182565b8101031261386b575061436d906129ab565b803861430a565b503d614351565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d576000916143c0575b50156142a9565b908382813d83116143ee575b6143d68183612182565b8101031261386b57506143e8906129ab565b386143b9565b503d6143cc565b93919373ffffffffffffffffffffffffffffffffffffffff60208092015116801561426d57851515806144cb575b6138d3578486116138a957614471829187946040519586809481937fe49617e10000000000000000000000000000000000000000000000000000000083528760048401526024830190612059565b03925af1908115610a5d57600091614497575b5090501561431d5782906141b557505090565b82813d83116144c4575b6144ab8183612182565b8101031261386b57506144bd906129ab565b8038614484565b503d6144a1565b506040517fce46e0460000000000000000000000000000000000000000000000000000000081528281600481855afa908115610a5d57600091614510575b5015614423565b908382813d831161453e575b6145268183612182565b8101031261386b5750614538906129ab565b38614509565b503d61451c565b8061454d5750565b80471061461657600080808093335af13d15614611573d61456d816121c3565b9061457b6040519283612182565b8152600060203d92013e5b1561458d57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152fd5b614586565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152fd5b9061467e9061295c565b60009283925b80518410156146d9579361469884866122bd565b519160005b83518110156146c8576146b081856122bd565b516146bb84876122bd565b526001928301920161469d565b509094600190940193909150614684565b509250905090565b6000818152600260205267ffffffffffffffff908160408220541661475d577f5aafceeb1c7ad58e4a84898bdee37c02c0fc46e7d24e6b60e8209449f183459f91838252600260205260408220941693847fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000082541617905580a3565b60046040517f2e267946000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff166000818152600360205260408120908381528160205267ffffffffffffffff80604083205416614822577f92a1f7a41a7c585a8b09e25b195e225b1d43248daca46b0faf9e0792777a22299285835260205260408220951694857fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000082541617905580a4565b60046040517fec9d6eeb000000000000000000000000000000000000000000000000000000008152fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630148061494a575b156148b4577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261494481612111565b51902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461488b565b6020908181015190604080938183015192606081019173ffffffffffffffffffffffffffffffffffffffff948584511660005260008252846000209283549360018501905551928688511667ffffffffffffffff988985820151168882015115159060806060840151930151878151910120938a5198888a019b7fdbfdf8dc2b135c26253e00d5b6cbe6f20457e003fd526d97cea183883570de618d528a01526060890152608088015260a087015260c086015260e0850152610100908185015283526101208301968388109088111761096957614a5e8695614a7294614a7a998b52519020614ce4565b918860ff8351169183015192015192614c48565b949094614aaf565b5116911603614a865750565b600490517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b6005811015614c195780614ac05750565b60018103614b265760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152fd5b60028103614b8c5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152fd5b600314614b9557565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311614cd85791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15614ccb57815173ffffffffffffffffffffffffffffffffffffffff811615614cc5579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b614cec61484c565b906040519060208201927f190100000000000000000000000000000000000000000000000000000000000084526022830152604282015260428152614944816120f5565b602081015160409182810151916060820173ffffffffffffffffffffffffffffffffffffffff9283825116600052600060205285600020908154916001830190555192519086519160208301947fa98d02348410c9c76735e0d0bb1396f4015ac2bb9615f9c2611d19d7a8a99650865288840152606083015260808201526080815260a081019481861067ffffffffffffffff87111761096957614de18594614a7293614a7a988a52519020614ce4565b9060ff81511688602083015192015192614c4856fea164736f6c6343000812000a",
          devdoc: {
            events: {
              "Attested(address,address,bytes32,bytes32)": {
                details: "Emitted when an attestation has been made.",
                params: {
                  attester: "The attesting account.",
                  recipient: "The recipient of the attestation.",
                  schema: "The UID of the schema.",
                  uid: "The UID the revoked attestation.",
                },
              },
              "Revoked(address,address,bytes32,bytes32)": {
                details: "Emitted when an attestation has been revoked.",
                params: {
                  attester: "The attesting account.",
                  recipient: "The recipient of the attestation.",
                  schema: "The UID of the schema.",
                  uid: "The UID the revoked attestation.",
                },
              },
              "RevokedOffchain(address,bytes32,uint64)": {
                details: "Emitted when a data has been revoked.",
                params: {
                  data: "The data.",
                  revoker: "The address of the revoker.",
                  timestamp: "The timestamp.",
                },
              },
              "Timestamped(bytes32,uint64)": {
                details: "Emitted when a data has been timestamped.",
                params: {
                  data: "The data.",
                  timestamp: "The timestamp.",
                },
              },
            },
            kind: "dev",
            methods: {
              "attest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)))": {
                details: "Attests to a specific schema.",
                params: {
                  request:
                    'The arguments of the attestation request. Example: attest({     schema: "0facc36681cbe2456019c1b0d1e7bedd6d1d40f6f324bf3dd3a4cef2999200a0",     data: {         recipient: "0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf",         expirationTime: 0,         revocable: true,         refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",         data: "0xF00D",         value: 0     } })',
                },
                returns: {
                  _0: "The UID of the new attestation.",
                },
              },
              "attestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256),(uint8,bytes32,bytes32),address))":
                {
                  details: "Attests to a specific schema via the provided EIP712 signature.",
                  params: {
                    delegatedRequest:
                      "The arguments of the delegated attestation request. Example: attestByDelegation({     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: {         recipient: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',         expirationTime: 1673891048,         revocable: true,         refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',         data: '0x1234',         value: 0     },     signature: {         v: 28,         r: '0x148c...b25b',         s: '0x5a72...be22'     },     attester: '0xc5E8740aD971409492b1A63Db8d83025e0Fc427e' })",
                  },
                  returns: {
                    _0: "The UID of the new attestation.",
                  },
                },
              constructor: {
                details: "Creates a new EAS instance.",
                params: {
                  registry: "The address of the global schema registry.",
                },
              },
              "getAttestation(bytes32)": {
                details: "Returns an existing attestation by UID.",
                params: {
                  uid: "The UID of the attestation to retrieve.",
                },
                returns: {
                  _0: "The attestation data members.",
                },
              },
              "getDomainSeparator()": {
                details: "Returns the domain separator used in the encoding of the signatures for attest, and revoke.",
              },
              "getNonce(address)": {
                details: "Returns the current nonce per-account.",
                params: {
                  account: "The requested account.",
                },
                returns: {
                  _0: "The current nonce.",
                },
              },
              "getRevokeOffchain(address,bytes32)": {
                details: "Returns the timestamp that the specified data was timestamped with.",
                params: {
                  data: "The data to query.",
                },
                returns: {
                  _0: "The timestamp the data was timestamped with.",
                },
              },
              "getSchemaRegistry()": {
                details: "Returns the address of the global schema registry.",
                returns: {
                  _0: "The address of the global schema registry.",
                },
              },
              "getTimestamp(bytes32)": {
                details: "Returns the timestamp that the specified data was timestamped with.",
                params: {
                  data: "The data to query.",
                },
                returns: {
                  _0: "The timestamp the data was timestamped with.",
                },
              },
              "isAttestationValid(bytes32)": {
                details: "Checks whether an attestation exists.",
                params: {
                  uid: "The UID of the attestation to retrieve.",
                },
                returns: {
                  _0: "Whether an attestation exists.",
                },
              },
              "multiAttest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[])[])": {
                details: "Attests to multiple schemas.",
                params: {
                  multiRequests:
                    "The arguments of the multi attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiAttest([{     schema: '0x33e9094830a5cba5554d1954310e4fbed2ef5f859ec1404619adea4207f391fd',     data: [{         recipient: '0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf',         expirationTime: 1673891048,         revocable: true,         refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',         data: '0x1234',         value: 1000     },     {         recipient: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',         expirationTime: 0,         revocable: false,         refUID: '0x480df4a039efc31b11bfdf491b383ca138b6bde160988222a2a3509c02cee174',         data: '0x00',         value: 0     }], }, {     schema: '0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425',     data: [{         recipient: '0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf',         expirationTime: 0,         revocable: true,         refUID: '0x75bf2ed8dca25a8190c50c52db136664de25b2449535839008ccfdab469b214f',         data: '0x12345678',         value: 0     }, }])",
                },
                returns: {
                  _0: "The UIDs of the new attestations.",
                },
              },
              "multiAttestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[],(uint8,bytes32,bytes32)[],address)[])":
                {
                  details: "Attests to multiple schemas using via provided EIP712 signatures.",
                  params: {
                    multiDelegatedRequests:
                      "The arguments of the delegated multi attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiAttestByDelegation([{     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: [{         recipient: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',         expirationTime: 1673891048,         revocable: true,         refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',         data: '0x1234',         value: 0     },     {         recipient: '0xdEADBeAFdeAdbEafdeadbeafDeAdbEAFdeadbeaf',         expirationTime: 0,         revocable: false,         refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',         data: '0x00',         value: 0     }],     signatures: [{         v: 28,         r: '0x148c...b25b',         s: '0x5a72...be22'     },     {         v: 28,         r: '0x487s...67bb',         s: '0x12ad...2366'     }],     attester: '0x1D86495b2A7B524D747d2839b3C645Bed32e8CF4' }])",
                  },
                  returns: {
                    _0: "The UIDs of the new attestations.",
                  },
                },
              "multiRevoke((bytes32,(bytes32,uint256)[])[])": {
                details: "Revokes existing attestations to multiple schemas.",
                params: {
                  multiRequests:
                    "The arguments of the multi revocation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiRevoke([{     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: [{         uid: '0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25',         value: 1000     },     {         uid: '0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade',         value: 0     }], }, {     schema: '0x5ac273ce41e3c8bfa383efe7c03e54c5f0bff29c9f11ef6ffa930fc84ca32425',     data: [{         uid: '0x053d42abce1fd7c8fcddfae21845ad34dae287b2c326220b03ba241bc5a8f019',         value: 0     }, }])",
                },
              },
              "multiRevokeByDelegation((bytes32,(bytes32,uint256)[],(uint8,bytes32,bytes32)[],address)[])": {
                details: "Revokes existing attestations to multiple schemas via provided EIP712 signatures.",
                params: {
                  multiDelegatedRequests:
                    "The arguments of the delegated multi revocation attestation requests. The requests should be grouped by distinct schema ids to benefit from the best batching optimization. Example: multiRevokeByDelegation([{     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: [{         uid: '0x211296a1ca0d7f9f2cfebf0daaa575bea9b20e968d81aef4e743d699c6ac4b25',         value: 1000     },     {         uid: '0xe160ac1bd3606a287b4d53d5d1d6da5895f65b4b4bab6d93aaf5046e48167ade',         value: 0     }],     signatures: [{         v: 28,         r: '0x148c...b25b',         s: '0x5a72...be22'     },     {         v: 28,         r: '0x487s...67bb',         s: '0x12ad...2366'     }],     revoker: '0x244934dd3e31bE2c81f84ECf0b3E6329F5381992' }])",
                },
              },
              "multiRevokeOffchain(bytes32[])": {
                details: "Revokes the specified multiple bytes32 data.",
                params: {
                  data: "The data to timestamp.",
                },
                returns: {
                  _0: "The timestamp the data was revoked with.",
                },
              },
              "multiTimestamp(bytes32[])": {
                details: "Timestamps the specified multiple bytes32 data.",
                params: {
                  data: "The data to timestamp.",
                },
                returns: {
                  _0: "The timestamp the data was timestamped with.",
                },
              },
              "revoke((bytes32,(bytes32,uint256)))": {
                details:
                  "Revokes an existing attestation to a specific schema. Example: revoke({     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: {         uid: '0x101032e487642ee04ee17049f99a70590c735b8614079fc9275f9dd57c00966d',         value: 0     } })",
                params: {
                  request: "The arguments of the revocation request.",
                },
              },
              "revokeByDelegation((bytes32,(bytes32,uint256),(uint8,bytes32,bytes32),address))": {
                details:
                  "Revokes an existing attestation to a specific schema via the provided EIP712 signature. Example: revokeByDelegation({     schema: '0x8e72f5bc0a8d4be6aa98360baa889040c50a0e51f32dbf0baa5199bd93472ebc',     data: {         uid: '0xcbbc12102578c642a0f7b34fe7111e41afa25683b6cd7b5a14caf90fa14d24ba',         value: 0     },     signature: {         v: 27,         r: '0xb593...7142',         s: '0x0f5b...2cce'     },     revoker: '0x244934dd3e31bE2c81f84ECf0b3E6329F5381992' })",
                params: {
                  delegatedRequest: "The arguments of the delegated revocation request.",
                },
              },
              "revokeOffchain(bytes32)": {
                details: "Revokes the specified bytes32 data.",
                params: {
                  data: "The data to timestamp.",
                },
                returns: {
                  _0: "The timestamp the data was revoked with.",
                },
              },
              "timestamp(bytes32)": {
                details: "Timestamps the specified bytes32 data.",
                params: {
                  data: "The data to timestamp.",
                },
                returns: {
                  _0: "The timestamp the data was timestamped with.",
                },
              },
            },
            title: "EAS - Ethereum Attestation Service",
            version: 1,
          },
          userdoc: {
            kind: "user",
            methods: {
              "getAttestTypeHash()": {
                notice: "Returns the EIP712 type hash for the attest function.",
              },
              "getRevokeTypeHash()": {
                notice: "Returns the EIP712 type hash for the revoke function.",
              },
            },
            version: 1,
          },
          storageLayout: {
            storage: [
              {
                astId: 3790,
                contract: "contracts/EAS.sol:EAS",
                label: "_nonces",
                offset: 0,
                slot: "0",
                type: "t_mapping(t_address,t_uint256)",
              },
              {
                astId: 1977,
                contract: "contracts/EAS.sol:EAS",
                label: "_db",
                offset: 0,
                slot: "1",
                type: "t_mapping(t_bytes32,t_struct(Attestation)4348_storage)",
              },
              {
                astId: 1981,
                contract: "contracts/EAS.sol:EAS",
                label: "_timestamps",
                offset: 0,
                slot: "2",
                type: "t_mapping(t_bytes32,t_uint64)",
              },
              {
                astId: 1987,
                contract: "contracts/EAS.sol:EAS",
                label: "_revocationsOffchain",
                offset: 0,
                slot: "3",
                type: "t_mapping(t_address,t_mapping(t_bytes32,t_uint64))",
              },
            ],
            types: {
              t_address: {
                encoding: "inplace",
                label: "address",
                numberOfBytes: "20",
              },
              t_bool: {
                encoding: "inplace",
                label: "bool",
                numberOfBytes: "1",
              },
              t_bytes32: {
                encoding: "inplace",
                label: "bytes32",
                numberOfBytes: "32",
              },
              t_bytes_storage: {
                encoding: "bytes",
                label: "bytes",
                numberOfBytes: "32",
              },
              "t_mapping(t_address,t_mapping(t_bytes32,t_uint64))": {
                encoding: "mapping",
                key: "t_address",
                label: "mapping(address => mapping(bytes32 => uint64))",
                numberOfBytes: "32",
                value: "t_mapping(t_bytes32,t_uint64)",
              },
              "t_mapping(t_address,t_uint256)": {
                encoding: "mapping",
                key: "t_address",
                label: "mapping(address => uint256)",
                numberOfBytes: "32",
                value: "t_uint256",
              },
              "t_mapping(t_bytes32,t_struct(Attestation)4348_storage)": {
                encoding: "mapping",
                key: "t_bytes32",
                label: "mapping(bytes32 => struct Attestation)",
                numberOfBytes: "32",
                value: "t_struct(Attestation)4348_storage",
              },
              "t_mapping(t_bytes32,t_uint64)": {
                encoding: "mapping",
                key: "t_bytes32",
                label: "mapping(bytes32 => uint64)",
                numberOfBytes: "32",
                value: "t_uint64",
              },
              "t_struct(Attestation)4348_storage": {
                encoding: "inplace",
                label: "struct Attestation",
                members: [
                  {
                    astId: 4329,
                    contract: "contracts/EAS.sol:EAS",
                    label: "uid",
                    offset: 0,
                    slot: "0",
                    type: "t_bytes32",
                  },
                  {
                    astId: 4331,
                    contract: "contracts/EAS.sol:EAS",
                    label: "schema",
                    offset: 0,
                    slot: "1",
                    type: "t_bytes32",
                  },
                  {
                    astId: 4333,
                    contract: "contracts/EAS.sol:EAS",
                    label: "time",
                    offset: 0,
                    slot: "2",
                    type: "t_uint64",
                  },
                  {
                    astId: 4335,
                    contract: "contracts/EAS.sol:EAS",
                    label: "expirationTime",
                    offset: 8,
                    slot: "2",
                    type: "t_uint64",
                  },
                  {
                    astId: 4337,
                    contract: "contracts/EAS.sol:EAS",
                    label: "revocationTime",
                    offset: 16,
                    slot: "2",
                    type: "t_uint64",
                  },
                  {
                    astId: 4339,
                    contract: "contracts/EAS.sol:EAS",
                    label: "refUID",
                    offset: 0,
                    slot: "3",
                    type: "t_bytes32",
                  },
                  {
                    astId: 4341,
                    contract: "contracts/EAS.sol:EAS",
                    label: "recipient",
                    offset: 0,
                    slot: "4",
                    type: "t_address",
                  },
                  {
                    astId: 4343,
                    contract: "contracts/EAS.sol:EAS",
                    label: "attester",
                    offset: 0,
                    slot: "5",
                    type: "t_address",
                  },
                  {
                    astId: 4345,
                    contract: "contracts/EAS.sol:EAS",
                    label: "revocable",
                    offset: 20,
                    slot: "5",
                    type: "t_bool",
                  },
                  {
                    astId: 4347,
                    contract: "contracts/EAS.sol:EAS",
                    label: "data",
                    offset: 0,
                    slot: "6",
                    type: "t_bytes_storage",
                  },
                ],
                numberOfBytes: "224",
              },
              t_uint256: {
                encoding: "inplace",
                label: "uint256",
                numberOfBytes: "32",
              },
              t_uint64: {
                encoding: "inplace",
                label: "uint64",
                numberOfBytes: "8",
              },
            },
          },
        },
        SchemaRegistry: {
          address: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
          abi: [
            {
              inputs: [],
              name: "AlreadyExists",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "registerer",
                  type: "address",
                },
              ],
              name: "Registered",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "getSchema",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "contract ISchemaResolver",
                      name: "resolver",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "schema",
                      type: "string",
                    },
                  ],
                  internalType: "struct SchemaRecord",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "schema",
                  type: "string",
                },
                {
                  internalType: "contract ISchemaResolver",
                  name: "resolver",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
              ],
              name: "register",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          transactionHash: "0x731c2d25800a3e44a5f080d9acf8079949991271a9ae52c470662fe96835d667",
          receipt: {
            to: null,
            from: "0x01a93612f26100B6E18a2e3dd57df5c3ccaFeca1",
            contractAddress: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
            transactionIndex: 3,
            gasUsed: "477737",
            logsBloom:
              "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            blockHash: "0x931e77b81f334ea2fa8cc283b0637457523379a317555dfddad312996fac0c85",
            transactionHash: "0x731c2d25800a3e44a5f080d9acf8079949991271a9ae52c470662fe96835d667",
            logs: [],
            blockNumber: 2958569,
            cumulativeGasUsed: "29612372",
            status: 1,
            byzantium: true,
          },
          args: [],
          numDeployments: 1,
          solcInputHash: "78891d974a28827b8f023101fe409776",
          metadata:
            '{"compiler":{"version":"0.8.18+commit.87f61d96"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"AlreadyExists","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"uid","type":"bytes32"},{"indexed":false,"internalType":"address","name":"registerer","type":"address"}],"name":"Registered","type":"event"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"uid","type":"bytes32"}],"name":"getSchema","outputs":[{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"contract ISchemaResolver","name":"resolver","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"string","name":"schema","type":"string"}],"internalType":"struct SchemaRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"schema","type":"string"},{"internalType":"contract ISchemaResolver","name":"resolver","type":"address"},{"internalType":"bool","name":"revocable","type":"bool"}],"name":"register","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"events":{"Registered(bytes32,address)":{"details":"Emitted when a new schema has been registered","params":{"registerer":"The address of the account used to register the schema.","uid":"The schema UID."}}},"kind":"dev","methods":{"getSchema(bytes32)":{"details":"Returns an existing schema by UID","params":{"uid":"The UID of the schema to retrieve."},"returns":{"_0":"The schema data members."}},"register(string,address,bool)":{"details":"Submits and reserves a new schema","params":{"resolver":"An optional schema resolver.","revocable":"Whether the schema allows revocations explicitly.","schema":"The schema data schema."},"returns":{"_0":"The UID of the new schema."}}},"title":"The global schema registry.","version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/SchemaRegistry.sol":"SchemaRegistry"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"none","useLiteralContent":true},"optimizer":{"enabled":true,"runs":1000000},"remappings":[],"viaIR":true},"sources":{"contracts/ISchemaRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\n/**\\n * @title A struct representing a record for a submitted schema.\\n */\\nstruct SchemaRecord {\\n    bytes32 uid; // The unique identifier of the schema.\\n    ISchemaResolver resolver; // Optional schema resolver.\\n    bool revocable; // Whether the schema allows revocations explicitly.\\n    string schema; // Custom specification of the schema (e.g., an ABI).\\n}\\n\\n/**\\n * @title The global schema registry interface.\\n */\\ninterface ISchemaRegistry {\\n    /**\\n     * @dev Emitted when a new schema has been registered\\n     *\\n     * @param uid The schema UID.\\n     * @param registerer The address of the account used to register the schema.\\n     */\\n    event Registered(bytes32 indexed uid, address registerer);\\n\\n    /**\\n     * @dev Submits and reserves a new schema\\n     *\\n     * @param schema The schema data schema.\\n     * @param resolver An optional schema resolver.\\n     * @param revocable Whether the schema allows revocations explicitly.\\n     *\\n     * @return The UID of the new schema.\\n     */\\n    function register(string calldata schema, ISchemaResolver resolver, bool revocable) external returns (bytes32);\\n\\n    /**\\n     * @dev Returns an existing schema by UID\\n     *\\n     * @param uid The UID of the schema to retrieve.\\n     *\\n     * @return The schema data members.\\n     */\\n    function getSchema(bytes32 uid) external view returns (SchemaRecord memory);\\n}\\n","keccak256":"0xef47e449dd02bd034e26b1dea505ce533906f8462fc674c938ed0e872a68d640","license":"MIT"},"contracts/SchemaRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\nimport { EMPTY_UID } from \\"./Types.sol\\";\\nimport { ISchemaRegistry, SchemaRecord } from \\"./ISchemaRegistry.sol\\";\\n\\nimport { ISchemaResolver } from \\"./resolver/ISchemaResolver.sol\\";\\n\\n/**\\n * @title The global schema registry.\\n */\\ncontract SchemaRegistry is ISchemaRegistry {\\n    error AlreadyExists();\\n\\n    // The version of the contract.\\n    string public constant VERSION = \\"0.26\\";\\n\\n    // The global mapping between schema records and their IDs.\\n    mapping(bytes32 uid => SchemaRecord schemaRecord) private _registry;\\n\\n    /**\\n     * @inheritdoc ISchemaRegistry\\n     */\\n    function register(string calldata schema, ISchemaResolver resolver, bool revocable) external returns (bytes32) {\\n        SchemaRecord memory schemaRecord = SchemaRecord({\\n            uid: EMPTY_UID,\\n            schema: schema,\\n            resolver: resolver,\\n            revocable: revocable\\n        });\\n\\n        bytes32 uid = _getUID(schemaRecord);\\n        if (_registry[uid].uid != EMPTY_UID) {\\n            revert AlreadyExists();\\n        }\\n\\n        schemaRecord.uid = uid;\\n        _registry[uid] = schemaRecord;\\n\\n        emit Registered(uid, msg.sender);\\n\\n        return uid;\\n    }\\n\\n    /**\\n     * @inheritdoc ISchemaRegistry\\n     */\\n    function getSchema(bytes32 uid) external view returns (SchemaRecord memory) {\\n        return _registry[uid];\\n    }\\n\\n    /**\\n     * @dev Calculates a UID for a given schema.\\n     *\\n     * @param schemaRecord The input schema.\\n     *\\n     * @return schema UID.\\n     */\\n    function _getUID(SchemaRecord memory schemaRecord) private pure returns (bytes32) {\\n        return keccak256(abi.encodePacked(schemaRecord.schema, schemaRecord.resolver, schemaRecord.revocable));\\n    }\\n}\\n","keccak256":"0x11ca856573f1b53530d27d40b0a5629a5c591957e221a1b4b8eae2b2053f168b","license":"MIT"},"contracts/Types.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.19;\\n\\n// A representation of an empty/uninitialized UID.\\nbytes32 constant EMPTY_UID = 0;\\n\\n/**\\n * @dev A struct representing EIP712 signature data.\\n */\\nstruct EIP712Signature {\\n    uint8 v; // The recovery ID.\\n    bytes32 r; // The x-coordinate of the nonce R.\\n    bytes32 s; // The signature data.\\n}\\n\\n/**\\n * @dev A struct representing a single attestation.\\n */\\nstruct Attestation {\\n    bytes32 uid; // A unique identifier of the attestation.\\n    bytes32 schema; // The unique identifier of the schema.\\n    uint64 time; // The time when the attestation was created (Unix timestamp).\\n    uint64 expirationTime; // The time when the attestation expires (Unix timestamp).\\n    uint64 revocationTime; // The time when the attestation was revoked (Unix timestamp).\\n    bytes32 refUID; // The UID of the related attestation.\\n    address recipient; // The recipient of the attestation.\\n    address attester; // The attester/sender of the attestation.\\n    bool revocable; // Whether the attestation is revocable.\\n    bytes data; // Custom attestation data.\\n}\\n","keccak256":"0x547096b5cb7bfad9591bdc520705f8110534cd040ed0f7a0ba8d83ea4a565b45","license":"MIT"},"contracts/resolver/ISchemaResolver.sol":{"content":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport { Attestation } from \\"../Types.sol\\";\\n\\n/**\\n * @title The interface of an optional schema resolver.\\n */\\ninterface ISchemaResolver {\\n    /**\\n     * @dev Returns whether the resolver supports ETH transfers.\\n     */\\n    function isPayable() external pure returns (bool);\\n\\n    /**\\n     * @dev Processes an attestation and verifies whether it\'s valid.\\n     *\\n     * @param attestation The new attestation.\\n     *\\n     * @return Whether the attestation is valid.\\n     */\\n    function attest(Attestation calldata attestation) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes multiple attestations and verifies whether they are valid.\\n     *\\n     * @param attestations The new attestations.\\n     * @param values Explicit ETH amounts which were sent with each attestation.\\n     *\\n     * @return Whether all the attestations are valid.\\n     */\\n    function multiAttest(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes an attestation revocation and verifies if it can be revoked.\\n     *\\n     * @param attestation The existing attestation to be revoked.\\n     *\\n     * @return Whether the attestation can be revoked.\\n     */\\n    function revoke(Attestation calldata attestation) external payable returns (bool);\\n\\n    /**\\n     * @dev Processes revocation of multiple attestation and verifies they can be revoked.\\n     *\\n     * @param attestations The existing attestations to be revoked.\\n     * @param values Explicit ETH amounts which were sent with each revocation.\\n     *\\n     * @return Whether the attestations can be revoked.\\n     */\\n    function multiRevoke(\\n        Attestation[] calldata attestations,\\n        uint256[] calldata values\\n    ) external payable returns (bool);\\n}\\n","keccak256":"0x0f3a75c28cdb91fa9227a6eef183379ecea2b6bf38db52795b5c4e6af79299e8","license":"MIT"}},"version":1}',
          bytecode:
            "0x60808060405234610016576107b8908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816360d7a2781461029757508063a2ea7c6e146101045763ffa1ad741461004657600080fd5b3461010057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610100578051918183019083821067ffffffffffffffff8311176100d45750926100d093825282527f302e323600000000000000000000000000000000000000000000000000000000602083015251918291602083526020830190610689565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b5080fd5b503461010057602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610293576060808351610144816106cc565b85815285878201528585820152015235825281835280822090805191610169836106cc565b805483526001918282015491868501600273ffffffffffffffffffffffffffffffffffffffff92838616835260ff8589019660a01c16151586520188845196898354936101b585610758565b808b52948381169081156102505750600114610214575b50505050506101e1856100d097980386610717565b606087019485528251978897818952519088015251169085015251151560608401525160808084015260a0830190610689565b908094939b50528983205b82841061023d575050508501909601956101e1886100d087386101cc565b80548985018c0152928a0192810161021f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016858c01525050505090151560051b86010196506101e1886100d087386101cc565b8280fd5b92939050346106625760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106625780359067ffffffffffffffff80831161065e573660238401121561065e57828201359181831161065a57366024848601011161065a576024359673ffffffffffffffffffffffffffffffffffffffff9182891680990361010057604435978815158099036102935761033b816106cc565b8281526020998a8201908152888201998a52885197848c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe099818b601f83011601610386908d610717565b808c5280828d019460240185378b0101528b6060840199808b5283518d5115158d519384938185019687915180926103bd92610666565b84019260601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169083015260f81b6034820152036015810182526035016104059082610717565b519020998a8552848c5289852054610632579082918b600294528b8652858d528a8620925183556001968784019251167fffffffffffffffffffffff00000000000000000000000000000000000000000074ff000000000000000000000000000000000000000084549351151560a01b1692161717905501955190815194851161060657506104948654610758565b601f81116105c0575b508891601f8511600114610545578495509084939492919361051a575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91921b9260031b1c19161790555b817f7d917fcbc9a29a9705ff9936ffa599500e4fd902e4486bae317414fe967b307c848351338152a251908152f35b015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff386104ba565b9294849081168785528a8520945b8b888383106105a95750505010610572575b505050811b0190556104eb565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080610565565b868601518855909601959485019487935001610553565b868352898320601f860160051c8101918b87106105fc575b601f0160051c019084905b8281106105f157505061049d565b8481550184906105e3565b90915081906105d8565b8260416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b838a517f23369fa6000000000000000000000000000000000000000000000000000000008152fd5b8680fd5b8580fd5b8380fd5b60005b8381106106795750506000910152565b8181015183820152602001610669565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936106c581518092818752878088019101610666565b0116010190565b6080810190811067ffffffffffffffff8211176106e857604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106e857604052565b90600182811c921680156107a1575b602083101461077257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f169161076756fea164736f6c6343000812000a",
          deployedBytecode:
            "0x60806040908082526004918236101561001757600080fd5b600091823560e01c90816360d7a2781461029757508063a2ea7c6e146101045763ffa1ad741461004657600080fd5b3461010057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610100578051918183019083821067ffffffffffffffff8311176100d45750926100d093825282527f302e323600000000000000000000000000000000000000000000000000000000602083015251918291602083526020830190610689565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b5080fd5b503461010057602092837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610293576060808351610144816106cc565b85815285878201528585820152015235825281835280822090805191610169836106cc565b805483526001918282015491868501600273ffffffffffffffffffffffffffffffffffffffff92838616835260ff8589019660a01c16151586520188845196898354936101b585610758565b808b52948381169081156102505750600114610214575b50505050506101e1856100d097980386610717565b606087019485528251978897818952519088015251169085015251151560608401525160808084015260a0830190610689565b908094939b50528983205b82841061023d575050508501909601956101e1886100d087386101cc565b80548985018c0152928a0192810161021f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016858c01525050505090151560051b86010196506101e1886100d087386101cc565b8280fd5b92939050346106625760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106625780359067ffffffffffffffff80831161065e573660238401121561065e57828201359181831161065a57366024848601011161065a576024359673ffffffffffffffffffffffffffffffffffffffff9182891680990361010057604435978815158099036102935761033b816106cc565b8281526020998a8201908152888201998a52885197848c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe099818b601f83011601610386908d610717565b808c5280828d019460240185378b0101528b6060840199808b5283518d5115158d519384938185019687915180926103bd92610666565b84019260601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169083015260f81b6034820152036015810182526035016104059082610717565b519020998a8552848c5289852054610632579082918b600294528b8652858d528a8620925183556001968784019251167fffffffffffffffffffffff00000000000000000000000000000000000000000074ff000000000000000000000000000000000000000084549351151560a01b1692161717905501955190815194851161060657506104948654610758565b601f81116105c0575b508891601f8511600114610545578495509084939492919361051a575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91921b9260031b1c19161790555b817f7d917fcbc9a29a9705ff9936ffa599500e4fd902e4486bae317414fe967b307c848351338152a251908152f35b015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff386104ba565b9294849081168785528a8520945b8b888383106105a95750505010610572575b505050811b0190556104eb565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080610565565b868601518855909601959485019487935001610553565b868352898320601f860160051c8101918b87106105fc575b601f0160051c019084905b8281106105f157505061049d565b8481550184906105e3565b90915081906105d8565b8260416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b838a517f23369fa6000000000000000000000000000000000000000000000000000000008152fd5b8680fd5b8580fd5b8380fd5b60005b8381106106795750506000910152565b8181015183820152602001610669565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936106c581518092818752878088019101610666565b0116010190565b6080810190811067ffffffffffffffff8211176106e857604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106e857604052565b90600182811c921680156107a1575b602083101461077257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f169161076756fea164736f6c6343000812000a",
          devdoc: {
            events: {
              "Registered(bytes32,address)": {
                details: "Emitted when a new schema has been registered",
                params: {
                  registerer: "The address of the account used to register the schema.",
                  uid: "The schema UID.",
                },
              },
            },
            kind: "dev",
            methods: {
              "getSchema(bytes32)": {
                details: "Returns an existing schema by UID",
                params: {
                  uid: "The UID of the schema to retrieve.",
                },
                returns: {
                  _0: "The schema data members.",
                },
              },
              "register(string,address,bool)": {
                details: "Submits and reserves a new schema",
                params: {
                  resolver: "An optional schema resolver.",
                  revocable: "Whether the schema allows revocations explicitly.",
                  schema: "The schema data schema.",
                },
                returns: {
                  _0: "The UID of the new schema.",
                },
              },
            },
            title: "The global schema registry.",
            version: 1,
          },
          userdoc: {
            kind: "user",
            methods: {},
            version: 1,
          },
          storageLayout: {
            storage: [
              {
                astId: 5366,
                contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
                label: "_registry",
                offset: 0,
                slot: "0",
                type: "t_mapping(t_bytes32,t_struct(SchemaRecord)5313_storage)",
              },
            ],
            types: {
              t_bool: {
                encoding: "inplace",
                label: "bool",
                numberOfBytes: "1",
              },
              t_bytes32: {
                encoding: "inplace",
                label: "bytes32",
                numberOfBytes: "32",
              },
              "t_contract(ISchemaResolver)5553": {
                encoding: "inplace",
                label: "contract ISchemaResolver",
                numberOfBytes: "20",
              },
              "t_mapping(t_bytes32,t_struct(SchemaRecord)5313_storage)": {
                encoding: "mapping",
                key: "t_bytes32",
                label: "mapping(bytes32 => struct SchemaRecord)",
                numberOfBytes: "32",
                value: "t_struct(SchemaRecord)5313_storage",
              },
              t_string_storage: {
                encoding: "bytes",
                label: "string",
                numberOfBytes: "32",
              },
              "t_struct(SchemaRecord)5313_storage": {
                encoding: "inplace",
                label: "struct SchemaRecord",
                members: [
                  {
                    astId: 5305,
                    contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
                    label: "uid",
                    offset: 0,
                    slot: "0",
                    type: "t_bytes32",
                  },
                  {
                    astId: 5308,
                    contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
                    label: "resolver",
                    offset: 0,
                    slot: "1",
                    type: "t_contract(ISchemaResolver)5553",
                  },
                  {
                    astId: 5310,
                    contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
                    label: "revocable",
                    offset: 20,
                    slot: "1",
                    type: "t_bool",
                  },
                  {
                    astId: 5312,
                    contract: "contracts/SchemaRegistry.sol:SchemaRegistry",
                    label: "schema",
                    offset: 0,
                    slot: "2",
                    type: "t_string_storage",
                  },
                ],
                numberOfBytes: "96",
              },
            },
          },
        },
      },
    },
  ],
} as const;

export default contracts;
