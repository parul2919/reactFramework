/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import styles from "./GalleryModal.style";

const GalleryModal = (props) => {
  const { className, closeModal, hasNext, hasPrev, findNext, findPrev, src } =
    props;
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) closeModal();
    if (e.keyCode === 37 && hasPrev) findPrev();
    if (e.keyCode === 39 && hasNext) findNext();
  };
  if (!src) {
    return null;
  }
  return (
    <div className={className}>
      <div
        className={`modal-overlay `}
        onClick={closeModal}
        onKeyDown={closeModal}
      />
      <div isOpen={!!src} className="modal">
        <div className="modal-body">
          <a
            href="#"
            className="modal-close"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
          >
            &times;
          </a>
          {hasPrev && (
            <a
              href="#"
              className="modal-prev"
              onClick={findPrev}
              onKeyDown={handleKeyDown}
            >
              &lsaquo;
            </a>
          )}
          {hasNext && (
            <a
              href="#"
              className="modal-next"
              onClick={findNext}
              onKeyDown={handleKeyDown}
            >
              &rsaquo;
            </a>
          )}
          <img src={src} alt="media" />
        </div>
      </div>
    </div>
  );
};

export default styled(GalleryModal)`
  ${styles}
`;
