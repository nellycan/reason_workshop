// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("ButtonRGKewl");

function make(onClick, title, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              var tmp = { };
              if (onClick !== undefined) {
                tmp.onClick = Caml_option.valFromOption(onClick);
              }
              return React.createElement("button", tmp, title);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var ButtonRG = /* module */[
  /* component */component,
  /* make */make
];

function renderRgButton(title, onClick) {
  return React.createElement("button", {
              onClick: onClick
            }, title);
}

var component$1 = ReasonReact.reducerComponent("Counter");

function make$1(_children) {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              return React.createElement("div", undefined, React.createElement("p", undefined, String(param[/* state */1])), ReasonReact.element(undefined, undefined, make((function (param) {
                                    return Curry._1(send, /* Increment */0);
                                  }), "Increment", /* array */[])), renderRgButton("Decrement", (function (param) {
                                return Curry._1(send, /* Decrement */1);
                              })), React.createElement("button", {
                              onClick: (function (param) {
                                  return Curry._1(send, /* Reset */2);
                                })
                            }, "Reset"));
            }),
          /* initialState */(function (param) {
              return 0;
            }),
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action) {
                case 0 : 
                    return /* Update */Block.__(0, [state + 1 | 0]);
                case 1 : 
                    return /* Update */Block.__(0, [state - 1 | 0]);
                case 2 : 
                    return /* Update */Block.__(0, [0]);
                
              }
            }),
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

exports.ButtonRG = ButtonRG;
exports.renderRgButton = renderRgButton;
exports.component = component$1;
exports.make = make$1;
/* component Not a pure module */
