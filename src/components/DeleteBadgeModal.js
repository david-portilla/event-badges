import React from 'react'
import Modal from './Modal';

export default function DeleteBadgeModal (props) {
  return (
    <Modal
      isOpen={ props.isOpen }
      onClose={ props.onClose }
    >
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are going to delete this badge</p>
        <div>
          <buttton onClick={ props.onDeleteBadge } className="btn btn-danger mr-4">Delete</buttton>
          <buttton onClick={ props.onClose } className="btn btn-primary">Cancel</buttton>
        </div>
      </div>
    </Modal>
  )
}
