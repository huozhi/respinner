import React from 'react';

const uniqId = '__respinner__';
const repeat = (count)=>Array.apply(null, Array(count));

function _extends$8() {
    _extends$8 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$8.apply(this, arguments);
}
function _object_without_properties_loose$8(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const BeatLoading = (_param)=>{
    var { duration = 0.8, count = 6, size = 8, gap = 6, fill } = _param, rest = _object_without_properties_loose$8(_param, [
        "duration",
        "count",
        "size",
        "gap",
        "fill"
    ]);
    const viewWidth = (size + gap) * count - gap;
    return /*#__PURE__*/ React.createElement("svg", _extends$8({}, rest, {
        width: viewWidth,
        height: size
    }), repeat(count).map((_, i)=>{
        const cx = size * (i + 1) + gap * i - size / 2;
        const cy = size / 2;
        return /*#__PURE__*/ React.createElement("circle", {
            transformOrigin: `${cx}px ${cy}px`,
            key: `c-${i}`,
            fill: fill,
            r: size / 2,
            cx: cx,
            cy: cy
        }, /*#__PURE__*/ React.createElement("animateTransform", {
            attributeName: "transform",
            attributeType: "XML",
            type: "scale",
            values: "0; 0; 1; 0; 0",
            begin: `${-duration / (count + 1) * (count - i)}s`,
            dur: `${duration}s`,
            repeatCount: "indefinite"
        }));
    }));
};

function _extends$7() {
    _extends$7 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$7.apply(this, arguments);
}
function _object_without_properties_loose$7(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const BounceLoading = (_param)=>{
    var { gap = 6, count = 4, barWidth = 4, barHeight = 16, duration = 0.8, fill } = _param, rest = _object_without_properties_loose$7(_param, [
        "gap",
        "count",
        "barWidth",
        "barHeight",
        "duration",
        "fill"
    ]);
    const viewWidth = (barWidth + gap) * count - gap;
    return /*#__PURE__*/ React.createElement("svg", _extends$7({
        width: viewWidth,
        height: barHeight * 3
    }, rest), repeat(count).map((_, i)=>{
        return /*#__PURE__*/ React.createElement("rect", {
            key: `rect-${i}`,
            fill: fill,
            height: barHeight,
            width: barWidth,
            x: (barWidth + gap) * i,
            y: barHeight
        }, /*#__PURE__*/ React.createElement("animateTransform", {
            attributeName: "transform",
            type: "translate",
            values: "0 0; 0 8; 0 -8; 0 0",
            keyTimes: "0; 0.25; 0.75; 1",
            dur: `${duration}s`,
            begin: `${-duration / (count + 1) * (count - i)}s`,
            repeatCount: "indefinite"
        }));
    }));
};

function _extends$6() {
    _extends$6 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$6.apply(this, arguments);
}
function _object_without_properties_loose$6(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// View box is based on 50x50 size
// from: https://codepen.io/jczimm/pen/vEBpoL
const CIRCLE_RADIUS = 50 / 2;
const CircularLoading = (_param)=>{
    var { size = 40, strokeWidth = 5, linecap = 'round', duration = 1, stroke } = _param, rest = _object_without_properties_loose$6(_param, [
        "size",
        "strokeWidth",
        "linecap",
        "duration",
        "stroke"
    ]);
    const center = CIRCLE_RADIUS;
    return /*#__PURE__*/ React.createElement("svg", _extends$6({}, rest, {
        viewBox: `0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`,
        width: size,
        height: size
    }), /*#__PURE__*/ React.createElement("circle", {
        fill: "none",
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeLinecap: linecap,
        cx: CIRCLE_RADIUS,
        cy: CIRCLE_RADIUS,
        r: CIRCLE_RADIUS - strokeWidth
    }, /*#__PURE__*/ React.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0 ${center} ${center}`,
        to: `360 ${center} ${center}`,
        dur: `${duration * 4 / 3}s`,
        repeatCount: "indefinite"
    }), /*#__PURE__*/ React.createElement("animate", {
        attributeName: "stroke-dasharray",
        values: "1,200; 89,200; 89 200;",
        dur: `${duration}s`,
        repeatCount: "indefinite"
    }), /*#__PURE__*/ React.createElement("animate", {
        attributeName: "stroke-dashoffset",
        values: "0;-35;-124;",
        dur: `${duration}s`,
        repeatCount: "indefinite"
    })));
};

function _extends$5() {
    _extends$5 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$5.apply(this, arguments);
}
function _object_without_properties_loose$5(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const ClockLoading = (_param)=>{
    var { size = 40, duration = 2, strokeWidth = 2 } = _param, rest = _object_without_properties_loose$5(_param, [
        "size",
        "duration",
        "strokeWidth"
    ]);
    const center = size / 2;
    const needleProps = {
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        x1: center,
        y1: strokeWidth * 2,
        x2: center,
        y2: size - strokeWidth * 2
    };
    return /*#__PURE__*/ React.createElement("svg", _extends$5({}, rest, {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`
    }), /*#__PURE__*/ React.createElement("circle", {
        fill: "none",
        strokeWidth: strokeWidth,
        cx: center,
        cy: center,
        r: size / 2 - strokeWidth
    }), /*#__PURE__*/ React.createElement("line", _extends$5({}, needleProps, {
        strokeDasharray: `${size / 3} ${size / 2}`,
        strokeDashoffset: size / 3 + strokeWidth * 2
    }), /*#__PURE__*/ React.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0 ${center} ${center}`,
        to: `360 ${center} ${center}`,
        dur: `${duration}s`,
        repeatCount: "indefinite"
    })));
};

function _extends$4() {
    _extends$4 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$4.apply(this, arguments);
}
function _object_without_properties_loose$4(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const RotateLoading = (_param)=>{
    var { size = 40, opacity = 0.2, strokeWidth = 4, duration = 1.6 } = _param, rest = _object_without_properties_loose$4(_param, [
        "size",
        "opacity",
        "strokeWidth",
        "duration"
    ]);
    const radius = size / 2 - strokeWidth;
    const center = radius + strokeWidth;
    const circleProps = _extends$4({
        strokeWidth,
        r: radius,
        cx: radius + strokeWidth,
        cy: radius + strokeWidth,
        fill: 'none'
    }, rest);
    return /*#__PURE__*/ React.createElement("svg", {
        width: size,
        height: size
    }, /*#__PURE__*/ React.createElement("circle", _extends$4({}, circleProps, {
        style: {
            opacity
        }
    })), /*#__PURE__*/ React.createElement("circle", _extends$4({}, circleProps, {
        strokeDasharray: "20 180"
    }), /*#__PURE__*/ React.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0 ${center} ${center}`,
        to: `360 ${center} ${center}`,
        dur: `${duration}s`,
        repeatCount: "indefinite"
    })));
};

