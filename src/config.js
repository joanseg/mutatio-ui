//ABI code from truffle deployed contracts

export const CERTIFICATE_ADDRESS = '0x987fc06261523DA7482990c627C1b7c7AC645eB9'
export const CERTIFICATE_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name1",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_surname1",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "party1",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name2",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_surname2",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_party2",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_postalAddress",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "LogCertificateAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "custodian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "certificateId",
          "type": "uint256"
        }
      ],
      "name": "LogCertificateSigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_custodian",
          "type": "address"
        }
      ],
      "name": "LogCustodianAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_party2",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "LogPartySigned",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "certificateId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "contractPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "custodians",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "circuitBreaker",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "readCertificate",
      "outputs": [
        {
          "internalType": "string",
          "name": "name1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "surname1",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "party1",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name2",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "surname2",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "postalAddress",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "custodian",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_name1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_surname1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name2",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_surname2",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_party2",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_postalAddress",
          "type": "string"
        }
      ],
      "name": "addCertificate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "signParty",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_newCustodian",
          "type": "address"
        }
      ],
      "name": "addCustodian",
      "outputs": [
        {
          "internalType": "address",
          "name": "custodian",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "signCertificate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]