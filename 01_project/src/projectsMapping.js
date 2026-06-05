import ClosuresAndStaleClosures from "./projects/ClosuresAndStaleClosures";
import CompoundPattern from "./projects/componentPattrens/compound/CompoundPattern";
import HeadlessPattern from "./projects/componentPattrens/headless/HeadlessPattern";
import HOCPattern from "./projects/componentPattrens/hoc/HOCPattern";
import PolymorphicPattern from "./projects/componentPattrens/polymorphic/PolymorphicPattern";
import CustomHooks from "./projects/CustomHooks";
import ComponentLifecycleMethods from "./projects/classComponentLifyCycle/ComponentLifecycleMethods";

export const projectsViews = {
  "closures-and-stale-closures": ClosuresAndStaleClosures,
  "custom-hooks": CustomHooks,
  "component-lifecycle-methods": ComponentLifecycleMethods,
  "compound-components": CompoundPattern,
  "headless-components": HeadlessPattern,
  "hoc-components": HOCPattern,
  "polymorphic-components": PolymorphicPattern
};
