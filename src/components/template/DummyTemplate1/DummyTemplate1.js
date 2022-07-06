import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles from "./DummyTemplate1.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import callingAction from "../../../store/actions/action";
import TechStack from "../../organism/TechStack/TechStack";

const DummyTemplate1 = (props) => {
  const { className, callingActionCheck, dummyMessage, dummyLoading } = props;
  const { REACT_APP_CHECK_URL_1, REACT_APP_CHECK_ENV } = process.env;
  useEffect(() => {
    callingActionCheck();
  }, []);
  return (
    <div className={`${className} dummy-template`}>
      <MemoizedHeader />
      <section className="wrapper-std">
        <TechStack />
        <div className="d-none">
          <p>Checking env variables value</p>
          <div className="mb-5">{REACT_APP_CHECK_URL_1}</div>
          <div className="mb-5">{REACT_APP_CHECK_ENV}</div>
          <p>
            {dummyMessage} ....{dummyLoading} is here to check saga & reducer
            connecttion
          </p>
        </div>
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
