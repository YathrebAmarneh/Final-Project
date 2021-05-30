import { useState } from 'react'
import Modal from 'react-modal'
import Button from './Button'
import Label from './Label'
import LabelInput from './LabelInput'
import InputMask from 'react-input-mask';

Modal.setAppElement('#root')
const UpdateMethodButton = ({ children }) => {
    const [modalIsOPen, setmodalIsOPen] = useState(false)

    return (

        <div className="updateMethodButton">
            <Button textButton="Update Method" onClick={() => setmodalIsOPen(true)} />
            <Modal
                className="updateMethodModal"
                style={{
                    content: {
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: '65%',
                        right: 0,
                    },
                    overlay: {
                        backgroundColor: 'transparent'
                    }

                }}
                isOpen={modalIsOPen} onRequestClose={() => setmodalIsOPen(false)}
            >

                <div className="updateMethodHead">
                    <Button className="xIcon xUpdatemethod" textButton="&times;" onClick={() => setmodalIsOPen(false)} />
                    <h5>Update Payment Method</h5>
                </div>

                <div className="updateMethodBody">

                    <div className="div">
                        <Label text="Card Number" />
                        <InputMask
                            className="cardNumber"

                            placeholder="Enter Card Number Here..."
                            mask="9999 9999 9999 9999">
                        </InputMask>
                    </div>

                    <div className="div">
                        <LabelInput className="cardHolderName" text="Card Holder Name" placeholder="Cardholder name..." />
                    </div>
                    <div className="div">

                        <div className="mmyy">
                            <Label text="Expiry Date" />
                            <div>
                                <InputMask mask="99" className="mm" placeholder="MM"></InputMask>
                                <span style={{color:'grey', marginTop:'5px', padding:'2px 5px'}}>-</span>
                                <InputMask mask="99" className="yy" placeholder="YY"></InputMask>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <Label text="CVV/CVC" />
                        <InputMask
                            className="cvv"
                            placeholder="123"
                            mask="999">
                        </InputMask>
                    </div>

                    <div className="cancleUpdateMehtod">
                        <Button className="cancleUpdate" textButton="Cancel" onClick={() => setmodalIsOPen(false)} />
                        <Button className="updateUpdate" textButton="Update" />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UpdateMethodButton