import {createPublicClient, http} from 'viem'
import {mainnet} from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
})

const address = '0xd2135CfB216b74109775236E36d4b433F1DF507B'

async function main() {
    // reverse resolution: address -> ENS name
    const ensName = await client.getEnsName({
        address,
    })

    console.log('ENS Name: ', ensName)

    if(!ensName){
        console.log("No primary ENS name found.")
        return
    }

    // Forward resolution: ENS name -> address
    const resolvedAddress = await client.getEnsAddress({
        name: normalize(ensName),
    })

    console.log("Resolved Address: ", resolvedAddress)

    // verify
    if(
        resolvedAddress &&
        resolvedAddress.toLowerCase() === address.toLowerCase()
    ) {
        console.log('VALID PRIMARY ENS NAME:', ensName)
    } else {
        console.log('ENS name failed forward verification')
    }
}

main().catch(console.error)