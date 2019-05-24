import React from "react";
import { mount } from "enzyme";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import Signup from "../Signup";

const initialState = {
  messageBox: {}
};

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
});
const setup = (props = {}) => {
  return mount(
    <StaticRouter>
      <Signup {...{ store }} />
    </StaticRouter>
  );
};

describe("Signup component should be rendered", () => {
  test("Signup renders without error", () => {
    const wrapper = setup();
    const signupComponent = wrapper.find("[data-test='component-signup']");
    expect(signupComponent.length).toBe(1);
  });
});

describe("Test case for testing signup", () => {
  test("Username input", () => {
    const wrapper = setup();
    wrapper
      .find("[data-test='username-input']")
      .simulate("change", { target: { value: "testuser" } });
    expect(wrapper.find("[data-test='username-input']").prop("value")).toBe("testuser");
  });
});
