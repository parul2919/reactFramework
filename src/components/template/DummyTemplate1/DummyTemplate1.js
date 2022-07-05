import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles from "./DummyTemplate1.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import DummyOrganism from "../../organism/DummyOrganism/DummyOrganism";
import callingAction from "../../../store/actions/action";

const DummyTemplate1 = (props) => {
  const { className, callingActionCheck, dummyMessage, dummyLoading } = props;
  const { REACT_APP_CHECK_URL_1, REACT_APP_CHECK_ENV } = process.env;
  useEffect(() => {
    callingActionCheck();
  }, []);
  return (
    <div className={`${className} dummy-template`}>
      <MemoizedHeader />
      <section className="main">
        <p>Checking env variables value</p>
        <div className="mb-5">{REACT_APP_CHECK_URL_1}</div>
        <div className="mb-5">{REACT_APP_CHECK_ENV}</div>
        <DummyOrganism />

        <p>
          {dummyMessage} ....{dummyLoading} is here to check saga & reducer
          connecttion
        </p>
      </section>

      <MemoizedFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  callingActionCheck: () => dispatch(callingAction()),
});
const mapStateToProps = (state) => ({
  dummyMessage: state.dummy.message,
  dummyLoading: state.dummy.loading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  styled(DummyTemplate1)`
    ${styles}
  `
);
