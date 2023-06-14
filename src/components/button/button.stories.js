import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Base = () => <Button buttonType={BUTTON_TYPE_CLASSES.base}>Base Button</Button>;
export const GoogleSignIn = () => <Button buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign-In Button</Button>;
export const Inverted = () => <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Inverted Button</Button>;
export const HoverGrow = () => <Button buttonType={BUTTON_TYPE_CLASSES.grow}>Hover Grow Button</Button>;
export const Label = () => <Button buttonType={BUTTON_TYPE_CLASSES.label}>Label Button</Button>;
export const LabelSelected = () => <Button buttonType={BUTTON_TYPE_CLASSES.labelSelected}>Label Selected Button</Button>;
