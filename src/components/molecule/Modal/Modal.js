import React from "react";
import styled from "styled-components";
import styles from "./Modal.style";

const Modal = (props) => {
  const {
    className,
    isOpen,
    onClose,
    children,
    classes,
    overlaySide,
    isCloseOut,
  } = props;
  if (isOpen === false) return null;

  return (
    <div className={` col-sm-12 ${classes} ${className}`}>
      <div className={`modal-window  bigwidth open ${overlaySide}`}>
        <div
          className="modal-window-overlay"
          onClick={isCloseOut && onClose}
          role="button"
          aria-hidden="true"
        >
          .
        </div>
        <div className="modal-window-in comp-product-view">
          <div
            className="close"
            onClick={onClose}
            role="button"
            aria-hidden="true"
          >
            X
          </div>
          <div className="modal-window-in-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default styled(Modal)`
  ${styles}
`;
