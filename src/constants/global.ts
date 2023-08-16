// build checker
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const APP_NAME = "P2P Professional";

export const HOST = window?.location?.host ?? "p2pp.com.au"; // default p2pp.com.au

export const LIVE_APP_BASE = `https://p2pp.com.au`;

export const API_BASE = `${IS_DEVELOPMENT ? "http://localhost:8000" : LIVE_APP_BASE}/api/v1`;
