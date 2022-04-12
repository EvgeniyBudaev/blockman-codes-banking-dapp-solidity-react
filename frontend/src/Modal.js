import React from 'react';
import './Modal.css'

const buttonStyle = {
    width: "100%",
};

const Modal = props => {
  if (!props.show) {
    return null
  }

  return(
    <div className="modaly" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{props.symbol.toUpperCase()}</h2>
        </div>
        <div className="modal-body">

          <form onSubmit={e => props.depositOrWithdraw(e, props.symbol)}>

            <div className="row">
              <div className="col-md-3">
                <label>Amount</label>
              </div>
              <div className="col-md-8">
                <input style={{width: "300px"}} onChange={e => props.setAmount(e.target.value)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-4">
                <button style={{width: "100%"}} onClick={ e => props.setIsDeposit(true) } className="btn btn-primary">Deposit</button>
              </div>
              <div className="col-md-4">
                <button style={{width: "100%"}} onClick={ e => props.setIsDeposit(false) } className="btn btn-primary">Withdraw</button>
              </div>
            </div>
          </form>

        </div>

        <div className="modal-footer">
          <button style={{marginRight: "42px"}} onClick={ props.onClose } className="btn btn-primary">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
