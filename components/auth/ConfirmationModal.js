/** @format */

import { Modal } from "antd"
import Proptypes from "prop-types"
import React from "react"
import NSButton from "../common/NSButton"

const ConfirmationModal = ({ open, setOpen, onClickYes, title, loader }) => {
  return (
    <Modal
      className="logout_modal workflow_model"
      open={open}
      onOk={onClickYes}
      onCancel={() => setOpen(false)}
      title={title}
      footer={null}
    >
      <div className="flex justify-center space-x-4">
        <NSButton title="No" onClick={() => setOpen(false)} />
        <NSButton title="Yes" onClick={onClickYes} isPrimary loading={loader} />
      </div>
    </Modal>
  )
}

export default ConfirmationModal
ConfirmationModal.propTypes = {
  open: Proptypes.bool,
  setOpen: Proptypes.func,
  onClickYes: Proptypes.func,
  title: Proptypes.string,
  loader: Proptypes.bool,
}
