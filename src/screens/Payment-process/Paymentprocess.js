import React from 'react'

export default function Paymentprocess() {
  return (
    <div className="Staticpages">
        <h1 className='Heading'>Payment Process</h1>
        <div className='Info-section'>
          <p>Payments can be made in three different ways. You simply shop around, add your desired items to the cart and checkout. Once you get to the checkout point, you can pay via:</p>
          <h3 className='ques'>Traditional EFT</h3>
          <p className='ans'>Selecting this method will lead you to the screen that displays our banking details. You can copy or screenshot those details and save them to make your transaction. Enusre that you use your order reference number as the reference description in your transaction and email it to info@faithrevelation.co.za. We will get back to regarding receipt of your proof of payment and update your order status in your profile for easy tracking.</p>
          <h3 className='ques'>Payfast Checkout</h3>
          <p className='ans'>Revelation has integrated Payfast payment sysytem for an easy and quick checkout process that is safe, fast and will give you peace of mind. Selecting this option will redirect you to Payfast’s payment point, where you will select the bank you use and you will follow the prompts leading to your payment processing. We will issue a receipt once the transaction successful and update your order status in your profile for easy tracking.</p>
          <h3 className='ques'>PayPal</h3>
          <p className='ans'>Selecting this method will redirect you t your PayPal account where it will generate the transaction for your approval. You will approve the transaction and we will show you the status of the transaction as we wait for clearance on our side. Once your payment has cleared, the receipt will update and your order status will be updated in your profile as well, for easy tracking.</p>
        </div>
      </div>
  )
}

