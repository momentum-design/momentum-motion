import Motion from './core/index';
import Cpu from './cpu/index';
import Tween from './math/tween';

const MFrame = function(configs, events) {
    return new Motion(configs, events);
};

MFrame.Cpu = Cpu;
MFrame.Tween = Tween;

let registerWindow = (name, func)=> {
    if (typeof window !== 'undefined' && window[name] === undefined) {
        window[name] = func;
    }
};

registerWindow('mf', MFrame);
registerWindow('mframe', MFrame);

export default MFrame;