function _extends$3() {
    _extends$3 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$3.apply(this, arguments);
}
function _object_without_properties_loose$3(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const SpinLoading = (_param)=>{
    var { size = 40, count = 8, barWidth = 4, barHeight = 10, duration = 1, borderRadius = 1, fill } = _param, rest = _object_without_properties_loose$3(_param, [
        "size",
        "count",
        "barWidth",
        "barHeight",
        "duration",
        "borderRadius",
        "fill"
    ]);
    const radius = size / 2 - barHeight / 2;
    return /*#__PURE__*/ React.createElement("svg", _extends$3({}, rest, {
        width: size,
        height: size
    }), repeat(count).map((_, i)=>{
        const angle = 360 / count * i;
        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */ const x = Math.cos(Math.PI * angle / 180) * radius + radius + (barWidth + borderRadius) / 2;
        const y = Math.sin(Math.PI * angle / 180) * radius + radius;
        return /*#__PURE__*/ React.createElement("rect", {
            x: x,
            y: y,
            fill: fill,
            key: `r-${i}`,
            width: barWidth,
            height: barHeight,
            rx: borderRadius,
            ry: borderRadius,
            transform: `rotate(${90 + angle} ${x + barWidth / 2} ${y + barHeight / 2})`
        }, /*#__PURE__*/ React.createElement("animate", {
            attributeName: "opacity",
            values: "0; 0.3; 1",
            begin: `${duration * 0.8 / count * i}s`,
            dur: `${duration}s`,
            repeatCount: "indefinite"
        }));
    }));
};

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$2.apply(this, arguments);
}
function _object_without_properties_loose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const WaveLoading = (_param)=>{
    var { size = 40, count = 3, duration = 1.5, strokeWidth = 2, stroke } = _param, rest = _object_without_properties_loose$2(_param, [
        "size",
        "count",
        "duration",
        "strokeWidth",
        "stroke"
    ]);
    const radius = size / 2 - strokeWidth;
    return /*#__PURE__*/ React.createElement("svg", _extends$2({}, rest, {
        width: size,
        height: size
    }), repeat(count).map((_, i)=>{
        const pos = size / 2;
        return /*#__PURE__*/ React.createElement("circle", {
            key: `c-${i}`,
            stroke: stroke,
            strokeWidth: strokeWidth,
            transformOrigin: `${pos}px ${pos}px`,
            fill: "none",
            r: radius,
            cx: pos,
            cy: pos
        }, /*#__PURE__*/ React.createElement("animate", {
            attributeName: "opacity",
            values: "1; 0.7; 0",
            keyTimes: "0; 0.7; 1",
            dur: `${duration}s`,
            begin: `${duration / count * i}s`
        }), /*#__PURE__*/ React.createElement("animateTransform", {
            attributeName: "transform",
            attributeType: "XML",
            type: "scale",
            values: ".1; 1; 1",
            keyTimes: "0; 0.7; 1",
            dur: `${duration}s`,
            begin: `${duration / count * i}s`,
            repeatCount: "indefinite"
        }));
    }));
};

