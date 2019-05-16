/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import wtn from '../';
const { it } = global;

it('cent', () => {
    expect(wtn('cent')).to.equal(100);
});

it('cent deux', () => {
    expect(wtn('cent deux')).to.equal(102);
});

it('cent cinq', () => {
    expect(wtn('cent cinq')).to.equal(105);
});

it('cent vingt cinq', () => {
    expect(wtn('cent vingt cinq')).to.equal(125);
});

it('quatre mille trente', () => {
    expect(wtn('quatre mille trente')).to.equal(4030);
});

it('soixante neuf', () => {
    expect(wtn('soixante neuf')).to.equal(69);
});

it('trente et un', () => {
    expect(wtn('trente et un')).to.equal(31);
});
