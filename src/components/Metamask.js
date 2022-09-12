
import { useEthers, useEtherBalance, useSendTransaction, ChainId, } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const MetaMaskConnect = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const EtherBalance = useEtherBalance(account)

    const { sendTransaction, state } = useSendTransaction()

    const disabled = ChainId === ChainId.Mainnet
    const status = state.status
    const address = '0dd4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxC34f' //recipient address

    const send = () => {
        void sendTransaction({ to: address, value: 1 })
    }



    return (
        <div >

            <h1>WALLET</h1>
            <div>
                {
                    account ?
                        <button onClick={() => deactivate()}>Deacticate</button>
                        :
                        <button onClick={() => activateBrowserWallet()}>Connect</button>
                }
            </div>
            <p>Acount = {account}</p>

            {
                EtherBalance &&
                <p>{formatEther(EtherBalance)} Eth</p>
            }

            <hr />
            <h1>Transctions</h1>
            {
                account &&
                <div>
                    {
                        disabled ? (
                            <p>Plase change the netwok from mainnet to proceed</p>
                        )
                            :
                            (
                                <>
                                    <button onClick={() => send()}>Send ether</button>
                                    <p>status :  {status} </p>
                                </>
                            )
                    }

                </div>
            }
        </div>
    );
}

export default MetaMaskConnect;
