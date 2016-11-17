import test from 'ava';
import isAccelerator from '.';

test('typo', t => t.false(isAccelerator('CommandOrContrl+F9')));
test('multiple modifier', t => t.true(isAccelerator('CommandOrControl+Shift+Z')));
test('multiple keys', t => t.false(isAccelerator('A+Z')));

const modifiers = [
    'Command',
    'Cmd',
    'Control',
    'Ctrl',
    'CommandOrControl',
    'CmdOrCtrl',
    'Alt',
    'Option',
    'AltGr',
    'Shift',
    'Super'
];

modifiers.forEach(mod => test(
    mod + ' modifier',
    t => t.true(
        isAccelerator(mod + '+A')
    )
));


