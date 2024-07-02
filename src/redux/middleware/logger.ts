/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
