/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import '../bootstrap'

import Inferno from 'inferno'
import { createDispatch, createStream, render } from '../framework'
import { map, scan } from 'most'
import { App } from './components/index'
import reducer from './reducers/index'
import { SECTIONS } from './constants/stateKeys'
import { sections } from './data/sections'

// Create stream of actions
const action$ = createStream()

// Generate a dispatch function for emitting actions through actions$
export const dispatch = createDispatch(action$)

/******************************************************************************
  Using a plain JS object to hold app state
*******************************************************************************/

const initialState = {
  [SECTIONS]: sections,
}

// Data flow for the entire app
const state$ = scan(reducer, initialState, action$)
const vTree$ = map(App, state$)

// NOTE: Side effect causing code must disable fp/no-unused-expression
// This is fine. Use the linter to stay disciplined.

/* eslint-disable fp/no-unused-expression */

// Mount app, track virtual DOM tree updates, & automatically render changes
render(vTree$, document.getElementById('app'))

/* eslint-enable fp/no-unused-expression */
