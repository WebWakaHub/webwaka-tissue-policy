/**
 * Policy — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { PolicyEvalComposition } from "@webwaka/cell-policy-eval";
import { AccessCtrlComposition } from "@webwaka/cell-access-ctrl";

export { PolicyEvalComposition } from '@webwaka/cell-policy-eval';
export { AccessCtrlComposition } from '@webwaka/cell-access-ctrl';

/**
 * Policy Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class PolicyComposition {
  private policyEvalComposition: PolicyEvalComposition;
  private accessCtrlComposition: AccessCtrlComposition;

  constructor() {
    this.policyEvalComposition = new PolicyEvalComposition();
    this.accessCtrlComposition = new AccessCtrlComposition();
  }
}

export * from "./types";
