import React from "react";
import { mount } from "enzyme";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Login from "../Login";

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
      <Login {...{ store }} />
    </StaticRouter>
  );
};

describe("Login component should be rendered", () => {
  test("login renders without error", () => {
    const wrapper = setup();
    const loginComponent = wrapper.find("[data-test='component-login']");
    expect(loginComponent.length).toBe(1);
  });
});

describe("Test case for testing login", () => {
  test("Username input", () => {
    const wrapper = setup();
    wrapper
      .find("[type='text']")
      .simulate("change", { target: { value: "testuser" } });

    expect(wrapper.find("[type='text']").prop("value")).toBe("testuser");
  });
});
