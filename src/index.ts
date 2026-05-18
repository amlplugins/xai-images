/**
 * @amlplugins/xai-images
 *
 * Thin namespaced re-export of the native @ai-sdk/xai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * xAI Image Generation — Grok image models (grok-2-image, grok-2-image-1212) via @ai-sdk/xai imageModel adapter.
 */

import * as _sdk from "@ai-sdk/xai";
export * from "@ai-sdk/xai";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
