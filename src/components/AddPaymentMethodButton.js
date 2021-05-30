import Button from "./Button"
import { useState } from 'react'
import Modal from 'react-modal'
import Label from './Label'
import Input from './Input'
import LabelInput from "./LabelInput"
import { FaCcVisa } from 'react-icons/fa'
import InputButton from "./InputButton"
import InputMask from 'react-input-mask';

Modal.setAppElement('#root')

const AddPaymentMethodButton = () => {
    const [modalIsOPen, setmodalIsOPen] = useState(false)
    return (
        <div className="addPaymentMethodButton">
            <Button textButton="Add Payment Method" onClick={() => setmodalIsOPen(true)} />
            <Modal
                className="addMethodModal"
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

                isOpen={modalIsOPen}
                onRequestClose={() => setmodalIsOPen(false)}
            >
                <div className="addMethodHead">
                    <Button className="xIcon xAddmethod" textButton="&times;" onClick={() => setmodalIsOPen(false)} />
                    <h5>Add Payment Method</h5>
                </div>

                <div className="add1">

                    <div className="visaLabelInput">
                        <Label text="Card Number" />
                        <div className="visaCardDiv">
                            <InputMask
                                className="addCardNumber"
                                placeholder="Enter Card Number Here..."
                                value="1234123412341234"
                                mask="9999 9999 9999 9999">
                            </InputMask>
                            <div className="visaIcon">
                                <FaCcVisa color='rgb(55 20 140)' size="1.5rem" />
                            </div>
                        </div>
                    </div>

                    <LabelInput className="addCardHolderName" text="Card Holder Name" value="John Doe" />

                    <div className="add2">

                        <div className="expiryDateCvv">
                            <div className="labelMmyyAdd">
                                <Label text="Expiry Date" />
                                <div className="mmyyAdd">
                                    <InputMask mask="99" className="mmAdd" placeholder="MM" ></InputMask>
                                    <span style={{ marginTop: '5px', color: 'gray' }}>--</span>
                                    <InputMask mask="99" className="yyAdd" placeholder="YY" ></InputMask>
                                </div>
                            </div>
                            <div className="cvvCvcAdd">
                                <Label text="CVV/CVC" />
                                <InputMask mask="999" className="cvvAdd" placeholder="123" value="123"></InputMask>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="add3">
                    <Label text="Do you have a coupon code?" />
                    <InputButton className="inputButton" id="apply" placeholder="12322" textButton="Apply" />
                </div>
                <div className="add4">
                    <div className="textAdd4">
                        <div className="standard"><strong>Standard Plan</strong></div>
                        <div><strong>Total Amount</strong></div>
                        <div><strong>$200.00</strong><span>/month</span></div>
                    </div>
                    <div className="cancleUpdatePayMehtod">
                        <Button className="cancelAdd" textButton="Cancel" onClick={() => setmodalIsOPen(false)}/>
                        <Button className="updatePayMethod" textButton="Update & Pay" />
                    </div>

                </div>

            </Modal>
        </div>
    )
}

export default AddPaymentMethodButton