const svgStyle = (css)=>`/* <![CDATA[ */${css}/* ]]> */`;
const InlineSvgStyle = ({ animation })=>/*#__PURE__*/ React.createElement("style", null, svgStyle(animation));

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$1.apply(this, arguments);
}
function _object_without_properties_loose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const DashedRotateAnimation = (dash)=>`@keyframes DashedRotate${uniqId}` + '{' + `0% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(0deg);}` + `50% {stroke-dasharray:${dash};transform:rotate(360deg);}` + `100% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(720deg);}` + '}';
const DashLoading = (_param)=>{
    var { size = 40, strokeWidth = 4, duration = 1.8, stroke } = _param, rest = _object_without_properties_loose$1(_param, [
        "size",
        "strokeWidth",
        "duration",
        "stroke"
    ]);
    const radius = size / 2 - strokeWidth;
    const dash = Math.PI * radius / 5;
    return /*#__PURE__*/ React.createElement("svg", _extends$1({}, rest, {
        width: size,
        height: size
    }), /*#__PURE__*/ React.createElement(InlineSvgStyle, {
        animation: DashedRotateAnimation(dash)
    }), /*#__PURE__*/ React.createElement("circle", {
        fill: "none",
        stroke: stroke,
        strokeLinecap: "round",
        strokeWidth: strokeWidth,
        cx: size / 2,
        cy: size / 2,
        r: radius,
        style: {
            transformOrigin: 'center',
            animationName: `DashedRotate${uniqId}`,
            animationDuration: `${duration}s`,
            animationIterationCount: 'infinite'
        }
    }));
};

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const TransRotate = `@keyframes TransRotate${uniqId}` + '{' + '0% {transform:rotate(45deg) scale(1);}' + '50% {transform:rotate(405deg) scale(.2);}' + '100% {transform:rotate(765deg) scale(1);}';
const CopperLoading = (_param)=>{
    var { size = 40, strokeWidth = 4, duration = 2, stroke, fill } = _param, rest = _object_without_properties_loose(_param, [
        "size",
        "strokeWidth",
        "duration",
        "stroke",
        "fill"
    ]);
    const commonStyle = {
        transformOrigin: 'center',
        animation: `TransRotate${uniqId} ${duration}s infinite`
    };
    return /*#__PURE__*/ React.createElement("svg", _extends({}, rest, {
        width: size,
        height: size
    }), /*#__PURE__*/ React.createElement(InlineSvgStyle, {
        animation: TransRotate
    }), /*#__PURE__*/ React.createElement("rect", {
        width: size / 3,
        height: size / 3,
        x: size / 3,
        y: size / 3,
        fill: fill,
        style: commonStyle
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: size / 2,
        cy: size / 2,
        r: size / 2 - strokeWidth,
        fill: "transparent",
        stroke: fill,
        strokeWidth: strokeWidth,
        style: _extends({}, commonStyle, {
            animationDelay: `${duration / 2}s`
        })
    }));
};

export { BeatLoading, BounceLoading, CircularLoading, ClockLoading, CopperLoading, DashLoading, RotateLoading, SpinLoading, WaveLoading };
